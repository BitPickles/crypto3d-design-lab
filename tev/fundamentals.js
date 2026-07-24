(() => {
  'use strict';

  const data = window.CRYPTO3D_PUBLIC_EQUITY;
  const tbody = document.querySelector('#protocol-tbody');
  const table = document.querySelector('#protocol-table');
  const loading = document.querySelector('#table-loading');
  let activeFilter = 'all';
  let sortKey = 'market_cap';
  let sortDirection = 'desc';

  const categoryLabels = {
    basis_trading: 'Basis Trading',
    cdp: 'CDP / Stablecoin',
    cex_token: 'Exchange Token',
    dex: 'DEX',
    l2_token: 'Layer 2',
    lending: 'Lending',
    liquid_staking: 'Liquid Staking',
    perp_dex: 'Perpetual DEX',
    perpetual_dex: 'Perpetual DEX',
    perpetuals: 'Perpetual DEX',
    restaking: 'Restaking',
    yield: 'Yield',
  };

  function formatMoney(value) {
    if (value === null || value === undefined) return '未覆盖';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(value);
  }

  function formatMultiple(value) {
    return value === null || value === undefined ? '未覆盖' : `${value.toFixed(value >= 100 ? 1 : 2)}×`;
  }

  function formatPercent(value) {
    return value === null || value === undefined ? '未覆盖' : `${value.toFixed(2)}%`;
  }

  function metric(protocol, key) {
    return {
      market_cap: protocol.market_data.market_cap_usd,
      revenue: protocol.income_statement.revenue_ttm_usd,
      net_income: protocol.income_statement.net_income_ttm_usd,
      price_to_sales: protocol.valuation.price_to_sales,
      price_to_earnings: protocol.valuation.price_to_earnings,
    }[key];
  }

  function matchesFilter(protocol) {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'perpetual') return ['perp_dex', 'perpetual_dex', 'perpetuals'].includes(protocol.category);
    if (activeFilter === 'dex') return protocol.category === 'dex';
    return protocol.category === activeFilter;
  }

  function visibleProtocols() {
    return data.protocols
      .filter(matchesFilter)
      .sort((left, right) => {
        const a = metric(left, sortKey);
        const b = metric(right, sortKey);
        if (a === null || a === undefined) return 1;
        if (b === null || b === undefined) return -1;
        return sortDirection === 'desc' ? b - a : a - b;
      });
  }

  function valueMarkup(value, formatter, note = '') {
    const missing = value === null || value === undefined;
    return `<span class="value ${missing ? 'value-muted' : ''}">${formatter(value)}</span>${note ? `<span class="value-note">${note}</span>` : ''}`;
  }

  function reviewBadge(protocol) {
    const passed = protocol.review.status === 'independent_pass';
    return `<span class="review-badge ${passed ? 'pass' : 'pending'}">${passed ? '已通过' : '待审核'}</span>`;
  }

  function render() {
    const protocols = visibleProtocols();
    tbody.innerHTML = protocols.map((protocol, index) => {
      const income = protocol.income_statement;
      const returns = protocol.capital_returns;
      return `<tr data-id="${protocol.id}" tabindex="0" aria-label="打开 ${protocol.name} 财务详情">
        <td><span class="value value-muted">${index + 1}</span></td>
        <td>
          <div class="protocol-cell">
            <div class="protocol-icon"><span class="value">${protocol.ticker.slice(0, 4)}</span></div>
            <div class="protocol-info"><span class="protocol-name">${protocol.name}</span><span class="protocol-ticker">${protocol.ticker} · ${categoryLabels[protocol.category] || protocol.category}</span></div>
          </div>
        </td>
        <td class="text-right">${valueMarkup(protocol.market_data.market_cap_usd, formatMoney)}</td>
        <td class="text-right">${valueMarkup(income.revenue_ttm_usd, formatMoney, income.revenue_ttm_usd === null ? '来源未覆盖' : 'TTM 快照')}</td>
        <td class="text-right">${valueMarkup(income.net_income_ttm_usd, formatMoney, '缺少完整费用台账')}</td>
        <td class="text-right">${valueMarkup(protocol.valuation.price_to_sales, formatMultiple)}</td>
        <td class="text-right">${valueMarkup(protocol.valuation.price_to_earnings, formatMultiple, '严格口径')}</td>
        <td class="text-right">${valueMarkup(returns.dividends_ttm_usd, formatMoney)}</td>
        <td class="text-right">${valueMarkup(returns.share_repurchases_ttm_usd, formatMoney)}</td>
        <td class="text-right">${valueMarkup(returns.shareholder_yield_pct, formatPercent)}</td>
        <td class="text-right">${reviewBadge(protocol)}</td>
      </tr>`;
    }).join('');
    loading.style.display = 'none';
    table.style.display = 'table';
  }

  function openDetail(target) {
    const row = target.closest('tr[data-id]');
    if (row) window.location.href = `protocol.html?id=${encodeURIComponent(row.dataset.id)}`;
  }

  function initialize() {
    if (!data?.protocols?.length) {
      loading.innerHTML = '财务数据加载失败。';
      return;
    }

    const date = new Intl.DateTimeFormat('zh-CN', { dateStyle: 'medium', timeZone: 'Asia/Shanghai' }).format(new Date(data.observed_at));
    document.querySelector('#snapshot-as-of').textContent = date;
    document.querySelector('#snapshot-protocol-count').textContent = `${data.coverage.protocol_count}/26`;
    document.querySelector('#snapshot-market-count').textContent = `${data.coverage.market_cap_count}/26`;
    document.querySelector('#snapshot-revenue-count').textContent = `${data.coverage.revenue_count}/26`;
    document.querySelector('#snapshot-ps-count').textContent = `${data.coverage.price_to_sales_count}/26`;
    document.querySelector('#snapshot-pe-count').textContent = `${data.coverage.price_to_earnings_count}/26`;
    document.querySelector('#data-update-time').textContent = `数据更新: ${date} · 独立审核通过 ${data.coverage.independent_pass_count}/26`;
    document.querySelector('#footer-updated').textContent = `Crypto3D Research · 数据截至 ${date}`;

    document.querySelectorAll('.filter-btn').forEach((button) => {
      button.addEventListener('click', () => {
        activeFilter = button.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach((item) => item.classList.toggle('active', item === button));
        render();
      });
    });
    document.querySelectorAll('th.sortable').forEach((header) => {
      header.addEventListener('click', () => {
        const nextKey = header.dataset.sort;
        sortDirection = sortKey === nextKey && sortDirection === 'desc' ? 'asc' : 'desc';
        sortKey = nextKey;
        document.querySelectorAll('th.sortable').forEach((item) => item.classList.remove('sorted', 'asc', 'desc'));
        header.classList.add('sorted', sortDirection);
        render();
      });
    });
    tbody.addEventListener('click', (event) => openDetail(event.target));
    tbody.addEventListener('keydown', (event) => {
      if (!['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      openDetail(event.target);
    });
    render();
  }

  initialize();
})();
