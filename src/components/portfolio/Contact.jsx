import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'wdelaosa24@gmail.com',
    href: 'mailto:wdelaosa24@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/WillDela',
    href: 'https://github.com/WillDela',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/williamdelaosa',
    href: 'https://linkedin.com/in/williamdelaosa',
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '305-850-9778',
    href: 'tel:3058509778',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-earth-100/40 relative overflow-hidden">

      {/* Subtle root pattern at the top of this section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 120" width="100%" height="120" preserveAspectRatio="xMidYMin meet">
          <g opacity="0.06" stroke="#1e2d1e" fill="none" strokeLinecap="round">
            <path d="M 400,0 C 397,20 403,40 400,60" strokeWidth="6" />
            <path d="M 400,0 C 378,18 354,38 326,55 C 302,70 275,82 244,90" strokeWidth="4" />
            <path d="M 400,0 C 422,18 446,38 474,55 C 498,70 525,82 556,90" strokeWidth="4" />
            <path d="M 400,0 C 368,22 334,46 298,68 C 268,86 235,100 198,108" strokeWidth="3" />
            <path d="M 400,0 C 432,22 466,46 502,68 C 532,86 565,100 602,108" strokeWidth="3" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-clay-500 mb-3">06</p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            Get in Touch
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: message */}
          <motion.div {...fadeUp(0.1)} className="space-y-6">
            <p className="text-xl text-forest-800 leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a good conversation
              about code, running, or building things.
            </p>
            <p className="text-forest-800/70 leading-relaxed">
              Currently based in Miami, FL — open to remote and New York City this summer.
            </p>
          </motion.div>

          {/* Right: links */}
          <motion.div {...fadeUp(0.2)}>
            <ul className="space-y-0">
              {LINKS.map((link) => (
                <li key={link.label} className="border-t border-forest-900/12 last:border-b">
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-5 py-5 text-forest-900 hover:text-clay-500 transition-colors"
                  >
                    <link.icon className="w-5 h-5 shrink-0 text-forest-900/40 group-hover:text-clay-500 transition-colors" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-forest-900/40 group-hover:text-clay-500/70 mb-0.5 transition-colors">
                        {link.label}
                      </p>
                      <p className="font-medium truncate">{link.value}</p>
                    </div>
                    <span className="text-forest-900/20 group-hover:text-clay-500/60 transition-all group-hover:translate-x-1 text-lg">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-24 pt-8 border-t border-forest-900/12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
        >
          <p className="text-xs text-forest-900/40 font-medium tracking-wide">
            © 2026 William Delaosa
          </p>
          <p className="text-xs text-forest-900/30 font-medium tracking-wide">
            Miami, FL · Florida International University
          </p>
        </motion.div>
      </div>
    </section>
  );
}
