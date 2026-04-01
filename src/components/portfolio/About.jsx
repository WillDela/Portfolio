import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-clay-500 mb-3">01</p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            About
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Photo */}
          <motion.div {...fadeUp(0.15)} className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/72d1e68b5_photo.jpg"
              alt="William Delaosa"
              className="w-full aspect-[4/5] object-cover border-2 border-forest-900 grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80';
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div {...fadeUp(0.3)} className="space-y-7 pt-2">
            <p className="text-lg text-forest-800 leading-relaxed">
              I'm a Computer Science student at{' '}
              <span className="font-semibold text-forest-900">Florida International University</span>{' '}
              building full-stack applications and AI systems.
            </p>
            
            <blockquote className="font-display italic text-3xl md:text-4xl text-forest-900 leading-snug py-2 border-l-4 border-clay-500 pl-6 my-8">
              "I care about writing code that solves real problems — not just code that compiles."
            </blockquote>

            <p className="text-lg text-forest-800 leading-relaxed">
              Outside of engineering, I co-founded{' '}
              <span className="font-semibold text-forest-900">Panthers Run Club</span> — growing it to
              100+ members and guiding 50+ beginners through their first races. Running shapes how I
              approach everything: consistent effort, progressive overload, showing up.
            </p>

            {/* Education */}
            <div className="pt-6 border-t border-forest-900/15 space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-clay-500">Education</p>
              <div>
                <p className="font-semibold text-forest-900">Florida International University</p>
                <p className="text-forest-800 text-sm">
                  B.A. Computer Science &nbsp;·&nbsp; GPA 3.85 / 4.0 &nbsp;·&nbsp; May 2027
                </p>
              </div>
              <p className="text-sm text-forest-800/70 leading-relaxed">
                Data Structures · OOP · Database Management · Systems Programming ·
                Operating Systems · Deep Learning · Artificial Intelligence · Software Engineering
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-forest-900/15">
              <div>
                <p className="font-display font-bold text-3xl text-forest-900">3.85</p>
                <p className="text-xs font-bold uppercase tracking-widest text-clay-500 mt-1">GPA</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-forest-900">100+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-clay-500 mt-1">Runners</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-forest-900">50+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-clay-500 mt-1">First Races</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
