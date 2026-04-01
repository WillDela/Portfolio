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
    <div className="relative bg-[#fdfbf7] min-h-screen font-sans text-forest-900 overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-clay-500 via-forest-400 to-earth-400 origin-left z-50 rounded-r-full"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-white/70 backdrop-blur-xl shadow-lg shadow-forest-900/5 rounded-full px-6 py-3 border border-earth-200">
        <div className="flex gap-6">
          {['About', 'Experience', 'Projects', 'Skills', 'Leadership', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-forest-600 font-bold bg-earth-100 px-3 py-1 rounded-full'
                  : 'text-forest-700 hover:text-clay-500 hover:bg-earth-50 px-3 py-1 rounded-full'
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
          className="bg-white/70 shadow-lg shadow-forest-900/5 backdrop-blur-xl rounded-full p-3 border border-earth-200 text-forest-700 hover:text-forest-900 transition-colors"
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
          className="md:hidden fixed top-20 right-4 z-40 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-earth-200 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {['About', 'Experience', 'Projects', 'Skills', 'Leadership', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-left text-base font-medium transition-colors py-2 ${
                  activeSection === item.toLowerCase()
                    ? 'text-forest-600 font-bold bg-earth-100 rounded-lg px-2'
                    : 'text-forest-700 hover:text-clay-500 hover:bg-earth-50 rounded-lg px-2'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Subtle background noise/texture can be added here if desired, removing track lines */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

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