import { profile } from '../../data/portfolio';
import Media from './Media';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section section--sand section-anchor" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="03 / About"
          title="Curious by nature."
          intro="I like the full journey: understanding a problem, building the system, and seeing someone use it."
        />
        <div className="about-grid">
          <div className="about-photo">
            <Media src={profile.portrait} alt="Portrait of William Delaosa" label="William Delaosa" className="about-photo__image" />
            <span className="about-photo__caption">William Delaosa <span aria-hidden="true">↗</span></span>
          </div>
          <div className="about-copy">
            <p className="about-copy__lead">I’m a computer science student at Florida International University who enjoys turning complex ideas into useful, dependable products.</p>
            <p>At Datadog, that meant taking a requested Sheets feature from an open-ended brief to a production release, owning everything from the reactive rule engine to the final rollout. Outside of work, I care about building things that solve problems I've actually lived with. Korsana came out of training for the Miami Marathon and wanting more than raw activity data, so I built an AI training platform that turns Strava data into readiness scores instead of guesswork. There is so much I can talk about and many plans on my side projects. Korsana is my main focus right now as it is a service I want runners to be able to use every day.</p>
            <p>Running has shaped how I approach almost everything else. As president of FIU's Panthers Run Club, I've coached runners from their first 5K through full marathons, and that same patience, staying with hard problems, paying attention to feedback, and making steady progress, is exactly what I try to bring to software. Consistency means everything, so I want to bring that mindset from running into my career as well which has taken me pretty far.</p>
            <p>I'm currently interested in how intelligent features become genuinely useful and personal, not just technically impressive, and I'm looking for the next place to keep building that.</p>
            <div className="education-block">
              <p className="eyebrow">Education</p>
              <h3>Florida International University</h3>
              <p>B.A. in Computer Science <span aria-hidden="true">·</span> Expected {profile.graduation}</p>
              <p>GPA {profile.gpa}</p>
              <p className="education-block__courses">Selected coursework: Data Structures, Operating Systems, Database Management, Software Engineering, Intro to AI, Intro to Deep Learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
