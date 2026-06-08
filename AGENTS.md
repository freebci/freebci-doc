# AGENTS.md

## Project

FreeBCI official website and documentation portal — [Docusaurus 3](https://docusaurus.io/) with Tailwind CSS.

## Quick-start

```bash
npm install          # installs all dependencies (npm ci in CI/Amplify)
npm start            # dev server at localhost:3000 (also: npm run dev)
```

## Essential commands

| Command | What |
|---|---|
| `npm start` / `npm run dev` | Docusaurus dev server |
| `npm run build` | Production build (output in `build/`) |
| `npm run lint` | ESLint on `.js,.ts,.jsx,.tsx` |
| `npm run lint:fix` | Auto-fix lint |
| `npm run format` | Prettier on `src/` and `docs/` |
| `npm run typecheck` | `tsc` type-check (separate from lint) |
| `npm run spell-check` | cspell on `docs/**/*.mdx` |

Full verification: `npm run lint && npm run typecheck && npm run build`

## Architecture

Single Docusaurus instance — no multi-plugin, no multi-version, no SDK plugins.

- **`src/pages/index.jsx`** — homepage (FreeBSD-style landing, assembled from `src/components/homepage/`)
- **`src/pages/`** — static pages (community/, faq, privacy, about/)
- **`src/components/homepage/`** — homepage section components (mix of `.jsx` and `.tsx`)
- **`src/theme/`** — swizzled Docusaurus theme components
- **`docs/guides/`** — all documentation, mapped to `/docs` route
- **`docs/guides/freebci-daq/`** — FreeBCI DAQ documentation (tutorials + reference + developer guides)
- **`i18n/zh/.../current/guides/freebci-daq/`** — Chinese (zh) translation mirror of `docs/guides/freebci-daq/`
- **`sidebars-default.js`** — auto-generated sidebar from `docs/guides/` filesystem
- **`tailwind.config.cjs`** — scans only `./src/**/*.{jsx,tsx,html}` (NOT `.mdx` or `.js`)
- **`plugins/tailwind-plugin.cjs`** — custom PostCSS plugin to wire Tailwind into Docusaurus

Build uses Rspack via `@docusaurus/faster` (`experimental_faster: true` in config).

## i18n

Bilingual English/Chinese via Docusaurus native i18n:

- **Locales**: `en` (default), `zh`
- **English docs**: `docs/guides/`
- **Chinese docs**: `i18n/zh/docusaurus-plugin-content-docs/current/` (mirrors `docs/guides/` structure)
- **URLs**: `/docs/...` (EN), `/zh/docs/...` (ZH)
- Docusaurus auto-generates the locale dropdown in the navbar
- If a Chinese translation is missing for a file, Docusaurus falls back to the English version

## Doc update times

`showLastUpdateTime: true` in `docusaurus.config.js` — Docusaurus derives "last updated" from git commit history (`git log` per file). Before docs are committed, all pages will show the same file-creation date. Normal after first commit.

## Key conventions

- **All doc pages are `.mdx`** — React + Markdown. Create in `docs/guides/`, sidebar auto-generates.
- **No eslint config file exists.** The `eslint` packages are in `devDependencies` but no `.eslintrc` or inline config was found. `npm run lint` may not work without adding a config.
- **Prettier** config is inline in `package.json`: `singleQuote: true`, `tabWidth: 2`. Runs on `src/` and `docs/`.
- **Node >= 18** required (per `package.json` `engines`).
- **Brand colors** defined in `src/css/custom.css`: `--docs-color-primary-200: 29 78 216` (light), `--ifm-color-primary: #1a90ff` (dark).

## Deployment

- **Hosting**: AWS Amplify (config in `amplify.yml` — `npm ci` then `npm run build`, serves from `/build`)
- **URL**: `https://www.freebci.net`
- **Google Tag Manager**: `GTM-5FDFFSS` (in `docusaurus.config.js`)

## Styling notes

- Global theme: `src/css/custom.css` — CSS variables, font faces (Inter, Plus Jakarta Sans, Fira Code), dark mode via `[data-theme="dark"]`
- Tailwind classes used in homepage components and page-level JSX; doc pages use Docusaurus Infima variables
- Custom CSS contains residual `dyte-*` class names from the original Dyte template — these are inert remnants and should not be emulated
- `mermaid` enabled in markdown

## Brand assets

- Hero logo: `freebci-brand/FreeBCI-CM.png` → `static/logo/cm-hero.png`
- Navbar/footer logo: `freebci-brand/FreeBCI-FM.jpg` → `static/logo/light.png` and `static/logo/dark.png`
- Favicon: `static/favicon.ico`
- Source files in `freebci-brand/`

## History

This project was originally a Dyte SDK documentation portal with 19 SDK plugins, multi-version support, interactive playgrounds, and AI chatbot. All Dyte-specific content has been removed. Some CSS class names (`.dyte-dropdown`, `.sdk-link`, etc.) still remain in `src/css/custom.css` as inert artifacts.
