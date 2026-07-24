#!/usr/bin/env node

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!key?.startsWith('--') || value == null) {
      throw new Error(`Invalid argument near "${key ?? ''}"`);
    }
    result[key.slice(2)] = value;
  }
  return result;
}

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return null;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function positiveNumber(value) {
  return Number.isFinite(value) && value > 0 ? value : null;
}

const args = parseArgs(process.argv.slice(2));
const sourceRepo = path.resolve(args['source-repo'] || '../tev-dashboard');
const sourceRef = args['source-ref'] || 'origin/main';
const auditRegisterPath = path.resolve(args['audit-register']);
const outputPath = path.resolve(
  args.output || path.join(__dirname, '..', 'data', 'valuation-meeting-snapshot.json'),
);

if (!args['audit-register']) {
  throw new Error('--audit-register is required');
}

const sourceCommit = execFileSync(
  'git',
  ['-C', sourceRepo, 'rev-parse', sourceRef],
  { encoding: 'utf8' },
).trim();
const sourceRaw = execFileSync(
  'git',
  ['-C', sourceRepo, 'show', `${sourceRef}:data/all-protocols.json`],
  { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 },
);

const source = JSON.parse(sourceRaw);
const auditRegister = JSON.parse(fs.readFileSync(auditRegisterPath, 'utf8'));
const auditsById = new Map(
  (auditRegister.objects || []).map((entry) => [entry.object_id, entry]),
);

const protocols = Object.entries(source.protocols || {}).map(([id, protocol]) => {
  const marketCap = positiveNumber(protocol.market_cap_usd);
  const reportedRevenue = positiveNumber(
    protocol.metrics?.trailing_365d_revenue_usd,
  );
  const holderYield = positiveNumber(protocol.tev_yield_percent);
  const audit = auditsById.get(id);
  const modelReviewPassed = audit?.final_status === 'PASS';

  return {
    id,
    name: protocol.name,
    ticker: protocol.ticker,
    category: protocol.category,
    as_of: source.generated_at,
    market_cap_usd: marketCap,
    revenue_ttm_usd: reportedRevenue,
    revenue_state: reportedRevenue
      ? 'reported_ttm_indicative'
      : 'safe_null',
    protocol_earning_yield_pct:
      marketCap && reportedRevenue
        ? round((reportedRevenue / marketCap) * 100)
        : null,
    price_to_sales:
      marketCap && reportedRevenue
        ? round(marketCap / reportedRevenue)
        : null,
    net_income_ttm_usd: null,
    price_to_earnings: null,
    strict_pe_state: 'safe_null',
    strict_pe_reason:
      'A reviewed, protocol-specific TTM net-income ledger is not available.',
    holder_yield_pct: holderYield,
    price_to_holder_cash_flow:
      holderYield ? round(100 / holderYield) : null,
    holder_multiple_state: holderYield
      ? 'legacy_proxy_not_reviewed_numeric'
      : 'safe_null',
    tev_mechanism_status: protocol.tevStatus || 'none',
    distribution_ratio: Number.isFinite(protocol.tevRatio)
      ? protocol.tevRatio
      : null,
    confidence: protocol.confidence || 'low',
    model_review: {
      status: modelReviewPassed ? 'pass' : 'pending',
      data_availability: audit?.data_availability || 'UNKNOWN',
      numeric_values_promoted: false,
    },
    source_state: {
      market_and_revenue: 'current_published_snapshot',
      price_to_sales: reportedRevenue ? 'derived_indicative' : 'not_available',
      strict_pe: 'not_available',
      holder_multiple: holderYield
        ? 'derived_from_legacy_tev_yield'
        : 'not_available',
    },
  };
});

const snapshot = {
  schema_version: '1.0.0',
  generated_at: new Date().toISOString(),
  intended_use:
    'Crypto3D test-site meeting view; indicative valuation comparison only.',
  source_snapshot: {
    repository: 'BitPickles/tev-dashboard',
    ref: sourceRef,
    commit: sourceCommit,
    data_generated_at: source.generated_at,
  },
  review_snapshot: {
    register_generated_at: auditRegister.generated_at_utc,
    model_review_passed_protocols: protocols.filter(
      (protocol) => protocol.model_review.status === 'pass',
    ).length,
    numeric_values_promoted: false,
  },
  methodology: {
    price_to_sales:
      'Circulating market cap / reported trailing-365-day protocol revenue.',
    price_to_holder_cash_flow:
      'Circulating market cap / legacy annual holder-value proxy; equivalently 100 / holder yield percent.',
    strict_price_to_earnings:
      'Circulating market cap / reviewed TTM net income. Kept null until protocol-specific revenue, expenses and net income are closed.',
    zero_policy:
      'Missing, unverified and not-calculable values are null, never zero.',
    window_policy:
      'Only reported trailing-365-day amounts are labeled TTM. Shorter-window annualization is not relabeled as TTM.',
  },
  coverage: {
    protocol_count: protocols.length,
    market_cap_count: protocols.filter((protocol) => protocol.market_cap_usd)
      .length,
    price_to_sales_count: protocols.filter(
      (protocol) => protocol.price_to_sales,
    ).length,
    price_to_holder_cash_flow_count: protocols.filter(
      (protocol) => protocol.price_to_holder_cash_flow,
    ).length,
    strict_price_to_earnings_count: protocols.filter(
      (protocol) => protocol.price_to_earnings,
    ).length,
  },
  protocols,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
console.log(
  `Wrote ${protocols.length} protocols to ${outputPath} from ${sourceCommit}`,
);
