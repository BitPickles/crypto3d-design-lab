#!/usr/bin/env node

'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data', 'protocol-financials-us-equity.json');
const SNAPSHOT_PATH = path.join(ROOT, 'data', 'defillama-daily-snapshot.json');
const PUBLIC_FILES = [
  path.join(ROOT, 'tev', 'index.html'),
  path.join(ROOT, 'tev', 'protocol.html'),
  path.join(ROOT, 'tev', 'fundamentals.js'),
  path.join(ROOT, 'tev', 'protocol-financials.js'),
  path.join(ROOT, 'tev', 'docs', 'index.html'),
  path.join(ROOT, 'index.html'),
];
const BANNED_PUBLIC_TERMS = [
  /\bP\s*\/\s*TEV\b/,
  /\bTEV\s+Yield\b/,
  /Token Empowerment/,
  /Token Enabled/,
  /代币赋能/,
  /分配比例/,
  /协议收入率/,
];
const VALID_STATES = new Set(['VERIFIED', 'ESTIMATED', 'ZERO', 'N/A', 'N/M', 'PENDING']);
const REQUIRED_META = [
  'price',
  'market_cap',
  'gross_fees',
  'revenue',
  'protocol_earnings',
  'price_to_sales',
  'price_to_earnings',
  'holders_revenue',
  'dividends',
  'repurchases',
  'fee_burns',
  'shareholder_yield',
];
const PROTOCOL_EARNINGS_NA_IDS = new Set(['bnb', 'mnt']);
const PANCAKESWAP_EXTERNAL_INCENTIVES_MONTHLY_CAKE = 236_919 + 119_961;
const PANCAKESWAP_INCENTIVE_SOURCE =
  'https://blog.pancakeswap.finance/articles/cake-burn-june-2026';

function runBuild() {
  execFileSync(process.execPath, [path.join(__dirname, 'build-us-equity-financials.js')], {
    cwd: ROOT,
    stdio: 'inherit',
  });
}

function round(value, digits = 2) {
  const scale = 10 ** digits;
  return Math.round((value + Number.EPSILON) * scale) / scale;
}

function numericCount(protocols, getter) {
  return protocols.filter((protocol) => Number.isFinite(getter(protocol))).length;
}

runBuild();
const firstBuild = fs.readFileSync(DATA_PATH, 'utf8');
runBuild();
assert.strictEqual(fs.readFileSync(DATA_PATH, 'utf8'), firstBuild, 'Build must be deterministic');

const data = JSON.parse(firstBuild);
const snapshot = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf8'));
const snapshotById = new Map(snapshot.protocols.map((protocol) => [protocol.id, protocol]));

assert.strictEqual(data.schema_version, '5.0.0-defillama-daily');
assert.strictEqual(data.terminology, 'public-equity-protocol-economics');
assert.strictEqual(data.source_policy.mode, 'DEFILLAMA_BASE_WITH_OFFICIAL_CAKE_EXCEPTION');
assert(data.source_policy.provider.includes('PancakeSwap'), 'CAKE official source exception is missing');
assert.strictEqual(data.source_policy.legacy_fallback_allowed, false);
assert(data.source_policy.rule.includes('每日刷新'), 'Daily price refresh rule is missing');
assert(data.source_policy.rule.includes('不使用旧快照'), 'Legacy fallback prohibition is missing');
assert(data.source_policy.rule.includes('PancakeSwap'), 'CAKE exception must be disclosed');
assert.strictEqual(data.protocols.length, 26);
assert.strictEqual(new Set(data.protocols.map((protocol) => protocol.id)).size, 26);
assert.strictEqual(data.coverage.protocol_count, 26);
assert.strictEqual(data.coverage.price_count, 26);
assert.strictEqual(data.coverage.market_cap_count, 26);

const ageHours = (Date.now() - Date.parse(data.observed_at)) / 3_600_000;
assert(ageHours >= -2 && ageHours <= 36, `DefiLlama snapshot is stale: ${ageHours.toFixed(1)} hours`);

