# Antonia Rian Garay — Analytics & Product Engineering Portfolio

A personal portfolio for **Antonia Rian Garay (Toni)**, a Data Analyst III exploring the space between analytics, engineering, and product thinking. The site brings together professional experience, technical projects, and the decisions behind useful data products.

**Status:** Redesigned portfolio is the homepage at `/`. The earlier résumé is preserved at `/legacy`; `/preview` remains a draft-content review route.

## What this portfolio is for

The site connects professional experience, skills, education, and selected projects. Rather than listing tools without context, it aims to show the problems addressed, decisions made, implementation approaches, and evidence behind the work.

## Current implementation

- **Next.js 14, React 18, TypeScript, Tailwind CSS, and Sass** — inherited application stack; modernization is planned.
- **Dark + Warm visual identity** — midnight, aubergine, terracotta, sage, and ivory.
- **Editorial portfolio preview** — a responsive homepage concept at `/preview` on deployments of the development branch, with a full-name introduction, conversational About section, and career timeline.
- **Project category filters and contextual project graphics** — currently schematic, not representations of measured results.
- **CSV content staging** — structured records in [`data/seed/`](data/seed) for future migration to Supabase/Postgres.

The homepage at `/` displays only projects marked `public`. The `/preview` route includes draft project content for review and is excluded from indexing. The earlier résumé remains accessible at `/legacy`.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/pages/index.tsx` | Redesigned public homepage |
| `src/pages/preview.tsx` | Draft-content design preview |
| `src/lib/portfolio-content.ts` | CSV loader and initial validation |
| `src/styles/brand-tokens.css` | Shared visual identity tokens |
| `src/styles/portfolio-preview.css` | Preview styling |
| `data/seed/*.csv` | Draft content tables |
| `data/README.md` | Content editing and publication safeguards |
| `docs/portfolio-plan.md` | Architecture and implementation roadmap |

## Local development

The repository currently uses Yarn Classic. Install dependencies and run:

```bash
yarn install
yarn dev
```

Visit `http://localhost:3000/` for the public homepage, `/preview` to review drafts, or `/legacy` for the earlier résumé. Run `yarn build` before merging. Runtime and dependency compatibility are under review; a successful production build is not guaranteed across every Node.js version.

Vercel's Node.js version is configured in project settings.

## Content and publication

The CSV records are a temporary editorial source, **not a finished Supabase schema**. Some records are provisional or require verification. Do not publish draft, hold, archived, or review-only entries by default.

No confidential employer data, private contact information, credentials, or unapproved project artifacts should be committed. Public-facing claims and metrics must be verified before release.

## Roadmap

1. Validate the released homepage, mobile layout, experience timeline, and About section.
2. Validate all public project descriptions, metrics, publication status, and links.
3. Build detailed case studies and a browser-readable résumé.
4. Test accessibility, responsiveness, and production builds before replacing the existing homepage.
5. Evaluate a controlled Supabase/Postgres content migration.
6. Add PDF résumé export, SEO, and deployment checks.

See [the implementation plan](docs/portfolio-plan.md) for details.

## Original template attribution and license

This repository began as a fork of **[Tim Baker's React Resume Template](https://github.com/tbakerx/react-resume-template)**. The original project supplied the initial Next.js résumé site, components, styling, and structure. This portfolio is being substantially redesigned and extended, but parts of that original implementation remain.

The original template is licensed under the **MIT License**, copyright © 2021 Tim Baker. Its copyright and permission notice are preserved in [LICENSE](LICENSE). This attribution is not a claim that Tim Baker maintains or endorses this portfolio.

## Repository

Maintained as [ToniRose92/antonia_g_resume](https://github.com/ToniRose92/antonia_g_resume). The repository name may change after the rebuild.
