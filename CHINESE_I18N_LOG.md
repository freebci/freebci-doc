# FreeBCI 中文国际化 (i18n) 改动日志

## 问题描述

为 FreeBCI 文档站添加中文支持，路径 `/zh/docs/freebci-daq/`，并实现中英文切换。

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

### 1.4 禁用 experimental_faster
```js
future: {
  experimental_faster: false,  // 原为 true
},
```
**关键修复**：`experimental_faster: true` 使用 Rspack 构建，在 Docusaurus v3.7.0 中不生成 `/zh/` 前缀的客户端路由，导致 React hydration 后显示 "Page Not Found"。改为 `false`（webpack）后，routes.js 从 0 条 `zh` 引用变为 82 条，中文路由正常注册。

### 1.5 容忍断链警告
```js
onBrokenLinks: 'warn',  // 避免构建因死链失败
```

---

## 二、中文翻译文件目录结构

### 2.1 目录创建
```
i18n/zh/docusaurus-plugin-content-docs/current/freebci-daq/
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
    ├── algorithms-zh.png
    ├── diagnostics-zh.png
    ├── live-zh.png
    ├── panel-connection-zh.png
    ├── panel-filter-zh.png
    ├── panel-focus-zh.png
    ├── panel-hardware-zh.png
    ├── panel-site-binding-zh.png
    ├── panel-stream-zh.png
    ├── panel-system-zh.png
    └── ...
```

### 2.2 关键设计决策
- **目录命名**：`freebci-daq/`（非 `daq/`），与 GitHub 仓库名一致
- **i18n 路径**：`i18n/zh/.../current/freebci-daq/`（直接镜像 `docs/guides/freebci-daq/`，因为 docs 插件 `path: 'docs/guides'`，翻译文件层级相对于此路径）
- **ZH dev 子目录**：仅 `index.mdx`（概览），其余 11 篇开发者教程无中文翻译，Docusaurus 自动回退英文
- **ZH reference 子目录**：6 篇参考文档有中文，缺 `developer-guide.mdx`（回退英文）
- **截图**：中文截图（`*-zh.png`），英文截图（`*-en.png`）同样复制到 ZH `screenshots/` 供回退使用

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

这一步经历多轮迭代：
1. 初版用绝对路径 `/docs/freebci-daq/...` → 切换到中文后链接跳回英文
2. 中文版改用 `/zh/docs/freebci-daq/...` → 绕过 Docusaurus 语言回退机制
3. 最终统一为相对路径 `./...`、`../` → Docusaurus 自动在当前语言域解析

### 3.5 主页面链接更新
`docs/guides/index.mdx`、`getting-started.mdx`、`hardware.mdx`、`software.mdx`、`contributing.mdx` 中所有 `/docs/daq` → `/docs/freebci-daq`。

---

## 四、src/css/custom.css

### 4.1 隐藏主页上的语言切换按钮
```css
/* Hide locale dropdown on homepage and non-docs pages */
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
- 更新中文翻译目录路径

---

## 六、测试结果

### Headless HTTP 测试（全部 200）
| URL | 状态 | 内容 |
|---|---|---|
| `/` | 200 | 主页（无语言按钮） |
| `/docs/` | 200 | 英文文档（有语言按钮） |
| `/zh/docs/` | 200 | 中文文档入口 |
| `/zh/docs/freebci-daq/` | 200 | 中文 DAQ 文档 |
| `/zh/docs/freebci-daq/quick-start/` | 200 | 中文快速开始 |
| `/zh/docs/freebci-daq/dev/` | 200 | 中文开发者教程（回退英文内容） |

### 构建输出
- EN: `build/` — 所有英文页面
- ZH: `build/zh/` — 33 个中文文档页面（含回退）
- `build/zh/assets/js/main.*.js` 包含 82 条 `/zh/` 前缀路由

### 路由文件验证
- `experimental_faster: true` 时：`.docusaurus/routes.js` **0 条** `zh` 引用 → 客户端 404
- `experimental_faster: false` 时：`.docusaurus/routes.js` **82 条** `zh` 引用 → 正常

---

## 七、已知限制

1. **Dev server 单语言限制**：`npm start` 默认只运行英文（`en`），测试中文需 `npm start -- --locale zh` 或用 `npm run serve` 测试构建产物
2. **ZH 翻译不完整**：dev 子目录仅 `index.mdx`，其他 11 篇开发者教程为英文回退
3. **主页无 i18n**：主页（React JSX）不做翻译，语言切换按钮通过 CSS 隐藏
4. **`experimental_faster: true` 与 i18n 不兼容**：Docusaurus v3.7.0 的 Rspack 构建不生成 locale 前缀路由，需使用 webpack

---

## 八、完整变更文件清单

### 配置文件
- `docusaurus.config.js` — i18n、trailingSlash、experimental_faster、localeDropdown、onBrokenLinks

### 英文文档
- `docs/guides/freebci-daq/` — 28 个 `.mdx` 文件（原 `daq/` 目录重命名 + `.md`→`.mdx`）
- `docs/guides/freebci-daq/_category_.json` — 新增
- `docs/guides/freebci-daq/reference/_category_.json` — 新增
- `docs/guides/freebci-daq/dev/_category_.json` — 新增
- `docs/guides/freebci-daq/screenshots/` — 截图目录
- `docs/guides/index.mdx`、`getting-started.mdx`、`hardware.mdx`、`software.mdx`、`contributing.mdx` — 链接更新

### 中文翻译
- `i18n/zh/docusaurus-plugin-content-docs/current/freebci-daq/` — 16 个 `.mdx` 文件
- `i18n/zh/docusaurus-plugin-content-docs/current/freebci-daq/screenshots/` — 中文截图

### 样式
- `src/css/custom.css` — 添加 `.plugin-pages .navbar-locale-dropdown` 隐藏规则

### 文档
- `AGENTS.md` — 更新 i18n 和 freebci-daq 路径说明
- `CHINESE_I18N_LOG.md` — 本文
