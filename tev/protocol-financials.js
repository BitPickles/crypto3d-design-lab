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

  function stateMeta(key, value) {
    return protocol?.metric_meta?.[key] || {
      state: value === null || value === undefined ? 'PENDING' : 'VERIFIED',
    };
  }

  function stateValue(key, value, formatter) {
    const meta = stateMeta(key, value);
    if (meta.state === 'N/A') return 'N/A';
    if (meta.state === 'N/M') return 'N/M';
    if (meta.state === 'PENDING' || value === null || value === undefined) return '待核实';
    const formatted = formatter(value);
    return meta.state === 'ESTIMATED' ? `~${formatted}` : formatted;
  }

  function money(value, key = '') {
    return stateValue(key, value, (number) => new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(number));
  }

  function multiple(value, key = '') {
    return stateValue(key, value, (number) => `${number.toFixed(number >= 100 ? 1 : 2)}×`);
  }

  function percent(value, key = '') {
    return stateValue(key, value, (number) => `${number.toFixed(2)}%`);
  }

  function legacyMoney(value) {
    if (value === null || value === undefined) return '待核实';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(value);
  }

  function compactNumber(value, digits = 2) {
    if (!Number.isFinite(value)) return '待核实';
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: digits,
    }).format(value);
  }

  function date(value) {
    if (!value) return '待核实';
    return new Intl.DateTimeFormat('zh-CN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Shanghai',
    }).format(new Date(value));
  }

  function summaryItem(label, zh, value) {
    const missing = ['待核实', 'N/A', 'N/M'].includes(value);
    return `<div class="tev-summary-item"><div class="tev-summary-label">${label}<br><span class="label-zh">${zh}</span></div><div class="tev-summary-value ${missing ? 'value-zero' : ''}">${value}</div></div>`;
  }

  function row(label, value, formula) {
    const missing = ['待核实', 'N/A', 'N/M'].includes(value);
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
    const hasCashPE = Number.isFinite(valuation.price_to_earnings);
    const hasPS = Number.isFinite(valuation.price_to_sales);
    const primary = hasCashPE
      ? multiple(valuation.price_to_earnings, 'price_to_earnings')
      : hasPS
        ? multiple(valuation.price_to_sales, 'price_to_sales')
        : '待核实';
    const primaryLabel = hasCashPE
      ? 'Cash P/E · Market Cap ÷ Protocol Earnings TTM'
      : hasPS
        ? 'Price / Sales · Market Cap ÷ Protocol Revenue TTM'
        : 'VALUATION · DefiLlama Revenue 暂无可用值';
    const chain = protocol.chain_diagnostics;

    root.innerHTML = `
      <div class="breadcrumb"><a href="./">协议财务</a> / <span>${protocol.name}</span></div>
      <div class="protocol-header">
        <div class="protocol-title">
          <div class="protocol-icon-lg">${protocol.ticker.slice(0, 4)}</div>
          <div class="protocol-info">
            <h1>${protocol.name}<span class="metric-status ${passed ? 'pass' : 'pending'}">${passed ? '框架已复核' : '候选待复核'}</span></h1>
            <div class="protocol-subtitle">${protocol.ticker} · ${categoryLabels[protocol.category] || protocol.category}</div>
            <div class="protocol-meta"><span>数据截至 ${date(protocol.as_of)}</span><span>来源：DefiLlama</span><span>数值状态：第三方聚合估算</span></div>
          </div>
        </div>
        <div class="tev-highlight">
          <div class="tev-status">PRIMARY VALUATION</div>
          <div class="tev-value ${['待核实', 'N/A', 'N/M'].includes(primary) ? 'na' : ''}">${primary}</div>
          <div class="tev-label">${primaryLabel}</div>
        </div>
      </div>

      <section class="section">
        <div class="section-title"><span class="icon">📊</span><span>财务概览</span></div>
        <div class="tev-summary-grid tev-grid-compact">
          ${summaryItem('Market Cap', '总市值', money(protocol.market_data.market_cap_usd, 'market_cap'))}
          ${summaryItem('Revenue TTM', '协议留存收入', money(income.revenue_ttm_usd, 'revenue'))}
          ${summaryItem('Protocol Earnings TTM', '协议经济收益', money(income.net_income_ttm_usd, 'protocol_earnings'))}
          ${summaryItem('P/S', '市销率', multiple(valuation.price_to_sales, 'price_to_sales'))}
          ${summaryItem('Cash P/E', '协议口径市盈率', multiple(valuation.price_to_earnings, 'price_to_earnings'))}
          ${summaryItem('Fees TTM', '用户总费用', money(income.gross_fees_ttm_usd, 'gross_fees'))}
          ${summaryItem('Holders Revenue TTM', '持币者收入', money(returns.holders_revenue_ttm_usd, 'holders_revenue'))}
          ${summaryItem('Shareholder Yield', '持币者回报率', percent(returns.shareholder_yield_pct, 'shareholder_yield'))}
        </div>
      </section>

      ${section('Protocol Earnings / 协议经济收益', '📄', [
        row('Gross Fees / 用户总费用', money(income.gross_fees_ttm_usd, 'gross_fees'), '用户支付的 TTM 总费用'),
        row('Supply-side Payouts / 供应方分成', money(income.supply_side_payouts_ttm_usd, 'supply_side_payouts'), '存款人、LP、验证者、运营商及返佣分成'),
        row('Protocol Revenue / 协议留存收入', money(income.revenue_ttm_usd, 'revenue'), 'DefiLlama dailyRevenue total1y'),
        row('Direct Economic Costs / 直接经济成本', money(income.direct_economic_costs_ttm_usd, 'direct_economic_costs'), '必要网络、结算及收入直接成本'),
        row('Realized Protocol Losses / 已实现协议损失', money(income.realized_protocol_losses_ttm_usd, 'realized_protocol_losses'), '坏账、赔付及已实现风险损失'),
        row('Protocol Earnings / 协议经济收益', money(income.net_income_ttm_usd, 'protocol_earnings'), '本轮代理值 = DefiLlama Revenue total1y'),
      ], '本轮不虚构 DefiLlama 没有提供的直接成本明细；Protocol Earnings 以 Revenue 为代理。不统计项目方、基金会或开发公司的组织运营费用，原生代币激励、解锁和归属不进入 Cash P/E。')}

      ${section('Cash Flow / 现金流量表', '💵', [
        row('Operating Cash Flow / 经营现金流', legacyMoney(cash.operating_cash_flow_ttm_usd), '经营现金流入 − 流出'),
        row('Capital Expenditures / 资本开支', legacyMoney(cash.capital_expenditures_ttm_usd), '已复核长期投入'),
        row('Free Cash Flow / 自由现金流', legacyMoney(cash.free_cash_flow_ttm_usd), 'Operating Cash Flow − CapEx'),
        row('FCF Yield / 自由现金流收益率', percent(valuation.free_cash_flow_yield_pct), 'Free Cash Flow ÷ Market Cap'),
      ], protocol.null_reasons.cash_flow)}

      ${section('Balance Sheet / 资产负债表', '🏦', [
        row('Cash & Equivalents / 现金及等价物', legacyMoney(balance.cash_and_equivalents_usd), '不含协议自身代币'),
        row('Treasury Assets / 国库资产', legacyMoney(balance.treasury_assets_usd), '按资产与控制权分类'),
        row('Debt & Liabilities / 债务及负债', legacyMoney(balance.debt_and_liabilities_usd), '债务、应付款与赎回义务'),
        row('Enterprise Value / 企业价值', legacyMoney(protocol.market_data.enterprise_value_usd), 'Market Cap + Debt − Cash'),
      ], protocol.null_reasons.balance_sheet)}

      ${section('Capital Returns / 资本回报', '↩️', [
        row('Holders Revenue / 持币者收入', money(returns.holders_revenue_ttm_usd, 'holders_revenue'), 'DefiLlama dailyHoldersRevenue total1y'),
        row('Dividends / 股息', money(returns.dividends_ttm_usd, 'dividends'), 'TTM 已执行外部资产分配'),
        row('Share Repurchases / 代币回购', money(returns.share_repurchases_ttm_usd, 'repurchases'), 'TTM 协议出资市场购买'),
        row('Qualifying Fee Burns / 合格费用销毁', money(returns.qualifying_fee_burns_ttm_usd, 'fee_burns'), '费用支持且不可逆退出供应'),
        row('Share Retirement / 注销价值', legacyMoney(returns.share_retirement_ttm_usd), 'TTM 不可逆退出流通'),
        row('Treasury Stock / 国库回购库存', legacyMoney(returns.treasury_stock_usd), '回购后仍由国库控制'),
        row('Supply Growth / 供应增长', legacyMoney(returns.share_issuance_ttm_usd), '仅作供应风险披露，不进入 Cash P/E'),
        row('Shareholder Yield / 持币者回报率', percent(returns.shareholder_yield_pct, 'shareholder_yield'), 'Holders Revenue total1y ÷ DefiLlama 流通市值'),
      ], 'Holders Revenue 是 DefiLlama 聚合口径，不能可靠拆分时，不把它冒充为分红、回购或费用销毁明细。')}

      ${section('Valuation / 估值', '🧮', [
        row('Market Capitalization / 总市值', money(protocol.market_data.market_cap_usd, 'market_cap'), 'DefiLlama 当前流通市值'),
        row('Price / Sales / 市销率', multiple(valuation.price_to_sales, 'price_to_sales'), 'Market Cap ÷ Protocol Revenue TTM'),
        row('Cash Price / Earnings / 协议口径市盈率', multiple(valuation.price_to_earnings, 'price_to_earnings'), 'Market Cap ÷ Protocol Earnings TTM'),
        row('Free Cash Flow Yield / 自由现金流收益率', percent(valuation.free_cash_flow_yield_pct), 'Free Cash Flow ÷ Market Cap'),
      ], 'Cash P/E 为协议经济口径，不包含项目方、基金会或开发公司的完整组织运营费用。')}

      <section class="section">
        <div class="section-title"><span class="icon">🔗</span><span>数据来源与审核边界</span></div>
        <div class="source-grid">
          <div class="source-item"><span>数据观察时间</span><strong>${date(protocol.provenance.observed_at)}</strong></div>
          <div class="source-item"><span>市场数据方法</span><strong>${protocol.market_data.market_cap_method}</strong></div>
          <div class="source-item"><span>本轮数据来源</span><strong>DefiLlama 单一来源</strong></div>
          <div class="source-item"><span>更新频率</span><strong>每日自动刷新</strong></div>
          ${chain ? `
          <div class="source-item"><span>Assistance Fund 地址</span><strong class="value">${chain.assistance_fund.address}</strong></div>
          <div class="source-item"><span>AF 链上 HYPE 余额</span><strong>${compactNumber(chain.assistance_fund.hype_balance, 4)} HYPE</strong></div>
          <div class="source-item"><span>AF 累计持仓成本诊断</span><strong>${legacyMoney(chain.assistance_fund.entry_ntl_usd)}</strong></div>
          <div class="source-item"><span>官方成交覆盖</span><strong>${chain.fills_window.observed_start.slice(0, 10)} 至 ${chain.fills_window.observed_end.slice(0, 10)}</strong></div>
          <div class="source-item"><span>部分窗口链上买入</span><strong>${legacyMoney(chain.fills_window.purchase_consideration_usd)}</strong></div>
          <div class="source-item"><span>完整 TTM</span><strong>${chain.fills_window.complete_for_ttm ? '已闭合' : '未闭合'}</strong></div>` : ''}
        </div>
        <div class="section-note"><strong>待核实不等于 0，“~”代表 DefiLlama 第三方聚合估算。</strong> ${protocol.provenance.evidence_boundary}</div>
      </section>`;
  }

  render();
})();
