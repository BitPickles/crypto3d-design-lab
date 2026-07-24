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
assert.strictEqual(data.source_policy.mode, 'DEFILLAMA_ONLY_ROUND');
assert.strictEqual(data.source_policy.provider, 'DefiLlama');
assert.strictEqual(data.source_policy.legacy_fallback_allowed, false);
assert(data.source_policy.rule.includes('每日刷新'), 'Daily price refresh rule is missing');
assert(data.source_policy.rule.includes('不使用旧快照'), 'Legacy fallback prohibition is missing');
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
  assert.strictEqual(income.native_token_expense_policy, 'excluded', `${protocol.id}: native token expense policy`);

  const priceAgeHours = (Date.parse(snapshot.generated_at) - Date.parse(raw.market.price_timestamp)) / 3_600_000;
  assert(priceAgeHours >= -1 && priceAgeHours <= 24, `${protocol.id}: DefiLlama price timestamp is stale`);

  for (const key of REQUIRED_META) {
    assert(protocol.metric_meta[key], `${protocol.id}: missing metric_meta.${key}`);
    assert(VALID_STATES.has(protocol.metric_meta[key].state), `${protocol.id}: invalid state for ${key}`);
    assert(protocol.metric_meta[key].reason, `${protocol.id}: missing reason for ${key}`);
    assert.strictEqual(
      protocol.metric_meta[key].source_tier,
      'THIRD_PARTY_FALLBACK',
      `${protocol.id}: ${key} must be identified as third-party`,
    );
  }

  const rawFees = raw.financials.fees.total_1y_usd;
  const rawRevenue = raw.financials.revenue.total_1y_usd;
  const rawHolders = raw.financials.holders_revenue.total_1y_usd;
  assert.strictEqual(income.gross_fees_ttm_usd, Number.isFinite(rawFees) ? rawFees : null, `${protocol.id}: Fees mismatch`);
  assert.strictEqual(income.revenue_ttm_usd, Number.isFinite(rawRevenue) ? rawRevenue : null, `${protocol.id}: Revenue mismatch`);
  assert.strictEqual(income.net_income_ttm_usd, Number.isFinite(rawRevenue) ? rawRevenue : null, `${protocol.id}: earnings proxy mismatch`);
  assert.strictEqual(
    returns.holders_revenue_ttm_usd,
    Number.isFinite(rawHolders) ? rawHolders : null,
    `${protocol.id}: Holders Revenue mismatch`,
  );

  if (Number.isFinite(rawRevenue) && rawRevenue > 0) {
    assert.strictEqual(valuation.price_to_sales, round(marketCap / rawRevenue), `${protocol.id}: P/S mismatch`);
    assert.strictEqual(valuation.price_to_earnings, round(marketCap / rawRevenue), `${protocol.id}: Cash P/E mismatch`);
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
assert.strictEqual(hype.income_statement.revenue_ttm_usd, 792146570, 'hype: DefiLlama Revenue mismatch');
assert.strictEqual(hype.capital_returns.holders_revenue_ttm_usd, 792146570, 'hype: Holders Revenue mismatch');
assert.strictEqual(hype.valuation.price_to_earnings, 16.33, 'hype: expected current DefiLlama P/E');
assert.strictEqual(hype.capital_returns.shareholder_yield_pct, 6.1244, 'hype: expected current DefiLlama yield');
assert.notStrictEqual(hype.valuation.price_to_earnings, 9.3, 'hype: stale 9.3x multiple leaked');
assert.strictEqual(hype.chain_diagnostics, null, 'hype: chain diagnostics must not be a numeric source this round');

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
assert(publicDocs.includes('DefiLlama 单一来源'), 'Public docs must state DefiLlama-only policy');
assert(publicDocs.includes('每日自动刷新'), 'Public docs must state daily refresh');
assert(publicDocs.includes('不使用旧数据或其他平台回填'), 'Public docs must state no fallback');

console.log(
  `PASS: DefiLlama daily snapshot; 26 prices/market caps, Revenue ${data.coverage.revenue_count}, `
    + `Cash P/E ${data.coverage.price_to_earnings_count}, Holders Revenue ${data.coverage.holders_revenue_count}, `
    + `Shareholder Yield ${data.coverage.shareholder_yield_count}.`,
);
