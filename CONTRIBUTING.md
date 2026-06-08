# Contributing

Thanks for taking the time to contribute. Whether it's a bug report, a feature idea, a documentation fix, or a code PR — everything helps.

This project has a [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold it.

## Where to start

- **Bug report?** Open a [GitHub Issue](https://github.com/freebci/freebci-doc/issues) with steps to reproduce, expected behavior, and screenshots if applicable.
- **Feature idea?** Open an issue describing what you want to achieve and why.
- **Documentation?** All docs live in `docs/guides/` as `.mdx` files. Sidebar auto-generates from directory structure. See **[AGENTS.md](./AGENTS.md)** for conventions.

If you are unsure where to start, pick an [open issue](https://github.com/freebci/freebci-doc/issues).

## Development setup

```bash
npm install
npm start          # dev server at localhost:3000
npm run build      # production build
```

Full command reference and architecture notes: **[AGENTS.md](./AGENTS.md)**.

## Pull Request workflow

1. Fork the repository.
2. Create a branch from `main`.
3. Make your changes.
4. Run `npm run lint && npm run typecheck && npm run build` and ensure everything passes.
5. Push and open a pull request to `main`.
6. In the PR description, explain **what** you changed and **why**.

Keep PRs focused. One PR should address one concern. If feedback expands scope, consider a separate follow-up.

## Code guidelines

Read **[AGENTS.md](./AGENTS.md)** for the full set of constraints. At a minimum:

**Architecture**
- This is a Docusaurus 3 static documentation site. Do not introduce backend or server-side code.
- The `experimental_faster: true` flag in `docusaurus.config.js` enables Rspack-based builds.

**Documentation**
- All doc pages are `.mdx` files under `docs/guides/`. The sidebar auto-generates from the filesystem.
- Routes map to `/docs/<file-path>` (without `.mdx` extension).
- `mermaid` diagrams are enabled in markdown.

**Pages and components**
- Homepage sections live in `src/components/homepage/` (mix of `.jsx` and `.tsx`).
- Tailwind classes are used in homepage components and page-level JSX only. Doc pages use Docusaurus Infima CSS variables.
- Tailwind content scanning covers `./src/**/*.{jsx,tsx,html}` — classes in `.mdx` files are not scanned.

**Style**
- Follow the existing code conventions in each file. Do not introduce unnecessary comments.
- Run `npm run format` before committing (Prettier: `singleQuote: true`, `tabWidth: 2`).
- Use existing libraries and utility functions. Do not add dependencies without discussion.
- Write commit messages in English. One commit per logical change.

## License

By contributing, you agree that:

- Code contributions (`src/`, `plugins/`, configs) will be licensed under [Apache License 2.0](./LICENSE).
- Documentation contributions (`docs/`) will be licensed under [CC BY-NC-SA 4.0](./LICENSE).
