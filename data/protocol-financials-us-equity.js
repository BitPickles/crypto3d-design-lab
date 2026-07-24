window.CRYPTO3D_PUBLIC_EQUITY = {
  "schema_version": "3.0.0-test",
  "terminology": "public-equity",
  "generated_at": "2026-07-24T15:59:17.600Z",
  "observed_at": "2026-07-24T13:13:35.438Z",
  "intended_use": "Crypto3D test-site public-equity financial comparison",
  "source_snapshot": {
    "repository": "BitPickles/tev-dashboard",
    "ref": "origin/main",
    "commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
    "data_generated_at": "2026-07-24T13:13:35.438Z"
  },
  "review_snapshot": {
    "register_generated_at": "2026-07-23T21:16:34Z",
    "model_review_passed_protocols": 13,
    "numeric_values_promoted": false
  },
  "null_policy": {
    "null": "尚无足够证据可靠计算。",
    "zero": "只有经过复核并确认数值为零时才使用 0。",
    "display": "页面将 null 显示为“未覆盖”，不得替换为 0。"
  },
  "formulas": {
    "price_to_sales": "P/S = Market Cap ÷ Revenue (TTM)",
    "price_to_earnings": "P/E = Market Cap ÷ Net Income (TTM)",
    "dividend_yield": "Dividend Yield = Dividends (TTM) ÷ Market Cap × 100%",
    "buyback_yield": "Buyback Yield = Share Repurchases (TTM) ÷ Market Cap × 100%",
    "shareholder_yield": "Shareholder Yield = Dividend Yield + Buyback Yield",
    "free_cash_flow": "Free Cash Flow = Operating Cash Flow − Capital Expenditures"
  },
  "coverage": {
    "protocol_count": 26,
    "market_cap_count": 26,
    "revenue_count": 18,
    "price_to_sales_count": 18,
    "net_income_count": 0,
    "price_to_earnings_count": 0,
    "independent_pass_count": 13
  },
  "protocols": [
    {
      "id": "aave",
      "name": "Aave",
      "ticker": "AAVE",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 1799059173.84,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 117728831,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 15.28,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "aster",
      "name": "Aster (AsterDEX)",
      "ticker": "ASTER",
      "category": "perpetual_dex",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 1679194400.8542328,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 24694726,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 68,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "bgb",
      "name": "Bitget Token",
      "ticker": "BGB",
      "category": "cex_token",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 1888393751,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "independent_pass",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "bnb",
      "name": "BNB",
      "ticker": "BNB",
      "category": "cex_token",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 74679718547.28583,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "independent_pass",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "compound",
      "name": "Compound",
      "ticker": "COMP",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 170622657.73,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 177463,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 961.45,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "curve",
      "name": "Curve",
      "ticker": "CRV",
      "category": "dex",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 319775897.5275523,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 15701857,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 20.37,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "dydx",
      "name": "dYdX",
      "ticker": "DYDX",
      "category": "perpetuals",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 105717841.72,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 9094297,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 11.62,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "eigenlayer",
      "name": "EigenLayer",
      "ticker": "EIGEN",
      "category": "restaking",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 173246015.12,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "independent_pass",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "ethena",
      "name": "Ethena",
      "ticker": "ENA",
      "category": "basis_trading",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 832193450.37,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 10747499,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 77.43,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "etherfi",
      "name": "ether.fi",
      "ticker": "ETHFI",
      "category": "liquid_staking",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 434586989.5764495,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "independent_pass",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "fluid",
      "name": "Fluid",
      "ticker": "FLUID",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 86461826.56,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 4745308,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 18.22,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "gmx",
      "name": "GMX",
      "ticker": "GMX",
      "category": "perp_dex",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 75587469.62,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 13247188,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 5.71,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "hype",
      "name": "Hyperliquid",
      "ticker": "HYPE",
      "category": "perpetuals",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 7368065201,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 792146570,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 9.3,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "jito",
      "name": "Jito",
      "ticker": "JTO",
      "category": "liquid_staking",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 302344812.42,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 14662309,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 20.62,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "justlend",
      "name": "JustLend",
      "ticker": "JST",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 834273596.4690665,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "pending",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "kamino",
      "name": "Kamino Finance",
      "ticker": "KMNO",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 89255077.42,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 12445934,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 7.17,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "lido",
      "name": "Lido",
      "ticker": "LDO",
      "category": "liquid_staking",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 322479136.26,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 39449664,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 8.17,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "mnt",
      "name": "Mantle",
      "ticker": "MNT",
      "category": "l2_token",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 1981231322,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "independent_pass",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "maple",
      "name": "Maple Finance",
      "ticker": "SYRUP",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 206848372.17,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 2561369,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 80.76,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "morpho",
      "name": "Morpho",
      "ticker": "MORPHO",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 1002990187.04,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "pending",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "okb",
      "name": "OKB",
      "ticker": "OKB",
      "category": "cex_token",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 1503276222,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": null,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "unavailable"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
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
      "review": {
        "status": "pending",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "partial_safe_null"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "pancakeswap",
      "name": "PancakeSwap",
      "ticker": "CAKE",
      "category": "dex",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 446288510.835878,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 59450459,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 7.51,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "pendle",
      "name": "Pendle",
      "ticker": "PENDLE",
      "category": "yield",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 262090427.47,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 19809032,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 13.23,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "medium",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "sky",
      "name": "Sky (MakerDAO)",
      "ticker": "MKR",
      "category": "cdp",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 1814725241.45,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 238224433,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 7.62,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "independent_pass",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "spark",
      "name": "Spark",
      "ticker": "SPK",
      "category": "lending",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 51931258.3,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 23785347,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 2.18,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "low",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    },
    {
      "id": "uniswap",
      "name": "Uniswap",
      "ticker": "UNI",
      "category": "dex",
      "as_of": "2026-07-24T13:13:35.438Z",
      "market_data": {
        "market_cap_usd": 2357300614.7894044,
        "enterprise_value_usd": null,
        "shares_outstanding": null,
        "diluted_shares_outstanding": null
      },
      "income_statement": {
        "period": "TTM",
        "revenue_ttm_usd": 16892047,
        "cost_of_revenue_ttm_usd": null,
        "gross_profit_ttm_usd": null,
        "operating_expenses_ttm_usd": null,
        "operating_income_ttm_usd": null,
        "net_income_ttm_usd": null,
        "coverage": "protocol_revenue_only"
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
        "period": "TTM",
        "dividends_ttm_usd": null,
        "share_repurchases_ttm_usd": null,
        "share_retirement_ttm_usd": null,
        "treasury_stock_usd": null,
        "share_issuance_ttm_usd": null,
        "dividend_yield_pct": null,
        "buyback_yield_pct": null,
        "shareholder_yield_pct": null
      },
      "valuation": {
        "price_to_sales": 139.55,
        "price_to_earnings": null,
        "free_cash_flow_yield_pct": null
      },
      "review": {
        "status": "pending",
        "confidence": "high",
        "numeric_values_promoted": false,
        "data_state": "provisional_snapshot"
      },
      "provenance": {
        "repository": "BitPickles/tev-dashboard",
        "ref": "origin/main",
        "source_commit": "972d82b9a94cac0794fc6aa5dce6cae9a7dbda71",
        "observed_at": "2026-07-24T13:13:35.438Z",
        "register_generated_at": "2026-07-23T21:16:34Z",
        "evidence_boundary": "Market Cap 与 Revenue 来自现有发布快照；其余财务字段在协议级模型复核完成前保持 null。"
      },
      "null_reasons": {
        "income_statement": "尚无经过协议级复核的完整收入、成本与费用台账，因此不能闭合为净利润。",
        "cash_flow": "尚无经过协议级复核的经营现金流与资本开支分类。",
        "balance_sheet": "尚无按统一控制权和负债边界复核的资产负债表。",
        "capital_returns": "回购、分红、注销和发行必须逐笔完成协议级证据复核；迁移层不发布替代值。",
        "price_to_earnings": "P/E = Market Cap ÷ TTM Net Income；当前缺少已复核的 TTM 净利润。"
      }
    }
  ]
};
