#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'data', 'candidates', 'hype-chain-diagnostics.json');
const INFO_URL = 'https://api.hyperliquid.xyz/info';
const AF_ADDRESS = '0xfefefefefefefefefefefefefefefefefefefefe';
const HYPE_SPOT_COIN = '@107';
const DAY_MS = 86_400_000;
const PAGE_LIMIT = 2_000;
const MAX_AVAILABLE_FILLS = 10_000;
const MAX_PAGES = 10;

async function info(body) {
  const response = await fetch(INFO_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`Hyperliquid info API returned HTTP ${response.status}`);
  return response.json();
}

function fixed(value, digits = 8) {
  const scale = 10 ** digits;
  return Math.round((Number(value) + Number.EPSILON) * scale) / scale;
}

async function main() {
  const observedAtMs = Date.now();
  const observedAt = new Date(observedAtMs).toISOString();
  const ttmStartMs = observedAtMs - 365 * DAY_MS;
  const ttmStart = new Date(ttmStartMs).toISOString();

  const accountState = await info({
    type: 'spotClearinghouseState',
    user: AF_ADDRESS,
  });
  const hypeBalance = accountState.balances?.find((balance) => balance.coin === 'HYPE');
  if (!hypeBalance) throw new Error('HYPE balance missing from Assistance Fund state');

  const fills = [];
  const seen = new Set();
  let cursor = ttmStartMs;

  for (let page = 0; page < MAX_PAGES && cursor <= observedAtMs; page += 1) {
    const batch = await info({
      type: 'userFillsByTime',
      user: AF_ADDRESS,
      startTime: cursor,
      endTime: observedAtMs,
      aggregateByTime: false,
    });
    if (!Array.isArray(batch) || batch.length === 0) break;

    let maxTime = cursor;
    for (const fill of batch) {
      const key = fill.tid === null || fill.tid === undefined
        ? `${fill.oid ?? ''}:${fill.hash ?? ''}:${fill.time}:${fill.coin}:${fill.side}:${fill.sz}:${fill.px}`
        : `tid:${fill.tid}`;
      if (!seen.has(key)) {
        seen.add(key);
        fills.push(fill);
      }
      maxTime = Math.max(maxTime, Number(fill.time) || cursor);
    }
    if (batch.length < PAGE_LIMIT || maxTime < cursor) break;
    cursor = maxTime + 1;
  }

  fills.sort((a, b) => Number(a.time) - Number(b.time));
  const hypeBuys = fills.filter((fill) => fill.coin === HYPE_SPOT_COIN && fill.side === 'B');
  const minTimeMs = fills.length ? Number(fills[0].time) : null;
  const maxTimeMs = fills.length ? Number(fills.at(-1).time) : null;
  const buyHype = hypeBuys.reduce((sum, fill) => sum + Number(fill.sz || 0), 0);
  const buyUsd = hypeBuys.reduce(
    (sum, fill) => sum + Number(fill.sz || 0) * Number(fill.px || 0),
    0,
  );

  const completeForTtm =
    minTimeMs !== null
    && minTimeMs <= ttmStartMs
    && maxTimeMs !== null
    && maxTimeMs >= observedAtMs - DAY_MS;

  const payload = {
    schema_version: '1.0',
    protocol_id: 'hype',
    evidence_priority: 'CHAIN_PRIMARY',
    observed_at: observedAt,
    ttm_window: {
      start_inclusive: ttmStart,
      end_exclusive: observedAt,
      expected_days: 365,
    },
    assistance_fund: {
      address: AF_ADDRESS,
      hype_balance: Number(hypeBalance.total),
      entry_ntl_usd: Number(hypeBalance.entryNtl),
      token_index: Number(hypeBalance.token),
      source: 'Hyperliquid official info API: spotClearinghouseState',
      source_url: 'https://api.hyperliquid.xyz/info',
      semantic_limit:
        'Point-in-time account state. entryNtl is cumulative position cost, not TTM purchase cash or Protocol Earnings.',
    },
    fills_window: {
      all_rows: fills.length,
      hype_buy_rows: hypeBuys.length,
      observed_start: minTimeMs === null ? null : new Date(minTimeMs).toISOString(),
      observed_end: maxTimeMs === null ? null : new Date(maxTimeMs).toISOString(),
      hype_bought: fixed(buyHype),
      purchase_consideration_usd: fixed(buyUsd, 2),
      complete_for_ttm: completeForTtm,
      source: 'Hyperliquid official info API: userFillsByTime',
      source_url: 'https://api.hyperliquid.xyz/info',
      api_page_limit: PAGE_LIMIT,
      api_documented_retention_limit: MAX_AVAILABLE_FILLS,
      documentation_url:
        'https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint',
      semantic_limit:
        'The official documentation states a 2,000-fill response cap and a latest-10,000 retention limit. Paginated rows are deduplicated by trade id, but the observed window remains a partial chain diagnostic unless it spans the full TTM and reconciles opening/closing balances and transfers.',
    },
    official_mechanism: {
      fees_url: 'https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees',
      historical_data_url: 'https://hyperliquid.gitbook.io/hyperliquid-docs/historical-data',
      summary:
        'Official documentation states that the Assistance Fund converts trading fees to HYPE automatically and burns the acquired HYPE. Complete historical reconstruction requires primary node data beyond the limited account fills endpoint.',
    },
    canonical_decision: {
      revenue_ttm_usd: 'PENDING',
      protocol_earnings_ttm_usd: 'PENDING',
      repurchases_ttm_usd: completeForTtm ? 'ESTIMATED_PENDING_RECONCILIATION' : 'PENDING',
      cash_pe: 'PENDING',
      reason:
        'Chain-first policy blocks third-party or legacy snapshot fallback until the official TTM fee and Assistance Fund ledgers are complete and reconciled.',
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(
    `Wrote HYPE chain diagnostics: ${fills.length} fills, ${fixed(buyUsd, 2)} USD, TTM complete=${completeForTtm}.`,
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
