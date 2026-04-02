import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const LINKS = [
  { icon: Mail,     label: 'Email',    value: 'wdelaosa24@gmail.com',         href: 'mailto:wdelaosa24@gmail.com' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/WillDela',          href: 'https://github.com/WillDela',              external: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/williamdelaosa', href: 'https://linkedin.com/in/williamdelaosa', external: true },
  { icon: Phone,    label: 'Phone',    value: '305-850-9778',                 href: 'tel:3058509778' },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-earth-100/60 relative overflow-hidden">

      {/* Subtle root pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 800 160" width="100%" height="160" preserveAspectRatio="xMidYMin meet">
          <g opacity="0.05" stroke="#1e2d1e" fill="none" strokeLinecap="round">
            <path d="M 400,0 L 400,160"           strokeWidth="6" />
            <path d="M 400,0 Q 400,80 200,160"    strokeWidth="4" />
            <path d="M 400,0 Q 400,80 600,160"    strokeWidth="4" />
            <path d="M 400,0 Q 400,60 100,120"    strokeWidth="3" />
            <path d="M 400,0 Q 400,60 700,120"    strokeWidth="3" />
            <path d="M 400,0 Q 400,40 20,80"      strokeWidth="2" />
            <path d="M 400,0 Q 400,40 780,80"     strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div {...up()} className="mb-16">
          <p className="font-display text-[7rem] font-bold leading-none text-forest-900/[0.04] select-none -mb-10">
            06
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            Get in Touch
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Message */}
          <motion.div {...up(0.1)} className="space-y-5">
            <p className="text-xl text-forest-800 leading-relaxed">
              Always open to new opportunities, collaborations, or a good conversation about
              code, running, or building things.
            </p>
            <p className="text-forest-800/60 leading-relaxed">
              Based in Miami, FL — open to remote and in New York City this summer.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div {...up(0.2)}>
            <ul>
              {LINKS.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="border-t border-forest-900/10 last:border-b last:border-forest-900/10">
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-5 py-5 text-forest-900 hover:text-clay-500 transition-colors"
                  >
                    <Icon className="w-4 h-4 shrink-0 text-forest-900/30 group-hover:text-clay-500 transition-colors" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-forest-900/35 group-hover:text-clay-500/70 mb-0.5 transition-colors">
                        {label}
                      </p>
                      <p className="font-medium text-sm truncate">{value}</p>
                    </div>
                    <span className="text-forest-900/20 group-hover:text-clay-500/50 transition-all group-hover:translate-x-1 inline-block">
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
          {...up(0.3)}
          className="mt-24 pt-8 border-t border-forest-900/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
        >
          <p className="text-xs text-forest-900/35 font-medium">© 2026 William Delaosa</p>
          <p className="text-xs text-forest-900/25 font-medium">Miami, FL · Florida International University</p>
        </motion.div>
      </div>
    </section>
  );
}
