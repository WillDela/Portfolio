import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { experience, profile } from '../../data/portfolio';
import OakTree from './OakTree';

export default function Hero() {
  return (
    <section id="home" className="hero section-anchor" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Software engineer <span aria-hidden="true">/</span> FIU CS ’27</p>
          <h1 id="hero-title">William<br /><span>Delaosa.</span></h1>
          <p className="hero__statement">I build products people can use.</p>
          <p className="hero__description">
            At {experience.datadog.company}, I took a customer-requested feature from planning to production.
            I also built Korsana, a live running coach shaped by my love of the sport.
          </p>
          <div className="hero__actions">
            <a className="button button--solid" href="#projects">Explore my work <ArrowDownRight size={18} aria-hidden="true" /></a>
            <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="hero__proof" aria-label="Selected highlights">
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <div className="hero__art-frame">
            <OakTree />
          </div>
          <span className="hero__art-note">Always growing <span>↗</span></span>
        </div>
      </div>
      <div className="hero__footer">
        <div className="container hero__footer-inner">
          <span>Based in {profile.location}</span>
          <span>Building for people, on and off the run.</span>
        </div>
      </div>
    </section>
  );
}
