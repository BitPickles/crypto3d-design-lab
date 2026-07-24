# Crypto3D 26 协议美股指标测试版：优化记录与交接说明

> 记录日期：2026-07-25
> 当前状态：测试站版本已提交，可继续验收；尚未迁移或发布到正式站
> 测试仓库：`BitPickles/crypto3d-design-lab`
> 测试页面：<https://bitpickles.github.io/crypto3d-design-lab/tev/>
> 功能基线提交：`4d07be5`（CAKE 激励调整 P/E）
> 本记录所在提交：以 Git 历史中包含本文件的提交为准

## 1. 本轮工作的结论

本轮没有重做原有页面，而是在原 UI、表格结构、Logo 和交互基础上，把旧 TEV 指标体系替换成更接近美股财务分析的协议经济指标体系。

当前测试站已经具备：

- 26 个协议的当前流通市值；
- Fees TTM、Revenue TTM、Protocol Earnings、P/S、P/E；
- Holders Revenue TTM 与 Shareholder Yield；
- `0`、`N/A`、`N/M`、待核实和估算值的区分；
- 每日 DefiLlama 数据刷新与自动校验；
- BNB、Mantle 等公链型项目不强算传统 P/E；
- PancakeSwap/CAKE 的协议级激励调整 P/E；
- 完整口径文档和数据来源说明。

用户已经认可当前版本可以作为测试版提交，但**没有授权迁移到正式站**。

## 2. 仓库与发布边界

### 2.1 测试站

- GitHub 仓库：`https://github.com/BitPickles/crypto3d-design-lab`
- 本地目录：`C:\Users\Binan\Documents\Codex\2026-07-20\github\work\crypto3d-design-lab`
- 页面目录：`tev/`
- GitHub Pages：<https://bitpickles.github.io/crypto3d-design-lab/tev/>
- 当前分支：`main`

测试仓库 `main` 的变化会进入 GitHub Pages 测试站。提交测试仓库不代表获准发布正式站。

### 2.2 正式站

- 正式站：`https://crypto3d.pro`
- 正式仓库：`BitPickles/tev-dashboard`
- 正式仓库本地目录：`C:\Users\Binan\Documents\Codex\2026-07-20\github\work\tev-dashboard`
- Cloudflare Pages 项目：`tev-dashboard`

本轮没有修改、推送或部署正式站。除非用户再次明确授权，否则：

1. 不修改 `tev-dashboard`；
2. 不向正式仓库推送；
3. 不触发 Cloudflare Pages 生产部署；
4. 不把“测试版已认可”解释为“正式站已批准”。

## 3. 本轮确定的指标口径

### 3.1 基础指标

```text
Fees TTM
= DefiLlama dailyFees total1y

Revenue TTM
= DefiLlama dailyRevenue total1y

P/S
= DefiLlama Circulating Market Cap
÷ Revenue TTM

默认 Protocol Earnings proxy
= Revenue TTM

Cash P/E
= DefiLlama Circulating Market Cap
÷ Protocol Earnings proxy

Shareholder Yield
= DefiLlama Holders Revenue total1y
÷ DefiLlama Circulating Market Cap
× 100%
```

### 3.2 收入、成本和资本回报的边界

- Fees 是用户总费用，不等于协议收入。
- Revenue 是 DefiLlama 归类的协议与持币者留存收入。
- Holders Revenue 是 Revenue 中归属于持币者价值捕获的部分，不得再次加到 Protocol Earnings，否则会重复计算。
- 回购、分红和费用销毁是利润的分配方式，不是新增利润。
- 项目方、基金会、团队和开发公司的组织运营费用不进入本轮 Protocol Earnings。
- 默认不把原生代币发行、解锁、归属、空投或普通流动性挖矿计入成本。
- 供应增长属于独立稀释风险，不机械计入协议亏损。
- 供应方收益、LP 分成、存款人利息和必要结算成本若已在 Revenue 之前扣除，不得重复扣除。
- 缺失成本不能自动记作零。

