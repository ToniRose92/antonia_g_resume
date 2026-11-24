import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import {useMemo, useState} from 'react';
import {loadPortfolioContent, PortfolioContent} from '../lib/portfolio-content';

type Props = {content: PortfolioContent};
const Preview: NextPage<Props> = ({content}) => {
  const [filter, setFilter] = useState('All');
  const types = useMemo(() => ['All', ...Array.from(new Set(content.projects.map(p => p.project_type)))], [content.projects]);
  const shown = content.projects.filter(p => filter === 'All' || p.project_type === filter);
  return (
    <>
      <Head><title>Toni | Portfolio concept preview</title><meta name="description" content="Preview of a project-first analytics portfolio."/><meta name="robots" content="noindex,nofollow"/></Head>
      <main className="portfolio-preview">
        <header className="portfolio-preview__nav">
          <a href="#top" className="portfolio-preview__wordmark">TONI<span>.</span></a>
          <nav aria-label="Portfolio preview navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="/#resume">Existing résumé</a></nav>
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
              <div className="portfolio-preview__graphic" aria-hidden="true"><span/><span/><span/></div>
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
};
export const getStaticProps: GetStaticProps<Props> = async () => ({props: {content: loadPortfolioContent(true)}});
export default Preview;
