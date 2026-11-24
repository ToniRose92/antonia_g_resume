# Portfolio seed data

This folder holds **public-safe draft content** for the portfolio until a Postgres/Supabase backend is connected. Each CSV represents a prospective table, with stable string IDs and relationship columns. Empty CSVs contain headers only.

## Editing
- Edit these CSVs in GitHub's mobile web interface, or replace them later via a spreadsheet export.
- Preserve ID values after records are linked; use ISO dates (YYYY-MM-DD) and UTF-8.
- Dates entered as the first of a month indicate **month-level precision only**; do not present them as exact start/end days.
- Fields like `publication_status`, `visibility`, `review_status`, and `relationship_status` are editorial controls. **Draft, review, hold, and archive records must not be published by default.**
- Do not commit phone numbers, street addresses, private emails, employer documents, sensitive survivor information, passwords, or API keys.
- `profiles.headline` is a professional positioning statement; **Data Analyst III** is the official job title, not Analytics Product Engineer.
- Historical certification names and past project claims need review before publication. Do not infer skill proficiency from old 1–10 template ratings.
- The old résumé and site disagree about some Instacart role dates. Treat these as provisional month-level dates; verify before publishing.
- Employer work should be summarized only at a public-safe level and reviewed before publishing; add Progressive achievements later.
- No Lotorra details or confidential practicum artifacts are included.

## Migration
When ready, create Postgres migrations with explicit primary/foreign keys, boolean and date types, uniqueness constraints, and publication rules. Import organizations before positions/education; projects and skills before their join tables. This CSV structure is a content staging format, **not yet a production database schema**.

## Recommended initial site behavior
Only render approved/public records. Use a typed loader with validation and a separate explicit published-content filter. Do not automatically show every row in `data/seed`.