for (const [coverageKey, getter] of [
  ['gross_fees_count', (protocol) => protocol.income_statement.gross_fees_ttm_usd],
  ['revenue_count', (protocol) => protocol.income_statement.revenue_ttm_usd],
  ['price_to_sales_count', (protocol) => protocol.valuation.price_to_sales],
  ['net_income_count', (protocol) => protocol.income_statement.net_income_ttm_usd],
  ['price_to_earnings_count', (protocol) => protocol.valuation.price_to_earnings],
  ['holders_revenue_count', (protocol) => protocol.capital_returns.holders_revenue_ttm_usd],
  ['shareholder_yield_count', (protocol) => protocol.capital_returns.shareholder_yield_pct],
]) {
  assert.strictEqual(data.coverage[coverageKey], numericCount(data.protocols, getter), `${coverageKey} mismatch`);
}

for (const protocol of data.protocols) {
  const raw = snapshotById.get(protocol.id);
  const marketCap = protocol.market_data.market_cap_usd;
  const price = protocol.market_data.price_usd;
  const income = protocol.income_statement;
  const returns = protocol.capital_returns;
  const valuation = protocol.valuation;

  assert(raw, `${protocol.id}: missing raw DefiLlama row`);
  assert(Number.isFinite(price) && price > 0, `${protocol.id}: invalid current price`);
  assert(Number.isFinite(marketCap) && marketCap > 0, `${protocol.id}: invalid market cap`);
  assert.strictEqual(price, raw.market.price_usd, `${protocol.id}: price did not come from DefiLlama snapshot`);
  assert.strictEqual(marketCap, raw.market.market_cap_usd, `${protocol.id}: market cap did not come from DefiLlama snapshot`);
  assert.strictEqual(protocol.as_of, snapshot.generated_at, `${protocol.id}: stale as_of`);
  assert.strictEqual(income.organization_opex_policy, 'excluded', `${protocol.id}: organization opex policy`);
  assert.strictEqual(
    income.native_token_expense_policy,
    protocol.id === 'pancakeswap' ? 'pancakeswap_external_incentives_included' : 'excluded',
    `${protocol.id}: native token expense policy`,
  );

  const priceAgeHours = (Date.parse(snapshot.generated_at) - Date.parse(raw.market.price_timestamp)) / 3_600_000;
  assert(priceAgeHours >= -1 && priceAgeHours <= 24, `${protocol.id}: DefiLlama price timestamp is stale`);

  for (const key of REQUIRED_META) {
    assert(protocol.metric_meta[key], `${protocol.id}: missing metric_meta.${key}`);
    assert(VALID_STATES.has(protocol.metric_meta[key].state), `${protocol.id}: invalid state for ${key}`);
    assert(protocol.metric_meta[key].reason, `${protocol.id}: missing reason for ${key}`);
    const mixedCakeMetric =
      protocol.id === 'pancakeswap'
      && ['direct_economic_costs', 'protocol_earnings', 'price_to_earnings'].includes(key);
    assert.strictEqual(
      protocol.metric_meta[key].source_tier,
      mixedCakeMetric ? 'MIXED_OFFICIAL_AND_THIRD_PARTY' : 'THIRD_PARTY_FALLBACK',
      `${protocol.id}: ${key} source tier mismatch`,
    );
  }

  const rawFees = raw.financials.fees.total_1y_usd;
  const rawRevenue = raw.financials.revenue.total_1y_usd;
  const rawHolders = raw.financials.holders_revenue.total_1y_usd;
  const expectedIncentiveCost =
    protocol.id === 'pancakeswap'
      ? PANCAKESWAP_EXTERNAL_INCENTIVES_MONTHLY_CAKE * 12 * price
      : null;
  const expectedEarnings =
    PROTOCOL_EARNINGS_NA_IDS.has(protocol.id)
      ? null
      : Number.isFinite(rawRevenue)
        ? rawRevenue - (expectedIncentiveCost || 0)
        : null;
  assert.strictEqual(income.gross_fees_ttm_usd, Number.isFinite(rawFees) ? rawFees : null, `${protocol.id}: Fees mismatch`);
  assert.strictEqual(income.revenue_ttm_usd, Number.isFinite(rawRevenue) ? rawRevenue : null, `${protocol.id}: Revenue mismatch`);
  assert.strictEqual(income.net_income_ttm_usd, expectedEarnings, `${protocol.id}: earnings proxy mismatch`);
  assert.strictEqual(
    income.direct_economic_costs_ttm_usd,
    expectedIncentiveCost,
    `${protocol.id}: direct economic costs mismatch`,
  );
  assert.strictEqual(
    returns.holders_revenue_ttm_usd,
    Number.isFinite(rawHolders) ? rawHolders : null,
    `${protocol.id}: Holders Revenue mismatch`,
  );

  if (PROTOCOL_EARNINGS_NA_IDS.has(protocol.id)) {
    assert.strictEqual(valuation.price_to_sales, round(marketCap / rawRevenue), `${protocol.id}: P/S mismatch`);
    assert.strictEqual(valuation.price_to_earnings, null, `${protocol.id}: public-chain P/E must be null`);
    assert.strictEqual(protocol.metric_meta.protocol_earnings.state, 'N/A', `${protocol.id}: earnings must be N/A`);
    assert.strictEqual(protocol.metric_meta.price_to_earnings.state, 'N/A', `${protocol.id}: P/E must be N/A`);
  } else if (Number.isFinite(rawRevenue) && rawRevenue > 0) {
    assert.strictEqual(valuation.price_to_sales, round(marketCap / rawRevenue), `${protocol.id}: P/S mismatch`);
    assert.strictEqual(valuation.price_to_earnings, round(marketCap / expectedEarnings), `${protocol.id}: Cash P/E mismatch`);
  } else {
    assert.strictEqual(valuation.price_to_sales, null, `${protocol.id}: P/S must be null`);
    assert.strictEqual(valuation.price_to_earnings, null, `${protocol.id}: Cash P/E must be null`);
    assert(
      ['PENDING', 'N/M'].includes(protocol.metric_meta.price_to_earnings.state),
      `${protocol.id}: missing/zero earnings must be PENDING or N/M`,
    );
  }

  if (Number.isFinite(rawHolders)) {
    assert.strictEqual(
      returns.shareholder_yield_pct,
      round((rawHolders / marketCap) * 100, 4),
      `${protocol.id}: Shareholder Yield mismatch`,
    );
  } else {
    assert.strictEqual(returns.shareholder_yield_pct, null, `${protocol.id}: Shareholder Yield must be null`);
  }

  // DefiLlama Holders Revenue is kept as an aggregate and never fabricated into a breakdown.
  assert.strictEqual(returns.dividends_ttm_usd, null, `${protocol.id}: aggregate Holders Revenue leaked into dividends`);
  assert.strictEqual(returns.share_repurchases_ttm_usd, null, `${protocol.id}: aggregate Holders Revenue leaked into repurchases`);
  assert.strictEqual(returns.qualifying_fee_burns_ttm_usd, null, `${protocol.id}: aggregate Holders Revenue leaked into burns`);
}

