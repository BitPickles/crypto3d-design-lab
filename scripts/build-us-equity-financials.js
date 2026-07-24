#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INPUT = path.join(ROOT, 'data', 'valuation-meeting-snapshot.json');
const CANDIDATE_DIR = path.join(ROOT, 'data', 'candidates');
const OUTPUT_JSON = path.join(ROOT, 'data', 'protocol-financials-us-equity.json');
const OUTPUT_JS = path.join(ROOT, 'data', 'protocol-financials-us-equity.js');
const VALID_STATES = new Set(['VERIFIED', 'ESTIMATED', 'ZERO', 'N/A', 'N/M', 'PENDING']);
const CASH_PE_NA_IDS = new Set(['bgb', 'bnb', 'okb', 'mnt']);

const NULL_REASONS = {
  cash_flow: '经营现金流、资本开支与自由现金流不属于本轮协议 P/E 数据优化的强制覆盖范围。',
  balance_sheet: '资产负债表需要另一套控制权与负债边界，本轮不强行补值。',
};

function round(value, digits = 2) {
  const scale = 10 ** digits;
  return Math.round((value + Number.EPSILON) * scale) / scale;
}

function nullableNumber(value) {
  return Number.isFinite(value) ? value : null;
}

function stateNote(state) {
  return {
    VERIFIED: '已核实',
    ESTIMATED: '估算',
    ZERO: '已核实为 0',
    'N/A': '结构不适用',
    'N/M': '收益≤0',
    PENDING: '证据待补',
  }[state] || '证据待补';
}

function normalizeMetric(raw, fallback = {}) {
  const hasCandidate = raw && typeof raw === 'object';
  const useNumericFallback =
    hasCandidate
    && raw.state === 'PENDING'
    && !Number.isFinite(raw.value)
    && Number.isFinite(fallback.value);
  const candidate = useNumericFallback
    ? {
        ...fallback,
        reason: raw.reason || fallback.reason,
        display_note: '首版候选',
      }
    : hasCandidate
      ? raw
      : fallback;
  const defaults = hasCandidate && !useNumericFallback ? fallback : {};
  let value = nullableNumber(candidate.value);
  let state = VALID_STATES.has(candidate.state) ? candidate.state : defaults.state;

  if (!state) state = value === null ? 'PENDING' : 'ESTIMATED';
  if (state === 'ZERO') value = 0;
  if (state === 'PENDING' && value !== null) state = 'ESTIMATED';
  if (['N/A', 'N/M', 'PENDING'].includes(state)) value = null;
  if (['VERIFIED', 'ESTIMATED'].includes(state) && value === null) state = 'PENDING';

  return {
    value,
    state,
    window: candidate.window || defaults.window || null,
    source: candidate.source || defaults.source || null,
    source_url: candidate.source_url || defaults.source_url || null,
    as_of: candidate.as_of || defaults.as_of || null,
    confidence: candidate.confidence || defaults.confidence || 'low',
    reason: candidate.reason || defaults.reason || '',
    display_note:
      candidate.display_note
      || defaults.display_note
      || (candidate.state === 'PENDING' && value !== null ? '首版候选' : stateNote(state)),
  };
}

function candidateMetric(candidate, key) {
  if (!candidate?.metrics) return null;
  const aliases = {
    realized_protocol_losses_ttm_usd: ['realized_protocol_losses_ttm_usd', 'realized_losses_ttm_usd'],
    qualifying_fee_burns_ttm_usd: ['qualifying_fee_burns_ttm_usd', 'fee_burns_ttm_usd'],
  };
  const keys = aliases[key] || [key];
  for (const candidateKey of keys) {
    if (candidate.metrics[candidateKey]) return candidate.metrics[candidateKey];
  }
  return null;
}

