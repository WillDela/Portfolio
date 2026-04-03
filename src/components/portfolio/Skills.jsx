import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'GoLang', 'HTML5/CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'TensorFlow', 'React Native', 'NumPy', 'Pandas', 'Bootstrap5'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Google Cloud', 'Auth0', 'Supabase', 'PostgreSQL', 'Redis', 'VS Code'],
  },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-earth-50 border-b-[4px] border-forest-900">
      
      {/* Edge-to-Edge Brutalist Section Header */}
      <motion.div {...up()} className="mb-16 border-b-[4px] border-forest-900 pb-6 px-6 md:px-12 w-full flex items-end justify-between">
        <p className="font-mono text-2xl md:text-4xl font-bold text-clay-500 leading-none">
          04
        </p>
        <h2 className="font-display font-black text-6xl md:text-8xl text-forest-900 tracking-tighter uppercase leading-none text-right">
          Skills
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {SKILLS.map((group, i) => (
            <motion.div key={group.category} {...up(0.1 + i * 0.1)} className="border-[3px] border-forest-900 bg-earth-50 p-8 flex flex-col hover:border-clay-500 transition-colors">
              <p className="font-mono text-xs font-bold tracking-widest uppercase text-earth-50 bg-clay-500 px-3 py-2 border border-forest-900 shadow-[2px_2px_0px_0px_#1e2d1e] inline-block self-start mb-6">
                {group.category}
              </p>
              <ul className="space-y-4 border-t-2 border-forest-900/20 pt-6 flex-grow">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 bg-moss-500 border border-forest-900 shrink-0 mt-[6px] shadow-[2px_2px_0px_0px_#1e2d1e]" />
                    <span className="font-mono text-sm md:text-base font-bold text-forest-900 uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