### 3.3 状态规则

- `0`：来源明确返回有效零值。
- `N/A`：项目结构上不适用。
- `N/M`：分母小于或等于零，倍数没有经济意义。
- `待核实`：数据缺失或证据没有闭合，不能用零替代。
- `~估算`：第三方聚合值、短窗口年化值或允许的代理值。

## 4. 数据源规则

本轮会议版采用：

1. 市场价格、市值、Fees、Revenue 和 Holders Revenue：DefiLlama；
2. PancakeSwap 外部 CAKE 激励数量：PancakeSwap 官方 2026 年 6 月 CAKE Burn Report；
3. 不使用旧页面数值为缺失字段兜底；
4. 不在本轮混入其他第三方数据平台。

这只是测试站会议版的轮次规则，不改写长期研究的优先级：

```text
链上一手数据
> 官方公告、治理提案和正式报告
> DefiLlama 等第三方聚合平台
```

当前数据快照：

- schema：`5.0.0-defillama-daily`
- observed_at：`2026-07-24T21:01:56.353Z`
- 市值覆盖：26/26
- Fees 覆盖：24/26
- Revenue 覆盖：23/26
- P/S 可计算：21/26
- P/E 可计算：19/26
- Holders Revenue 覆盖：22/26
- Shareholder Yield 可计算：22/26
- 当前标记为 `independent_pass`：13/26

注意：页面可计算不等于所有协议已经完成独立数值审计。当前版本仍属于会议用测试候选数据。

## 5. PancakeSwap / CAKE 协议级特例

### 5.1 为什么需要特例

CAKE 的一部分手续费由协议留存或用于回购销毁，同时协议又通过发行 CAKE 为 Farms 和其他产品提供外部激励。如果完全忽略这些业务激励，P/E 会低估维持当前业务规模所需的经济成本。

因此只有 CAKE 使用激励调整 P/E，其余 25 个协议维持默认规则。

### 5.2 当前公式

PancakeSwap 官方 2026 年 6 月报告披露：

- Farms：236,919 CAKE；
- Other Product Usage：119,961 CAKE；
- Ecosystem Growth：295,684 CAKE；
- Total June Mint：652,564 CAKE。

本轮只扣前两项：

```text
每月外部 CAKE 激励
= 236,919 + 119,961
= 356,880 CAKE

外部 CAKE 激励年化代理
= 356,880 CAKE
× 12
× 当前 DefiLlama CAKE 价格

CAKE Protocol Earnings proxy
= DefiLlama Revenue total1y
− 外部 CAKE 激励年化代理

CAKE 激励调整 P/E
= 当前流通市值
÷ CAKE Protocol Earnings proxy
```

当前快照结果：

- CAKE 价格：约 1.389593 美元；
- 流通市值：约 4.4898 亿美元；
- Revenue TTM：约 9241 万美元；
- 外部激励年化代理：约 595 万美元；
- 激励调整后 Protocol Earnings：约 8646 万美元；
- P/S：4.86×；
- 激励调整 P/E：5.19×。

### 5.3 不扣除的 CAKE 项目

- Ecosystem Growth 的 295,684 CAKE：是否作为当期外部业务激励进入流通尚未闭合；
- 技术性铸造；
- 与铸造直接对应的技术性销毁；
- 普通解锁、归属和供应释放；
- 项目方组织运营费用。

CAKE 成本属于“2026 年 6 月单月运行率年化”，不是逐日重建的严格 TTM，页面和文档必须保留该提示。

### 5.4 CAKE 收入并非全部用于回购销毁

当前 DefiLlama TTM 数据：

```text
Revenue
= 92,408,684 美元

Holders Revenue（回购销毁口径）
= 59,620,036 美元

剩余 Protocol/Treasury Revenue
= 32,788,648 美元
```

