import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 w-full max-w-6xl mx-auto">
      
      {/* Tree Node / Anchor */}
      <div className="absolute left-4 md:left-1/2 top-48 w-3 h-3 rounded-full bg-forest-900 transform -translate-x-[5px] md:-translate-x-[6px] z-10 hidden md:block" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Side: Image (Left of trunk) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative md:pr-8"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/72d1e68b5_photo.jpg"
            alt="William Delaosa"
            className="w-full aspect-[4/5] object-cover border-2 border-forest-900 rounded-bl-[100px] rounded-tr-[100px]"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80";
            }}
          />
          {/* Organic Curved Branch */}
          <div className="hidden md:block absolute top-32 -right-24 w-24 h-12 text-forest-900 opacity-60">
            <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q25,25 50,10 T100,10" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          {/* Subtle Leaf Embed */}
          <svg className="absolute -top-6 -right-4 w-12 h-12 text-clay-500 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22S2 16 2 8c0-4 3-7 7-7 2.5 0 4.5 1.5 6 3 1.5-1.5 3.5-3 6-3 4 0 7 3 7 7 0 8-10 14-10 14z" />
          </svg>
        </motion.div>

        {/* Right Side: Content (Right of trunk) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 md:pl-8"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-forest-900 mb-6 uppercase tracking-tight">
              About Me
            </h2>
            <div className="h-px w-full bg-forest-900 opacity-20" />
          </div>

          <p className="text-xl text-forest-800 leading-relaxed font-medium">
            I'm a <span className="font-bold text-forest-900">Computer Science student</span> at Florida International University 
            with a passion for building innovative web applications and AI solutions. 
          </p>
          
          <p className="text-xl text-forest-800 leading-relaxed font-medium">
            Beyond coding, I'm the <span className="font-bold text-clay-600">President and Co-Founder</span> of Panthers Run Club, 
            where I've built a community of 100+ runners and helped 50+ beginners complete their first races. 
          </p>
          
          <p className="text-xl text-forest-800 leading-relaxed font-medium">
            Previously worked as a <span className="font-bold text-forest-900">Web Developer Intern</span> at Destination Brides,
            and currently serving as an IT Student Assistant at FIU.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8 border-t border-forest-900/20">
            <div>
              <p className="text-3xl font-black text-forest-900">3.85<span className="text-lg text-forest-800/60">/4.0</span></p>
              <p className="text-sm font-bold uppercase tracking-widest text-clay-500 mt-1">GPA</p>
            </div>
            <div>
              <p className="text-3xl font-black text-forest-900">100+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-clay-500 mt-1">Runners Led</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}