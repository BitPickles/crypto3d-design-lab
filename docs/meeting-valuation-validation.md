# 26-Protocol Meeting Valuation Validation

## Overall assessment

**Share with caveats.** The test-site view is suitable for a meeting comparison if the presenter keeps the three valuation layers separate:

- `P/S` is an indicative protocol-revenue multiple.
- `P/TEV` is an indicative holder-value multiple and a **P/E proxy**, not strict P/E.
- strict `P/E` remains unavailable for all 26 protocols because reviewed TTM net income is not closed.

## Dataset and grain

- Grain: one row per tracked protocol/token pair.
- Protocols: 26 unique IDs.
- Market-cap coverage: 26/26.
- Indicative P/S coverage: 18/26.
- Indicative P/TEV coverage: 12/26.
- Strict P/E coverage: 0/26.
- Source snapshot: `BitPickles/tev-dashboard` commit `972d82b9a94cac0794fc6aa5dce6cae9a7dbda71`.
- Source data timestamp: `2026-07-24T13:13:35.438Z`.
- Model-review register: 13/26 protocols have a closed second-round model review. This does not promote the displayed legacy numeric values to audited figures.

## Issues found and remediation

1. **High — P/S, holder multiples, and strict P/E were previously easy to conflate.**
   - Remediation: the dashboard now displays P/S and P/TEV separately and states that strict P/E is 0/26 available.

2. **High — legacy zero values mixed confirmed zero with missing or unverified data.**
   - Remediation: missing, unverified, and not-calculable revenue, yield, and multiple fields render as `—`, not `0`.

3. **High — the legacy GMX data contained conflicting holder-yield values.**
   - Remediation: the meeting snapshot publishes GMX P/S as indicative but keeps P/TEV null while the current holder-value field is partial/unresolved.

4. **Medium — shorter-window or legacy annualized metrics could be mistaken for TTM.**
   - Remediation: only reported trailing-365-day protocol revenue is used for the meeting P/S calculation. No shorter-window annualization is relabeled TTM.

5. **Medium — ordinary token emissions and incentives could be read as holder cash flow.**
   - Remediation: the methodology copy now says emissions and ordinary incentives are not counted automatically.

## Calculation spot checks

- Aave P/S: `1,799,059,173.84 / 117,728,831 = 15.28x`.
- Aave P/TEV proxy: `100 / 3.26 = 30.67x`.
- Sky P/S: `1,814,725,241.45 / 238,224,433 = 7.62x`.
- Sky P/TEV proxy: `100 / 4.48 = 22.32x`.
- All published P/S and P/TEV values were independently recomputed by the validator within a `0.01x` tolerance.

## Render and interaction checks

- Desktop dashboard: 26 rows, 11 columns, no console warnings or errors.
- Mobile dashboard: no page-wide horizontal overflow; the wide comparison table scrolls inside its container.
- Sorting: P/S ascending and descending keeps unavailable values at the bottom.
- Language switch: Chinese and English labels both render.
- Detail pages: Aave, GMX, and BGB were spot-checked for available, partial, and safe-null states.

## Required meeting caveats

- Do not call P/S or P/TEV “strict P/E.”
- A `—` means unavailable, unverified, or not calculable; it does not mean zero.
- `~` marks an indicative legacy-derived multiple, not an audited financial statement value.
- Market cap is current to the source snapshot date; protocol revenue and holder-value inputs use the existing published dataset and retain its coverage limitations.
