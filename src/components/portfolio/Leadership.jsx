import { community } from '../../data/portfolio';
import Media from './Media';
import SectionHeading from './SectionHeading';

export default function Leadership() {
  return (
    <section id="community" className="section section--cream section-anchor" aria-labelledby="community-title">
      <div className="container">
        <SectionHeading
          id="community-title"
          eyebrow="04 / Community"
          title="Built together."
          intro="'The organizer has the best position in a race' - Lazarus Lake's message he wrote to me with his signature when I met him."
        />
        <div className="community-grid">
          <div className="community-copy">
            <p className="eyebrow">{community.role} <span aria-hidden="true">/</span> {community.period}</p>
            <h3>{community.name}</h3>
            <p>We started with a few runners at FIU and grew into a welcoming club with 3–4 group runs each week. I helped build partnerships across campus and training plans for runners at every level.</p>
            <br />
            <p>The best part is seeing more than 50 beginners progress from their first 5K toward half and full marathons. Over the years, we as a panther community have created an environment where everyone can feel welcomed and supported to run. No matter your experience level, Panthers Run Club is a place for you to stay healthy and active!</p>
            <dl className="community-stats">
              {community.stats.map(({ value, label }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="community-photo">
            <Media src={community.image} alt="Panthers Run Club members together at a group run" label="Panthers Run Club" className="community-photo__image" />
          </div>
        </div>
      </div>
    </section>
  );
}
