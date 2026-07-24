# 26 协议会议估值首版验收记录

## 结论

**可在测试站预览，会议使用时必须保留“首版候选”说明。**

本轮先完成结果，不把完整独立审核作为测试站首版发布的前置条件。页面已经按新口径重算 Revenue、Protocol Earnings、P/S、Cash P/E 和 Shareholder Yield；所有估算值显示 `~`，证据不足显示“待核实”，不适用显示 `N/A`，亏损或零收益显示 `N/M`。

## 覆盖率

| 项目 | 覆盖 |
|---|---:|
| 协议 | 26/26 |
| 流通市值 | 26/26 |
| Revenue TTM | 19/26 |
| P/S | 19/26 |
| Cash P/E | 18/26 |
| Shareholder Yield（含明确零值） | 23/26 |

Cash P/E 的其余状态：

- `N/M`：Fluid（首版已知直接损失使 Protocol Earnings 小于零）。
- `N/A`：BGB、BNB、OKB、MNT（缺少同一经济主体的可比收入与成本边界，不强行套传统 P/E）。
- `待核实`：EigenLayer、JustLend、Morpho。

Shareholder Yield 的 23 个可用值中，14 个为正值候选，9 个为已识别的零值；Aave、BGB、JustLend 仍待核实。

## 计算口径

```text
Protocol Revenue TTM
= Gross Fees TTM
− Supply-side / Participant Payouts TTM
− Rebates / Refunds TTM

Protocol Earnings TTM
= Protocol Revenue TTM
− Direct Economic Costs TTM
− Realized Protocol Losses TTM

P/S
= Circulating Market Cap ÷ Protocol Revenue TTM

Cash P/E
= Circulating Market Cap ÷ Protocol Earnings TTM

Shareholder Yield
= (Dividends + Executed Repurchases + Qualifying Fee Burns) ÷ Circulating Market Cap
```

直接经济成本包括支付给外部参与者的必要分成、返佣、网络/结算/预言机/keeper 成本和已实现协议损失。团队工资、市场、法律、办公室、基金会管理等组织运营费用不进入 Protocol Earnings；原生代币发行、激励、解锁和归属也不作为现金成本。

资本回报在 Protocol Earnings 之后单独记录，未执行预算、国库内部转账、库存退休、普通代币激励和无法证明由费用支持的销毁不计入。

## 首版估算规则

- 现有研究、链上数据、官方汇总和经过口径核对的第三方聚合数据可以作为候选来源。
- Revenue 有可用值、但必要直接成本或已实现损失尚未单列时，首版以 Revenue 减去已知成本和损失计算 Protocol Earnings；未单列的增量成本暂按零估算，并以 `~` 和低置信度标记。
- 短于 TTM 的已执行资本回报可以按已识别期间金额或明确年化规则迁移，但必须保留窗口、来源和限制。
- 未知、结构不适用、没有经济意义和真实零值使用不同状态，不互相替代。

## 公式抽查

- Aave：`$1,799,059,173.84 ÷ $117,728,831 = 15.28x`。
- ether.fi：`$434,586,989.58 ÷ $53,095,936 = 8.18x`。
- Fluid：`$86,461,826.56 ÷ ($12,380,928 − $21,000,000)`，Protocol Earnings 为负，因此 Cash P/E 为 `N/M`。
- HYPE：`$7,368,065,201 ÷ $792,146,570 = 9.30x`。
- Spark Shareholder Yield：`$1,975,520.75 ÷ $51,931,258.30 = 3.8041%`。

生成器对全部可计算的 P/S、Cash P/E 和 Shareholder Yield 逐项复算，允许误差为 `0.01x` 或 `0.0001` 个百分点。

## 已知限制

- 本轮是结果优先的首版迁移，不等同于完成协议级独立审核。
- Maple 的回购候选存在期间重叠风险。
- PancakeSwap、Pendle、Sky 的部分第三方映射尚未做到逐笔执行闭合。
- Sky 的候选金额混合回购与质押奖励代理，需要在审核阶段继续拆分。
- Uniswap 的费用销毁仍有固定价格换算、跨链归因和去重限制。
- HYPE、GMX、Aster 等执行金额较大的资本回报将在下一阶段作为高优先级复核项。

## 首版发布门槛

- 数据构建结果必须可重复。
- 26 个协议 ID 必须唯一且全部存在。
- 每个核心指标必须有状态、原因、来源窗口和置信度。
- P/S、Cash P/E、Shareholder Yield 必须可以从基础金额复算。
- 页面不得出现旧 TEV 术语或把“待核实”显示成零。
- 仅发布测试站；未经用户验收，不进入生产站。
