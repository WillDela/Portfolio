import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-anchor" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow">06 / Contact</p>
        <div className="contact-section__grid">
          <div>
            <h2 id="contact-title">Let’s make<br /><span>something useful.</span></h2>
            <p>I’m looking for software engineering internships and enjoy talking about thoughtful products, reliable systems, and running.</p>
            <a className="button button--solid" href={`mailto:${profile.email}`}>
              Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <nav className="contact-links" aria-label="Contact links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={20} aria-hidden="true" /><span>Email <small>{profile.email}</small></span><ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} aria-hidden="true" /><span>GitHub <small>github.com/WillDela</small></span><ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} aria-hidden="true" /><span>LinkedIn <small>linkedin.com/in/williamdelaosa</small></span><ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </nav>
        </div>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location} <span aria-hidden="true">/</span> Florida International University</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
