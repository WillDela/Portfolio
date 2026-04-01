import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

// --- Tree data ---

const TRUNK = [
  { d: 'M 300,475 C 296,440 304,405 300,370 C 296,335 304,305 300,275', sw: 8, delay: 0, dur: 1.4 },
  { d: 'M 300,275 C 296,252 304,232 300,212', sw: 5, delay: 1.0, dur: 0.8 },
  { d: 'M 300,212 C 298,202 302,192 300,182', sw: 3.5, delay: 1.6, dur: 0.5 },
];

const BRANCHES = [
  // Pair 1 — high
  { d: 'M 300,188 C 268,172 230,154 188,130 C 155,111 118,91 76,70', sw: 3, delay: 2.0, dur: 0.9 },
  { d: 'M 300,188 C 332,172 370,154 412,130 C 445,111 482,91 524,70', sw: 3, delay: 2.1, dur: 0.9 },
  // Pair 2
  { d: 'M 300,228 C 262,213 220,200 175,184 C 140,172 103,164 62,160', sw: 2.8, delay: 2.3, dur: 0.9 },
  { d: 'M 300,228 C 338,213 380,200 425,184 C 460,172 497,164 538,160', sw: 2.8, delay: 2.4, dur: 0.9 },
  // Pair 3
  { d: 'M 300,275 C 256,264 208,253 162,247 C 127,242 92,240 56,242', sw: 2.5, delay: 2.6, dur: 0.8 },
  { d: 'M 300,275 C 344,264 392,253 438,247 C 473,242 508,240 544,242', sw: 2.5, delay: 2.7, dur: 0.8 },
  // Pair 4 — lower
  { d: 'M 300,328 C 252,318 200,311 152,307 C 116,304 82,305 48,309', sw: 2, delay: 2.8, dur: 0.8 },
  { d: 'M 300,328 C 348,318 400,311 448,307 C 484,304 518,305 552,309', sw: 2, delay: 2.9, dur: 0.8 },
];

const SUB_BRANCHES = [
  // Off pair 1
  { d: 'M 76,70 C 56,48 40,26 28,6', sw: 1.5, delay: 2.9, dur: 0.6 },
  { d: 'M 524,70 C 544,48 560,26 572,6', sw: 1.5, delay: 3.0, dur: 0.6 },
  { d: 'M 188,130 C 170,104 156,78 146,52', sw: 1.5, delay: 3.0, dur: 0.6 },
  { d: 'M 412,130 C 430,104 444,78 454,52', sw: 1.5, delay: 3.0, dur: 0.6 },
  // Off pair 2
  { d: 'M 175,184 C 155,160 140,134 132,108', sw: 1.5, delay: 3.1, dur: 0.6 },
  { d: 'M 425,184 C 445,160 460,134 468,108', sw: 1.5, delay: 3.1, dur: 0.6 },
  // Tiny tips
  { d: 'M 28,6 C 18,-4 10,-12 6,-18', sw: 1, delay: 3.2, dur: 0.45 },
  { d: 'M 572,6 C 582,-4 590,-12 594,-18', sw: 1, delay: 3.2, dur: 0.45 },
];

const ROOTS = [
  { d: 'M 300,475 C 298,498 302,518 300,540', sw: 6, delay: 0, dur: 1.2 },
  { d: 'M 300,475 C 278,498 255,524 228,542', sw: 4.5, delay: 0.1, dur: 1.3 },
  { d: 'M 300,475 C 322,498 345,524 372,542', sw: 4.5, delay: 0.2, dur: 1.3 },
  { d: 'M 300,475 C 266,510 228,542 192,558', sw: 3.5, delay: 0.2, dur: 1.4 },
  { d: 'M 300,475 C 334,510 372,542 408,558', sw: 3.5, delay: 0.3, dur: 1.4 },
  { d: 'M 300,475 C 252,522 205,558 160,574', sw: 3, delay: 0.3, dur: 1.5 },
  { d: 'M 300,475 C 348,522 395,558 440,574', sw: 3, delay: 0.4, dur: 1.5 },
];

