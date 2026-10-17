window.CRYPTO3D_PUBLIC_EQUITY = {
  "schema_version": "5.0.0-defillama-daily",
  "terminology": "public-equity-protocol-economics",
  "generated_at": "2026-10-17T04:38:36.644Z",
  "observed_at": "2026-10-17T04:38:36.644Z",
  "intended_use": "Crypto3D test-site DefiLlama daily comparison; indicative meeting view only",
  "source_snapshot": {
    "provider": "DefiLlama",
    "file": "data/defillama-daily-snapshot.json",
    "generated_at": "2026-10-17T04:38:36.644Z",
    "freshness_policy": {
      "market_price_max_age_hours": 24,
      "financial_window": "DefiLlama total1y",
      "legacy_fallback_allowed": false
    },
    "coverage": {
      "protocol_count": 26,
      "price_count": 26,
      "market_cap_count": 26,
      "fees_1y_count": 24,
      "revenue_1y_count": 23,
      "holders_revenue_1y_count": 22
    }
  },
  "review_snapshot": {
    "model_review_passed_protocols": 13,
    "numeric_values_promoted": false,
    "numeric_review_status": "defillama_round_candidate"
  },
  "source_policy": {
    "mode": "DEFILLAMA_BASE_WITH_OFFICIAL_CAKE_EXCEPTION",
    "provider": "DefiLlama + PancakeSwap official CAKE incentive report",
    "legacy_fallback_allowed": false,
    "rule": "本轮市场与基础财务数据来自 DefiLlama，价格每日刷新；仅 PancakeSwap 按用户确认的协议级例外，使用官方 2026 年 6 月 CAKE 激励报告调整 P/E；缺失值保持待核实，不使用旧快照回填。",
    "limitation": "DefiLlama 是第三方聚合平台；CAKE 激励成本又采用单月运行率年化，因此相关数值均为估算。该规则是会议版测试站的轮次口径，不改写长期链上优先研究原则。"
  },
  "expense_policy": {
    "included": "DefiLlama Revenue 已按平台口径从 Fees 中区分协议留存收入；PancakeSwap 额外扣除官方披露的 Farms 与 Other Product Usage CAKE 外部激励运行率，其他协议不额外反推或虚构未单列的直接支出。",
    "excluded": "项目方、基金会和开发公司的组织运营费用，以及除 PancakeSwap 已确认外部激励特例以外的原生代币发行、激励、解锁和归属。"
  },
  "null_policy": {
    "PENDING": "DefiLlama 未覆盖或不提供该拆分；不等于 0，也不使用旧数据回填。",
    "ZERO": "DefiLlama 的 total1y 数值为 0。",
    "N/M": "分母小于或等于 0，倍数没有经济意义。",
    "ESTIMATED": "DefiLlama 第三方聚合值或由其字段直接计算的结果，以“~”显示。"
  },
  "formulas": {
    "gross_fees": "Fees TTM = DefiLlama dailyFees total1y",
    "protocol_revenue": "Protocol Revenue TTM = DefiLlama dailyRevenue total1y",
    "protocol_earnings": "默认 Protocol Earnings proxy = DefiLlama Revenue total1y；PancakeSwap = Revenue total1y − (356,880 CAKE × 12 × 当前 DefiLlama CAKE 价格)",
    "price_to_sales": "P/S = DefiLlama Circulating Market Cap ÷ DefiLlama Revenue total1y",
    "price_to_earnings": "Cash P/E = DefiLlama Circulating Market Cap ÷ Protocol Earnings proxy",
    "holders_revenue": "Holders Revenue TTM = DefiLlama dailyHoldersRevenue total1y",
    "shareholder_yield": "Shareholder Yield proxy = DefiLlama Holders Revenue total1y ÷ DefiLlama Circulating Market Cap × 100%"
  },
  "coverage": {
    "protocol_count": 26,
    "price_count": 26,
    "market_cap_count": 26,
    "gross_fees_count": 24,
    "revenue_count": 23,
    "price_to_sales_count": 21,
    "net_income_count": 21,
    "price_to_earnings_count": 19,
    "holders_revenue_count": 22,
    "shareholder_yield_count": 22,
    "independent_pass_count": 13,
    "candidate_file_count": 26
  },
  "protocols": [
    {
      "id": "aave",
      "name": "Aave",
      "ticker": "AAVE",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 156.31312486595922,
        "market_cap_usd": 2409589952.254669,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 685258184.26,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 88629641.43,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 88629641.43,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 88629641.43,
        "net_income_ttm_usd": 88629641.43,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 17858554,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0.7411
      },
      "valuation": {
        "price_to_sales": 27.19,
        "price_to_earnings": 27.19,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aaave",
          "as_of": "2026-10-17T04:36:52.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/aave",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/aave?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/aave",
          "https://api.llama.fi/summary/fees/aave?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/aave?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/aave?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "aster",
      "name": "Aster (AsterDEX)",
      "ticker": "ASTER",
      "category": "perpetual_dex",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.70498765560686,
        "market_cap_usd": 1910775499.011651,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 207781646,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": null,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "pending",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 27722046,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.4508
      },
      "valuation": {
        "price_to_sales": null,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aaster-2",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/aster",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 未覆盖，无法按本轮简化口径计算 Protocol Earnings 和 Cash P/E。",
          "display_note": "DefiLlama 未覆盖"
        },
        "price_to_sales": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S 的分母没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        },
        "price_to_earnings": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E 的分母没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/aster?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/aster",
          "https://api.llama.fi/summary/fees/aster?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/aster?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/aster?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "DefiLlama Revenue 未覆盖，无法按本轮简化口径计算 Protocol Earnings 和 Cash P/E。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E 的分母没有可用的 DefiLlama total1y 数值。"
      }
    },
    {
      "id": "bgb",
      "name": "Bitget Token",
      "ticker": "BGB",
      "category": "cex_token",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 1.9048307138207219,
        "market_cap_usd": 1333362451.367367,
        "market_cap_method": "DEFILLAMA_PRICE_X_DEFILLAMA_SUPPLY_SNAPSHOT",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": null,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": null,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "pending",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": null,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": null,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Abitget-token",
          "as_of": "2026-10-17T04:23:03.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aaave,coingecko%3Aaster-2,coingecko%3Abitget-token,coingecko%3Abinancecoin,coingecko%3Acompound-governance-token,coingecko%3Acurve-dao-token,coingecko%3Adydx-chain,coingecko%3Aeigenlayer,coingecko%3Aethena,coingecko%3Aether-fi,coingecko%3Ainstadapp,coingecko%3Agmx,coingecko%3Ahyperliquid,coingecko%3Ajito-governance-token,coingecko%3Ajust,coingecko%3Akamino,coingecko%3Alido-dao,coingecko%3Asyrup,coingecko%3Amantle,coingecko%3Amorpho,coingecko%3Aokb,coingecko%3Apancakeswap-token,coingecko%3Apendle,coingecko%3Asky,coingecko%3Aspark-2,coingecko%3Auniswap",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "low",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama protocol API 未提供 mcap；使用 DefiLlama 当前价格 × DefiLlama token 页流通量快照 699990000 估算。",
          "display_note": "价格×供应量"
        },
        "gross_fees": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Fees 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 未覆盖，无法按本轮简化口径计算 Protocol Earnings 和 Cash P/E。",
          "display_note": "DefiLlama 未覆盖"
        },
        "price_to_sales": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S 的分母没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        },
        "price_to_earnings": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E 的分母没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        },
        "holders_revenue": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield 的分子没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://coins.llama.fi/prices/current/coingecko%3Aaave,coingecko%3Aaster-2,coingecko%3Abitget-token,coingecko%3Abinancecoin,coingecko%3Acompound-governance-token,coingecko%3Acurve-dao-token,coingecko%3Adydx-chain,coingecko%3Aeigenlayer,coingecko%3Aethena,coingecko%3Aether-fi,coingecko%3Ainstadapp,coingecko%3Agmx,coingecko%3Ahyperliquid,coingecko%3Ajito-governance-token,coingecko%3Ajust,coingecko%3Akamino,coingecko%3Alido-dao,coingecko%3Asyrup,coingecko%3Amantle,coingecko%3Amorpho,coingecko%3Aokb,coingecko%3Apancakeswap-token,coingecko%3Apendle,coingecko%3Asky,coingecko%3Aspark-2,coingecko%3Auniswap"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "DefiLlama Revenue 未覆盖，无法按本轮简化口径计算 Protocol Earnings 和 Cash P/E。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
        "price_to_earnings": "Cash P/E 的分母没有可用的 DefiLlama total1y 数值。"
      }
    },
    {
      "id": "bnb",
      "name": "BNB",
      "ticker": "BNB",
      "category": "cex_token",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 721.501963634823,
        "market_cap_usd": 96103919128.57576,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 176477032,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 17647703,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "pending",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 17647703,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0.0184
      },
      "valuation": {
        "price_to_sales": 5445.69,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Abinancecoin",
          "as_of": "2026-10-17T04:36:52.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/binance-smart-chain",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyFees",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "N/A",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。",
          "display_note": "N/A"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "N/A",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。",
          "display_note": "N/A"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/bsc?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/binance-smart-chain",
          "https://api.llama.fi/summary/fees/bsc?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/bsc?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/bsc?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。"
      }
    },
    {
      "id": "compound",
      "name": "Compound",
      "ticker": "COMP",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 22.151249462521466,
        "market_cap_usd": 221234973.84684065,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 28568394,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 2809221,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 2809221,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 2809221,
        "net_income_ttm_usd": 2809221,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 0,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0
      },
      "valuation": {
        "price_to_sales": 78.75,
        "price_to_earnings": 78.75,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Acompound-governance-token",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/compound-finance",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama 为 0"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/compound-finance",
          "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/compound-finance?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "curve",
      "name": "Curve",
      "ticker": "CRV",
      "category": "dex",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.3438003845556916,
        "market_cap_usd": 541116766.0613884,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 59439310.51999998,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 27708732.009999998,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 27708732.009999998,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 27708732.009999998,
        "net_income_ttm_usd": 27708732.009999998,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 27079756,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 5.0044
      },
      "valuation": {
        "price_to_sales": 19.53,
        "price_to_earnings": 19.53,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Acurve-dao-token",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/curve-finance",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/curve-finance",
          "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/curve-finance?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "dydx",
      "name": "dYdX",
      "ticker": "DYDX",
      "category": "perpetuals",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.12321015056034976,
        "market_cap_usd": 104671284.00841428,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 4911640,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 4911640,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 4911640,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 4911640,
        "net_income_ttm_usd": 4911640,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 4911640,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 4.6924
      },
      "valuation": {
        "price_to_sales": 21.31,
        "price_to_earnings": 21.31,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Adydx-chain",
          "as_of": "2026-10-17T04:23:03.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/dydx",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyFees",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/dydx?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/dydx",
          "https://api.llama.fi/summary/fees/dydx?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/dydx?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/dydx?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "eigenlayer",
      "name": "EigenLayer",
      "ticker": "EIGEN",
      "category": "restaking",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.27801146765057166,
        "market_cap_usd": 266027852.5678591,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 24981246.310000006,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 0,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 0,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 0,
        "net_income_ttm_usd": 0,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 0,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0
      },
      "valuation": {
        "price_to_sales": null,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aeigenlayer",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/eigencloud",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "DefiLlama 为 0"
        },
        "price_to_sales": {
          "state": "N/M",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S 的分母小于或等于 0，倍数没有经济意义。",
          "display_note": "分母≤0"
        },
        "price_to_earnings": {
          "state": "N/M",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E 的分母小于或等于 0，倍数没有经济意义。",
          "display_note": "分母≤0"
        },
        "holders_revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama 为 0"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/eigencloud",
          "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/eigenlayer?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E 的分母小于或等于 0，倍数没有经济意义。"
      }
    },
    {
      "id": "ethena",
      "name": "Ethena",
      "ticker": "ENA",
      "category": "basis_trading",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.1990636621549074,
        "market_cap_usd": 2667763680.644115,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 245216773.93999988,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 2000783.3100000008,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 2000783.3100000008,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 2000783.3100000008,
        "net_income_ttm_usd": 2000783.3100000008,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": null,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 1333.36,
        "price_to_earnings": 1333.36,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aethena",
          "as_of": "2026-10-17T04:36:52.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/ethena",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyHoldersRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ethena?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield 的分子没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/ethena",
          "https://api.llama.fi/summary/fees/ethena?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/ethena?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/ethena?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "etherfi",
      "name": "ether.fi",
      "ticker": "ETHFI",
      "category": "liquid_staking",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.688564030535944,
        "market_cap_usd": 665733889.5023675,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 186746932,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 44477509,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 44477509,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 44477509,
        "net_income_ttm_usd": 44477509,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 9312506,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.3988
      },
      "valuation": {
        "price_to_sales": 14.97,
        "price_to_earnings": 14.97,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aether-fi",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/ether.fi",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/ether.fi",
          "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/ether.fi?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "fluid",
      "name": "Fluid",
      "ticker": "FLUID",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 2.3308449325405514,
        "market_cap_usd": 196492761.49323717,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 58537222.84000004,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 9534130.839999996,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 9534130.839999996,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 9534130.839999996,
        "net_income_ttm_usd": 9534130.839999996,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 3094915,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.5751
      },
      "valuation": {
        "price_to_sales": 20.61,
        "price_to_earnings": 20.61,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ainstadapp",
          "as_of": "2026-10-17T04:23:03.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/fluid",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/fluid?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/fluid",
          "https://api.llama.fi/summary/fees/fluid?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/fluid?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/fluid?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "gmx",
      "name": "GMX",
      "ticker": "GMX",
      "category": "perp_dex",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 8.765116651065172,
        "market_cap_usd": 93957067.9972491,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 48712653,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 18171732,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 18171732,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 18171732,
        "net_income_ttm_usd": 18171732,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 10580681,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 11.2612
      },
      "valuation": {
        "price_to_sales": 5.17,
        "price_to_earnings": 5.17,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Agmx",
          "as_of": "2026-10-17T04:23:03.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/gmx",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/gmx?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/gmx",
          "https://api.llama.fi/summary/fees/gmx?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/gmx?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/gmx?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "hype",
      "name": "Hyperliquid",
      "ticker": "HYPE",
      "category": "perpetuals",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 79.73942444392128,
        "market_cap_usd": 17793163517.99655,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 908816462.6899998,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 691415915,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 691415915,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 691415915,
        "net_income_ttm_usd": 691415915,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 691415915,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 3.8859
      },
      "valuation": {
        "price_to_sales": 25.73,
        "price_to_earnings": 25.73,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ahyperliquid",
          "as_of": "2026-10-17T04:36:52.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/hyperliquid",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyFees",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/hyperliquid",
          "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/hyperliquid?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "jito",
      "name": "Jito",
      "ticker": "JTO",
      "category": "liquid_staking",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.4713332236437149,
        "market_cap_usd": 252790538.289865,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 139777875,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 8719259,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 8719259,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 8719259,
        "net_income_ttm_usd": 8719259,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 0,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0
      },
      "valuation": {
        "price_to_sales": 28.99,
        "price_to_earnings": 28.99,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ajito-governance-token",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/jito",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/jito?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama 为 0"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/jito",
          "https://api.llama.fi/summary/fees/jito?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/jito?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/jito?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "justlend",
      "name": "JustLend",
      "ticker": "JST",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.13607524279655375,
        "market_cap_usd": 1092674809.2716475,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 13515738,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 527229,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 527229,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 527229,
        "net_income_ttm_usd": 527229,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 0,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0
      },
      "valuation": {
        "price_to_sales": 2072.49,
        "price_to_earnings": 2072.49,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ajust",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/justlend",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/justlend?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama 为 0"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/justlend",
          "https://api.llama.fi/summary/fees/justlend?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/justlend?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/justlend?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "kamino",
      "name": "Kamino Finance",
      "ticker": "KMNO",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.039548911318424834,
        "market_cap_usd": 228839444.90558648,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 64388295,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 9560235,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 9560235,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 9560235,
        "net_income_ttm_usd": 9560235,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 0,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0
      },
      "valuation": {
        "price_to_sales": 23.94,
        "price_to_earnings": 23.94,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Akamino",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/kamino",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyFees",
          "as_of": "2026-10-15T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "as_of": "2026-10-15T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "as_of": "2026-10-15T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-15T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/kamino?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama 为 0"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/kamino",
          "https://api.llama.fi/summary/fees/kamino?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/kamino?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/kamino?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "lido",
      "name": "Lido",
      "ticker": "LDO",
      "category": "liquid_staking",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.39988536400802627,
        "market_cap_usd": 333107963.9005376,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 600583159,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 35043894,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 35043894,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 35043894,
        "net_income_ttm_usd": 35043894,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 7061751,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 2.12
      },
      "valuation": {
        "price_to_sales": 9.51,
        "price_to_earnings": 9.51,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Alido-dao",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/lido",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyFees",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/lido?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/lido",
          "https://api.llama.fi/summary/fees/lido?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/lido?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/lido?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "mnt",
      "name": "Mantle",
      "ticker": "MNT",
      "category": "l2_token",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.5389747729339296,
        "market_cap_usd": 1781930139.3597147,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 215435,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 215435,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "pending",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": null,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 8271.31,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Amantle",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/mantle-bridge",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyFees",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "N/A",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。",
          "display_note": "N/A"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "N/A",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。",
          "display_note": "N/A"
        },
        "holders_revenue": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyHoldersRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/mantle?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield 的分子没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/mantle-bridge",
          "https://api.llama.fi/summary/fees/mantle?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/mantle?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/mantle?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
        "price_to_earnings": "该项目属于公链或网络型资产，DefiLlama Revenue 是网络收入，不代表代币持有者可索取的公司式净利润，因此不计算 P/E。"
      }
    },
    {
      "id": "maple",
      "name": "Maple Finance",
      "ticker": "SYRUP",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.2085697339840411,
        "market_cap_usd": 243819371.954491,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 110096072.05,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 14201134.01,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 14201134.01,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 14201134.01,
        "net_income_ttm_usd": 14201134.01,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 2903051,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.1907
      },
      "valuation": {
        "price_to_sales": 17.17,
        "price_to_earnings": 17.17,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Asyrup",
          "as_of": "2026-10-17T04:23:03.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/maple-finance",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyFees",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-16T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/maple?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/maple-finance",
          "https://api.llama.fi/summary/fees/maple?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/maple?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/maple?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "morpho",
      "name": "Morpho",
      "ticker": "MORPHO",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 2.3930138129232534,
        "market_cap_usd": 1675739509.2107272,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 204676063.58,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 0,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 0,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 0,
        "net_income_ttm_usd": 0,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 0,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0
      },
      "valuation": {
        "price_to_sales": null,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Amorpho",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/morpho",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "DefiLlama 为 0"
        },
        "price_to_sales": {
          "state": "N/M",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S 的分母小于或等于 0，倍数没有经济意义。",
          "display_note": "分母≤0"
        },
        "price_to_earnings": {
          "state": "N/M",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E 的分母小于或等于 0，倍数没有经济意义。",
          "display_note": "分母≤0"
        },
        "holders_revenue": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama 为 0"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ZERO",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/morpho?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama 为 0"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/morpho",
          "https://api.llama.fi/summary/fees/morpho?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/morpho?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/morpho?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E 的分母小于或等于 0，倍数没有经济意义。"
      }
    },
    {
      "id": "okb",
      "name": "OKB",
      "ticker": "OKB",
      "category": "cex_token",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 117.59981005153332,
        "market_cap_usd": 2473039164.2099113,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": null,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": null,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "pending",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": null,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": null,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aokb",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/okx",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Fees 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 未覆盖，无法按本轮简化口径计算 Protocol Earnings 和 Cash P/E。",
          "display_note": "DefiLlama 未覆盖"
        },
        "price_to_sales": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S 的分母没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        },
        "price_to_earnings": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E 的分母没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        },
        "holders_revenue": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield 的分子没有可用的 DefiLlama total1y 数值。",
          "display_note": "DefiLlama 未覆盖"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/okx"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "DefiLlama Revenue 未覆盖，无法按本轮简化口径计算 Protocol Earnings 和 Cash P/E。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "DefiLlama 未提供 Holders Revenue 的 total1y；本轮禁止使用旧数据或其他来源回填。",
        "price_to_earnings": "Cash P/E 的分母没有可用的 DefiLlama total1y 数值。"
      }
    },
    {
      "id": "pancakeswap",
      "name": "PancakeSwap",
      "ticker": "CAKE",
      "category": "dex",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 2.186039972840942,
        "market_cap_usd": 695454767.5822089,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y less June 2026 CAKE incentive run-rate",
        "gross_fees_ttm_usd": 200804070.5199999,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 67562588.25999995,
        "direct_economic_costs_ttm_usd": 9361847.346089706,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": 9361847.346089706,
        "gross_profit_ttm_usd": 58200740.91391024,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 58200740.91391024,
        "net_income_ttm_usd": 58200740.91391024,
        "coverage": "pancakeswap_incentive_adjusted_run_rate",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "pancakeswap_external_incentives_included"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 43895164.84999999,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 6.3117
      },
      "valuation": {
        "price_to_sales": 10.29,
        "price_to_earnings": 11.95,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Apancakeswap-token",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/pancakeswap",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "ESTIMATED",
          "window": "June 2026 run-rate annualized",
          "source": "PancakeSwap June 2026 CAKE Burn Report + DefiLlama CAKE price",
          "source_url": "https://blog.pancakeswap.finance/articles/cake-burn-june-2026",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "MIXED_OFFICIAL_AND_THIRD_PARTY",
          "reason": "PancakeSwap 协议级例外：扣除 2026 年 6 月实际用于 Farms 的 236,919 CAKE 和 Other Product Usage 的 119,961 CAKE，合计 356,880 CAKE/月，按 12 个月年化并使用当前 DefiLlama CAKE 价格计价。不扣 Ecosystem Growth 的 295,684 CAKE，也不重复计算技术性铸造或销毁。该成本是单月运行率年化估算，不是逐日重建的 TTM。",
          "display_note": "CAKE 激励年化"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y less June 2026 CAKE incentive run-rate",
          "source": "DefiLlama Revenue less official CAKE external incentives",
          "source_url": "https://blog.pancakeswap.finance/articles/cake-burn-june-2026",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "MIXED_OFFICIAL_AND_THIRD_PARTY",
          "reason": "PancakeSwap Protocol Earnings = DefiLlama Revenue total1y − CAKE 外部激励年化代理 9361847.346089706 美元。该代理只含 Farms 与 Other Product Usage，不含 Ecosystem Growth、技术性铸造或销毁。",
          "display_note": "CAKE 激励调整"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y less June 2026 CAKE incentive run-rate",
          "source": "DefiLlama Market Cap + DefiLlama Revenue less official CAKE external incentives",
          "source_url": "https://blog.pancakeswap.finance/articles/cake-burn-june-2026",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "MIXED_OFFICIAL_AND_THIRD_PARTY",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue less official CAKE external incentives。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/pancakeswap",
          "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyHoldersRevenue",
          "https://blog.pancakeswap.finance/articles/cake-burn-june-2026"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "PancakeSwap Protocol Earnings = DefiLlama Revenue total1y − CAKE 外部激励年化代理 9361847.346089706 美元。该代理只含 Farms 与 Other Product Usage，不含 Ecosystem Growth、技术性铸造或销毁。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue less official CAKE external incentives。"
      }
    },
    {
      "id": "pendle",
      "name": "Pendle",
      "ticker": "PENDLE",
      "category": "yield",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 2.1298252543524367,
        "market_cap_usd": 369126321.90638703,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 15079004,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 14778389,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 14778389,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 14778389,
        "net_income_ttm_usd": 14778389,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 11312759,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 3.0647
      },
      "valuation": {
        "price_to_sales": 24.98,
        "price_to_earnings": 24.98,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Apendle",
          "as_of": "2026-10-17T04:26:58.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/pendle",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pendle?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/pendle",
          "https://api.llama.fi/summary/fees/pendle?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/pendle?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/pendle?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "sky",
      "name": "Sky (MakerDAO)",
      "ticker": "SKY",
      "category": "cdp",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.07083754410434459,
        "market_cap_usd": 1662754843.6761734,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 392048733,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 198973527,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 198973527,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 198973527,
        "net_income_ttm_usd": 198973527,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 58653024,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 3.5275
      },
      "valuation": {
        "price_to_sales": 8.36,
        "price_to_earnings": 8.36,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Asky",
          "as_of": "2026-10-17T04:23:03.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/sky",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/sky?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "independent_pass",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/sky",
          "https://api.llama.fi/summary/fees/sky?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/sky?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/sky?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "spark",
      "name": "Spark",
      "ticker": "SPK",
      "category": "lending",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 0.020177311056309512,
        "market_cap_usd": 68204603.8193475,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 189053282,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 9737475,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 9737475,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 9737475,
        "net_income_ttm_usd": 9737475,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 3917239,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 5.7434
      },
      "valuation": {
        "price_to_sales": 7,
        "price_to_earnings": 7,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aspark-2",
          "as_of": "2026-10-17T04:23:03.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/spark",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/spark?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/spark",
          "https://api.llama.fi/summary/fees/spark?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/spark?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/spark?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    },
    {
      "id": "uniswap",
      "name": "Uniswap",
      "ticker": "UNI",
      "category": "dex",
      "as_of": "2026-10-17T04:38:36.644Z",
      "market_data": {
        "price_usd": 7.318260816513645,
        "market_cap_usd": 4578385734.81278,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 946994961.6199998,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 57513463,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 57513463,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 57513463,
        "net_income_ttm_usd": 57513463,
        "coverage": "defillama_revenue_proxy",
        "organization_opex_policy": "excluded",
        "native_token_expense_policy": "excluded"
      },
      "cash_flow": {
        "period": "TTM",
        "operating_cash_flow_ttm_usd": null,
        "capital_expenditures_ttm_usd": null,
        "free_cash_flow_ttm_usd": null
      },
      "balance_sheet": {
        "cash_and_equivalents_usd": null,
        "treasury_assets_usd": null,
        "debt_and_liabilities_usd": null
      },
      "capital_returns": {
        "period": "DefiLlama total1y",
        "holders_revenue_ttm_usd": 57513463,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.2562
      },
      "valuation": {
        "price_to_sales": 79.61,
        "price_to_earnings": 79.61,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Auniswap",
          "as_of": "2026-10-17T04:36:52.000Z",
          "confidence": "high",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "价格来自 DefiLlama Coins API 当前价格，并在每日更新任务中刷新。",
          "display_note": "每日更新"
        },
        "market_cap": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama protocol mcap",
          "source_url": "https://api.llama.fi/protocol/uniswap",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "流通市值直接采用 DefiLlama protocol API 的当前 mcap。",
          "display_note": "DefiLlama"
        },
        "gross_fees": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Fees",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyFees",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Fees 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "supply_side_payouts": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮采用 DefiLlama Revenue 作为留存收入，不反推 Fees 与 Revenue 之间的全部供应方分成。",
          "display_note": "DefiLlama 未覆盖"
        },
        "revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama Revenue 已反映平台定义的协议留存收入，但不提供可跨协议统一复核的直接经济成本明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "realized_protocol_losses": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "as_of": null,
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "DefiLlama 未提供可跨协议统一复核的已实现协议损失明细；本轮不额外猜测。",
          "display_note": "DefiLlama 未覆盖"
        },
        "protocol_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "dividends": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "repurchases": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "fee_burns": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为费用销毁，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "dividend_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为分红，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "buyback_yield": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": null,
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮只采用 DefiLlama；Holders Revenue 不足以可靠拆分为回购，因此不把聚合值冒充明细。",
          "display_note": "DefiLlama 未覆盖"
        },
        "shareholder_yield": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/uniswap?dataType=dailyHoldersRevenue",
          "as_of": "2026-10-17T04:38:36.644Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Shareholder Yield = DefiLlama Holders Revenue total1y ÷ DefiLlama 流通市值 × 100%。",
          "display_note": "DefiLlama"
        }
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "numeric_review_status": "defillama_round_candidate",
        "data_state": "defillama_daily_candidate"
      },
      "provenance": {
        "repository": "DefiLlama",
        "ref": "daily API snapshot",
        "source_commit": null,
        "observed_at": "2026-10-17T04:38:36.644Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/uniswap",
          "https://api.llama.fi/summary/fees/uniswap?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/uniswap?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/uniswap?dataType=dailyHoldersRevenue"
        ],
        "evidence_boundary": "本轮按用户决策统一使用 DefiLlama。所有数值标记为第三方聚合估算；不以旧数据、链上重建或其他平台补缺。Holders Revenue 只作为聚合持币者收入，不冒充分红或回购明细。"
      },
      "null_reasons": {
        "income_statement": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
        "cash_flow": "经营现金流、资本开支与自由现金流不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "balance_sheet": "资产负债表不属于本轮 DefiLlama 单一来源快照的覆盖范围。",
        "capital_returns": "Holders Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
        "price_to_earnings": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。"
      }
    }
  ]
};