约 64.52% 的 Revenue 被 DefiLlama 归为 Holders Revenue，约 35.48% 归为协议或国库收入。因此：

- 不能声称 PancakeSwap 把全部收入用于回购；
- Holders Revenue 已经包含在 Revenue 中，不能再次加到 Protocol Earnings；
- 回购是利润分配，不作为 P/E 成本扣除；
- 如果只看国库留存并忽略回购价值，会得到约 16.7× 的保守“国库留存 P/E”，但这不是当前页面采用的美股式股东收益口径。

## 6. 其他重要协议处理

### 6.1 BNB 与 Mantle

BNB 和 Mantle 属于公链或网络型资产。DefiLlama Revenue 可以用于 P/S 或 P/Network Revenue，但不能直接冒充传统公司净利润。

当前处理：

- P/S：可用时计算；
- P/E：显示 `N/A`；
- 不因 Revenue 为正就强行计算公司式 P/E。

### 6.2 Hyperliquid

本轮统一使用 DefiLlama：

- 当前 P/E：16.33×；
- Holders Revenue 用于 Shareholder Yield；
- 不在本轮用旧链上快照覆盖 DefiLlama；
- Assistance Fund 链上回购仍是后续严格链上审计的重要方向，但不是本轮数值来源。

### 6.3 无法计算的项目

Aster、BGB、OKB 等项目若 DefiLlama 没有 Revenue，则保持待核实，不使用旧数据回填。Morpho、EigenLayer 等 Revenue 为有效零时，P/S 和 P/E 显示 `N/M`，不能把有效零误写成缺失。

## 7. UI 与产品要求

用户已经明确确认当前恢复后的 UI 方向。后续修改必须遵守：

- 保留原来的页面视觉风格、表格布局、栏目顺序和交互；
- 保留所有协议 Logo；
- 主表继续以简洁横向比较为主；
- 不在每一个单元格旁重复标注数据来源；
- 不在协议名称后增加不必要的协议类型标签；
- 不在主表堆叠大量解释；
- 详细公式、证据边界和例外说明放在口径文档与协议详情页；
- 内容和数据可以替换，已确认的 UI 不要重新设计。

## 8. 主要文件

| 文件 | 作用 |
|---|---|
| `tev/index.html` | 26 协议主表页面 |
| `tev/fundamentals.js` | 主表渲染、排序和筛选 |
| `tev/protocol.html` | 协议详情页外壳 |
| `tev/protocol-financials.js` | 协议详情页指标与说明 |
| `tev/docs/index.html` | 对外口径文档，当前版本 v1.3 |
| `data/defillama-daily-snapshot.json` | 每日 DefiLlama 原始快照 |
| `data/protocol-financials-us-equity.json` | 生成后的页面数据 |
| `data/protocol-financials-us-equity.js` | 浏览器加载的数据版本 |
| `data/valuation-meeting-snapshot.json` | 26 协议身份与审核状态输入 |
| `data/logo_urls.json` | 协议 Logo 映射 |
| `scripts/fetch-defillama-daily.js` | 拉取每日 DefiLlama 数据 |
| `scripts/build-us-equity-financials.js` | 生成统一财务数据，包含 CAKE 特例 |
| `scripts/validate-us-equity-financials.js` | 公式、状态、来源、覆盖与确定性校验 |
| `.github/workflows/refresh-defillama-daily.yml` | 每日自动刷新任务 |
| `docs/prd-protocol-cash-pe-data-optimization-v1.md` | 本轮优化 PRD 与验收口径 |

## 9. 自动更新与校验

GitHub Actions 每天执行：

```text
00:17 UTC
= 08:17 Asia/Shanghai
```

命令：

```powershell
node scripts/fetch-defillama-daily.js
node scripts/build-us-equity-financials.js
node scripts/validate-us-equity-financials.js
```

工作流会：

1. 拉取 DefiLlama；
2. 重建 JSON 和浏览器 JS；
3. 运行校验；
4. 数据有变化时由 GitHub Actions 提交；
5. 请求 GitHub Pages 重新构建。

