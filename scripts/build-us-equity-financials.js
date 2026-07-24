#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IDENTITY_INPUT = path.join(ROOT, 'data', 'valuation-meeting-snapshot.json');
const DEFILLAMA_INPUT = path.join(ROOT, 'data', 'defillama-daily-snapshot.json');
const OUTPUT_JSON = path.join(ROOT, 'data', 'protocol-financials-us-equity.json');
const OUTPUT_JS = path.join(ROOT, 'data', 'protocol-financials-us-equity.js');
const SOURCE_TIER = 'THIRD_PARTY_FALLBACK';

const NULL_REASONS = {
  cash_flow: '经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。',
  balance_sheet: '资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。',
};

function round(value, digits = 2) {
  const scale = 10 ** digits;
  return Math.round((value + Number.EPSILON) * scale) / scale;
}

function finite(value) {
  return Number.isFinite(value) ? value : null;
}

function stateFor(value, missingState = 'PENDING') {
  if (!Number.isFinite(value)) return missingState;
  return value === 0 ? 'ZERO' : 'ESTIMATED';
}

function meta({
  state,
  window = null,
  source = null,
  sourceUrl = null,
  asOf = null,
  confidence = 'medium',
  reason,
  displayNote,
}) {
  return {
    state,
    window,
    source,
    source_url: sourceUrl,
    as_of: asOf,
    confidence,
    source_tier: SOURCE_TIER,
    reason,
    display_note:
      displayNote
      ?? (state === 'ESTIMATED'
        ? 'DefiLlama'
        : state === 'ZERO'
          ? 'DefiLlama 为 0'
          : state === 'N/M'
            ? '分母≤0'
            : state === 'PENDING'
              ? 'DefiLlama 未覆盖'
              : ''),
  };
}

function pendingMetric(reason, sourceUrl = null, window = 'TTM') {
  return {
    value: null,
    meta: meta({
      state: 'PENDING',
      window,
      source: 'DefiLlama',
      sourceUrl,
      reason,
    }),
  };
}

function defillamaAmount(metric, label, asOf) {
  if (!metric || !Number.isFinite(metric.total_1y_usd)) {
    return pendingMetric(
      `DefiLlama 未提供 ${label} 的 total1y；本轮禁止使用旧数据或其他来源回填。`,
      metric?.source_url || null,
    );
  }

  const value = metric.total_1y_usd;
  return {
    value,
    meta: meta({
      state: stateFor(value),
      window: 'DefiLlama total1y',
      source: `DefiLlama ${label}`,
      sourceUrl: metric.source_url,
      asOf: metric.latest_daily_at || asOf,
      confidence: 'medium',
      reason: `${label} 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。`,
    }),
  };
}

function derivedMultiple(marketCap, denominator, label, asOf) {
  if (!Number.isFinite(denominator.value)) {
    return {
      value: null,
      meta: meta({
        state: 'PENDING',
        window: denominator.meta.window,
        source: denominator.meta.source,
        sourceUrl: denominator.meta.source_url,
        asOf,
        reason: `${label} 的分母没有可用的 DefiLlama total1y 数值。`,
      }),
    };
  }
  if (denominator.value <= 0) {
    return {
      value: null,
      meta: meta({
        state: 'N/M',
        window: denominator.meta.window,
        source: denominator.meta.source,
        sourceUrl: denominator.meta.source_url,
        asOf,
        reason: `${label} 的分母小于或等于 0，倍数没有经济意义。`,
      }),
    };
  }
  return {
    value: round(marketCap / denominator.value),
    meta: meta({
      state: 'ESTIMATED',
      window: denominator.meta.window,
      source: `DefiLlama Market Cap + ${denominator.meta.source}`,
      sourceUrl: denominator.meta.source_url,
      asOf,
      reason: `${label} = DefiLlama 流通市值 ÷ DefiLlama ${denominator.meta.source.replace('DefiLlama ', '')}。`,
    }),
  };
}

