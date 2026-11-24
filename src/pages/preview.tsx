/* eslint-disable react/jsx-sort-props, simple-import-sort/imports -- Preview markup will be formatted during the UI refactor. */
import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {memo, useMemo, useState} from 'react';
import {loadPortfolioContent, PortfolioContent} from '../lib/portfolio-content';

type Props = {content: PortfolioContent};
const Preview: NextPage<Props> = memo(({content}) => {
  const [filter, setFilter] = useState('All');
  const types = useMemo(() => ['All', ...Array.from(new Set(content.projects.map(p => p.project_type)))], [content.projects]);
  const shown = content.projects.filter(p => filter === 'All' || p.project_type === filter);
  return (
    <>
      <Head><title>Toni | Portfolio concept preview</title><meta name="description" content="Preview of a project-first analytics portfolio."/><meta name="robots" content="noindex,nofollow"/></Head>
      <main className="portfolio-preview">
        <header className="portfolio-preview__nav">
          <a href="#top" className="portfolio-preview__wordmark">TONI<span>.</span></a>
          <nav aria-label="Portfolio preview navigation"><a href="#projects">Projects</a><a href="#about">About</a><Link href="/#resume">Existing résumé</Link></nav>
        </header>
        <section className="portfolio-preview__hero" id="top">
          <p className="portfolio-preview__eyebrow">ANALYTICS / ENGINEERING / PRODUCT THINKING</p>
          <h1>Make complexity <em>make sense.</em></h1>
          <p className="portfolio-preview__intro">{content.profile.summary}</p>
          <div className="portfolio-preview__actions"><a className="portfolio-preview__primary" href="#projects">Explore projects <span aria-hidden="true">↗</span></a><a href={content.profile.github_url} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          <div className="portfolio-preview__orb" aria-hidden="true"><span/><span/><span/></div>
        </section>
        <section className="portfolio-preview__work" id="projects">
          <div className="portfolio-preview__sectionhead"><div><p className="portfolio-preview__eyebrow">01 / SELECTED WORK</p><h2>Built around the problem.</h2></div><p>Explore the thinking behind the work.</p></div>
          <div className="portfolio-preview__filters" role="group" aria-label="Filter projects">
            {types.map(type => <button key={type} type="button" aria-pressed={filter === type} onClick={() => setFilter(type)}>{type}</button>)}
          </div>
          <div className="portfolio-preview__grid">
            {shown.map((project, index) => <article key={project.project_id} className="portfolio-preview__card">
              <div className="portfolio-preview__cardtop"><span>{String(index + 1).padStart(2, '0')} / {project.project_type}</span><span>{project.status.replace(/_/g, ' ')}</span></div>
              <div aria-hidden="true" className="portfolio-preview__graphic">
                {project.project_id === 'proj_housing' ? (
                  <div className="portfolio-preview__visual portfolio-preview__visual--housing">
                    <div className="portfolio-preview__visual-label">ALLOCATION MODEL <span>ILLUSTRATIVE</span></div>
                    <div className="portfolio-preview__allocation"><span style={{width: '58%'}}/><span style={{width: '42%'}}/></div>
                    <div className="portfolio-preview__visual-legend"><span>HOUSEHOLD A</span><span>HOUSEHOLD B</span></div>
                  </div>
                ) : project.project_id === 'proj_movies' ? (
                  <div className="portfolio-preview__visual portfolio-preview__visual--movies">
                    <div className="portfolio-preview__visual-label">SENTIMENT × REVENUE <span>SCHEMATIC</span></div>
                    <div className="portfolio-preview__plot"><i/><i/><i/><i/><i/><i/><i/></div>
                  </div>
                ) : project.project_id === 'proj_shelter' ? (
                  <div className="portfolio-preview__visual portfolio-preview__visual--shelter">
                    <div className="portfolio-preview__visual-label">SCENARIO MODEL <span>CONCEPT</span></div>
                    <div className="portfolio-preview__scenarios"><span/><span/><span/><span/><span/></div>
                  </div>
                ) : (
                  <div className="portfolio-preview__visual portfolio-preview__visual--generic">
                    <div className="portfolio-preview__visual-label">ANALYTICS WORKFLOW <span>OVERVIEW</span></div>
                    <div className="portfolio-preview__pipeline"><span>INPUT</span><b>→</b><span>MODEL</span><b>→</b><span>INSIGHT</span></div>
                  </div>
                )}
              </div>
              <h3>{project.title}</h3><p>{project.summary}</p>
              <span className="portfolio-preview__draft">Concept preview · full case study coming later</span>
            </article>)}
            {shown.length === 0 && <p>No projects in this category.</p>}
          </div>
        </section>
        <section className="portfolio-preview__about" id="about"><p className="portfolio-preview__eyebrow">02 / ABOUT</p><h2>Curiosity, structure, and purposeful experimentation.</h2><p>{content.profile.headline}</p><a href={content.profile.linkedin_url} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></section>
        <footer className="portfolio-preview__footer"><span>TONI / PORTFOLIO</span><span>Design preview · content subject to review</span></footer>
      </main>
    </>
  );
});
export const getStaticProps: GetStaticProps<Props> = async () => ({props: {content: loadPortfolioContent(true)}});
export default Preview;
