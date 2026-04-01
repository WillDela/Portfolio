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
    <div className="relative bg-earth-50 min-h-screen font-sans text-forest-900 selection:bg-clay-500 selection:text-white">
      
      {/* The Central Trunk */}
      <div className="fixed left-4 md:left-1/2 top-0 bottom-0 w-px bg-forest-900 opacity-30 transform md:-translate-x-1/2 pointer-events-none z-0" />

      {/* Minimalist Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference text-earth-50 font-medium">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <span className="text-xl font-bold tracking-tight select-none">W.D.</span>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            {['About', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-clay-500 transition-colors"
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
        <div className="fixed inset-0 z-40 bg-forest-900 text-earth-50 flex flex-col items-center justify-center gap-8">
          {['About', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-2xl uppercase tracking-widest hover:text-clay-500 transition-colors"
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