import fs from 'fs';
import path from 'path';

export interface ProjectRecord {
  project_id: string;
  title: string;
  slug: string;
  summary: string;
  project_type: string;
  status: string;
  featured_order: string;
  publication_status: string;
}
export interface ProfileRecord {
  profile_id: string;
  display_name: string;
  headline: string;
  summary: string;
  github_url: string;
  linkedin_url: string;
  visibility: string;
}
export interface PortfolioContent {
  profile: ProfileRecord;
  projects: ProjectRecord[];
}

/** RFC 4180-style CSV reader supporting quoted commas, escaped quotes and line breaks. */
export function parseCsv(csv: string): Array<Record<string, string>> {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < csv.length; i += 1) {
    const ch = csv[i];
    if (ch === '"') {
      if (quoted && csv[i + 1] === '"') { field += '"'; i += 1; }
      else { quoted = !quoted; }
    } else if (ch === ',' && !quoted) {
      row.push(field); field = '';
    } else if ((ch === '\n' || ch === '\r') && !quoted) {
      if (ch === '\r' && csv[i + 1] === '\n') i += 1;
      row.push(field); field = '';
      if (row.some(cell => cell.trim())) rows.push(row);
      row = [];
    } else { field += ch; }
  }
  if (quoted) throw new Error('Unterminated quoted CSV field');
  if (field.length || row.length) { row.push(field); rows.push(row); }
  const headers = rows.shift();
  if (!headers) return [];
  const normalized = headers.map(h => h.replace(/^\uFEFF/, '').trim());
  if (new Set(normalized).size !== normalized.length) throw new Error('Duplicate CSV headers');
  return rows.map((cells, i) => {
    if (cells.length !== normalized.length) throw new Error('CSV row ' + (i + 2) + ' has wrong column count');
    return Object.fromEntries(normalized.map((header, index) => [header, cells[index]]));
  });
}
function readTable<T>(name: string, required: string[]): T[] {
  const source = fs.readFileSync(path.join(process.cwd(), 'data', 'seed', name + '.csv'), 'utf8');
  const rows = parseCsv(source);
  for (const [i, row] of rows.entries()) {
    for (const key of required) if (!row[key]?.trim()) throw new Error(name + ' row ' + (i + 2) + ': missing ' + key);
  }
  return rows as unknown as T[];
}
export function loadPortfolioContent(includeDrafts = false): PortfolioContent {
  const profiles = readTable<ProfileRecord>('profiles', ['profile_id', 'display_name', 'headline']);
  const profile = profiles.find(p => p.visibility === 'public');
  if (!profile) throw new Error('Missing public portfolio profile');
  const allProjects = readTable<ProjectRecord>('projects', ['project_id', 'title', 'slug', 'publication_status']);
  const ids = allProjects.map(p => p.project_id);
  if (new Set(ids).size !== ids.length) throw new Error('Duplicate project IDs');
  const projects = allProjects
    .filter(p => p.publication_status === 'public' || (includeDrafts && p.publication_status === 'draft'))
    .sort((a, b) => Number(a.featured_order || 999) - Number(b.featured_order || 999));
  return {profile, projects};
}
