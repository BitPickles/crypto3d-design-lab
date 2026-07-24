#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MAP_PATH = path.join(ROOT, 'data', 'defillama-source-map.json');
const OUTPUT_PATH = path.join(ROOT, 'data', 'defillama-daily-snapshot.json');
const PRICE_BASE = 'https://coins.llama.fi/prices/current';
const PROTOCOL_BASE = 'https://api.llama.fi/protocol';
const FEES_BASE = 'https://api.llama.fi/summary/fees';
const FINANCIAL_TYPES = {
  fees: 'dailyFees',
  revenue: 'dailyRevenue',
  holders_revenue: 'dailyHoldersRevenue',
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJson(url, { allowMissing = false, retries = 3 } = {}) {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/json',
          'user-agent': 'Crypto3D-DefiLlama-Daily/1.0',
        },
      });
      if (allowMissing && [400, 404].includes(response.status)) return null;
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < retries) await sleep(500 * (2 ** (attempt - 1)));
    }
  }
  throw new Error(`${url}: ${lastError?.message || 'request failed'}`);
}

async function mapWithConcurrency(entries, concurrency, worker) {
  const output = new Array(entries.length);
  let cursor = 0;
  async function run() {
    while (cursor < entries.length) {
      const index = cursor;
      cursor += 1;
      output[index] = await worker(entries[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, entries.length) }, run));
  return output;
}

function finiteOrNull(value) {
  return Number.isFinite(value) ? value : null;
}

function summarizeFinancial(data, type, slug) {
  if (!data) {
    return {
      state: 'PENDING',
      total_1y_usd: null,
      total_30d_usd: null,
      total_7d_usd: null,
      total_24h_usd: null,
      latest_daily_at: null,
      source_url: slug
        ? `${FEES_BASE}/${encodeURIComponent(slug)}?dataType=${type}`
        : null,
    };
  }
  const lastPoint = Array.isArray(data.totalDataChart) ? data.totalDataChart.at(-1) : null;
  return {
    state: Number.isFinite(data.total1y) ? 'AVAILABLE' : 'PENDING',
    total_1y_usd: finiteOrNull(data.total1y),
    total_30d_usd: finiteOrNull(data.total30d),
    total_7d_usd: finiteOrNull(data.total7d),
    total_24h_usd: finiteOrNull(data.total24h),
    latest_daily_at:
      Array.isArray(lastPoint) && Number.isFinite(lastPoint[0])
        ? new Date(lastPoint[0] * 1000).toISOString()
        : null,
    source_url: `${FEES_BASE}/${encodeURIComponent(slug)}?dataType=${type}`,
  };
}

async function main() {
  const sourceMap = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
  const entries = Object.entries(sourceMap.protocols);
  if (entries.length !== 26) throw new Error(`Expected 26 protocol mappings, found ${entries.length}`);

  const priceKeys = entries.map(([, config]) => config.coin_key);
  const priceUrl = `${PRICE_BASE}/${priceKeys.map(encodeURIComponent).join(',')}`;
  const pricePayload = await fetchJson(priceUrl);

  const protocols = await mapWithConcurrency(entries, 5, async ([id, config]) => {
    const priceRow = pricePayload.coins?.[config.coin_key] || null;
    const price = finiteOrNull(priceRow?.price);
    const marketPayload = config.market_slug
      ? await fetchJson(`${PROTOCOL_BASE}/${encodeURIComponent(config.market_slug)}`, {
          allowMissing: true,
        })
      : null;
    const directMarketCap = finiteOrNull(marketPayload?.mcap);
    const fallbackSupply = finiteOrNull(config.circulating_supply_fallback);
    const fallbackMarketCap =
      directMarketCap === null && price !== null && fallbackSupply !== null
        ? price * fallbackSupply
        : null;
    const marketCap = directMarketCap ?? fallbackMarketCap;

    const financials = {};
    for (const [key, dataType] of Object.entries(FINANCIAL_TYPES)) {
      const data = config.fees_slug
        ? await fetchJson(
            `${FEES_BASE}/${encodeURIComponent(config.fees_slug)}?dataType=${dataType}`,
            { allowMissing: true },
          )
        : null;
      financials[key] = summarizeFinancial(data, dataType, config.fees_slug);
    }

    return {
      id,
      ticker_override: config.ticker_override || null,
      mapping: {
        market_slug: config.market_slug,
        fees_slug: config.fees_slug,
        coin_key: config.coin_key,
      },
      market: {
        price_usd: price,
        market_cap_usd: marketCap,
        market_cap_method:
          directMarketCap !== null
            ? 'DEFILLAMA_PROTOCOL_MCAP'
            : fallbackMarketCap !== null
              ? 'DEFILLAMA_PRICE_X_DEFILLAMA_SUPPLY_SNAPSHOT'
              : 'PENDING',
        price_timestamp:
          Number.isFinite(priceRow?.timestamp)
            ? new Date(priceRow.timestamp * 1000).toISOString()
            : null,
        price_confidence: finiteOrNull(priceRow?.confidence),
        symbol: priceRow?.symbol || null,
        circulating_supply_used: fallbackMarketCap !== null ? fallbackSupply : null,
        supply_source: fallbackMarketCap !== null ? config.supply_source : null,
        supply_observed_at: fallbackMarketCap !== null ? config.supply_observed_at : null,
        source_url: config.market_slug
          ? `${PROTOCOL_BASE}/${encodeURIComponent(config.market_slug)}`
          : priceUrl,
      },
      financials,
    };
  });

  const marketCoverage = protocols.filter(
    (protocol) =>
      Number.isFinite(protocol.market.price_usd)
      && Number.isFinite(protocol.market.market_cap_usd)
      && protocol.market.market_cap_usd > 0,
  ).length;
  if (marketCoverage !== 26) {
    const missing = protocols
      .filter((protocol) => !Number.isFinite(protocol.market.market_cap_usd))
      .map((protocol) => protocol.id);
    throw new Error(`DefiLlama market coverage ${marketCoverage}/26; missing ${missing.join(', ')}`);
  }

  const generatedAt = new Date().toISOString();
  const output = {
    schema_version: '1.0',
    source_policy: 'DEFILLAMA_ONLY_ROUND',
    generated_at: generatedAt,
    freshness_policy: {
      market_price_max_age_hours: 24,
      financial_window: 'DefiLlama total1y',
      legacy_fallback_allowed: false,
    },
    coverage: {
      protocol_count: protocols.length,
      price_count: protocols.filter((protocol) => Number.isFinite(protocol.market.price_usd)).length,
      market_cap_count: marketCoverage,
      fees_1y_count: protocols.filter((protocol) =>
        Number.isFinite(protocol.financials.fees.total_1y_usd)).length,
      revenue_1y_count: protocols.filter((protocol) =>
        Number.isFinite(protocol.financials.revenue.total_1y_usd)).length,
      holders_revenue_1y_count: protocols.filter((protocol) =>
        Number.isFinite(protocol.financials.holders_revenue.total_1y_usd)).length,
    },
    protocols,
  };

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  console.log(
    `Wrote DefiLlama daily snapshot: market ${output.coverage.market_cap_count}/26, `
    + `revenue ${output.coverage.revenue_1y_count}/26, `
    + `holders revenue ${output.coverage.holders_revenue_1y_count}/26.`,
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
