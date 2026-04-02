import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

// ─── Tree SVG data ────────────────────────────────────────────────────────────

const TRUNK = [
  { d: 'M 300,475 C 296,440 304,405 300,370 C 296,335 304,305 300,280', sw: 8,   delay: 0.0, dur: 1.4 },
  { d: 'M 300,280 C 296,257 304,237 300,217',                            sw: 5,   delay: 0.8, dur: 0.8 },
  { d: 'M 300,217 C 298,207 302,197 300,187',                            sw: 3.5, delay: 1.6, dur: 0.5 },
];

const BRANCHES = [
  // Pair 1 — highest
  { d: 'M 300,192 C 268,175 230,157 188,134 C 155,115 118,95 76,74',    sw: 3,   delay: 2.0, dur: 0.9 },
  { d: 'M 300,192 C 332,175 370,157 412,134 C 445,115 482,95 524,74',   sw: 3,   delay: 2.1, dur: 0.9 },
  // Pair 2
  { d: 'M 300,232 C 262,217 220,204 175,190 C 140,179 103,171 62,167',  sw: 2.8, delay: 2.3, dur: 0.9 },
  { d: 'M 300,232 C 338,217 380,204 425,190 C 460,179 497,171 538,167', sw: 2.8, delay: 2.4, dur: 0.9 },
  // Pair 3
  { d: 'M 300,280 C 256,269 208,258 162,252 C 127,247 92,245 56,247',   sw: 2.5, delay: 2.6, dur: 0.8 },
  { d: 'M 300,280 C 344,269 392,258 438,252 C 473,247 508,245 544,247', sw: 2.5, delay: 2.7, dur: 0.8 },
  // Pair 4 — lowest
  { d: 'M 300,335 C 252,325 200,318 152,314 C 116,311 82,312 48,316',   sw: 2,   delay: 2.8, dur: 0.8 },
  { d: 'M 300,335 C 348,325 400,318 448,314 C 484,311 518,312 552,316', sw: 2,   delay: 2.9, dur: 0.8 },
];

const SUB_BRANCHES = [
  // Off pair 1
  { d: 'M 76,74  C 56,52  40,30  28,10',   sw: 1.5, delay: 2.9, dur: 0.6 },
  { d: 'M 524,74 C 544,52 560,30 572,10',  sw: 1.5, delay: 3.0, dur: 0.6 },
  { d: 'M 188,134 C 170,108 156,82 146,56', sw: 1.5, delay: 3.0, dur: 0.6 },
  { d: 'M 412,134 C 430,108 444,82 454,56', sw: 1.5, delay: 3.0, dur: 0.6 },
  // Off pair 2
  { d: 'M 175,190 C 155,166 140,140 132,114', sw: 1.5, delay: 3.1, dur: 0.6 },
  { d: 'M 425,190 C 445,166 460,140 468,114', sw: 1.5, delay: 3.1, dur: 0.6 },
];

const TINY_TIPS = [
  { d: 'M 28,10  C 18,0  10,-8  6,-14',   sw: 1, delay: 3.2, dur: 0.45 },
  { d: 'M 572,10 C 582,0 590,-8 594,-14', sw: 1, delay: 3.2, dur: 0.45 },
  { d: 'M 146,56 C 136,40 128,26 122,14', sw: 1, delay: 3.2, dur: 0.45 },
  { d: 'M 454,56 C 464,40 472,26 478,14', sw: 1, delay: 3.2, dur: 0.45 },
];