function loadCandidates() {
  const candidates = new Map();
  if (!fs.existsSync(CANDIDATE_DIR)) return candidates;

  const files = fs.readdirSync(CANDIDATE_DIR)
    .filter((file) => /^phase1-.*\.json$/i.test(file))
    .sort();

  for (const file of files) {
    const fullPath = path.join(CANDIDATE_DIR, file);
    const payload = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    if (!Array.isArray(payload.protocols)) {
      throw new Error(`${file}: protocols must be an array`);
    }
    for (const protocol of payload.protocols) {
      if (!protocol?.id) throw new Error(`${file}: candidate protocol is missing id`);
      if (candidates.has(protocol.id)) throw new Error(`${file}: duplicate candidate id ${protocol.id}`);
      candidates.set(protocol.id, { ...protocol, candidate_file: path.relative(ROOT, fullPath).replaceAll('\\', '/') });
    }
  }
  return candidates;
}

function deriveState(...metrics) {
  const states = metrics.map((metric) => metric.state);
  if (states.includes('ESTIMATED')) return 'ESTIMATED';
  if (states.every((state) => state === 'ZERO')) return 'ZERO';
  if (states.includes('VERIFIED') || states.includes('ZERO')) return 'VERIFIED';
  return 'PENDING';
}

function computeProtocolEarnings(protocolId, candidate, revenue, directCosts, realizedLosses) {
  if (CASH_PE_NA_IDS.has(protocolId) || candidate?.cash_pe_applicability === 'N/A') {
    return normalizeMetric({ state: 'N/A', reason: '缺少适用的协议/公司收益主体边界。' });
  }

  const explicit = candidateMetric(candidate, 'protocol_earnings_ttm_usd');
  if (explicit) {
    const normalizedExplicit = normalizeMetric(explicit);
    if (normalizedExplicit.state !== 'PENDING') return normalizedExplicit;
  }
  if (revenue.value === null) {
    return normalizeMetric({
      state: 'PENDING',
      reason: 'Protocol Revenue 尚无可用值，无法计算 Protocol Earnings。',
    });
  }

  const directCostKnown = ['VERIFIED', 'ESTIMATED', 'ZERO'].includes(directCosts.state);
  const lossKnown = ['VERIFIED', 'ESTIMATED', 'ZERO'].includes(realizedLosses.state);
  const knownDirectCosts = directCosts.value || 0;
  const knownLosses = realizedLosses.value || 0;
  const value = revenue.value - knownDirectCosts - knownLosses;

  if (directCostKnown && lossKnown) {
    return normalizeMetric({
      value,
      state: deriveState(revenue, directCosts, realizedLosses),
      window: revenue.window,
      source: [revenue.source, directCosts.source, realizedLosses.source].filter(Boolean).join(' + '),
      as_of: revenue.as_of,
      confidence: [revenue, directCosts, realizedLosses].some((metric) => metric.confidence === 'low') ? 'low' : 'medium',
      reason: 'Protocol Revenue 减去已知直接经济成本与已实现协议损失。',
      display_note: deriveState(revenue, directCosts, realizedLosses) === 'ESTIMATED' ? '协议口径估算' : '协议口径',
    });
  }

  return normalizeMetric({
    value,
    state: 'ESTIMATED',
    window: revenue.window,
    source: [revenue.source, directCosts.source, realizedLosses.source, 'Crypto3D phase-1 protocol-earnings proxy']
      .filter(Boolean)
      .join(' + '),
    as_of: revenue.as_of,
    confidence: 'low',
    reason: '首版候选使用协议留存收入减已知直接成本；尚未单列的增量直接成本暂按 0 估算，后续审核更新。',
    display_note: '首版协议口径估算',
  });
}

