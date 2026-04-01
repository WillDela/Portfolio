import React from 'react';
import { motion } from 'framer-motion';

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-32 px-4 w-full max-w-6xl mx-auto">
      
      {/* Tree Node / Anchor */}
      <div className="absolute left-4 md:left-1/2 top-48 w-3 h-3 rounded-full bg-forest-900 transform -translate-x-[5px] md:-translate-x-[6px] z-10 hidden md:block" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Left Side: Content (Left of trunk) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 md:pr-8 md:text-right order-2 md:order-1"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-forest-900 mb-6 uppercase tracking-tight">
              Leadership
            </h2>
            <div className="h-px w-full bg-forest-900 opacity-20" />
          </div>

          <div>
            <h3 className="text-2xl font-black text-forest-900 mb-2">Panthers Run Club</h3>
            <p className="text-clay-600 font-bold mb-6 tracking-widest uppercase text-sm">President & Co-Founder</p>
            <p className="text-xl text-forest-800 leading-relaxed font-medium mb-6">
              Co-founded and scaled Panthers Run Club from zero to 100+ active members with 800+ social media followers 
              in under 2 years, creating FIU's premier running community.
            </p>
            <p className="text-xl text-forest-800 leading-relaxed font-medium">
              Leading 3-4 weekly group runs and organizing 3-5 social events per semester while building partnerships 
              with FIU organizations. Successfully guided 50+ beginning runners to complete their first 5K races to 
              half/full marathons through customized workouts and pacing strategies.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-y-4 pt-8 border-t border-forest-900/20">
            <div className="flex gap-4">
              {['Community Building', 'Coaching', 'Event Planning'].map((skill) => (
                <span key={skill} className="text-sm font-bold uppercase tracking-widest text-clay-500">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image (Right of trunk) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative md:pl-8 order-1 md:order-2"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/ef1e7f84c_WhatsAppImage2025-10-22at222745_40ec4697.jpg"
            alt="Panthers Run Club team"
            className="w-full aspect-[4/5] object-cover border-2 border-forest-900 grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Decorative Branch Line */}
          <div className="hidden md:block absolute top-16 -left-24 w-24 h-px bg-forest-900" />
        </motion.div>

      </div>
    </section>
  );
}