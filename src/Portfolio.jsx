import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import Skills from './components/portfolio/Skills';
import Leadership from './components/portfolio/Leadership';
import Contact from './components/portfolio/Contact';

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Skills', 'Leadership', 'Contact'];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['hero', ...NAV_ITEMS.map(i => i.toLowerCase())];
      const mid = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (mid >= offsetTop && mid < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative bg-earth-50 min-h-screen font-sans text-forest-900">

      {/* Subtle root background — connects hero tree to the rest of the page */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0 w-full max-w-3xl"
        style={{ top: '90vh' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 800 800" width="100%" height="800" preserveAspectRatio="xMidYMin slice">
          <g opacity="0.04" stroke="#1e2d1e" fill="none" strokeLinecap="round">
            {/* Center straight-ish root */}
            <path d="M 400,0 L 400,800" strokeWidth="8" />
            
            {/* Elegant sweeping arcs outward */}
            <path d="M 400,0 Q 400,400 0,600" strokeWidth="5" />
            <path d="M 400,0 Q 400,400 800,600" strokeWidth="5" />
            
            <path d="M 400,0 Q 420,300 100,800" strokeWidth="3.5" />
            <path d="M 400,0 Q 380,300 700,800" strokeWidth="3.5" />
            
            <path d="M 400,0 Q 450,200 150,450" strokeWidth="2.5" />
            <path d="M 400,0 Q 350,200 650,450" strokeWidth="2.5" />
            
            <path d="M 400,0 Q 480,150 200,300" strokeWidth="2" />
            <path d="M 400,0 Q 320,150 600,300" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-earth-50/90 backdrop-blur-sm border-b border-forest-900/8' : ''
        }`}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-5">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display font-bold text-xl text-forest-900 hover:text-clay-500 transition-colors tracking-tight"
          >
            W.D.
          </button>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-clay-500'
                    : 'text-forest-900/60 hover:text-forest-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-forest-900/70 hover:text-forest-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-earth-50 flex flex-col items-center justify-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-display font-bold text-3xl text-forest-900 hover:text-clay-500 transition-colors tracking-tight"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Sections */}
      <div className="relative z-10">
        <Hero scrollToSection={scrollTo} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </div>
    </div>
  );
}
