import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import Skills from './components/portfolio/Skills';
import Leadership from './components/portfolio/Leadership';
import Contact from './components/portfolio/Contact';

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Skills', 'Community', 'Contact'];

export default function Portfolio() {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const ids = ['hero', 'about', 'experience', 'projects', 'skills', 'leadership', 'contact'];
      const mid = window.scrollY + window.innerHeight / 2;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (mid >= offsetTop && mid < offsetTop + offsetHeight) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="bg-earth-50 min-h-screen font-sans text-forest-900 relative overflow-hidden">

      {/* Root background — subtle arcs connecting the hero tree and meandering through the page */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0 w-full max-w-5xl"
        style={{ top: '80vh', height: '5000px' }}
      >
        <svg viewBox="0 0 800 5000" width="100%" height="5000" preserveAspectRatio="none">
          <g opacity="0.15" stroke="#1e2d1e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Center Trunk/Root mass dropping from Hero */}
            <path d="M 400,0 C 400,300 380,600 350,900" strokeWidth="32" />
            <path d="M 400,0 C 400,400 450,700 480,1000" strokeWidth="24" />
            
            {/* Huge Left Root System (Frames the left gutter) */}
            <path d="M 400,0 C 300,500 50,1000 40,2000 S 150,3000 60,4000 S 100,4800 50,5000" strokeWidth="24" />
            <path d="M 380,200 C 250,800 100,1200 80,1800 S 200,2800 120,3500 S 180,4500 80,5000" strokeWidth="16" />
            <path d="M 300,500 C 150,700 20,1300 10,1800" strokeWidth="12" />
            
            {/* Huge Right Root System (Frames the right gutter) */}
            <path d="M 400,0 C 500,600 750,1100 760,2100 S 650,3100 740,4100 S 700,4800 750,5000" strokeWidth="24" />
            <path d="M 420,200 C 550,900 700,1300 720,1900 S 600,2900 680,3600 S 620,4600 720,5000" strokeWidth="16" />
            <path d="M 500,600 C 650,800 780,1400 790,1900" strokeWidth="12" />

            {/* Connecting Vines/Roots that crawl horizontally behind sections */}
            <path d="M 80,1800 C 250,1900 450,1850 550,2100" strokeWidth="8" />
            <path d="M 720,1900 C 500,2000 300,2250 150,2500" strokeWidth="8" />
            <path d="M 60,4000 C 300,4100 500,3950 650,4200" strokeWidth="10" />

            {/* Accent Root Tips / Spurs */}
            <path d="M 40,2000 Q 150,2050 100,2200" strokeWidth="8" />
            <path d="M 760,2100 Q 600,2150 680,2300" strokeWidth="8" />
            <path d="M 120,3500 Q 250,3600 200,3800" strokeWidth="10" />
            <path d="M 680,3600 Q 550,3700 600,3900" strokeWidth="10" />
          </g>
        </svg>
      </div>

      {/* Fixed nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-earth-50/92 backdrop-blur-sm border-b border-forest-900/8' : ''
      }`}>
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-5">
          <button
            onClick={() => goto('hero')}
            className="font-display font-bold text-xl tracking-tight text-forest-900 hover:text-clay-500 transition-colors"
          >
            W.D.
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const id = item === 'Community' ? 'leadership' : item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => goto(id)}
                  className={`text-sm font-medium transition-colors ${
                    active === id
                      ? 'text-clay-500'
                      : 'text-forest-900/50 hover:text-forest-900'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button
            className="md:hidden text-forest-900/60 hover:text-forest-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-earth-50 flex flex-col items-center justify-center gap-10">
          {NAV_ITEMS.map((item) => {
            const id = item === 'Community' ? 'leadership' : item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => goto(id)}
                className="font-display font-bold text-4xl text-forest-900 hover:text-clay-500 transition-colors tracking-tight"
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      {/* Page sections */}
      <div className="relative z-10">
        <Hero scrollToSection={goto} />
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
