import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { val: '100+', label: 'Active Members' },
  { val: '800+', label: 'Social Followers' },
  { val: '50+',  label: 'First Race Finishers' },
  { val: '3–4×', label: 'Weekly Group Runs' },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div {...up()} className="mb-16">
          <p className="font-display text-[7rem] font-bold leading-none text-forest-900/[0.04] select-none -mb-10">
            05
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            Community
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Content */}
          <motion.div {...up(0.15)} className="space-y-7 order-2 md:order-1">
            <div>
              <h3 className="font-display font-bold text-3xl text-forest-900 tracking-tight leading-tight">
                Panthers Run Club
              </h3>
              <p className="text-clay-500 font-semibold text-sm tracking-wide mt-1">
                President & Co-Founder · Oct 2023 – Present
              </p>
            </div>

            <p className="text-lg text-forest-800 leading-relaxed">
              Co-founded FIU's premier running community from zero — building it to 100+ active members
              with 800+ social media followers in under two years, leading 3–4 weekly group runs and
              building partnerships across FIU organizations.
            </p>
            <p className="text-lg text-forest-800 leading-relaxed">
              The most meaningful part: guiding 50+ complete beginners through their first 5K, and
              watching many of them go on to finish half and full marathons. Designing customized
              workouts, pacing strategies, and progressive training programs for every fitness level.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-forest-900/12">
              {STATS.map(({ val, label }) => (
                <div key={label}>
                  <p className="font-display font-bold text-3xl text-forest-900">{val}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-clay-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div {...up(0.3)} className="order-1 md:order-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/ef1e7f84c_WhatsAppImage2025-10-22at222745_40ec4697.jpg"
              alt="Panthers Run Club"
              className="w-full aspect-[4/5] object-cover border-2 border-forest-900"
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
