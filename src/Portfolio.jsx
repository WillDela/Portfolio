import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/portfolio/Hero';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import About from './components/portfolio/About';
import Leadership from './components/portfolio/Leadership';
import Skills from './components/portfolio/Skills';
import Contact from './components/portfolio/Contact';

const links = [
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Community', id: 'community' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = ['home', ...links.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-15% 0px -50% 0px', threshold: [0, 0.1, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="wordmark" href="#home" onClick={closeMenu} aria-label="William Delaosa, back to top">
            W<span>.</span>D
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
          <nav id="primary-navigation" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Primary navigation">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                aria-current={active === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Leadership />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