function derivedYield(marketCap, numerator, label, asOf) {
  if (!Number.isFinite(numerator.value)) {
    return {
      value: null,
      meta: meta({
        state: 'PENDING',
        window: numerator.meta.window,
        source: numerator.meta.source,
        sourceUrl: numerator.meta.source_url,
        asOf,
        reason: `${label} 的分子没有可用的 DefiLlama total1y 数值。`,
      }),
    };
  }
  const value = round((numerator.value / marketCap) * 100, 4);
  return {
    value,
    meta: meta({
      state: stateFor(value),
      window: numerator.meta.window,
      source: `DefiLlama Market Cap + ${numerator.meta.source}`,
      sourceUrl: numerator.meta.source_url,
      asOf,
      reason: `${label} = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。`,
    }),
  };
}

function unavailableBreakdown(label, asOf) {
  return {
    value: null,
    meta: meta({
      state: 'PENDING',
      window: 'TTM',
      source: 'DefiLlama',
      asOf,
      reason: `本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为${label}，因此不把聚合值冒充明细。`,
    }),
  };
}

function buildProtocol(identity, llama, generatedAt) {
  if (!llama) throw new Error(`${identity.id}: missing DefiLlama snapshot row`);

  const marketCap = finite(llama.market.market_cap_usd);
  const price = finite(llama.market.price_usd);
  if (!marketCap || !price) throw new Error(`${identity.id}: invalid DefiLlama market data`);

  const grossFees = defillamaAmount(llama.financials.fees, 'Fees', generatedAt);
  const revenue = defillamaAmount(llama.financials.revenue, 'Revenue', generatedAt);
  const holdersRevenue = defillamaAmount(llama.financials.holders_revenue, 'Holders Revenue', generatedAt);

  // 用户确认的本轮简化口径：不扣项目方组织费用和原生代币发行。
  // DefiLlama Revenue 已是协议留存口径，因此作为 Protocol Earnings 代理。
  const protocolEarnings = Number.isFinite(revenue.value)
    ? {
        value: revenue.value,
        meta: meta({
          state: stateFor(revenue.value),
          window: revenue.meta.window,
          source: 'DefiLlama Revenue proxy',
          sourceUrl: revenue.meta.source_url,
          asOf: revenue.meta.as_of,
          reason: '本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。',
          displayNote: revenue.value === 0 ? 'DefiLlama 为 0' : 'Revenue 代理',
        }),
      }
    : pendingMetric(
        'DefiLlama Revenue 未覆盖，无法按本轮简化口径计算 Protocol Earnings 和 Cash P/E。',
        revenue.meta.source_url,
      );

  const priceToSales = derivedMultiple(marketCap, revenue, 'P/S', generatedAt);
  const priceToEarnings = derivedMultiple(marketCap, protocolEarnings, 'Cash P/E', generatedAt);
  const shareholderYield = derivedYield(marketCap, holdersRevenue, 'Shareholder Yield', generatedAt);
  const dividends = unavailableBreakdown('分红', generatedAt);
  const repurchases = unavailableBreakdown('回购', generatedAt);
  const feeBurns = unavailableBreakdown('费用销毁', generatedAt);
  const directCosts = pendingMetric(
    'DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。',
    revenue.meta.source_url,
  );
  const realizedLosses = pendingMetric(
    'DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。',
    revenue.meta.source_url,
  );
  const supplySidePayouts = pendingMetric(
    '本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。',
    revenue.meta.source_url,
  );

  const marketCapMeta = meta({
    state: 'ESTIMATED',
    window: 'point-in-time',
    source: 'DefiLlama protocol mcap',
    sourceUrl: llama.market.source_url,
    asOf: generatedAt,
    confidence: llama.market.market_cap_method === 'DEFILLAMA_PROTOCOL_MCAP' ? 'medium' : 'low',
    reason:
      llama.market.market_cap_method === 'DEFILLAMA_PROTOCOL_MCAP'
        ? '流通市值直接采用 DefiLlama protocol API 的当前 mcap。'
        : `DefiLlama protocol API 未提供 mcap；使用 DefiLlama 当前价格 × DefiLlama token 页流通量快照 ${llama.market.circulating_supply_used} 估算。`,
    displayNote: llama.market.market_cap_method === 'DEFILLAMA_PROTOCOL_MCAP' ? 'DefiLlama' : '价格×供应量',
  });
  const priceMeta = meta({
    state: 'ESTIMATED',
    window: 'point-in-time',
    source: 'DefiLlama Coins API',
    sourceUrl: `https://coins.llama.fi/prices/current/${encodeURIComponent(llama.mapping.coin_key)}`,
    asOf: llama.market.price_timestamp,
    confidence: llama.market.price_confidence >= 0.9 ? 'high' : 'medium',
    reason: '价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。',
    displayNote: '每日更新',
  });

  const metricSources = [
    llama.market.source_url,
    grossFees.meta.source_url,
    revenue.meta.source_url,
    holdersRevenue.meta.source_url,
  ].filter(Boolean);

  return {
    id: identity.id,
    name: identity.name,
    ticker: llama.ticker_override || identity.ticker,
    category: identity.category,
    as_of: generatedAt,
    market_data: {
      price_usd: price,
      market_cap_usd: marketCap,
      market_cap_method: llama.market.market_cap_method,
      enterprise_value_usd: null,
      shares_outstanding: null,
      diluted_shares_outstanding: null,
    },
    income_statement: {
      period: 'DefiLlama total1y',
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
      coverage: Number.isFinite(protocolEarnings.value) ? 'defillama_revenue_proxy' : 'pending',
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
      period: 'DefiLlama total1y',
      holders_revenue_ttm_usd: holdersRevenue.value,
      dividends_ttm_usd: dividends.value,
      share_repurchases_ttm_usd: repurchases.value,
      qualifying_fee_burns_ttm_usd: feeBurns.value,
      share_retirement_ttm_usd: null,
      treasury_stock_usd: null,
      share_issuance_ttm_usd: null,
      dividend_yield_pct: null,
      buyback_yield_pct: null,
      shareholder_yield_pct: shareholderYield.value,
    },
    valuation: {
      price_to_sales: priceToSales.value,
      price_to_earnings: priceToEarnings.value,
      free_cash_flow_yield_pct: null,
    },
    chain_diagnostics: null,
    metric_meta: {
      price: priceMeta,
      market_cap: marketCapMeta,
      gross_fees: grossFees.meta,
      supply_side_payouts: supplySidePayouts.meta,
      revenue: revenue.meta,
      direct_economic_costs: directCosts.meta,
      realized_protocol_losses: realizedLosses.meta,
      protocol_earnings: protocolEarnings.meta,
      price_to_sales: priceToSales.meta,
      price_to_earnings: priceToEarnings.meta,
      holders_revenue: holdersRevenue.meta,
      dividends: dividends.meta,
      repurchases: repurchases.meta,
      fee_burns: feeBurns.meta,
      dividend_yield: dividends.meta,
      buyback_yield: repurchases.meta,
      shareholder_yield: shareholderYield.meta,
    },
    review: {
      status: identity.model_review?.status === 'pass' ? 'independent_pass' : 'pending',
      confidence: 'medium',
      numeric_values_promoted: false,
      numeric_review_status: 'defillama_round_candidate',
      data_state: 'defillama_daily_candidate',
    },
    provenance: {
      repository: 'DefiLlama',
      ref: 'daily API snapshot',
      source_commit: null,
      observed_at: generatedAt,
      register_generated_at: null,
      candidate_file: 'data/defillama-daily-snapshot.json',
      metric_sources: [...new Set(metricSources)],
      evidence_boundary:
        '本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。',
    },
    null_reasons: {
      income_statement: protocolEarnings.meta.reason,
      cash_flow: NULL_REASONS.cash_flow,
      balance_sheet: NULL_REASONS.balance_sheet,
      capital_returns: holdersRevenue.meta.reason,
      price_to_earnings: priceToEarnings.meta.reason,
    },
  };
}