const ROOTS = [
  { d: 'M 300,475 C 298,498 302,518 300,540',      sw: 6,   delay: 0.0, dur: 1.2 },
  { d: 'M 300,475 C 278,498 255,524 228,542',      sw: 4.5, delay: 0.1, dur: 1.3 },
  { d: 'M 300,475 C 322,498 345,524 372,542',      sw: 4.5, delay: 0.2, dur: 1.3 },
  { d: 'M 300,475 C 266,510 228,542 192,558',      sw: 3.5, delay: 0.2, dur: 1.4 },
  { d: 'M 300,475 C 334,510 372,542 408,558',      sw: 3.5, delay: 0.3, dur: 1.4 },
  { d: 'M 300,475 C 252,522 205,558 160,574',      sw: 3,   delay: 0.3, dur: 1.5 },
  { d: 'M 300,475 C 348,522 395,558 440,574',      sw: 3,   delay: 0.4, dur: 1.5 },
];

// [cx, cy, r, delay, opacity]
const LEAVES = [
  [76,  74,  38, 3.20, 0.55],
  [524, 74,  35, 3.30, 0.50],
  [62,  167, 42, 3.40, 0.50],
  [538, 167, 38, 3.40, 0.55],
  [56,  247, 32, 3.50, 0.45],
  [544, 247, 30, 3.50, 0.48],
  [28,  10,  22, 3.25, 0.60],
  [572, 10,  20, 3.25, 0.55],
  [6,  -14,  15, 3.30, 0.55],
  [594,-14,  14, 3.30, 0.50],
  [146, 56,  26, 3.35, 0.60],
  [454, 56,  24, 3.35, 0.55],
  [122, 14,  18, 3.40, 0.58],
  [478, 14,  17, 3.40, 0.53],
  [132, 114, 28, 3.50, 0.50],
  [468, 114, 26, 3.50, 0.55],
  [48,  316, 24, 3.65, 0.40],
  [552, 316, 22, 3.65, 0.40],
  [188, 134, 16, 3.70, 0.36],
  [412, 134, 15, 3.70, 0.36],
  [175, 190, 14, 3.80, 0.33],
  [425, 190, 13, 3.80, 0.33],
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Branch({ d, sw, delay, dur }) {
  return (
    <motion.path
      d={d}
      stroke="#1e2d1e"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { duration: dur, delay, ease: 'easeOut' },
        opacity:    { duration: 0.01, delay },
      }}
    />
  );
}

function Leaf({ cx, cy, r, delay, op }) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={r}
      fill="#4a7c59"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: op }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.3, 0.64, 1] }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* The tree */}
      <div className="w-full max-w-[480px] mx-auto mb-4 md:mb-6">
        <svg
          viewBox="0 0 600 490"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
          aria-hidden="true"
        >
          {ROOTS.map((p, i)        => <Branch key={`r${i}`}  {...p} />)}
          {TRUNK.map((p, i)        => <Branch key={`t${i}`}  {...p} />)}
          {BRANCHES.map((p, i)     => <Branch key={`b${i}`}  {...p} />)}
          {SUB_BRANCHES.map((p, i) => <Branch key={`s${i}`}  {...p} />)}
          {TINY_TIPS.map((p, i)    => <Branch key={`tt${i}`} {...p} />)}
          {LEAVES.map(([cx, cy, r, delay, op], i) => (
            <Leaf key={`l${i}`} cx={cx} cy={cy} r={r} delay={delay} op={op} />
          ))}
        </svg>
      </div>

      {/* Name — clip reveal */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="overflow-hidden mb-1">
          <motion.h1
            className="font-display font-bold text-forest-900 tracking-tighter leading-none text-6xl md:text-8xl lg:text-[9rem]"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
          >
            WILLIAM
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-display font-bold text-forest-900 tracking-tighter leading-none text-6xl md:text-8xl lg:text-[9rem]"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.32 }}
          >
            DELAOSA
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-forest-900/20 max-w-xs mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Tagline */}
        <motion.p
          className="text-xs md:text-sm font-medium tracking-widest uppercase text-forest-900/50 mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.9 }}
        >
          Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Builder&nbsp;&nbsp;·&nbsp;&nbsp;Runner&nbsp;&nbsp;·&nbsp;&nbsp;Miami, FL
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-10 mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.1 }}
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
          transition={{ duration: 0.6, delay: 3.3 }}
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
