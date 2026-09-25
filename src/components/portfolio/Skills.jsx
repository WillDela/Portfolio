import { skills } from '../../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section section--sand section-anchor" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="05 / Toolkit"
          title="How I build."
          intro="A focused selection of the languages, frameworks, and tools I’ve used across internships and projects."
        />
        <div className="skills-grid">
          {skills.map(({ name, items }, index) => (
            <div className="skills-group" key={name}>
              <div className="skills-group__heading">
                <span>0{index + 1}</span>
                <h3>{name}</h3>
              </div>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