function countNumeric(protocols, getter) {
  return protocols.filter((protocol) => Number.isFinite(getter(protocol))).length;
}

function main() {
  const identities = JSON.parse(fs.readFileSync(IDENTITY_INPUT, 'utf8'));
  const defillama = JSON.parse(fs.readFileSync(DEFILLAMA_INPUT, 'utf8'));
  if (defillama.source_policy !== 'DEFILLAMA_ONLY_ROUND') {
    throw new Error('DefiLlama snapshot source policy mismatch');
  }

  const llamaById = new Map(defillama.protocols.map((protocol) => [protocol.id, protocol]));
  const protocols = identities.protocols
    .map((identity) => buildProtocol(identity, llamaById.get(identity.id), defillama.generated_at))
    .sort((left, right) => left.name.localeCompare(right.name, 'en'));

  const output = {
    schema_version: '5.0.0-defillama-daily',
    terminology: 'public-equity-protocol-economics',
    generated_at: defillama.generated_at,
    observed_at: defillama.generated_at,
    intended_use: 'Crypto3D test-site DefiLlama daily comparison; indicative meeting view only',
    source_snapshot: {
      provider: 'DefiLlama',
      file: 'data/defillama-daily-snapshot.json',
      generated_at: defillama.generated_at,
      freshness_policy: defillama.freshness_policy,
      coverage: defillama.coverage,
    },
    review_snapshot: {
      model_review_passed_protocols: identities.review_snapshot.model_review_passed_protocols,
      numeric_values_promoted: false,
      numeric_review_status: 'defillama_round_candidate',
    },
    source_policy: {
      mode: 'DEFILLAMA_ONLY_ROUND',
      provider: 'DefiLlama',
      legacy_fallback_allowed: false,
      rule: '本轮所有市场与财务数据统一来自 DefiLlama；价格每日刷新；缺失值保持待核实，不使用旧快照或其他来源回填。',
      limitation: 'DefiLlama 是第三方聚合平台，因此所有非零数值均显示为估算。该规则是会议版测试站的轮次口径，不改写长期链上优先研究原则。',
    },
    expense_policy: {
      included:
        'DefiLlama Revenue 已按平台口径从 Fees 中区分协议留存收入；本轮不额外反推或虚构未单列的直接支出。',
      excluded:
        '项目方、基金会和开发公司的组织运营费用，以及原生代币发行、激励、解锁和归属。',
    },
    null_policy: {
      PENDING: 'DefiLlama 未覆盖或不提供该拆分；不等于 0，也不使用旧数据回填。',
      ZERO: 'DefiLlama 的 total1y 数值为 0。',
      'N/M': '分母小于或等于 0，倍数没有经济意义。',
      ESTIMATED: 'DefiLlama 第三方聚合值或由其字段直接计算的结果，以“~”显示。',
    },
    formulas: {
      gross_fees: 'Fees TTM = DefiLlama dailyFees total1y',
      protocol_revenue: 'Protocol Revenue TTM = DefiLlama dailyRevenue total1y',
      protocol_earnings:
        'Protocol Earnings proxy = DefiLlama Revenue total1y；不扣项目方组织运营费和原生代币发行',
      price_to_sales: 'P/S = DefiLlama Circulating Market Cap ÷ DefiLlama Revenue total1y',
      price_to_earnings: 'Cash P/E = DefiLlama Circulating Market Cap ÷ Protocol Earnings proxy',
      holders_revenue: 'Holders Revenue TTM = DefiLlama dailyHoldersRevenue total1y',
      shareholder_yield: 'Shareholder Yield proxy = DefiLlama Holders Revenue total1y ÷ DefiLlama Circulating Market Cap × 100%',
    },
    coverage: {
      protocol_count: protocols.length,
      price_count: countNumeric(protocols, (protocol) => protocol.market_data.price_usd),
      market_cap_count: countNumeric(protocols, (protocol) => protocol.market_data.market_cap_usd),
      gross_fees_count: countNumeric(protocols, (protocol) => protocol.income_statement.gross_fees_ttm_usd),
      revenue_count: countNumeric(protocols, (protocol) => protocol.income_statement.revenue_ttm_usd),
      price_to_sales_count: countNumeric(protocols, (protocol) => protocol.valuation.price_to_sales),
      net_income_count: countNumeric(protocols, (protocol) => protocol.income_statement.net_income_ttm_usd),
      price_to_earnings_count: countNumeric(protocols, (protocol) => protocol.valuation.price_to_earnings),
      holders_revenue_count: countNumeric(protocols, (protocol) => protocol.capital_returns.holders_revenue_ttm_usd),
      shareholder_yield_count: countNumeric(protocols, (protocol) => protocol.capital_returns.shareholder_yield_pct),
      independent_pass_count: protocols.filter((protocol) => protocol.review.status === 'independent_pass').length,
      candidate_file_count: protocols.length,
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
    `Built ${protocols.length} protocols from DefiLlama: Fees ${output.coverage.gross_fees_count}, `
      + `Revenue/P-E ${output.coverage.revenue_count}/${output.coverage.price_to_earnings_count}, `
      + `Holders Revenue/Yield ${output.coverage.holders_revenue_count}/${output.coverage.shareholder_yield_count}.`,
  );
}

main();
