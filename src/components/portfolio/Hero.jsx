import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 w-full max-w-6xl mx-auto pt-20">
      
      {/* Flat SVG Canopy Background */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none z-0">
        <motion.svg 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back layer */}
          <g fill="#2a362a" opacity="0.04">
            <circle cx="10%" cy="-10%" r="400" />
            <circle cx="50%" cy="-20%" r="550" />
            <circle cx="90%" cy="-5%" r="450" />
          </g>
          {/* Mid layer */}
          <g fill="#2a362a" opacity="0.06">
            <circle cx="25%" cy="-15%" r="350" />
            <circle cx="70%" cy="-10%" r="400" />
          </g>
          {/* Front layer */}
          <g fill="#2a362a" opacity="0.08">
            <circle cx="40%" cy="-20%" r="300" />
            <circle cx="85%" cy="-15%" r="250" />
            <circle cx="-5%" cy="-5%" r="200" />
          </g>
        </motion.svg>
      </div>

      {/* Minimal Top-left details connecting to the trunk concept */}
      <motion.div
        className="absolute top-32 left-8 md:left-[50%] md:ml-8 flex flex-col gap-2 z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-sm font-bold uppercase tracking-widest text-forest-900">— Software Engineer</span>
        <span className="text-sm font-bold uppercase tracking-widest text-clay-500">— Community Builder</span>
      </motion.div>

      {/* Main Typography Block */}
      <div className="relative z-10 w-full mt-32 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:pl-16 lg:pl-32"
        >
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-forest-900 leading-none"
            >
              WILLIAM
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-end gap-6 mb-12">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-forest-900 leading-none"
            >
              DELAOSA
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden md:flex w-24 h-24 rounded-full bg-clay-500 items-center justify-center text-[#fdfbf7] text-3xl shrink-0 -translate-y-4 shadow-sm"
            >
              🏃🏽‍♂️
            </motion.div>
          </div>

          <motion.div
            className="flex items-center gap-3 text-forest-800 font-bold uppercase tracking-widest mb-12 ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MapPin className="w-5 h-5 text-clay-500" />
            <span>Miami, Florida</span>
          </motion.div>

          {/* Links / Actions as raw text */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 md:gap-16 ml-2 font-bold text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-3 hover:text-clay-500 transition-colors text-left"
            >
              <span className="w-8 h-1 bg-forest-900 group-hover:bg-clay-500 transition-colors block" />
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-3 hover:text-clay-500 transition-colors text-left"
            >
              <span className="w-8 h-1 bg-forest-900 group-hover:bg-clay-500 transition-colors block" />
              Get In Touch
            </button>
          </motion.div>

          {/* Socials absolute bottom */}
          <motion.div
            className="flex gap-8 mt-16 md:mt-24 ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/WillDela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-900 hover:text-clay-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/williamdelaosa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-900 hover:text-clay-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:wdelaosa24@gmail.com"
              className="text-forest-900 hover:text-clay-500 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}