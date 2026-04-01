import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Experience from './components/portfolio/Experience';
import Projects from './components/portfolio/Projects';
import Skills from './components/portfolio/Skills';
import Leadership from './components/portfolio/Leadership';
import Contact from './components/portfolio/Contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative bg-[#fdfbf7] min-h-screen font-sans text-forest-900 selection:bg-clay-500 selection:text-white overflow-hidden">
      
      {/* The Central Organic SVG Trunk */}
      <svg 
        className="fixed left-4 md:left-1/2 top-0 bottom-0 w-16 md:w-32 h-full transform -translate-x-1/2 pointer-events-none z-0 text-clay-800 opacity-15" 
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M45,0 C55,10 40,25 48,40 C55,55 42,75 50,90 C55,95 40,98 30,100 L70,100 C60,98 45,95 50,90 C58,75 45,55 52,40 C60,25 45,10 55,0 Z" 
          fill="currentColor" 
        />
        {/* Bark texture lines */}
        <path d="M48,10 Q50,15 47,20 M52,30 Q54,40 50,50 M51,70 Q49,80 53,90 M49,15 Q47,25 50,35" stroke="#fdfbf7" strokeWidth="0.5" fill="none" opacity="0.3" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Minimalist Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference text-earth-50 font-medium">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <span className="text-xl font-black tracking-tight select-none">W.D.</span>
          <div className="hidden md:flex gap-8 text-sm font-black uppercase tracking-widest">
            {['About', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-clay-500 transition-colors"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            className="md:hidden hover:text-clay-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-forest-900 text-[#fdfbf7] flex flex-col items-center justify-center gap-8">
          {['About', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-2xl font-black uppercase tracking-widest hover:text-clay-500 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Sections Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Leadership />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}