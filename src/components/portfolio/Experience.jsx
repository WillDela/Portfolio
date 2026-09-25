import { ArrowUpRight, Play } from 'lucide-react';
import { experience } from '../../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { datadog, fiu } = experience;

  return (
    <section id="experience" className="section section--ink section-anchor" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          eyebrow="01 / Experience"
          id="experience-title"
          title="Built, shipped, supported."
          intro="My proudest accomplishment in my career is my project at Datadog, a legacy feature that will stay on the platform for years to come!"
          light
        />

        <article className="experience-feature">
          <div className="experience-feature__brand">
            <img src="/datadog-logo.svg" alt="Datadog" width="96" height="96" />
            <div>
              <span className="pill">Summer 2026</span>
              <p>{datadog.company} <span aria-hidden="true">/</span> {datadog.location}</p>
            </div>
          </div>
          <div className="experience-feature__body">
            <p className="eyebrow">{datadog.role}</p>
            <h3>{datadog.feature}</h3>
            <p className="experience-feature__summary">{datadog.summary}</p>
            <ul className="detail-list">
              {datadog.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <a className="experience-feature__demo" href={datadog.demoUrl} target="_blank" rel="noopener noreferrer">
              <span className="experience-feature__demo-play"><Play size={20} fill="currentColor" aria-hidden="true" /></span>
              <span className="experience-feature__demo-copy">
                <span>Product demo · YouTube</span>
                <strong>Watch conditional formatting in action</strong>
              </span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </div>
          <div className="outcome-grid" aria-label="Datadog internship outcomes">
            {datadog.outcomes.map(({ value, label }) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="experience-secondary">
          <div>
            <p className="eyebrow">{fiu.period} <span aria-hidden="true">/</span> {fiu.location}</p>
            <h3>{fiu.role}</h3>
            <p className="experience-secondary__company">{fiu.company}</p>
          </div>
          <p>{fiu.summary}</p>
        </article>
      </div>
    </section>
  );
}
