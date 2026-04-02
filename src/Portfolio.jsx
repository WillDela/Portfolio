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
    <div className="bg-earth-50 min-h-screen font-sans text-forest-900">

      {/* Root background — sweeping arcs that connect the hero tree to the page */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0 w-full max-w-3xl"
        style={{ top: '92vh' }}
      >
        <svg viewBox="0 0 800 800" width="100%" height="800" preserveAspectRatio="xMidYMin slice">
          <g opacity="0.04" stroke="#1e2d1e" fill="none" strokeLinecap="round">
            <path d="M 400,0 L 400,800"            strokeWidth="8" />
            <path d="M 400,0 Q 400,400 0,600"      strokeWidth="5" />
            <path d="M 400,0 Q 400,400 800,600"    strokeWidth="5" />
            <path d="M 400,0 Q 420,300 100,800"    strokeWidth="3.5" />
            <path d="M 400,0 Q 380,300 700,800"    strokeWidth="3.5" />
            <path d="M 400,0 Q 450,200 150,450"    strokeWidth="2.5" />
            <path d="M 400,0 Q 350,200 650,450"    strokeWidth="2.5" />
            <path d="M 400,0 Q 480,150 200,300"    strokeWidth="2" />
            <path d="M 400,0 Q 320,150 600,300"    strokeWidth="2" />
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
