(() => {
  'use strict';

  const data = window.CRYPTO3D_PUBLIC_EQUITY;
  const id = new URLSearchParams(window.location.search).get('id');
  const protocol = data?.protocols?.find((item) => item.id === id);
  const root = document.querySelector('#detail-root');

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

  function money(value) {
    if (value === null || value === undefined) return '未覆盖';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(value);
  }

  function multiple(value) {
    return value === null || value === undefined ? '未覆盖' : `${value.toFixed(value >= 100 ? 1 : 2)}×`;
  }

  function percent(value) {
    return value === null || value === undefined ? '未覆盖' : `${value.toFixed(2)}%`;
  }

  function date(value) {
    if (!value) return '未覆盖';
    return new Intl.DateTimeFormat('zh-CN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Shanghai',
    }).format(new Date(value));
  }

  function summaryItem(label, zh, value) {
    const missing = value === '未覆盖';
    return `<div class="tev-summary-item"><div class="tev-summary-label">${label}<br><span class="label-zh">${zh}</span></div><div class="tev-summary-value ${missing ? 'value-zero' : ''}">${value}</div></div>`;
  }

  function row(label, value, formula) {
    const missing = value === '未覆盖';
    return `<tr><td>${label}</td><td class="formula-col">${formula}</td><td class="value-col ${missing ? 'na' : ''}">${value}</td></tr>`;
  }

  function section(title, icon, rows, note) {
    return `<section class="section"><div class="section-title"><span class="icon">${icon}</span><span>${title}</span></div><table class="financial-table"><thead><tr><th>字段</th><th class="formula-col">定义 / 公式</th><th class="text-right">数值</th></tr></thead><tbody>${rows.join('')}</tbody></table>${note ? `<div class="section-note">${note}</div>` : ''}</section>`;
  }

  function render() {
    if (!protocol) {
      root.innerHTML = '<div class="empty-detail">没有找到该协议。<br><a href="./">返回协议排名</a></div>';
      return;
    }

    document.title = `${protocol.name} 财务详情 — Crypto3D`;
    const income = protocol.income_statement;
    const cash = protocol.cash_flow;
    const balance = protocol.balance_sheet;
    const returns = protocol.capital_returns;
    const valuation = protocol.valuation;
    const passed = protocol.review.status === 'independent_pass';
    const primary = valuation.price_to_sales === null ? '未覆盖' : multiple(valuation.price_to_sales);

    root.innerHTML = `
      <div class="breadcrumb"><a href="./">协议财务</a> / <span>${protocol.name}</span></div>
      <div class="protocol-header">
        <div class="protocol-title">
          <div class="protocol-icon-lg">${protocol.ticker.slice(0, 4)}</div>
          <div class="protocol-info">
            <h1>${protocol.name}<span class="metric-status ${passed ? 'pass' : 'pending'}">${passed ? '独立审核通过' : '待审核'}</span></h1>
            <div class="protocol-subtitle">${protocol.ticker} · ${categoryLabels[protocol.category] || protocol.category}</div>
            <div class="protocol-meta"><span>数据截至 ${date(protocol.as_of)}</span><span>置信度 ${protocol.review.confidence.toUpperCase()}</span><span>数值晋级：${protocol.review.numeric_values_promoted ? '已晋级' : '未晋级'}</span></div>
          </div>
        </div>
        <div class="tev-highlight">
          <div class="tev-status">PRIMARY VALUATION</div>
          <div class="tev-value ${primary === '未覆盖' ? 'na' : ''}">${primary}</div>
          <div class="tev-label">Price / Sales · Market Cap ÷ Revenue TTM</div>
        </div>
      </div>

      <section class="section">
        <div class="section-title"><span class="icon">📊</span><span>财务概览</span></div>
        <div class="tev-summary-grid tev-grid-compact">
          ${summaryItem('Market Cap', '总市值', money(protocol.market_data.market_cap_usd))}
          ${summaryItem('Revenue TTM', '营业收入', money(income.revenue_ttm_usd))}
          ${summaryItem('Net Income TTM', '净利润', money(income.net_income_ttm_usd))}
          ${summaryItem('P/S', '市销率', multiple(valuation.price_to_sales))}
          ${summaryItem('P/E', '市盈率', multiple(valuation.price_to_earnings))}
          ${summaryItem('Dividends TTM', '股息', money(returns.dividends_ttm_usd))}
          ${summaryItem('Repurchases TTM', '股票回购', money(returns.share_repurchases_ttm_usd))}
          ${summaryItem('Dividend Yield', '股息率', percent(returns.dividend_yield_pct))}
          ${summaryItem('Buyback Yield', '回购收益率', percent(returns.buyback_yield_pct))}
          ${summaryItem('Shareholder Yield', '股东回报率', percent(returns.shareholder_yield_pct))}
        </div>
      </section>

      ${section('Income Statement / 利润表', '📄', [
        row('Revenue / 营业收入', money(income.revenue_ttm_usd), '协议保留收入，TTM'),
        row('Cost of Revenue / 营业成本', money(income.cost_of_revenue_ttm_usd), '已复核直接成本'),
        row('Gross Profit / 毛利润', money(income.gross_profit_ttm_usd), 'Revenue − Cost of Revenue'),
        row('Operating Expenses / 营业费用', money(income.operating_expenses_ttm_usd), '已复核运营费用'),
        row('Operating Income / 营业利润', money(income.operating_income_ttm_usd), 'Gross Profit − Operating Expenses'),
        row('Net Income / 净利润', money(income.net_income_ttm_usd), 'Revenue − 全部已复核支出'),
      ], protocol.null_reasons.income_statement)}

      ${section('Cash Flow / 现金流量表', '💵', [
        row('Operating Cash Flow / 经营现金流', money(cash.operating_cash_flow_ttm_usd), '经营现金流入 − 流出'),
        row('Capital Expenditures / 资本开支', money(cash.capital_expenditures_ttm_usd), '已复核长期投入'),
        row('Free Cash Flow / 自由现金流', money(cash.free_cash_flow_ttm_usd), 'Operating Cash Flow − CapEx'),
        row('FCF Yield / 自由现金流收益率', percent(valuation.free_cash_flow_yield_pct), 'Free Cash Flow ÷ Market Cap'),
      ], protocol.null_reasons.cash_flow)}

      ${section('Balance Sheet / 资产负债表', '🏦', [
        row('Cash & Equivalents / 现金及等价物', money(balance.cash_and_equivalents_usd), '不含协议自身代币'),
        row('Treasury Assets / 国库资产', money(balance.treasury_assets_usd), '按资产与控制权分类'),
        row('Debt & Liabilities / 债务及负债', money(balance.debt_and_liabilities_usd), '债务、应付款与赎回义务'),
        row('Enterprise Value / 企业价值', money(protocol.market_data.enterprise_value_usd), 'Market Cap + Debt − Cash'),
      ], protocol.null_reasons.balance_sheet)}

      ${section('Capital Returns / 资本回报', '↩️', [
        row('Dividends / 股息', money(returns.dividends_ttm_usd), 'TTM 已执行分配'),
        row('Share Repurchases / 股票回购', money(returns.share_repurchases_ttm_usd), 'TTM 协议出资市场购买'),
        row('Share Retirement / 注销股份', money(returns.share_retirement_ttm_usd), 'TTM 不可逆退出流通'),
        row('Treasury Stock / 库存股', money(returns.treasury_stock_usd), '回购后仍由国库控制'),
        row('Share Issuance / 股份发行', money(returns.share_issuance_ttm_usd), 'TTM 发行、激励与解锁稀释'),
        row('Shareholder Yield / 股东回报率', percent(returns.shareholder_yield_pct), 'Dividend Yield + Buyback Yield'),
      ], protocol.null_reasons.capital_returns)}

      ${section('Valuation / 估值', '🧮', [
        row('Market Capitalization / 总市值', money(protocol.market_data.market_cap_usd), '流通价格 × 流通股本'),
        row('Price / Sales / 市销率', multiple(valuation.price_to_sales), 'Market Cap ÷ Revenue TTM'),
        row('Price / Earnings / 市盈率', multiple(valuation.price_to_earnings), 'Market Cap ÷ Net Income TTM'),
        row('Free Cash Flow Yield / 自由现金流收益率', percent(valuation.free_cash_flow_yield_pct), 'Free Cash Flow ÷ Market Cap'),
      ], protocol.null_reasons.price_to_earnings)}

      <section class="section">
        <div class="section-title"><span class="icon">🔗</span><span>数据来源与审核边界</span></div>
        <div class="source-grid">
          <div class="source-item"><span>数据观察时间</span><strong>${date(protocol.provenance.observed_at)}</strong></div>
          <div class="source-item"><span>审核登记时间</span><strong>${date(protocol.provenance.register_generated_at)}</strong></div>
          <div class="source-item"><span>数据来源</span><strong>Crypto3D 已发布生产快照</strong></div>
          <div class="source-item"><span>源提交</span><strong class="value">${protocol.provenance.source_commit}</strong></div>
        </div>
        <div class="section-note"><strong>未覆盖不等于 0。</strong> ${protocol.provenance.evidence_boundary}</div>
      </section>`;
  }

  render();
})();