const LEAVES = [
  { cx: 76, cy: 70, r: 38, delay: 3.2, op: 0.55 },
  { cx: 524, cy: 70, r: 35, delay: 3.3, op: 0.50 },
  { cx: 62, cy: 160, r: 42, delay: 3.4, op: 0.50 },
  { cx: 538, cy: 160, r: 38, delay: 3.4, op: 0.55 },
  { cx: 56, cy: 242, r: 32, delay: 3.5, op: 0.45 },
  { cx: 544, cy: 242, r: 30, delay: 3.5, op: 0.48 },
  { cx: 28, cy: 6, r: 22, delay: 3.3, op: 0.60 },
  { cx: 572, cy: 6, r: 20, delay: 3.3, op: 0.55 },
  { cx: 6, cy: -18, r: 15, delay: 3.35, op: 0.55 },
  { cx: 594, cy: -18, r: 14, delay: 3.35, op: 0.50 },
  { cx: 146, cy: 52, r: 26, delay: 3.4, op: 0.60 },
  { cx: 454, cy: 52, r: 24, delay: 3.4, op: 0.55 },
  { cx: 132, cy: 108, r: 28, delay: 3.5, op: 0.50 },
  { cx: 468, cy: 108, r: 26, delay: 3.5, op: 0.55 },
  { cx: 48, cy: 309, r: 24, delay: 3.6, op: 0.40 },
  { cx: 552, cy: 309, r: 22, delay: 3.6, op: 0.40 },
  { cx: 188, cy: 130, r: 16, delay: 3.7, op: 0.36 },
  { cx: 412, cy: 130, r: 15, delay: 3.7, op: 0.36 },
  { cx: 175, cy: 184, r: 14, delay: 3.8, op: 0.33 },
  { cx: 425, cy: 184, r: 13, delay: 3.8, op: 0.33 },
];

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
      transition={{ duration: dur, delay, ease: 'easeOut' }}
    />
  );
}

function Leaf({ cx, cy, r, delay, op }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="#4a7c59"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: op }}
      transition={{ duration: 0.55, delay, ease: [0.34, 1.3, 0.64, 1] }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  );
}

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Animated SVG Tree */}
      <div className="w-full max-w-[480px] mx-auto mb-6 md:mb-8">
        <svg
          viewBox="0 0 600 490"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
          aria-hidden="true"
        >
          {ROOTS.map((r, i) => <Branch key={`root-${i}`} d={r.d} sw={r.sw} delay={r.delay} dur={r.dur} />)}
          {TRUNK.map((t, i) => <Branch key={`trunk-${i}`} d={t.d} sw={t.sw} delay={t.delay} dur={t.dur} />)}
          {BRANCHES.map((b, i) => <Branch key={`branch-${i}`} d={b.d} sw={b.sw} delay={b.delay} dur={b.dur} />)}
          {SUB_BRANCHES.map((s, i) => <Branch key={`sub-${i}`} d={s.d} sw={s.sw} delay={s.delay} dur={s.dur} />)}
          {LEAVES.map((l, i) => <Leaf key={`leaf-${i}`} cx={l.cx} cy={l.cy} r={l.r} delay={l.delay} op={l.op} />)}
        </svg>
      </div>

      {/* Name */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="overflow-hidden mb-1">
          <motion.h1
            className="font-display font-bold text-forest-900 tracking-tighter leading-none text-6xl md:text-8xl lg:text-[9rem]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
          >
            WILLIAM
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-display font-bold text-forest-900 tracking-tighter leading-none text-6xl md:text-8xl lg:text-[9rem]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.32 }}
          >
            DELAOSA
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-forest-900/20 max-w-sm mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-forest-800/70 font-medium tracking-widest uppercase text-xs md:text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9 }}
        >
          Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Builder&nbsp;&nbsp;·&nbsp;&nbsp;Runner&nbsp;&nbsp;·&nbsp;&nbsp;Miami, FL
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-10 justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.1 }}
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
          transition={{ delay: 3.3 }}
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
