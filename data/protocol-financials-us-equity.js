window.CRYPTO3D_PUBLIC_EQUITY = {
  "schema_version": "5.0.0-defillama-daily",
  "terminology": "public-equity-protocol-economics",
  "generated_at": "2026-07-24T21:01:56.353Z",
  "observed_at": "2026-07-24T21:01:56.353Z",
  "intended_use": "Crypto3D test-site DefiLlama daily comparison; indicative meeting view only",
  "source_snapshot": {
    "provider": "DefiLlama",
    "file": "data/defillama-daily-snapshot.json",
    "generated_at": "2026-07-24T21:01:56.353Z",
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
    "mode": "DEFILLAMA_ONLY_ROUND",
    "provider": "DefiLlama",
    "legacy_fallback_allowed": false,
    "rule": "本轮所有市场与财务数据统一来自 DefiLlama；价格每日刷新；缺失值保持待核实，不使用旧快照或其他来源回填。",
    "limitation": "DefiLlama 是第三方聚合平台，因此所有非零数值均显示为估算。该规则是会议版测试站的轮次口径，不改写长期链上优先研究原则。"
  },
  "expense_policy": {
    "included": "DefiLlama Revenue 已按平台口径从 Fees 中区分协议留存收入；本轮不额外反推或虚构未单列的直接支出。",
    "excluded": "项目方、基金会和开发公司的组织运营费用，以及原生代币发行、激励、解锁和归属。"
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
    "protocol_earnings": "Protocol Earnings proxy = DefiLlama Revenue total1y；不扣项目方组织运营费和原生代币发行",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 93.63175115172012,
        "market_cap_usd": 1445841512.7744315,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 897407496,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 117945203,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 117945203,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 117945203,
        "net_income_ttm_usd": 117945203,
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
        "holders_revenue_ttm_usd": 28852894,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.9956
      },
      "valuation": {
        "price_to_sales": 12.26,
        "price_to_earnings": 12.26,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aaave",
          "as_of": "2026-07-24T21:00:13.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.6321395989852567,
        "market_cap_usd": 1698305773.4874682,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 437277128,
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
        "holders_revenue_ttm_usd": 11949854,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0.7036
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
          "as_of": "2026-07-24T21:00:14.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 1.6515650440747516,
        "market_cap_usd": 1156079015.2018855,
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
          "as_of": "2026-07-24T20:59:05.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 564.4395522948773,
        "market_cap_usd": 75188944607.63802,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 212621246,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 21262125,
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
        "holders_revenue_ttm_usd": 21262125,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 0.0283
      },
      "valuation": {
        "price_to_sales": 3536.29,
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
          "as_of": "2026-07-24T21:00:05.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 17.204973165393756,
        "market_cap_usd": 166017654.4951397,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 35660647,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 2376676,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 2376676,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 2376676,
        "net_income_ttm_usd": 2376676,
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
        "price_to_sales": 69.85,
        "price_to_earnings": 69.85,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Acompound-governance-token",
          "as_of": "2026-07-24T20:59:05.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.20262939380553568,
        "market_cap_usd": 312519406.33770525,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 66816734,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 37684067,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 37684067,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 37684067,
        "net_income_ttm_usd": 37684067,
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
        "holders_revenue_ttm_usd": 36936622,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 11.819
      },
      "valuation": {
        "price_to_sales": 8.29,
        "price_to_earnings": 8.29,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Acurve-dao-token",
          "as_of": "2026-07-24T20:59:49.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.1251045523512859,
        "market_cap_usd": 106137856.6303428,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 8692888,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 8692888,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 8692888,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 8692888,
        "net_income_ttm_usd": 8692888,
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
        "holders_revenue_ttm_usd": 8692888,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 8.1902
      },
      "valuation": {
        "price_to_sales": 12.21,
        "price_to_earnings": 12.21,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Adydx-chain",
          "as_of": "2026-07-24T20:58:48.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.2063612486124712,
        "market_cap_usd": 154168787.59582353,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 43506296,
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
          "as_of": "2026-07-24T21:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.08728148317219708,
        "market_cap_usd": 832439801.5953526,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 360271886,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 10840350,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 10840350,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 10840350,
        "net_income_ttm_usd": 10840350,
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
        "price_to_sales": 76.79,
        "price_to_earnings": 76.79,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aethena",
          "as_of": "2026-07-24T20:59:54.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.4352134513538151,
        "market_cap_usd": 425963692.81271976,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 229062947,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 52762983,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 52762983,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 52762983,
        "net_income_ttm_usd": 52762983,
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
        "holders_revenue_ttm_usd": 13361952,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 3.1369
      },
      "valuation": {
        "price_to_sales": 8.07,
        "price_to_earnings": 8.07,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aether-fi",
          "as_of": "2026-07-24T20:59:54.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 1.1409425473146482,
        "market_cap_usd": 90074575.97876666,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 72910141,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 12387623,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 12387623,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 12387623,
        "net_income_ttm_usd": 12387623,
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
        "holders_revenue_ttm_usd": 4745308,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 5.2682
      },
      "valuation": {
        "price_to_sales": 7.27,
        "price_to_earnings": 7.27,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ainstadapp",
          "as_of": "2026-07-24T20:59:07.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 6.928202577394036,
        "market_cap_usd": 71842441.17024082,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 35814738,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 13247188,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 13247188,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 13247188,
        "net_income_ttm_usd": 13247188,
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
        "holders_revenue_ttm_usd": 9671775,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 13.4625
      },
      "valuation": {
        "price_to_sales": 5.42,
        "price_to_earnings": 5.42,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Agmx",
          "as_of": "2026-07-24T20:59:07.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 58.02452563136377,
        "market_cap_usd": 12932184709.926668,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 1041325772,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 792146570,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 792146570,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 792146570,
        "net_income_ttm_usd": 792146570,
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
        "holders_revenue_ttm_usd": 792146570,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 6.1254
      },
      "valuation": {
        "price_to_sales": 16.33,
        "price_to_earnings": 16.33,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ahyperliquid",
          "as_of": "2026-07-24T20:59:56.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.5911812141360363,
        "market_cap_usd": 295764002.98508483,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 238068621,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 14727139,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 14727139,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 14727139,
        "net_income_ttm_usd": 14727139,
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
        "price_to_sales": 20.08,
        "price_to_earnings": 20.08,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ajito-governance-token",
          "as_of": "2026-07-24T20:59:53.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.1024648945607557,
        "market_cap_usd": 841355824.8162565,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 10682856,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 514225,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 514225,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 514225,
        "net_income_ttm_usd": 514225,
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
        "price_to_sales": 1636.16,
        "price_to_earnings": 1636.16,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Ajust",
          "as_of": "2026-07-24T21:00:06.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.01776249313449515,
        "market_cap_usd": 90298827.15714529,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 81737324,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 12445934,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 12445934,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 12445934,
        "net_income_ttm_usd": 12445934,
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
        "price_to_sales": 7.26,
        "price_to_earnings": 7.26,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Akamino",
          "as_of": "2026-07-24T20:58:57.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.37737523958693214,
        "market_cap_usd": 318950917.81089723,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 726262080,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 39449664,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 39449664,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 39449664,
        "net_income_ttm_usd": 39449664,
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
        "holders_revenue_ttm_usd": 4030385,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.2636
      },
      "valuation": {
        "price_to_sales": 8.09,
        "price_to_earnings": 8.09,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Alido-dao",
          "as_of": "2026-07-24T20:59:49.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.40935388950772184,
        "market_cap_usd": 1353381306.8419785,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 433493,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 433493,
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
        "price_to_sales": 3122.04,
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
          "as_of": "2026-07-24T20:59:53.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.17095291370833138,
        "market_cap_usd": 198796407.31580427,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 108078397,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 13350941,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 13350941,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 13350941,
        "net_income_ttm_usd": 13350941,
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
        "holders_revenue_ttm_usd": 2561369,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.2884
      },
      "valuation": {
        "price_to_sales": 14.89,
        "price_to_earnings": 14.89,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Asyrup",
          "as_of": "2026-07-24T20:58:53.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 1.943113829326322,
        "market_cap_usd": 1273096435.266596,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 222548257,
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
          "as_of": "2026-07-24T20:59:52.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 81.9179270717739,
        "market_cap_usd": 1722573798.524344,
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
          "as_of": "2026-07-24T20:58:50.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 1.389593025952107,
        "market_cap_usd": 448978204.032749,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 275081650,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 92408684,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 92408684,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 92408684,
        "net_income_ttm_usd": 92408684,
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
        "holders_revenue_ttm_usd": 59620036,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 13.279
      },
      "valuation": {
        "price_to_sales": 4.86,
        "price_to_earnings": 4.86,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Apancakeswap-token",
          "as_of": "2026-07-24T20:59:49.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Revenue 直接采用 DefiLlama summary API 的 total1y 字段；属于第三方聚合口径。",
          "display_note": "DefiLlama"
        },
        "direct_economic_costs": {
          "state": "PENDING",
          "window": "TTM",
          "source": "DefiLlama",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
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
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
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
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "as_of": "2026-07-24T00:00:00.000Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "本轮 Protocol Earnings 代理值采用 DefiLlama Revenue；不再另扣项目方组织运营费和原生代币发行。DefiLlama 未单列的协议直接成本不作虚构扣除。",
          "display_note": "Revenue 代理"
        },
        "price_to_sales": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "as_of": "2026-07-24T21:01:56.353Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "P/S = DefiLlama 流通市值 ÷ DefiLlama Revenue。",
          "display_note": "DefiLlama"
        },
        "price_to_earnings": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Market Cap + DefiLlama Revenue proxy",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "as_of": "2026-07-24T21:01:56.353Z",
          "confidence": "medium",
          "source_tier": "THIRD_PARTY_FALLBACK",
          "reason": "Cash P/E = DefiLlama 流通市值 ÷ DefiLlama Revenue proxy。",
          "display_note": "DefiLlama"
        },
        "holders_revenue": {
          "state": "ESTIMATED",
          "window": "DefiLlama total1y",
          "source": "DefiLlama Holders Revenue",
          "source_url": "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyHoldersRevenue",
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
        "register_generated_at": null,
        "candidate_file": "data/defillama-daily-snapshot.json",
        "metric_sources": [
          "https://api.llama.fi/protocol/pancakeswap",
          "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyFees",
          "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyRevenue",
          "https://api.llama.fi/summary/fees/pancakeswap?dataType=dailyHoldersRevenue"
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
      "id": "pendle",
      "name": "Pendle",
      "ticker": "PENDLE",
      "category": "yield",
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 1.503927860315105,
        "market_cap_usd": 258502367.81322223,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 24256981,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 23528030,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 23528030,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 23528030,
        "net_income_ttm_usd": 23528030,
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
        "holders_revenue_ttm_usd": 19859436,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 7.6825
      },
      "valuation": {
        "price_to_sales": 10.99,
        "price_to_earnings": 10.99,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Apendle",
          "as_of": "2026-07-24T20:59:50.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.05699284497855699,
        "market_cap_usd": 1337282590.830041,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 412771065,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 238224433,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 238224433,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 238224433,
        "net_income_ttm_usd": 238224433,
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
        "holders_revenue_ttm_usd": 81228262,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 6.0741
      },
      "valuation": {
        "price_to_sales": 5.61,
        "price_to_earnings": 5.61,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Asky",
          "as_of": "2026-07-24T20:59:55.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-23T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 0.01707735610538519,
        "market_cap_usd": 50925744.80914279,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 206252137,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 24030261,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 24030261,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 24030261,
        "net_income_ttm_usd": 24030261,
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
        "holders_revenue_ttm_usd": 1971922,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 3.8722
      },
      "valuation": {
        "price_to_sales": 2.12,
        "price_to_earnings": 2.12,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Aspark-2",
          "as_of": "2026-07-24T20:59:55.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
      "as_of": "2026-07-24T21:01:56.353Z",
      "market_data": {
        "price_usd": 3.834518478030146,
        "market_cap_usd": 2398016939.6568255,
        "market_cap_method": "DEFILLAMA_PROTOCOL_MCAP",
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "DefiLlama total1y",
        "gross_fees_ttm_usd": 861807684,
        "supply_side_payouts_ttm_usd": null,
        "revenue_ttm_usd": 26839974,
        "direct_economic_costs_ttm_usd": null,
        "realized_protocol_losses_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": 26839974,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": 26839974,
        "net_income_ttm_usd": 26839974,
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
        "holders_revenue_ttm_usd": 26839974,
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "qualifying_fee_burns_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": 1.1193
      },
      "valuation": {
        "price_to_sales": 89.34,
        "price_to_earnings": 89.34,
        "free_cash_flow_yield_pct": null
      },
      "chain_diagnostics": null,
      "metric_meta": {
        "price": {
          "state": "ESTIMATED",
          "window": "point-in-time",
          "source": "DefiLlama Coins API",
          "source_url": "https://coins.llama.fi/prices/current/coingecko%3Auniswap",
          "as_of": "2026-07-24T20:59:49.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T00:00:00.000Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
          "as_of": "2026-07-24T21:01:56.353Z",
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
        "observed_at": "2026-07-24T21:01:56.353Z",
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