assert.deepStrictEqual(
  data.protocols.filter((protocol) => protocol.income_statement.revenue_ttm_usd === null).map((protocol) => protocol.id).sort(),
  ['aster', 'bgb', 'okb'],
  'Unexpected DefiLlama Revenue gaps',
);
assert.deepStrictEqual(
  data.protocols.filter((protocol) => protocol.capital_returns.holders_revenue_ttm_usd === null).map((protocol) => protocol.id).sort(),
  ['bgb', 'ethena', 'mnt', 'okb'],
  'Unexpected DefiLlama Holders Revenue gaps',
);

const hype = data.protocols.find((protocol) => protocol.id === 'hype');
assert(hype, 'hype: missing protocol');
assert(Number.isFinite(hype.income_statement.revenue_ttm_usd), 'hype: DefiLlama Revenue must be available');
assert(Number.isFinite(hype.capital_returns.holders_revenue_ttm_usd), 'hype: Holders Revenue must be available');
assert.strictEqual(
  hype.valuation.price_to_earnings,
  round(hype.market_data.market_cap_usd / hype.income_statement.revenue_ttm_usd),
  'hype: P/E must follow the current DefiLlama market cap',
);
assert.strictEqual(
  hype.capital_returns.shareholder_yield_pct,
  round((hype.capital_returns.holders_revenue_ttm_usd / hype.market_data.market_cap_usd) * 100, 4),
  'hype: Shareholder Yield must follow the current DefiLlama market cap',
);
assert.strictEqual(hype.chain_diagnostics, null, 'hype: chain diagnostics must not be a numeric source this round');

