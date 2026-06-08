# FreeBCI 中文国际化 (i18n) 改动日志

## 根因总结

经过两轮 Playwright 诊断 + `write-translations` 分析，确认中文无法显示的**唯一根因**：

### 根因：i18n 目录名与 Docusaurus 插件 ID 不匹配

```diff
- i18n/zh/docusaurus-plugin-content-docs/current/    ← 错误
+ i18n/zh/docusaurus-plugin-content-docs-docs/current/ ← 正确
```

**原理**：Docusaurus 的 i18n 目录命名规则为 `docusaurus-plugin-content-<pluginId>`。当 `docusaurus.config.js` 中 docs 插件显式配置了 `id: 'docs'` 时，对应的 i18n 目录必须是 `docusaurus-plugin-content-docs-docs`（`docs` 插件 + `-docs` 后缀）。我们最初使用了 `docusaurus-plugin-content-docs`（默认 ID `'default'` 对应的目录名），导致 Docusaurus 在构建时**静默忽略全部 16 个中文翻译文件**，页面上显示英文内容但 URL 为 `/zh/` 前缀。

**证据链**：
1. `npx docusaurus write-translations --locale zh` 输出目标路径为 `docusaurus-plugin-content-docs-docs/`，证实了正确目录名
2. `.docusaurus/` 缓存中 `i18n/zh` 引用为 0（修复后正常）
3. 修复前：ZH JS chunks 中**0 条中文文本**；修复后：HTML 和 JS 均含中文
4. Playwright 修复前：中文页面显示英文内容；修复后：显示完整中文翻译

**隐蔽性**：Docusaurus 不报错、不警告。构建输出包含 `/zh/` 路由和 `build/zh/` 静态文件，但所有内容均来自英文源文件，翻译被完全忽略。

---

## 一、docusaurus.config.js（核心配置）

### 1.1 添加 i18n 声明
```js
// meta 对象中
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
},
```

### 1.2 添加 navbar 语言切换按钮
```js
{
  type: 'localeDropdown',
  position: 'right',
  className: 'navbar-locale-dropdown',  // 供 CSS 精确控制显示/隐藏
},
```

### 1.3 启用 trailing slash
```js
trailingSlash: true,  // 原为 false
```
原因：`true` 时 Docusaurus 生成 `index.html` 文件（如 `build/zh/docs/index.html`），静态服务器可以正确路由 `/zh/docs/` 请求。`false` 时生成 `docs.html`，部分服务器无法正确映射。

### 1.4 构建加速演进
```js
// 初版：Rspack 不生成 /zh/ 路由，临时改 webpack
future: { experimental_faster: false },

// 终版：升级 Docusaurus 3.7.0 → 3.10.1 后
future: { v4: true },  // 含 faster (Rspack) + 完整 i18n 支持
```
Docusaurus 3.10.1 修复了 Rspack 的 i18n 路由生成 bug，`future.v4: true` 同时启用 Rspack 构建加速和 v4 未来特性。

### 1.5 容忍断链警告
```js
onBrokenLinks: 'warn',  // 避免构建因死链失败
```

---

## 二、中文翻译文件目录结构

### 2.1 目录创建（修正后）
```
i18n/zh/docusaurus-plugin-content-docs-docs/current/freebci-daq/
├── index.mdx
├── quick-start.mdx
├── hardware-setup.mdx
├── live-monitoring.mdx
├── engagement-focus.mdx
├── ai-analysis.mdx
├── sessions.mdx
├── system-tuning.mdx
├── tuning-guide.mdx
├── reference/
│   ├── ai-integration.mdx
│   ├── algorithms-detail.mdx
│   ├── configuration.mdx
│   ├── data-pipeline.mdx
│   ├── faq.mdx
│   └── troubleshooting.mdx
├── dev/
│   └── index.mdx
└── screenshots/
    ├── algorithms-zh.png (14 张中文截图)
    ├── *-en.png (EN 截图供回退)
    └── ...
```

### 2.2 关键设计决策
- **目录命名**：`freebci-daq/`（非 `daq/`），与 GitHub 仓库名一致
- **i18n 路径**：`i18n/zh/.../current/freebci-daq/`（直接镜像 `docs/guides/freebci-daq/`，因为 docs 插件 `path: 'docs/guides'`）
- **⚠️ 插件 ID 后缀**：docs 插件 `id: 'docs'` 导致 i18n 目录名必须为 `docusaurus-plugin-content-docs-docs`（非 `docusaurus-plugin-content-docs`）
- **ZH dev 子目录**：仅 `index.mdx`（概览），其余 11 篇开发者教程无中文翻译，Docusaurus 自动回退英文
- **ZH reference 子目录**：6 篇参考文档有中文，缺 `developer-guide.mdx`（回退英文）
- **截图**：中文截图（`*-zh.png`），英文截图（`*-en.png`）同样复制到 ZH `screenshots/` 供回退（如 `panel-ei-trend-en.png` 无中文版本）

---

## 三、英文 docs/ 目录修改

### 3.1 目录重命名
```
docs/guides/daq/ → docs/guides/freebci-daq/
```

