/* eslint-disable react/jsx-sort-props, simple-import-sort/imports -- Preview markup will be formatted during the UI refactor. */
import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {memo, useMemo, useState} from 'react';
import ClarityMotif from '../components/ClarityMotif';
import {loadPortfolioContent, PortfolioContent} from '../lib/portfolio-content';

type Props = {content: PortfolioContent};
const Preview: NextPage<Props> = memo(({content}) => {
  const [filter, setFilter] = useState('All');
  const types = useMemo(() => ['All', ...Array.from(new Set(content.projects.map(p => p.project_type)))], [content.projects]);
  const shown = content.projects.filter(p => filter === 'All' || p.project_type === filter);
  return (
    <>
      <Head><title>Antonia Rian Garay | Portfolio</title><meta name="description" content="Analytics, engineering, and product-focused work by Antonia Rian Garay."/></Head>
      <main className="portfolio-preview">
        <header className="portfolio-preview__nav">
          <a href="#top" className="portfolio-preview__wordmark">TONI<span>.</span></a>
          <nav aria-label="Portfolio navigation"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#about">About</a><Link href="/legacy#resume">Earlier résumé</Link></nav>
        </header>
        <section className="portfolio-preview__hero" id="top">
          <p className="portfolio-preview__eyebrow">HI, I’M</p>
          <p className="portfolio-preview__hero-name">Antonia Rian Garay<span>.</span></p>
          <p className="portfolio-preview__hero-role">Data Analyst III · Analytics Product Engineering</p>
          <h1>Make complexity <em>make sense.</em></h1>
          <p className="portfolio-preview__intro">{content.profile.summary}</p>
          <div className="portfolio-preview__actions"><a className="portfolio-preview__primary" href="#projects">Explore projects <span aria-hidden="true">↗</span></a><a href={content.profile.github_url} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          <ClarityMotif className="portfolio-preview__hero-motif" variant="default"/>
        </section>
        <section className="portfolio-preview__work" id="projects">
          <div className="portfolio-preview__sectionhead"><div><p className="portfolio-preview__eyebrow">01 / SELECTED WORK</p><h2>Built around the problem.</h2></div><p>Explore the thinking behind the work.</p></div>
          <div className="portfolio-preview__filters" role="group" aria-label="Filter projects">
            {types.map(type => <button key={type} type="button" aria-pressed={filter === type} onClick={() => setFilter(type)}>{type}</button>)}
          </div>
          <div className="portfolio-preview__grid">
            {shown.map((project, index) => <article key={project.project_id} className="portfolio-preview__card">
              <div className="portfolio-preview__cardtop"><span>{String(index + 1).padStart(2, '0')} / {project.project_type}</span><span>{project.status.replace(/_/g, ' ')}</span></div>
              <div className="portfolio-preview__graphic">
                <img
                  alt=""
                  className="portfolio-preview__placeholder"
                  loading="lazy"
                  src={['/images/placeholders/layered-forms.svg', '/images/placeholders/balanced-geometry.svg', '/images/placeholders/architectural-overlap.svg', '/images/placeholders/striped-intersections.svg', '/images/placeholders/sweeping-arcs.svg'][index % 5]}
                />
              </div>
              <h3>{project.title}</h3><p>{project.summary}</p>
              <span className="portfolio-preview__draft">Project overview · case study coming later</span>
            </article>)}
            {shown.length === 0 && <p>No projects in this category.</p>}
          </div>
        </section>
        <section className="portfolio-preview__career" id="experience">
          <div className="portfolio-preview__sectionhead"><div><p className="portfolio-preview__eyebrow">02 / EXPERIENCE</p><h2>Systems that make work easier.</h2></div><p>From stakeholder questions to durable analytics products.</p></div>
          <div className="portfolio-preview__features">{content.careerFeatures.map(feature=><article className="portfolio-preview__feature" key={feature.title}><p className="portfolio-preview__eyebrow">{feature.status}</p><h3>{feature.title}</h3><p>{feature.summary}</p><ul>{feature.details.map(d=><li key={d}>{d}</li>)}</ul></article>)}</div>
          <div className="portfolio-preview__timeline" aria-label="Career timeline">
            {content.experience.map((position,index)=>(
              <article className={`portfolio-preview__milestone ${index%2===0?'portfolio-preview__milestone--left':'portfolio-preview__milestone--right'} ${position.is_current==='true'?'portfolio-preview__milestone--current':''}`} key={position.position_id}>
                <span className="portfolio-preview__milestone-dot" aria-hidden="true"/>
                <div className="portfolio-preview__milestone-card">
                  <p className="portfolio-preview__milestone-date">{new Date(position.start_date+'T12:00:00').toLocaleDateString('en-US',{month:'short',year:'numeric'})} — {position.is_current==='true'?'Present':new Date(position.end_date+'T12:00:00').toLocaleDateString('en-US',{month:'short',year:'numeric'})}</p>
                  <p className="portfolio-preview__milestone-org">{position.organization}</p>
                  <h3>{position.title}</h3>
                  {position.highlights.length>0&&<details><summary>Selected work</summary><ul>{position.highlights.map(h=><li key={h}>{h}</li>)}</ul></details>}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="portfolio-preview__education" id="education"><p className="portfolio-preview__eyebrow">03 / EDUCATION</p><h2>Built on analytical foundations.</h2><div className="portfolio-preview__educationgrid">{content.education.map(e=><article key={e.education_id}><p>{e.organization}</p><h3>{e.degree} in {e.field_of_study}</h3><span>{e.graduation_term} {e.graduation_year}</span></article>)}</div></section>
        <section className="portfolio-preview__skills" id="skills"><p className="portfolio-preview__eyebrow">04 / SKILLS</p><h2>Tools and ways of working.</h2><div className="portfolio-preview__skillgrid">{[{name:'Programming & web foundations',ids:['python','sql','r','javascript','html','css']},{name:'Data processing & platforms',ids:['snowflake','duckdb','polars','pandas']},{name:'Analytics & visualization',ids:['tableau','powerbi','excel','alteryx','devexpress']},{name:'Deployment & development tools',ids:['positconnect','git','jupyter','quarto']},{name:'Analytics engineering',ids:['datamodel','forecast','requirements']}].map(group=><div key={group.name}><h3>{group.name}</h3><div>{content.skills.filter(skill=>group.ids.includes(skill.skill_id)).map(skill=><span key={skill.skill_id}>{skill.name}</span>)}</div></div>)}</div></section>
        <section className="portfolio-preview__about" id="about">
          <p className="portfolio-preview__eyebrow">05 / ABOUT</p>
          <h2>A little about me</h2>
          <div className="portfolio-preview__about-copy">
            <p>I'm Toni! I'm an analyst by profession, a problem-solver by nature, and someone who has a hard time leaving a good idea alone.</p>
            <p>I love figuring out how things work, why they work the way they do, and whether there's a better way to do them. Sometimes that means digging into data to answer a question. Other times, it means realizing the question could be answered a whole lot easier if I just built something.</p>
            <p>And honestly, that's my favorite part.</p>
            <p>I love the process of taking an idea from <em>“I wonder if...”</em> to <em>“Wait, I think I can actually make this work.”</em> I'm constantly learning new tools, testing different approaches, and finding new things I want to try. The more I learn, the more possibilities I see.</p>
            <p>What matters most to me isn't just building something clever. It's building something useful. Something that makes another person's day easier, helps them understand something they couldn't before, or gives them the confidence to do more themselves.</p>
            <p>I'm still figuring out exactly where analytics ends and engineering begins for me. But I've realized I don't particularly want to choose between them. I like living somewhere in the middle.</p>
          </div>
          <a href={content.profile.linkedin_url} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
        </section>
        <footer className="portfolio-preview__footer"><span>TONI / PORTFOLIO</span><span>Analytics · Engineering · Product thinking</span></footer>
      </main>
    </>
  );
});
export const getStaticProps: GetStaticProps<Props> = async () => ({props: {content: loadPortfolioContent(false)}});
export default Preview;
