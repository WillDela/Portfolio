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
    <section id="contact" className="py-28 px-6 bg-forest-900 relative overflow-hidden text-earth-50">

      {/* Strict architectural background pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(#fdfbf7 2px, transparent 2px), linear-gradient(90deg, #fdfbf7 2px, transparent 2px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Brutalist Section Header */}
        <motion.div {...up()} className="mb-16 border-b-4 border-earth-50 pb-4 flex items-end justify-between">
          <h2 className="font-display font-black text-6xl md:text-8xl text-earth-50 tracking-tighter uppercase leading-none">
            Contact
          </h2>
          <p className="font-mono text-2xl md:text-4xl font-bold text-earth-50 leading-none">
            05
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Message */}
          <motion.div {...up(0.1)} className="space-y-5">
            <p className="text-xl text-earth-100/90 leading-relaxed">
              Always open to new opportunities, collaborations, or a good conversation about
              code, running, or building things.
            </p>
            <p className="text-earth-100/60 leading-relaxed">
              Based in Miami, FL — open to remote and in New York City this summer.
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
                  className="group flex items-center justify-between gap-5 p-6 border-2 border-earth-50 bg-forest-800 shadow-[6px_6px_0px_0px_#fdfbf7] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_#fdfbf7] transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 border-2 border-earth-50 bg-forest-900 group-hover:bg-earth-50 group-hover:text-forest-900 transition-colors">
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-earth-50/60 group-hover:text-earth-50 mb-1 transition-colors">
                        {label}
                      </p>
                      <p className="font-mono font-bold text-lg text-earth-50 truncate">{value}</p>
                    </div>
                  </div>
                  <span className="font-mono font-black text-2xl text-earth-50 group-hover:rotate-45 transition-transform">
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
          className="mt-24 pt-8 border-t border-earth-50/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
        >
          <p className="text-xs text-earth-50/40 font-medium">© 2026 William Delaosa</p>
          <p className="text-xs text-earth-50/30 font-medium">Miami, FL · Florida International University</p>
        </motion.div>
      </div>
    </section>
  );
}
