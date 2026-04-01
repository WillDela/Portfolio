import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Editorial Tree Illustration */}
      <motion.div 
        className="w-full max-w-[550px] mx-auto mb-6 md:mb-8"
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/hero-tree.png"
          alt="Editorial Tree"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* Name */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="overflow-hidden mb-1">
          <motion.h1
            className="font-display font-bold text-forest-900 tracking-tighter leading-none text-6xl md:text-8xl lg:text-[9rem]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          >
            WILLIAM
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-display font-bold text-forest-900 tracking-tighter leading-none text-6xl md:text-8xl lg:text-[9rem]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.32 }}
          >
            DELAOSA
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-forest-900/20 max-w-sm mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-forest-800/70 font-medium tracking-widest uppercase text-xs md:text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Builder&nbsp;&nbsp;·&nbsp;&nbsp;Runner&nbsp;&nbsp;·&nbsp;&nbsp;Miami, FL
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-10 justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group flex items-center gap-3 font-semibold text-forest-900 hover:text-clay-500 transition-colors text-sm"
          >
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
            View Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center gap-3 font-semibold text-forest-900 hover:text-clay-500 transition-colors text-sm"
          >
            Get in Touch
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          <a
            href="https://github.com/WillDela"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-900/50 hover:text-forest-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/williamdelaosa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-900/50 hover:text-forest-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:wdelaosa24@gmail.com"
            className="text-forest-900/50 hover:text-forest-900 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