function combineCapitalMetrics(metrics, label) {
  const applicable = metrics.filter((metric) => metric.state !== 'N/A');
  if (!applicable.length) return normalizeMetric({ state: 'N/A', reason: `${label}不适用。` });

  const known = applicable.filter((metric) => ['VERIFIED', 'ESTIMATED', 'ZERO'].includes(metric.state));
  if (!known.length) return normalizeMetric({ state: 'PENDING', reason: `${label}尚无可用执行金额。` });

  const value = known.reduce((sum, metric) => sum + (metric.value || 0), 0);
  const hasPending = applicable.some((metric) => metric.state === 'PENDING');
  const state = hasPending || known.some((metric) => metric.state === 'ESTIMATED')
    ? 'ESTIMATED'
    : known.every((metric) => metric.state === 'ZERO')
      ? 'ZERO'
      : 'VERIFIED';

  return normalizeMetric({
    value,
    state,
    window: known.find((metric) => metric.window)?.window || 'TTM',
    source: [...new Set(known.map((metric) => metric.source).filter(Boolean))].join(' + '),
    as_of: known.find((metric) => metric.as_of)?.as_of || null,
    confidence: state === 'VERIFIED' || state === 'ZERO' ? 'medium' : 'low',
    reason: hasPending ? `${label}为已识别执行部分的下限估算。` : `${label}由已识别执行金额汇总。`,
    display_note: state === 'ESTIMATED' ? '已识别部分' : stateNote(state),
  });
}

function derivedRatioMetric(numerator, marketCap, formulaName) {
  if (numerator.state === 'N/A') return normalizeMetric({ state: 'N/A', reason: `${formulaName}不适用。` });
  if (numerator.state === 'PENDING' || numerator.value === null || marketCap === null) {
    return normalizeMetric({ state: 'PENDING', reason: `${formulaName}分子尚无可用值。` });
  }
  return normalizeMetric({
    value: round((numerator.value / marketCap) * 100, 4),
    state: numerator.state,
    window: numerator.window,
    source: numerator.source,
    as_of: numerator.as_of,
    confidence: numerator.confidence,
    reason: `${formulaName}由基础金额与流通市值计算。`,
    display_note: numerator.state === 'ESTIMATED' ? '估算' : stateNote(numerator.state),
  });
}

function meta(metric) {
  const { value, ...rest } = metric;
  return rest;
}

