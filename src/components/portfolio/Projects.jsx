import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import Media from './Media';
import SectionHeading from './SectionHeading';

function Stack({ items }) {
  return <ul className="stack-list" aria-label="Technologies used">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ProjectCard({ project }) {
  const links = project.links ?? [{ label: project.linkLabel, url: project.url }];

  return (
    <article className="project-card">
      <div className={`project-card__image-wrap${project.imageFit === 'contain' ? ' project-card__image-wrap--contain' : ''}${project.imageTheme === 'dark' ? ' project-card__image-wrap--dark' : ''}`}>
        <Media src={project.image} alt={project.imageAlt} label={project.name} className={`project-card__image${project.imageFit === 'contain' ? ' project-card__image--contain' : ''}`} />
        {project.imageLabel && <span className="project-card__image-note">{project.imageLabel}</span>}
      </div>
      <div className="project-card__body">
        <div className="project-card__topline">
          <span className="eyebrow">{project.type}</span>
          {project.period && <span>{project.period}</span>}
        </div>
        <h3>{project.name}</h3>
        {project.award && <p className="award-tag">{project.award}</p>}
        {project.status && <p className="project-status">{project.status}</p>}
        <p>{project.summary}</p>
        {project.detail && <p>{project.detail}</p>}
        {project.stack?.length > 0 && <Stack items={project.stack} />}
        <div className="project-card__links">
          {links.map((link) => (
            <a className="text-link" href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
              {link.label} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { korsana } = projects;
  const selectedProjects = [
    projects.legalease,
    projects.pawlinawalk,
    projects.sylly,
    projects.travelmaxx,
    projects.myalbumlist,
    projects.classifier,
  ];
  const total = selectedProjects.length + 1;

  return (
    <section id="projects" className="section section--cream section-anchor" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="02 / Selected work"
          title="Ideas made real."
          intro="Projects where product thinking, engineering, and the people on the other side of the screen meet."
        />

        <article className="featured-project">
          <div className="featured-project__visual">
            <Media src={korsana.image} alt={korsana.imageAlt} label="Korsana" className="featured-project__image" />
            <span className="featured-project__number" aria-hidden="true">01 / {String(total).padStart(2, '0')}</span>
          </div>
          <div className="featured-project__content">
            <div className="featured-project__topline">
              <span className="pill pill--live"><span className="status-dot" aria-hidden="true" />{korsana.status}</span>
              <span>{korsana.period}</span>
            </div>
            <p className="eyebrow">{korsana.type}</p>
            <h3>{korsana.name}</h3>
            <p className="featured-project__summary">{korsana.summary}</p>
            <ul className="detail-list">
              {korsana.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <Stack items={korsana.stack} />
            <a className="button button--outline" href={korsana.url} target="_blank" rel="noopener noreferrer">
              Open live product <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </article>

        <div className="project-grid">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
