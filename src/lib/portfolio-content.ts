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
export interface ExperienceRecord {position_id:string; organization_id:string; organization:string; title:string; start_date:string; end_date:string; is_current:string; display_order:string; visibility:string; highlights:string[]}
export interface EducationRecord {education_id:string; organization_id:string; organization:string; degree:string; field_of_study:string; graduation_year:string; graduation_term:string; display_order:string}
export interface SkillRecord {skill_id:string; name:string; category:string; display_order:string; featured:string}
export interface CareerFeature {title:string; status:string; summary:string; details:string[]}
export interface PortfolioContent {
  profile: ProfileRecord;
  projects: ProjectRecord[];
  experience: ExperienceRecord[];
  education: EducationRecord[];
  skills: SkillRecord[];
  careerFeatures: CareerFeature[];
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
  const orgs = readTable<{organization_id:string;name:string}>('organizations',['organization_id','name']);
  const orgNames = new Map(orgs.map(o => [o.organization_id,o.name]));
  const highlights = readTable<{position_id:string;statement:string;review_status:string}>('position_highlights',['position_id','statement','review_status']);
  const experience = readTable<Omit<ExperienceRecord,'organization'|'highlights'>>('positions',['position_id','organization_id','title','start_date'])
    .filter(p => p.visibility === 'public')
    .sort((a,b)=>Number(a.display_order)-Number(b.display_order))
    .map(p=>({...p,organization:orgNames.get(p.organization_id)||p.organization_id,highlights:highlights.filter(h=>h.position_id===p.position_id && h.review_status==='source_verified').map(h=>h.statement)}));
  const education = readTable<Omit<EducationRecord,'organization'>>('education',['education_id','organization_id','degree','field_of_study'])
    .sort((a,b)=>Number(a.display_order)-Number(b.display_order))
    .map(e=>({...e,organization:orgNames.get(e.organization_id)||e.organization_id}));
  const skills = readTable<SkillRecord>('skills',['skill_id','name','category'])
    .sort((a,b)=>Number(a.display_order)-Number(b.display_order));
  const careerFeatures: CareerFeature[] = [
    {title:'Cost of a Payment',status:'Production · sole technical developer',summary:'Rebuilt financial data collection, validation, and analysis as an integrated analytics product.',details:['Estimated active effort reduced from 26–30 to approximately 7 labor hours per cycle (73–77%), excluding response wait time.','Structured forms reference prior-year inputs, flag material deviations for review and sign-off, and protect calculation logic in code.','Production capabilities include selected monthly refreshes, forecasting, and scenario testing.']},
    {title:'Procurement Analytics Hub',status:'Working solution · active refinement · sole technical developer',summary:'Unified previously fragmented procurement spend information in a single analytics environment.',details:['Supports identification of overlapping activity and comparison of previously disconnected reporting perspectives.','Underlying data is accurate; classification, cadence, filtering, adjustment rules, and presentation continue to be refined.']}
  ];
  return {profile, projects, experience, education, skills, careerFeatures};
}
