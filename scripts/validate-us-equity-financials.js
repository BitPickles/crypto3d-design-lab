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
  path.join(ROOT, 'index.html'),
];
const BANNED_PUBLIC_TERMS = [
  /\bP\s*\/\s*TEV\b/,
  /\bTEV\b/,
  /Token Empowerment/,
  /Token Enabled/,
  /代币赋能/,
  /分配比例/,
  /协议收入率/,
];

function runBuild() {
  execFileSync(process.execPath, [path.join(__dirname, 'build-us-equity-financials.js')], {
    cwd: ROOT,
    stdio: 'inherit',
  });
}

function isNullableFinite(value) {
  return value === null || Number.isFinite(value);
}

runBuild();
const firstBuild = fs.readFileSync(DATA_PATH, 'utf8');
runBuild();
assert.strictEqual(fs.readFileSync(DATA_PATH, 'utf8'), firstBuild, 'Build must be deterministic');

const data = JSON.parse(firstBuild);
assert.strictEqual(data.terminology, 'public-equity');
assert.strictEqual(data.protocols.length, 26);
assert.strictEqual(data.coverage.protocol_count, 26);
assert.strictEqual(new Set(data.protocols.map((p) => p.id)).size, 26);
assert.strictEqual(data.coverage.market_cap_count, 26);
assert.strictEqual(data.coverage.revenue_count, 18);
assert.strictEqual(data.coverage.price_to_sales_count, 18);
assert.strictEqual(data.coverage.net_income_count, 0);
assert.strictEqual(data.coverage.price_to_earnings_count, 0);
assert.strictEqual(data.coverage.independent_pass_count, 13);

for (const protocol of data.protocols) {
  const marketCap = protocol.market_data.market_cap_usd;
  const revenue = protocol.income_statement.revenue_ttm_usd;
  const priceToSales = protocol.valuation.price_to_sales;

  assert(isNullableFinite(marketCap), `${protocol.id}: invalid Market Cap`);
  assert(isNullableFinite(revenue), `${protocol.id}: invalid Revenue`);
  assert(isNullableFinite(priceToSales), `${protocol.id}: invalid P/S`);
  assert.strictEqual(protocol.income_statement.net_income_ttm_usd, null);
  assert.strictEqual(protocol.valuation.price_to_earnings, null);
  assert.strictEqual(protocol.capital_returns.dividends_ttm_usd, null);
  assert.strictEqual(protocol.capital_returns.share_repurchases_ttm_usd, null);
  assert.strictEqual(protocol.capital_returns.shareholder_yield_pct, null);

  if (marketCap !== null && revenue !== null) {
    assert.strictEqual(priceToSales, Math.round((marketCap / revenue) * 100) / 100);
  } else {
    assert.strictEqual(priceToSales, null);
  }
}

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

console.log('PASS: 26 protocols, reproducible formulas, safe-null policy, and no retired terminology in public pages.');
