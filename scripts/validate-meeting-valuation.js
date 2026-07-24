#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(
  process.argv[2] ||
    path.join(__dirname, '..', 'data', 'valuation-meeting-snapshot.json'),
);
const snapshot = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const failures = [];
const siteRoot = path.join(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(siteRoot, 'tev', 'index.html'), 'utf8');
const protocolHtml = fs.readFileSync(
  path.join(siteRoot, 'tev', 'protocol.html'),
  'utf8',
);

function check(condition, message) {
  if (!condition) failures.push(message);
}

check(snapshot.schema_version === '1.0.0', 'Unexpected schema version');
check(
  /^[0-9a-f]{40}$/i.test(snapshot.source_snapshot?.commit || ''),
  'Source commit must be a full Git SHA',
);
check(
  Number.isFinite(Date.parse(snapshot.source_snapshot?.data_generated_at)),
  'Source data timestamp is invalid',
);
check(snapshot.protocols?.length === 26, 'Expected exactly 26 protocols');

const ids = new Set(snapshot.protocols?.map((protocol) => protocol.id));
check(ids.size === 26, 'Protocol IDs must be unique');

for (const protocol of snapshot.protocols || []) {
  check(protocol.market_cap_usd > 0, `${protocol.id}: market cap must be positive`);
  check(
    protocol.price_to_earnings == null &&
      protocol.net_income_ttm_usd == null,
    `${protocol.id}: strict P/E and net income must remain null`,
  );
  check(
    Boolean(protocol.strict_pe_reason),
    `${protocol.id}: missing strict P/E reason`,
  );

  if (protocol.price_to_sales != null) {
    const recomputed = protocol.market_cap_usd / protocol.revenue_ttm_usd;
    check(
      Math.abs(recomputed - protocol.price_to_sales) < 0.011,
      `${protocol.id}: P/S formula mismatch`,
    );
  } else {
    check(
      protocol.revenue_ttm_usd == null,
      `${protocol.id}: null P/S must pair with null revenue`,
    );
  }

  if (protocol.price_to_holder_cash_flow != null) {
    const recomputed = 100 / protocol.holder_yield_pct;
    check(
      Math.abs(recomputed - protocol.price_to_holder_cash_flow) < 0.011,
      `${protocol.id}: P/TEV formula mismatch`,
    );
  } else {
    check(
      protocol.holder_yield_pct == null,
      `${protocol.id}: null P/TEV must pair with null holder yield`,
    );
  }
}

const coverage = snapshot.coverage || {};
check(
  coverage.protocol_count === snapshot.protocols.length,
  'Protocol coverage count mismatch',
);
check(
  coverage.price_to_sales_count ===
    snapshot.protocols.filter((protocol) => protocol.price_to_sales != null)
      .length,
  'P/S coverage count mismatch',
);
check(
  coverage.price_to_holder_cash_flow_count ===
    snapshot.protocols.filter(
      (protocol) => protocol.price_to_holder_cash_flow != null,
    ).length,
  'P/TEV coverage count mismatch',
);
check(
  coverage.strict_price_to_earnings_count === 0,
  'Strict P/E coverage must remain zero until reviewed net income is available',
);
check(
  indexHtml.includes('../data/valuation-meeting-snapshot.json'),
  'Dashboard does not load the meeting valuation snapshot',
);
check(
  indexHtml.includes('data-sort="priceToSales"') &&
    indexHtml.includes('data-sort="pTev"'),
  'Dashboard is missing sortable P/S or P/TEV columns',
);
check(
  protocolHtml.includes('../data/valuation-meeting-snapshot.json') &&
    protocolHtml.includes('id="summary-ps"') &&
    protocolHtml.includes('id="summary-ptev"') &&
    protocolHtml.includes('id="summary-pe"'),
  'Protocol detail page is missing meeting valuation fields',
);
check(
  !indexHtml.includes('governance incentives.</') &&
    !indexHtml.includes('治理激励等。</'),
  'Legacy wording still treats ordinary governance incentives as TEV',
);

if (failures.length) {
  console.error(`Validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `PASS: 26 unique protocols; P/S ${coverage.price_to_sales_count}/26; P/TEV ${coverage.price_to_holder_cash_flow_count}/26; strict P/E 0/26; dashboard and detail-page contracts present.`,
);