function buildProtocol(protocol, snapshot, candidate) {
  const marketCap = nullableNumber(protocol.market_cap_usd);
  const marketCapMetric = normalizeMetric({
    value: marketCap,
    state: 'VERIFIED',
    window: 'point-in-time',
    source: `${snapshot.source_snapshot.repository}@${snapshot.source_snapshot.commit}`,
    as_of: protocol.as_of,
    confidence: 'high',
    reason: '流通市值来自当前测试快照，用作估值公式分母。',
    display_note: '',
  });

  const baselineRevenue = protocol.revenue_ttm_usd > 0
    ? {
        value: protocol.revenue_ttm_usd,
        state: 'ESTIMATED',
        window: 'TTM',
        source: `${snapshot.source_snapshot.repository}@${snapshot.source_snapshot.commit}`,
        as_of: protocol.as_of,
        confidence: protocol.confidence || 'low',
        reason: '来自现有发布快照，按新协议经济口径作为首版候选。',
        display_note: 'TTM 候选',
      }
    : { state: 'PENDING', reason: '现有发布快照没有可用 Revenue TTM。' };

  const revenue = normalizeMetric(candidateMetric(candidate, 'revenue_ttm_usd'), baselineRevenue);
  const grossFees = normalizeMetric(candidateMetric(candidate, 'gross_fees_ttm_usd'), {
    state: 'PENDING',
    reason: 'Gross Fees 尚未单列；Revenue 已按协议留存口径使用。',
  });
  const supplySidePayouts = normalizeMetric(candidateMetric(candidate, 'supply_side_payouts_ttm_usd'), {
    state: 'PENDING',
    reason: '供应方分成已尽可能体现在 Revenue 口径，但尚未单列金额。',
  });
  const directCosts = normalizeMetric(candidateMetric(candidate, 'direct_economic_costs_ttm_usd'), {
    state: 'PENDING',
    reason: '必要网络、结算或其他直接经济成本尚未单列。',
  });
  const realizedLosses = normalizeMetric(candidateMetric(candidate, 'realized_protocol_losses_ttm_usd'), {
    state: 'PENDING',
    reason: '当期已实现协议损失尚未单列。',
  });
  const protocolEarnings = computeProtocolEarnings(protocol.id, candidate, revenue, directCosts, realizedLosses);

  const dividends = normalizeMetric(candidateMetric(candidate, 'dividends_ttm_usd'), {
    state: 'PENDING',
    reason: '尚未完成外部资产分配金额的迁移分类。',
  });
  const repurchases = normalizeMetric(candidateMetric(candidate, 'repurchases_ttm_usd'), {
    state: 'PENDING',
    reason: '尚未完成已执行市场回购金额的迁移分类。',
  });
  const feeBurns = normalizeMetric(candidateMetric(candidate, 'qualifying_fee_burns_ttm_usd'), {
    state: 'PENDING',
    reason: '尚未完成合格费用销毁金额的迁移分类。',
  });

  const buybackReturns = combineCapitalMetrics([repurchases, feeBurns], '回购与费用销毁');
  const shareholderReturns = combineCapitalMetrics([dividends, repurchases, feeBurns], '持币者回报');
  const dividendYield = derivedRatioMetric(dividends, marketCap, 'Dividend Yield');
  const buybackYield = derivedRatioMetric(buybackReturns, marketCap, 'Buyback / Fee-burn Yield');
  const shareholderYield = derivedRatioMetric(shareholderReturns, marketCap, 'Shareholder Yield');

  const priceToSalesMetric = revenue.value !== null && revenue.value > 0
    ? normalizeMetric({
        value: round(marketCap / revenue.value),
        state: revenue.state === 'VERIFIED' ? 'VERIFIED' : 'ESTIMATED',
        window: revenue.window,
        source: revenue.source,
        as_of: protocol.as_of,
        confidence: revenue.confidence,
        reason: 'Market Cap ÷ Protocol Revenue TTM。',
        display_note: revenue.state === 'VERIFIED' ? '' : '收入候选',
      })
    : revenue.state === 'N/A'
      ? normalizeMetric({ state: 'N/A', reason: 'Revenue 不适用。' })
      : normalizeMetric({ state: 'PENDING', reason: '缺少正的 Revenue TTM。' });

  let priceToEarningsMetric;
  if (protocolEarnings.state === 'N/A') {
    priceToEarningsMetric = normalizeMetric({ state: 'N/A', reason: protocolEarnings.reason });
  } else if (protocolEarnings.value !== null && protocolEarnings.value <= 0) {
    priceToEarningsMetric = normalizeMetric({ state: 'N/M', reason: 'Protocol Earnings 小于或等于零。' });
  } else if (protocolEarnings.value !== null) {
    priceToEarningsMetric = normalizeMetric({
      value: round(marketCap / protocolEarnings.value),
      state: protocolEarnings.state === 'VERIFIED' ? 'VERIFIED' : 'ESTIMATED',
      window: protocolEarnings.window,
      source: protocolEarnings.source,
      as_of: protocol.as_of,
      confidence: protocolEarnings.confidence,
      reason: 'Market Cap ÷ Protocol Earnings TTM。',
      display_note: protocolEarnings.state === 'VERIFIED' ? '协议口径' : '首版协议口径估算',
    });
  } else {
    priceToEarningsMetric = normalizeMetric({ state: 'PENDING', reason: '缺少可用 Protocol Earnings。' });
  }

  const metricSources = [
    grossFees,
    supplySidePayouts,
    revenue,
    directCosts,
    realizedLosses,
    protocolEarnings,
    dividends,
    repurchases,
    feeBurns,
  ]
    .filter((metric) => metric.source)
    .map((metric) => metric.source);

  return {
    id: protocol.id,
    name: protocol.name,
    ticker: protocol.ticker,
    category: protocol.category,
    as_of: protocol.as_of,
    market_data: {
      market_cap_usd: marketCap,
      enterprise_value_usd: null,
      shares_outstanding: null,
      diluted_shares_outstanding: null,
    },
    income_statement: {
      period: 'TTM',
      gross_fees_ttm_usd: grossFees.value,
      supply_side_payouts_ttm_usd: supplySidePayouts.value,
      revenue_ttm_usd: revenue.value,
      direct_economic_costs_ttm_usd: directCosts.value,
      realized_protocol_losses_ttm_usd: realizedLosses.value,
      cost_of_revenue_ttm_usd: directCosts.value,
      gross_profit_ttm_usd: protocolEarnings.value,
      operating_expenses_ttm_usd: null,
      operating_income_ttm_usd: protocolEarnings.value,
      net_income_ttm_usd: protocolEarnings.value,
      coverage: protocolEarnings.state === 'VERIFIED' ? 'protocol_earnings_verified' : 'protocol_earnings_candidate',
      organization_opex_policy: 'excluded',
      native_token_expense_policy: 'excluded',
    },
    cash_flow: {
      period: 'TTM',
      operating_cash_flow_ttm_usd: null,
      capital_expenditures_ttm_usd: null,
      free_cash_flow_ttm_usd: null,
    },
    balance_sheet: {
      cash_and_equivalents_usd: null,
      treasury_assets_usd: null,
      debt_and_liabilities_usd: null,
    },
    capital_returns: {
      period: 'TTM',
      dividends_ttm_usd: dividends.value,
      share_repurchases_ttm_usd: repurchases.value,
      qualifying_fee_burns_ttm_usd: feeBurns.value,
      share_retirement_ttm_usd: feeBurns.value,
      treasury_stock_usd: null,
      share_issuance_ttm_usd: null,
      dividend_yield_pct: dividendYield.value,
      buyback_yield_pct: buybackYield.value,
      shareholder_yield_pct: shareholderYield.value,
    },
    valuation: {
      price_to_sales: priceToSalesMetric.value,
      price_to_earnings: priceToEarningsMetric.value,
      free_cash_flow_yield_pct: null,
    },
    metric_meta: {
      market_cap: meta(marketCapMetric),
      gross_fees: meta(grossFees),
      supply_side_payouts: meta(supplySidePayouts),
      revenue: meta(revenue),
      direct_economic_costs: meta(directCosts),
      realized_protocol_losses: meta(realizedLosses),
      protocol_earnings: meta(protocolEarnings),
      price_to_sales: meta(priceToSalesMetric),
      price_to_earnings: meta(priceToEarningsMetric),
      dividends: meta(dividends),
      repurchases: meta(repurchases),
      fee_burns: meta(feeBurns),
      dividend_yield: meta(dividendYield),
      buyback_yield: meta(buybackYield),
      shareholder_yield: meta(shareholderYield),
    },
    review: {
      status: protocol.model_review?.status === 'pass' ? 'independent_pass' : 'pending',
      confidence: candidate?.confidence || protocol.confidence || 'low',
      numeric_values_promoted: false,
      numeric_review_status: 'phase1_candidate',
      data_state: 'phase1_candidate',
    },
    provenance: {
      repository: snapshot.source_snapshot.repository,
      ref: snapshot.source_snapshot.ref,
      source_commit: snapshot.source_snapshot.commit,
      observed_at: snapshot.source_snapshot.data_generated_at,
      register_generated_at: snapshot.review_snapshot.register_generated_at,
      candidate_file: candidate?.candidate_file || null,
      metric_sources: [...new Set(metricSources)],
      evidence_boundary:
        '首版候选允许使用现有发布快照、官方汇总和经口径映射的第三方数据；估算值用“~”标记，尚未完成独立数值审核。',
    },
    null_reasons: {
      income_statement: protocolEarnings.reason,
      cash_flow: NULL_REASONS.cash_flow,
      balance_sheet: NULL_REASONS.balance_sheet,
      capital_returns: shareholderReturns.reason,
      price_to_earnings: priceToEarningsMetric.reason,
    },
  };
}

