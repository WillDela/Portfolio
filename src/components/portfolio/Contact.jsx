import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const LINKS = [
  { icon: Mail,     label: 'Email',    value: 'wdelaosa24@gmail.com',         href: 'mailto:wdelaosa24@gmail.com' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/WillDela',          href: 'https://github.com/WillDela',              external: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/williamdelaosa', href: 'https://linkedin.com/in/williamdelaosa', external: true },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden pb-10">

      {/* Strict architectural background pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.08]" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(#1e2d1e 2px, transparent 2px), linear-gradient(90deg, #1e2d1e 2px, transparent 2px)', backgroundSize: '100px 100px' }} />

      {/* Edge-to-Edge Brutalist Section Header */}
      <motion.div {...up()} className="mb-16 border-b-[4px] border-forest-900 pb-6 px-6 md:px-12 w-full flex items-end justify-between relative z-10">
        <h2 className="font-display font-black text-6xl md:text-8xl text-forest-900 tracking-tighter uppercase leading-none">
          Contact
        </h2>
        <p className="font-mono text-2xl md:text-4xl font-bold text-clay-500 leading-none">
          05
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Message */}
          <motion.div {...up(0.1)} className="space-y-5">
            <p className="font-mono text-lg font-bold text-forest-900 leading-relaxed border-l-4 border-forest-900 pl-6 flex-grow">
              Always open to new opportunities, collaborations, or a good conversation about
              code, running, or building things.
            </p>
            <p className="font-mono text-sm text-forest-900/70 uppercase tracking-widest pl-6">
              Miami, FL → NYC (Summer 2026)
            </p>
          </motion.div>

          {/* Links as Brutalist Blocks */}
          <motion.div {...up(0.2)}>
            <div className="flex flex-col gap-6">
              {LINKS.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-5 p-6 border-[3px] border-forest-900 bg-earth-50 shadow-[6px_6px_0px_0px_#1e2d1e] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_#c58361] transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 border-[3px] border-forest-900 bg-forest-900 text-earth-50 group-hover:bg-clay-500 group-hover:text-earth-50 transition-colors">
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-forest-900/60 group-hover:text-forest-900 mb-1 transition-colors">
                        {label}
                      </p>
                      <p className="font-mono font-bold text-lg text-forest-900 truncate">{value}</p>
                    </div>
                  </div>
                  <span className="font-mono font-black text-2xl text-forest-900 group-hover:rotate-45 transition-transform">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          {...up(0.3)}
          className="mt-24 pt-8 border-t-[4px] border-forest-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
        >
          <p className="font-mono text-xs text-forest-900 font-bold uppercase">© 2026 William Delaosa</p>
          <p className="font-mono text-xs text-forest-900/60 font-bold uppercase">Miami, FL · Florida International University</p>
        </motion.div>
      </div>
    </section>
  );
}
