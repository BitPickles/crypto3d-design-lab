#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INPUT = path.join(ROOT, 'data', 'valuation-meeting-snapshot.json');
const OUTPUT_JSON = path.join(ROOT, 'data', 'protocol-financials-us-equity.json');
const OUTPUT_JS = path.join(ROOT, 'data', 'protocol-financials-us-equity.js');

const NULL_REASONS = {
  income_statement:
    '尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。',
  cash_flow:
    '尚无经过协议级复核的经营现金流与资本开支分类。',
  balance_sheet:
    '尚无按统一控制权和负债边界复核的资产负债表。',
  capital_returns:
    '回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。',
  price_to_earnings:
    'P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。',
};

function nullableNumber(value) {
  return Number.isFinite(value) ? value : null;
}

function buildProtocol(protocol, snapshot) {
  const marketCap = nullableNumber(protocol.market_cap_usd);
  const revenue = protocol.revenue_ttm_usd > 0 ? protocol.revenue_ttm_usd : null;
  const priceToSales =
    marketCap !== null && revenue !== null
      ? Math.round((marketCap / revenue) * 100) / 100
      : null;

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
      revenue_ttm_usd: revenue,
      cost_of_revenue_ttm_usd: null,
      gross_profit_ttm_usd: null,
      operating_expenses_ttm_usd: null,
      operating_income_ttm_usd: null,
      net_income_ttm_usd: null,
      coverage: revenue === null ? 'unavailable' : 'protocol_revenue_only',
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
      dividends_ttm_usd: null,
      share_repurchases_ttm_usd: null,
      share_retirement_ttm_usd: null,
      treasury_stock_usd: null,
      share_issuance_ttm_usd: null,
      dividend_yield_pct: null,
      buyback_yield_pct: null,
      shareholder_yield_pct: null,
    },
    valuation: {
      price_to_sales: priceToSales,
      price_to_earnings: null,
      free_cash_flow_yield_pct: null,
    },
    review: {
      status: protocol.model_review?.status === 'pass' ? 'independent_pass' : 'pending',
      confidence: protocol.confidence || 'low',
      numeric_values_promoted: false,
      data_state: revenue === null ? 'partial_safe_null' : 'provisional_snapshot',
    },
    provenance: {
      repository: snapshot.source_snapshot.repository,
      ref: snapshot.source_snapshot.ref,
      source_commit: snapshot.source_snapshot.commit,
      observed_at: snapshot.source_snapshot.data_generated_at,
      register_generated_at: snapshot.review_snapshot.register_generated_at,
      evidence_boundary:
        'Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。',
    },
    null_reasons: NULL_REASONS,
  };
}

function main() {
  const snapshot = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  const protocols = snapshot.protocols
    .map((protocol) => buildProtocol(protocol, snapshot))
    .sort((left, right) => left.name.localeCompare(right.name, 'en'));

  const output = {
    schema_version: '3.0.0-test',
    terminology: 'public-equity',
    generated_at: snapshot.generated_at,
    observed_at: snapshot.source_snapshot.data_generated_at,
    intended_use: 'Crypto3D test-site public-equity financial comparison',
    source_snapshot: snapshot.source_snapshot,
    review_snapshot: snapshot.review_snapshot,
    null_policy: {
      null: '尚无足够证据可靠计算。',
      zero: '只有经过复核并确认数值为零时才使用 0。',
      display: '页面将 null 显示为“未覆盖”，不得替换为 0。',
    },
    formulas: {
      price_to_sales: 'P/S = Market Cap ÷ Revenue (TTM)',
      price_to_earnings: 'P/E = Market Cap ÷ Net Income (TTM)',
      dividend_yield: 'Dividend Yield = Dividends (TTM) ÷ Market Cap × 100%',
      buyback_yield: 'Buyback Yield = Share Repurchases (TTM) ÷ Market Cap × 100%',
      shareholder_yield: 'Shareholder Yield = Dividend Yield + Buyback Yield',
      free_cash_flow: 'Free Cash Flow = Operating Cash Flow − Capital Expenditures',
    },
    coverage: {
      protocol_count: protocols.length,
      market_cap_count: protocols.filter((p) => p.market_data.market_cap_usd !== null).length,
      revenue_count: protocols.filter((p) => p.income_statement.revenue_ttm_usd !== null).length,
      price_to_sales_count: protocols.filter((p) => p.valuation.price_to_sales !== null).length,
      net_income_count: protocols.filter((p) => p.income_statement.net_income_ttm_usd !== null).length,
      price_to_earnings_count: protocols.filter((p) => p.valuation.price_to_earnings !== null).length,
      independent_pass_count: protocols.filter((p) => p.review.status === 'independent_pass').length,
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
    `Built ${protocols.length} protocols: Revenue ${output.coverage.revenue_count}, P/S ${output.coverage.price_to_sales_count}, P/E ${output.coverage.price_to_earnings_count}.`,
  );
}

main();
