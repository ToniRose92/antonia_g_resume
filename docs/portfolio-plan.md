# Portfolio rebuild plan

This branch preserves the existing resume site on `main` while developing a project-first personal portfolio.

## Experience
- Editorial, expressive landing page with dark-first warm palette
- Interactive project explorer and project case studies
- Browser-readable resume and printable/downloadable PDF
- Responsive, accessible, reduced-motion-friendly UI
- Projects retain their own identities while borrowing shared design principles

## Phases
1. Audit source and establish design tokens and typed sample content.
2. Build editorial landing page and project explorer without a database dependency.
3. Implement case study pages, experience and resume views.
4. Add Postgres-backed content through Supabase, including access controls and migrations.
5. Add PDF export, tests, SEO, and deployment checks.

## Content model (draft)
- profiles
- organizations
- positions
- position_highlights
- education
- credentials
- skills
- projects
- project_skills
- position_skills
- project_links
- case_studies
- media_assets
- resume_versions

Keep public and private content separate. Do not publish confidential employer information or unapproved Lotorra material. Use synthetic data for sensitive research demos.

## Migration notes
Existing stack: Next.js 14, React 18, Tailwind 3, TypeScript 5.3; Pages Router. Audit components and runtime before upgrading. Migrate incrementally and verify builds before deleting legacy code.

## Design
See `src/styles/brand-tokens.css`.
