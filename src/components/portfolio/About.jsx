import React from 'react';
import { motion } from 'framer-motion';

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function About() {
  return (
    <section id="about" className="py-28 bg-earth-50 border-b-[4px] border-forest-900">
      
      {/* Edge-to-Edge Brutalist Section Header */}
      <motion.div {...up()} className="mb-16 border-b-[4px] border-forest-900 pb-6 px-6 md:px-12 w-full flex items-end justify-between">
        <h2 className="font-display font-black text-6xl md:text-8xl text-forest-900 tracking-tighter uppercase leading-none">
          About
        </h2>
        <p className="font-mono text-2xl md:text-4xl font-bold text-forest-900 leading-none">
          01
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Photo */}
          <motion.div {...up(0.15)}>
            <div className="p-2 border-2 border-forest-900 bg-earth-100 shadow-[8px_8px_0px_0px_#1e2d1e]">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/72d1e68b5_photo.jpg"
                alt="William Delaosa"
                className="w-full aspect-[4/5] object-cover border-2 border-forest-900"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80';
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div {...up(0.3)} className="space-y-7 pt-2">
            <p className="text-lg text-forest-800 leading-relaxed">
              I'm a Computer Science student at{' '}
              <span className="font-semibold text-forest-900">Florida International University</span>{' '}
              building full-stack applications and AI systems.
            </p>



            <p className="text-lg text-forest-800 leading-relaxed">
              Outside of engineering I co-founded{' '}
              <span className="font-semibold text-forest-900">Panthers Run Club</span> — growing it to
              100+ members and guiding 50+ beginners through their first races. Running shapes how I
              approach everything: consistent effort, progressive overload, showing up.
            </p>

            {/* Education */}
            {/* Education Brutalist Table */}
            <div className="pt-8 mt-8 border-t-2 border-forest-900">
              <p className="font-mono text-sm shadow-[2px_2px_0px_0px_#1e2d1e] border-2 border-forest-900 inline-block px-3 py-1 font-bold tracking-widest uppercase text-earth-50 bg-forest-900 mb-4">
                Education
              </p>
              <h3 className="font-display font-bold text-2xl text-forest-900 uppercase">
                Florida International University
              </h3>
              <p className="font-mono text-sm font-semibold text-forest-900 mt-2 border-b-2 border-forest-900/20 pb-4">
                B.A. Computer Science &nbsp;·&nbsp; GPA 3.85 / 4.0 &nbsp;·&nbsp; Expected May 2027
              </p>
              <p className="font-mono text-sm text-forest-800/80 leading-relaxed pt-4">
                [Data Structures, OOP, Database Management, Systems Programming, Operating Systems, Deep Learning, Artificial Intelligence, Software Engineering]
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t-2 border-forest-900">
              {[
                { val: '3.85', label: 'CUMULATIVE GPA' },
                { val: '100+', label: 'RUNNERS LED' },
                { val: '50+',  label: 'FIRST RACES' },
              ].map(({ val, label }) => (
                <div key={label} className="border-2 border-forest-900 p-4 shadow-[4px_4px_0px_0px_#1e2d1e] bg-earth-50">
                  <p className="font-display font-black text-4xl text-forest-900">{val}</p>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-forest-900 mt-2">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
