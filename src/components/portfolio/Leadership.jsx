import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '100+', label: 'Active Members' },
  { value: '800+', label: 'Social Followers' },
  { value: '50+', label: 'First Race Finishers' },
  { value: '3–4×', label: 'Weekly Group Runs' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-clay-500 mb-3">05</p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            Community
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Content */}
          <motion.div {...fadeUp(0.15)} className="space-y-7 order-2 md:order-1">
            <div>
              <h3 className="font-display font-bold text-3xl text-forest-900 tracking-tight">
                Panthers Run Club
              </h3>
              <p className="text-clay-500 font-semibold text-sm mt-1 tracking-wide">
                President & Co-Founder · Oct 2023 – Present
              </p>
            </div>

            <p className="text-lg text-forest-800 leading-relaxed">
              Co-founded FIU's premier running community from zero — building it to 100+ active members
              with 800+ social media followers in under two years. We run 3–4 times a week, and I've
              built partnerships with FIU organizations to keep it growing.
            </p>
            <p className="text-lg text-forest-800 leading-relaxed">
              The most meaningful part: guiding 50+ complete beginners through their first 5K, and
              watching some of them go on to finish half and full marathons. Writing customized workouts
              and pacing strategies for runners of every level.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-forest-900/15">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-3xl text-forest-900">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-clay-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div {...fadeUp(0.3)} className="relative order-1 md:order-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/ef1e7f84c_WhatsAppImage2025-10-22at222745_40ec4697.jpg"
              alt="Panthers Run Club"
              className="w-full aspect-[4/5] object-cover border-2 border-forest-900 grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80';
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
