#!/usr/bin/env node

'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data', 'protocol-financials-us-equity.json');
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
  /未覆盖/,
];
const VALID_STATES = new Set(['VERIFIED', 'ESTIMATED', 'ZERO', 'N/A', 'N/M', 'PENDING']);
const REQUIRED_META = [
  'market_cap',
  'revenue',
  'direct_economic_costs',
  'realized_protocol_losses',
  'protocol_earnings',
  'price_to_sales',
  'price_to_earnings',
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

function isNullableFinite(value) {
  return value === null || Number.isFinite(value);
}

function numericCount(protocols, getter) {
  return protocols.filter((protocol) => Number.isFinite(getter(protocol))).length;
}

runBuild();
const firstBuild = fs.readFileSync(DATA_PATH, 'utf8');
runBuild();
assert.strictEqual(fs.readFileSync(DATA_PATH, 'utf8'), firstBuild, 'Build must be deterministic');

const data = JSON.parse(firstBuild);
assert.strictEqual(data.terminology, 'public-equity-protocol-economics');
assert.deepStrictEqual(
  data.source_policy.order,
  ['CHAIN_PRIMARY', 'OFFICIAL_PRIMARY', 'THIRD_PARTY_FALLBACK'],
  'Global source priority must be chain, official, then third-party fallback',
);
assert(data.source_policy.chain_first.includes('链上'), 'Missing chain-first source rule');
assert(data.source_policy.third_party_last.includes('兜底'), 'Missing third-party fallback rule');
assert.strictEqual(data.protocols.length, 26);
assert.strictEqual(data.coverage.protocol_count, 26);
assert.strictEqual(new Set(data.protocols.map((protocol) => protocol.id)).size, 26);
assert.strictEqual(data.coverage.market_cap_count, 26);
assert.strictEqual(data.coverage.candidate_file_count, 26, 'All 26 protocols need a phase-1 candidate record');

assert.strictEqual(
  data.coverage.revenue_count,
  numericCount(data.protocols, (protocol) => protocol.income_statement.revenue_ttm_usd),
);
assert.strictEqual(
  data.coverage.price_to_sales_count,
  numericCount(data.protocols, (protocol) => protocol.valuation.price_to_sales),
);
assert.strictEqual(
  data.coverage.net_income_count,
  numericCount(data.protocols, (protocol) => protocol.income_statement.net_income_ttm_usd),
);
assert.strictEqual(
  data.coverage.price_to_earnings_count,
  numericCount(data.protocols, (protocol) => protocol.valuation.price_to_earnings),
);
assert.strictEqual(
  data.coverage.shareholder_yield_count,
  numericCount(data.protocols, (protocol) => protocol.capital_returns.shareholder_yield_pct),
);

for (const protocol of data.protocols) {
  const marketCap = protocol.market_data.market_cap_usd;
  const income = protocol.income_statement;
  const returns = protocol.capital_returns;
  const valuation = protocol.valuation;

  assert(Number.isFinite(marketCap) && marketCap > 0, `${protocol.id}: invalid Market Cap`);
  assert.strictEqual(income.organization_opex_policy, 'excluded', `${protocol.id}: organization opex policy`);
  assert.strictEqual(income.native_token_expense_policy, 'excluded', `${protocol.id}: native token expense policy`);

  for (const key of REQUIRED_META) {
    assert(protocol.metric_meta[key], `${protocol.id}: missing metric_meta.${key}`);
    assert(VALID_STATES.has(protocol.metric_meta[key].state), `${protocol.id}: invalid state for ${key}`);
    assert(protocol.metric_meta[key].reason, `${protocol.id}: missing reason for ${key}`);
    assert(
      Object.hasOwn(protocol.metric_meta[key], 'source_tier'),
      `${protocol.id}: missing source_tier field for ${key}`,
    );
  }

  for (const value of [
    income.gross_fees_ttm_usd,
    income.supply_side_payouts_ttm_usd,
    income.revenue_ttm_usd,
    income.direct_economic_costs_ttm_usd,
    income.realized_protocol_losses_ttm_usd,
    income.net_income_ttm_usd,
    returns.dividends_ttm_usd,
    returns.share_repurchases_ttm_usd,
    returns.qualifying_fee_burns_ttm_usd,
    returns.shareholder_yield_pct,
    valuation.price_to_sales,
    valuation.price_to_earnings,
  ]) {
    assert(isNullableFinite(value), `${protocol.id}: non-finite financial value`);
  }

  if (Number.isFinite(income.revenue_ttm_usd) && income.revenue_ttm_usd > 0) {
    assert.strictEqual(
      valuation.price_to_sales,
      round(marketCap / income.revenue_ttm_usd),
      `${protocol.id}: P/S mismatch`,
    );
  } else {
    assert.strictEqual(valuation.price_to_sales, null, `${protocol.id}: P/S must be null`);
  }

  if (Number.isFinite(income.net_income_ttm_usd) && income.net_income_ttm_usd > 0) {
    assert.strictEqual(
      valuation.price_to_earnings,
      round(marketCap / income.net_income_ttm_usd),
      `${protocol.id}: Cash P/E mismatch`,
    );
  } else {
    assert.strictEqual(valuation.price_to_earnings, null, `${protocol.id}: Cash P/E must be null`);
  }

  const dividend = returns.dividends_ttm_usd;
  const repurchase = returns.share_repurchases_ttm_usd;
  const feeBurn = returns.qualifying_fee_burns_ttm_usd;
  if ([dividend, repurchase, feeBurn].every(Number.isFinite)) {
    assert.strictEqual(
      returns.shareholder_yield_pct,
      round(((dividend + repurchase + feeBurn) / marketCap) * 100, 4),
      `${protocol.id}: Shareholder Yield mismatch`,
    );
  }
}

for (const id of ['bgb', 'bnb', 'okb', 'mnt']) {
  const protocol = data.protocols.find((item) => item.id === id);
  assert(protocol, `${id}: missing protocol`);
  assert.strictEqual(protocol.metric_meta.price_to_earnings.state, 'N/A', `${id}: Cash P/E must be N/A`);
}

const hype = data.protocols.find((protocol) => protocol.id === 'hype');
assert(hype, 'hype: missing protocol');
assert.strictEqual(hype.income_statement.revenue_ttm_usd, null, 'hype: legacy revenue proxy must be withdrawn');
assert.strictEqual(hype.income_statement.net_income_ttm_usd, null, 'hype: earnings must remain pending');
assert.strictEqual(hype.valuation.price_to_sales, null, 'hype: P/S must remain pending');
assert.strictEqual(hype.valuation.price_to_earnings, null, 'hype: Cash P/E must remain pending');
assert.strictEqual(hype.capital_returns.share_repurchases_ttm_usd, null, 'hype: partial fills are not TTM repurchases');
assert.strictEqual(hype.capital_returns.shareholder_yield_pct, null, 'hype: partial fills are not TTM shareholder yield');
assert.strictEqual(hype.metric_meta.revenue.state, 'PENDING', 'hype: revenue state');
assert.strictEqual(hype.metric_meta.revenue.source_tier, 'CHAIN_PRIMARY', 'hype: revenue source tier');
assert.strictEqual(hype.metric_meta.protocol_earnings.state, 'PENDING', 'hype: earnings state');
assert.strictEqual(hype.metric_meta.protocol_earnings.source_tier, 'CHAIN_PRIMARY', 'hype: earnings source tier');
assert.strictEqual(hype.metric_meta.repurchases.state, 'PENDING', 'hype: repurchases state');
assert.strictEqual(hype.metric_meta.repurchases.source_tier, 'CHAIN_PRIMARY', 'hype: repurchases source tier');
assert(hype.chain_diagnostics, 'hype: missing chain diagnostics');
assert.strictEqual(hype.chain_diagnostics.evidence_priority, 'CHAIN_PRIMARY', 'hype: chain diagnostic priority');
assert.strictEqual(
  hype.chain_diagnostics.assistance_fund.address,
  '0xfefefefefefefefefefefefefefefefefefefefe',
  'hype: wrong Assistance Fund address',
);
assert(hype.chain_diagnostics.fills_window.all_rows > 0, 'hype: empty official fills diagnostic');
assert(
  hype.chain_diagnostics.fills_window.purchase_consideration_usd > 0,
  'hype: empty partial purchase diagnostic',
);
assert.strictEqual(
  hype.chain_diagnostics.fills_window.complete_for_ttm,
  false,
  'hype: limited official API window must not be presented as complete TTM',
);
assert(
  hype.chain_diagnostics.official_mechanism.fees_url.includes('hyperliquid.gitbook.io'),
  'hype: missing official fee-mechanism documentation',
);

const generatedText = JSON.stringify(hype);
assert(!generatedText.includes('792146570'), 'hype: withdrawn legacy revenue leaked into public data');
assert(!generatedText.includes('918600640'), 'hype: withdrawn third-party repurchase leaked into public data');

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
assert(publicDocs.includes('链上一手数据优先'), 'Public docs must state chain-first policy');
assert(publicDocs.includes('第三方聚合数据仅作最后兜底'), 'Public docs must state third-party-last policy');

console.log(
  `PASS: 26 protocols, Revenue ${data.coverage.revenue_count}, Cash P/E ${data.coverage.price_to_earnings_count}, Shareholder Yield ${data.coverage.shareholder_yield_count}; formulas, states, and public terminology validated.`,
);
