import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Award,
  Briefcase,
  Code2,
  Rocket,
  Users,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Trophy,
  Zap,
  Menu,
  X
} from 'lucide-react';

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
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-slate-800/80 backdrop-blur-lg rounded-full px-6 py-3 border border-slate-700/50">
        <div className="flex gap-6">
          {['About', 'Experience', 'Projects', 'Skills', 'Leadership', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-slate-800/80 backdrop-blur-lg rounded-full p-3 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-20 right-4 z-40 bg-slate-800/95 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {['About', 'Experience', 'Projects', 'Skills', 'Leadership', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-left text-base font-medium transition-colors py-2 ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Track Line Decoration */}
      <div className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
      <div className="fixed right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent pointer-events-none" />

      {/* Sections */}
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <Contact />
    </div>
  );
}