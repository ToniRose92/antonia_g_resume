# Toni — Analytics & Product Engineering Portfolio

A personal portfolio documenting analytics work, technical projects, and the thinking behind practical data products.

**Status:** Active rebuild. The existing résumé site remains on the default `main` branch; the new experience is being developed on `feat/portfolio-rebuild`.

## What this portfolio is for

The site connects professional experience, skills, education, and selected projects. Rather than listing tools without context, it aims to show the problems addressed, decisions made, implementation approaches, and evidence behind the work.

## Current implementation

- **Next.js 14, React 18, TypeScript, Tailwind CSS, and Sass** — inherited application stack; modernization is planned.
- **Dark + Warm visual identity** — midnight, aubergine, terracotta, sage, and ivory.
- **Editorial portfolio preview** — a responsive homepage concept at `/preview` on deployments of the development branch.
- **Project category filters and contextual project graphics** — currently schematic, not representations of measured results.
- **CSV content staging** — structured records in [`data/seed/`](data/seed) for future migration to Supabase/Postgres.

The preview is **not yet the production homepage**. It currently shows draft project content for design review; it is not an approved public project catalog. The older résumé experience is still available at `/`.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/pages/index.tsx` | Existing résumé homepage (legacy implementation) |
| `src/pages/preview.tsx` | New portfolio concept |
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

Visit `http://localhost:3000/preview` to inspect the new design. Run `yarn build` before merging. Runtime and dependency compatibility are under review; a successful production build is not guaranteed across every Node.js version.

For a deployment of the development branch, append `/preview` to that deployment's URL. Vercel's Node.js version is configured in project settings.

## Content and publication

The CSV records are a temporary editorial source, **not a finished Supabase schema**. Some records are provisional or require verification. Do not publish draft, hold, archived, or review-only entries by default.

No confidential employer data, private contact information, credentials, or unapproved project artifacts should be committed. Public-facing claims and metrics must be verified before release.

## Roadmap

1. Connect experience, education, and skills to the new UI.
2. Finish responsive homepage and project explorer.
3. Build individual case studies and a browser-readable résumé.
4. Validate content, relationships, and publication rules.
5. Migrate content to Supabase/Postgres with a controlled schema.
6. Add PDF résumé export, accessibility testing, SEO, and deployment checks.

See [the implementation plan](docs/portfolio-plan.md) for details.

## Original template attribution and license

This repository began as a fork of **[Tim Baker's React Resume Template](https://github.com/tbakerx/react-resume-template)**. The original project supplied the initial Next.js résumé site, components, styling, and structure. This portfolio is being substantially redesigned and extended, but parts of that original implementation remain.

The original template is licensed under the **MIT License**, copyright © 2021 Tim Baker. Its copyright and permission notice are preserved in [LICENSE](LICENSE). This attribution is not a claim that Tim Baker maintains or endorses this portfolio.

## Repository

Maintained as [ToniRose92/antonia_g_resume](https://github.com/ToniRose92/antonia_g_resume). The repository name may change after the rebuild.
