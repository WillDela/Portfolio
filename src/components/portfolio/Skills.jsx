import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'GoLang', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'TensorFlow', 'Django', 'React Native', 'NumPy', 'Pandas', 'Bootstrap5'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Google Cloud', 'Auth0', 'MongoDB', 'PostgreSQL', 'Redis', 'Salesforce', 'VS Code'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-earth-100/40">
      <div className="max-w-6xl mx-auto">

        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-clay-500 mb-3">04</p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            Skills
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {SKILLS.map((group, i) => (
            <motion.div key={group.category} {...fadeUp(i * 0.1)}>
              <p className="text-xs font-bold tracking-widest uppercase text-clay-500 mb-5">
                {group.category}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-forest-900 font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-forest-900/30 shrink-0" />
                    {item}
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