本地最小验收：

```powershell
node --check scripts/build-us-equity-financials.js
node --check scripts/validate-us-equity-financials.js
node --check tev/fundamentals.js
node --check tev/protocol-financials.js
node scripts/validate-us-equity-financials.js
git diff --check
```

`validate-us-equity-financials.js` 会连续构建两次，确保生成结果确定性一致。

## 10. 已完成的主要提交

| 提交 | 内容 |
|---|---|
| `9aef03c` | 增加协议财务口径文档 |
| `35388a8` | 增加协议 Cash P/E 候选数据 |
| `782fccc` | 接入 DefiLlama 每日指标刷新 |
| `e3e3466` | 修正每日市场变化校验 |
| `4a8a745` | 刷新 DefiLlama 每日快照 |
| `be0de69` | 修复 Windows 下生成数据不确定性 |
| `19ca778` | 恢复原协议表格 UI |
| `76d4faa` | 更新测试站静态资源缓存版本 |
| `48f6b4a` | 恢复全部协议 Logo |
| `4e6d1c5` | 替换被阻止的 Logo 来源 |
| `4d07be5` | 增加 CAKE 激励调整 P/E |

## 11. 当前仍需注意的事项

### 11.1 尚未完成生产迁移

正式站仍未修改。生产迁移必须单独获得用户授权，并且需要：

1. 比较测试仓库与正式仓库结构；
2. 只迁移已确认的数据逻辑和必要资源；
3. 保留正式站其他功能；
4. 在生产发布前再次运行完整校验；
5. 先向用户展示生产候选差异；
6. 获得明确批准后才能推送和部署。

### 11.2 审核状态不是 26/26 全部 PASS

当前 `independent_pass` 为 13/26。用户本轮优先要求先做出可用测试版，因此不能把“测试站可提交”表述成“26 个协议全部完成独立数值审计”。

后续若恢复严格审核：

- 不要重新研究已经完成的内容；
- 从已有研究登记表、审核合同和执行状态继续；
- 保留 `PASS / REWORK / PENDING`；
- 研究者与审核者分离；
- 不把 DefiLlama 聚合值冒充链上一手审计结论。

### 11.3 CAKE 年化代理需要定期更新

当前 CAKE 使用 2026 年 6 月单月数据年化。长期更稳健的方案是累计最近 12 个月官方月报，形成滚动 TTM 激励成本。完成前必须继续显示“运行率年化”。

### 11.4 当前版本的待决选择

以下事项没有得到生产级最终决定：

- 是否在页面额外展示 CAKE 的“国库留存 P/E”作为补充指标；
- 是否把 CAKE 单月运行率升级为滚动 12 个月；
- 是否恢复其余 13 个协议的独立数值审核；
- 是否恢复长期链上一手数据优先的逐协议数据管线；
- 何时以及如何迁移到正式站。

## 12. 新 Agent 接手时的第一组动作

1. 先完整读取本文件。
2. 检查 `git status -sb`、当前分支、远端和最新提交。
3. 读取：
   - `docs/prd-protocol-cash-pe-data-optimization-v1.md`
   - `tev/docs/index.html`
   - `scripts/build-us-equity-financials.js`
   - `scripts/validate-us-equity-financials.js`
   - `.github/workflows/refresh-defillama-daily.yml`
4. 运行只读或确定性校验，确认当前测试站和数据状态。
5. 不重新设计 UI，不重新研究已完成协议。
6. 不碰正式仓库，直到用户明确授权生产迁移。
7. 如果用户要求继续优化，先说明会影响哪些协议、公式和页面，再实施。

## 13. 一句话交接

当前版本是：**保留原 UI 的 26 协议美股指标测试站，基础数据每日来自 DefiLlama，CAKE 单独扣除官方外部激励运行率，测试版已获用户认可但尚未进入正式站。**