function countNumeric(protocols, getter) {
  return protocols.filter((protocol) => Number.isFinite(getter(protocol))).length;
}

function main() {
  const snapshot = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  const candidates = loadCandidates();
  const protocols = snapshot.protocols
    .map((protocol) => buildProtocol(protocol, snapshot, candidates.get(protocol.id)))
    .sort((left, right) => left.name.localeCompare(right.name, 'en'));

  const output = {
    schema_version: '4.0.0-test-candidate',
    terminology: 'public-equity-protocol-economics',
    generated_at: snapshot.generated_at,
    observed_at: snapshot.source_snapshot.data_generated_at,
    intended_use: 'Crypto3D test-site phase-1 protocol economics comparison',
    source_snapshot: snapshot.source_snapshot,
    review_snapshot: {
      ...snapshot.review_snapshot,
      numeric_values_promoted: false,
      numeric_review_status: 'phase1_candidate',
    },
    expense_policy: {
      included:
        '供应方分成、返佣、必要网络/结算成本以及已实现坏账、赔付和协议风险损失。',
      excluded:
        '项目方、基金会和开发公司的组织运营费用，以及原生代币发行、激励、解锁和归属。',
    },
    null_policy: {
      PENDING: '证据不足，待核实；不等于 0。',
      ZERO: '已有证据确认数值为 0。',
      'N/A': '项目结构上不适用。',
      'N/M': '分母小于或等于 0，倍数无经济意义。',
      ESTIMATED: '使用现有快照、官方汇总、第三方映射或首版代理估算，以“~”显示。',
    },
    formulas: {
      protocol_revenue:
        'Protocol Revenue = Gross Fees − Supply-side / Participant Payouts − Rebates / Refunds',
      protocol_earnings:
        'Protocol Earnings = Protocol Revenue − Direct Economic Costs − Realized Protocol Losses',
      price_to_sales: 'P/S = Circulating Market Cap ÷ Protocol Revenue TTM',
      price_to_earnings: 'Cash P/E = Circulating Market Cap ÷ Protocol Earnings TTM',
      dividend_yield: 'Dividend Yield = Executed Dividends TTM ÷ Circulating Market Cap × 100%',
      buyback_yield:
        'Buyback Yield = (Executed Repurchases + Qualifying Fee Burns) TTM ÷ Circulating Market Cap × 100%',
      shareholder_yield: 'Shareholder Yield = Dividend Yield + Buyback / Fee-burn Yield',
    },
    coverage: {
      protocol_count: protocols.length,
      market_cap_count: countNumeric(protocols, (protocol) => protocol.market_data.market_cap_usd),
      revenue_count: countNumeric(protocols, (protocol) => protocol.income_statement.revenue_ttm_usd),
      price_to_sales_count: countNumeric(protocols, (protocol) => protocol.valuation.price_to_sales),
      net_income_count: countNumeric(protocols, (protocol) => protocol.income_statement.net_income_ttm_usd),
      price_to_earnings_count: countNumeric(protocols, (protocol) => protocol.valuation.price_to_earnings),
      dividends_count: countNumeric(protocols, (protocol) => protocol.capital_returns.dividends_ttm_usd),
      repurchases_count: countNumeric(protocols, (protocol) => protocol.capital_returns.share_repurchases_ttm_usd),
      shareholder_yield_count: countNumeric(protocols, (protocol) => protocol.capital_returns.shareholder_yield_pct),
      independent_pass_count: protocols.filter((protocol) => protocol.review.status === 'independent_pass').length,
      candidate_file_count: candidates.size,
    },
    protocols,
  };

  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  fs.writeFileSync(
    OUTPUT_JS,
    `window.CRYPTO3D_PUBLIC_EQUITY = ${JSON.stringify(output, null, 2)};\n`,
    'utf8',
  );
  console.log(
    `Built ${protocols.length} protocols: Revenue ${output.coverage.revenue_count}, P/S ${output.coverage.price_to_sales_count}, Cash P/E ${output.coverage.price_to_earnings_count}, Shareholder Yield ${output.coverage.shareholder_yield_count}.`,
  );
}

main();