### 3.2 文件格式转换
所有 `.md` → `.mdx`，添加 frontmatter：
```yaml
---
sidebar_position: N
sidebar_label: 'xxx'
---
```
文件名去掉数字前缀：`01-quick-start.md` → `quick-start.mdx`

### 3.3 新增分类文件
- `docs/guides/freebci-daq/_category_.json` — 标签 `FreeBCI DAQ`
- `docs/guides/freebci-daq/reference/_category_.json` — 标签 `Reference`
- `docs/guides/freebci-daq/dev/_category_.json` — 标签 `Developer Tutorials`

### 3.4 链接修正
所有内部链接统一为相对路径（`./quick-start`、`./reference/data-pipeline` 等），避免硬编码 `/docs/` 路径。Docusaurus 在当前 locale 上下文中自动解析相对路径，确保中文页面上点击链接不跳回英文。

多轮迭代：
1. 初版用绝对路径 `/docs/freebci-daq/...` → 切换到中文后链接跳回英文
2. 中文版改用 `/zh/docs/freebci-daq/...` → 绕过 Docusaurus 语言回退机制
3. 最终统一为相对路径 `./...`、`../` → Docusaurus 自动在当前语言域解析

### 3.5 主页面链接更新
`docs/guides/index.mdx`、`getting-started.mdx`、`hardware.mdx`、`software.mdx`、`contributing.mdx` 中所有 `/docs/daq` → `/docs/freebci-daq`。

---

## 四、src/css/custom.css

### 4.1 隐藏主页上的语言切换按钮
```css
.plugin-pages .navbar-locale-dropdown,
.plugin-blog .navbar-locale-dropdown {
  display: none;
}
```
原理：主页 `<html>` 有 `class="plugin-pages"`，docs 页面有 `class="plugin-docs"`。通过 CSS 只在 docs 页面显示语言切换按钮。

---

## 五、AGENTS.md

更新了以下内容：
- 添加 i18n 章节，说明 bilingual EN/ZH 架构
- 更新 DAQ 路径引用 `daq/` → `freebci-daq/`
- 更新中文翻译目录路径（含 `-docs` 后缀）

---

## 六、测试结果

### Playwright E2E（Docusaurus 3.10.1 + Rspack，全部通过）
| URL | lang | 含中文 | 404 | errors |
|---|---|---|---|---|
| `/zh/docs/` | zh | ✅ | 否 | 0 |
| `/zh/docs/freebci-daq/` | zh | ✅ "浏览器端 EEG 脑电采集" | 否 | 0 |
| `/zh/docs/freebci-daq/quick-start/` | zh | ✅ "1. 快速开始" | 否 | 0 |
| `/zh/docs/freebci-daq/dev/` | zh | ✅ (回退英文) | 否 | 0 |
| 内部链接诊断 | — | 全部 `/zh/docs/` 前缀 | — | 0 |

### 构建输出
- EN: `build/` — 所有英文页面
- ZH: `build/zh/` — 33 个中文文档页面（含回退）
- Rspack 构建速度：< 3s（vs webpack 6s+）

---

## 七、已知限制

1. **Dev server 单语言限制**：`npm start` 默认只运行英文（`en`），测试中文需 `npm start -- --locale zh` 或用 `npm run serve` 测试构建产物
2. **ZH 翻译不完整**：dev 子目录仅 `index.mdx`，其他 11 篇开发者教程为英文回退
3. **主页无 i18n**：主页（React JSX）不做翻译，语言切换按钮通过 CSS 隐藏
4. **截图语言混合**：`engagement-focus` 页面的 `panel-ei-trend-en.png` 无中文版本（上游源文件也无）

---

## 八、完整变更文件清单

### 配置文件
- `docusaurus.config.js` — i18n、trailingSlash、`future.v4: true`、localeDropdown、onBrokenLinks
- `package.json` — Docusaurus 3.7.0 → 3.10.1
- `.gitignore` — `/freebci-daq/`（仅限根目录，避免拦截 i18n 子目录）

### 英文文档
- `docs/guides/freebci-daq/` — 28 个 `.mdx` 文件（原 `daq/` 目录重命名 + `.md`→`.mdx`）
- `docs/guides/freebci-daq/_category_.json` — 新增
- `docs/guides/freebci-daq/reference/_category_.json` — 新增
- `docs/guides/freebci-daq/dev/_category_.json` — 新增
- `docs/guides/freebci-daq/screenshots/` — 截图目录
- `docs/guides/index.mdx`、`getting-started.mdx`、`hardware.mdx`、`software.mdx`、`contributing.mdx` — 链接更新

### 中文翻译
- `i18n/zh/docusaurus-plugin-content-docs-docs/current/freebci-daq/` — 16 个 `.mdx` 文件 + 35 张截图

### 样式
- `src/css/custom.css` — 添加 `.plugin-pages .navbar-locale-dropdown` 隐藏规则

### 测试
- `tests/i18n-zh.spec.ts` — Playwright E2E 测试（3 个用例）
- `tests/live-test.cjs`、`tests/chunk-check.cjs` — 诊断辅助脚本

### 文档
- `AGENTS.md` — 更新 i18n 和 freebci-daq 路径说明
- `CHINESE_I18N_LOG.md` — 本文（含根因总结）
- `ZH_I18N_DIAGNOSIS.md` — Playwright 诊断报告
