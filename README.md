# Rhyan Magalhães — Portfolio

A static, bilingual personal portfolio built with Astro. Editorial design, Markdown-based content, and zero backend dependencies.

**Languages:** English (`/en/`) · Portuguese (`/pt-br/`)

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321 → redirects to /en/
npm run build    # production build → dist/
npm run check    # TypeScript + Astro diagnostics
```

## Tech stack

- [Astro](https://astro.build) 7
- TypeScript
- Markdown / MDX (Content Collections)
- Plain CSS
- @astrojs/sitemap

No React. No Tailwind. No database. No CMS.

## Project structure (overview)

```
src/
├── components/     # Header, Footer, Head (SEO)
├── config/         # Site name, email, social links
├── content/        # Projects and articles (Markdown)
├── i18n/           # UI translations (en, pt-br)
├── layouts/        # BaseLayout wrapper
├── pages/          # Routes (/en/..., /pt-br/...)
├── styles/         # global.css
└── utils/          # Date and content helpers
```

## Add content

**New project** — create `src/content/projects/my-project/en.md` (and `pt-br.md`).

**New article** — create `src/content/articles/my-article/en.md` (and `pt-br.md`).

See [DOCUMENTATION.md](./DOCUMENTATION.md) for frontmatter fields and examples.

## Deploy

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |

Update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt` before going live.