const cake = data.protocols.find((protocol) => protocol.id === 'pancakeswap');
assert(cake, 'pancakeswap: missing protocol');
const cakeRaw = snapshotById.get('pancakeswap');
const cakeIncentiveCost =
  PANCAKESWAP_EXTERNAL_INCENTIVES_MONTHLY_CAKE * 12 * cake.market_data.price_usd;
assert.strictEqual(
  cake.income_statement.direct_economic_costs_ttm_usd,
  cakeIncentiveCost,
  'pancakeswap: external incentive annualization mismatch',
);
assert.strictEqual(
  cake.income_statement.net_income_ttm_usd,
  cakeRaw.financials.revenue.total_1y_usd - cakeIncentiveCost,
  'pancakeswap: incentive-adjusted earnings mismatch',
);
assert.strictEqual(
  cake.valuation.price_to_earnings,
  round(cake.market_data.market_cap_usd / cake.income_statement.net_income_ttm_usd),
  'pancakeswap: incentive-adjusted P/E mismatch',
);
assert(
  cake.valuation.price_to_earnings > cake.valuation.price_to_sales,
  'pancakeswap: adjusted P/E must be above unadjusted P/S',
);
assert.strictEqual(
  cake.metric_meta.direct_economic_costs.source_url,
  PANCAKESWAP_INCENTIVE_SOURCE,
  'pancakeswap: official incentive source missing',
);
assert(cake.metric_meta.direct_economic_costs.reason.includes('356,880 CAKE/月'));
assert(cake.metric_meta.direct_economic_costs.reason.includes('不扣 Ecosystem Growth'));

const bgb = data.protocols.find((protocol) => protocol.id === 'bgb');
const bgbRaw = snapshotById.get('bgb');
assert.strictEqual(bgb.market_data.market_cap_method, 'DEFILLAMA_PRICE_X_DEFILLAMA_SUPPLY_SNAPSHOT');
assert.strictEqual(
  bgb.market_data.market_cap_usd,
  bgbRaw.market.price_usd * bgbRaw.market.circulating_supply_used,
  'bgb: price x supply fallback mismatch',
);
assert(bgb.metric_meta.market_cap.display_note.includes('价格'), 'bgb: fallback must be disclosed');

for (const file of PUBLIC_FILES) {
  const raw = fs.readFileSync(file, 'utf8');
  const source = path.basename(file) === 'index.html' && path.dirname(file) === ROOT
    ? raw
        .replace(/<!--[\s\S]*?-->/g, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
    : raw;
  for (const term of BANNED_PUBLIC_TERMS) {
    assert(!term.test(source), `${path.relative(ROOT, file)} contains banned public term ${term}`);
  }
}

const publicDocs = fs.readFileSync(path.join(ROOT, 'tev', 'docs', 'index.html'), 'utf8');
assert(publicDocs.includes('本轮会议版数据规则'), 'Public docs must identify the round-specific rule');
assert(publicDocs.includes('DefiLlama 基础数据 + CAKE 官方激励特例'), 'Public docs must state the CAKE source exception');
assert(publicDocs.includes(PANCAKESWAP_INCENTIVE_SOURCE), 'Public docs must link the official CAKE incentive source');
assert(publicDocs.includes('每日自动刷新'), 'Public docs must state daily refresh');
assert(publicDocs.includes('不使用旧数据回填'), 'Public docs must state no legacy fallback');

console.log(
  `PASS: DefiLlama daily snapshot; 26 prices/market caps, Revenue ${data.coverage.revenue_count}, `
    + `Cash P/E ${data.coverage.price_to_earnings_count}, Holders Revenue ${data.coverage.holders_revenue_count}, `
    + `Shareholder Yield ${data.coverage.shareholder_yield_count}.`,
);
