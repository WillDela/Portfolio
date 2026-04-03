import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

// ─── Procedural Canopy Generation ─────────────────────────────────────────────
// Generates hundreds of horizontal elliptical puffs resembling a classic Chestnut Oak crown.

function pseudoRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const generateCanopy = () => {
  const leaves = [];
  let seed = 64; // Fresh deterministic seed
  
  // Anchor points for a beautiful, full, round oak crown
  const regions = [
    { cx: 125, cy: 140, spread: 80, count: 45 },
    { cx: 230, cy: 80,  spread: 75, count: 40 },
    { cx: 300, cy: 60,  spread: 90, count: 55 },
    { cx: 370, cy: 80,  spread: 75, count: 40 },
    { cx: 475, cy: 140, spread: 80, count: 45 },
    // Fill out the belly of the canopy
    { cx: 200, cy: 150, spread: 65, count: 35 },
    { cx: 400, cy: 150, spread: 65, count: 35 },
    { cx: 300, cy: 130, spread: 80, count: 45 },
    // Outer edges
    { cx: 80,  cy: 200, spread: 60, count: 25 },
    { cx: 520, cy: 200, spread: 60, count: 25 },
  ];

  const colors = [
    '#1e2d1e', // Darkest forest
    '#253825', // Mid forest
    '#2d442d', // Lighter forest
    '#4a7c59', // Moss
    '#1e2d1e', // Bias toward dark base
  ];

  regions.forEach((region) => {
    for (let j = 0; j < region.count; j++) {
      const angle = pseudoRandom(seed++) * Math.PI * 2;
      const dist = pseudoRandom(seed++) * region.spread;
      const cx = region.cx + Math.cos(angle) * dist;
      const cy = region.cy + Math.sin(angle) * dist * 0.75; 
      
      const rx = 16 + pseudoRandom(seed++) * 28; // Tightly controlled horizontal clusters
      const ry = 10 + pseudoRandom(seed++) * 18; // Flatter vertical
      
      const color = colors[Math.floor(pseudoRandom(seed++) * colors.length)];
      const delay = 0.8 + (1 - cy/250) * 1.5 + pseudoRandom(seed++) * 0.5;

      leaves.push({ cx, cy, rx, ry, color, delay });
    }
  });

  return leaves;
};

const CANOPY_LEAVES = generateCanopy();

// ─── Sub-components ───────────────────────────────────────────────────────────

function CanopyLeaf({ cx, cy, rx, ry, color, delay }) {
  return (
    <motion.ellipse
      cx={cx} cy={cy} rx={rx} ry={ry}
      fill={color}
      opacity={0.92}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.92 }}
      transition={{ duration: 0.8, delay, ease: [0.34, 1.3, 0.64, 1] }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden bg-earth-50"
    >
      {/* The Realistic Oak Tree */}
      <div className="w-full max-w-[550px] mx-auto relative z-10 drop-shadow-xl mt-12 md:mt-0">
        <svg
          viewBox="0 0 600 490"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id="trunk-grow">
              <motion.rect
                x="-100" y="0" width="800"
                initial={{ y: 550, height: 0 }}
                animate={{ y: -50, height: 600 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </clipPath>
          </defs>

          {/* Sturdy, well-proportioned brown oak trunk */}
          <path 
            d="
              M 250 480 
              Q 280 340, 285 240
              Q 250 200, 120 150
              L 125 140
              Q 255 190, 290 220
              Q 290 150, 230 80
              L 245 75
              Q 295 145, 300 210
              Q 305 145, 355 75
              L 370 80
              Q 310 150, 310 220
              Q 345 190, 475 140
              L 480 150
              Q 350 200, 315 240
              Q 320 340, 350 480 Z
            " 
            fill="#5c4133" 
            clipPath="url(#trunk-grow)"
          />

          {/* Lush Elliptical Canopy */}
          {CANOPY_LEAVES.map((leaf, i) => (
            <CanopyLeaf key={`cl-${i}`} {...leaf} />
          ))}
        </svg>
      </div>

      {/* Bottom Content Area */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-20 mt-10 md:mt-8">
        
        {/* Actual Name (smaller, cleaner grounding element now that the giant text is in bg) */}
        <motion.h2
          className="font-display font-medium text-forest-900 tracking-widest leading-none text-2xl md:text-4xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 2.6 }}
        >
          WILLIAM DELAOSA
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="h-px bg-forest-900/20 max-w-xs mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Tagline */}
        <motion.p
          className="text-xs md:text-sm font-medium tracking-widest uppercase text-forest-900/50 mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.0 }}
        >
          Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Builder&nbsp;&nbsp;·&nbsp;&nbsp;Runner&nbsp;&nbsp;·&nbsp;&nbsp;Miami, FL
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-10 mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.2 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group flex items-center gap-3 text-sm font-semibold text-forest-900 hover:text-clay-500 transition-colors"
          >
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
            View Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center gap-3 text-sm font-semibold text-forest-900 hover:text-clay-500 transition-colors"
          >
            Get in Touch
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.4 }}
        >
          <a href="https://github.com/WillDela" target="_blank" rel="noopener noreferrer"
            className="text-forest-900/40 hover:text-forest-900 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/williamdelaosa" target="_blank" rel="noopener noreferrer"
            className="text-forest-900/40 hover:text-forest-900 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:wdelaosa24@gmail.com"
            className="text-forest-900/40 hover:text-forest-900 transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
