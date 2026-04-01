import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Trophy, Users, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: GraduationCap, label: 'GPA', value: '3.85/4.0' },
    { icon: Trophy, label: 'Hackathon Winner', value: '1x' },
    { icon: Users, label: 'Run Club Members', value: '100+' },
    { icon: Zap, label: 'Weekly Runs', value: '3-4' },
  ];

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-forest-900 to-forest-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-forest-500 to-clay-500 mb-12 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-forest-400/20 to-clay-500/20 rounded-3xl blur-3xl mix-blend-multiply" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/72d1e68b5_photo.jpg"
                alt="William Delaosa"
                className="relative rounded-3xl w-full h-[400px] object-cover border-8 border-white/50 shadow-xl"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-forest-800 leading-relaxed font-medium">
              I'm a <span className="text-forest-600 font-bold bg-earth-100 px-1 rounded">Computer Science student</span> at Florida International University 
              with a passion for building innovative web applications and AI solutions. 
            </p>
            <p className="text-lg text-forest-800 leading-relaxed font-medium">
              Beyond coding, I'm the <span className="text-clay-600 font-bold bg-earth-100 px-1 rounded">President and Co-Founder</span> of Panthers Run Club, 
              where I've built a community of 100+ runners and helped 50+ beginners complete their first races. 
              I bring the same dedication to both development and coaching.
            </p>
            <p className="text-lg text-forest-800 leading-relaxed font-medium">
              Previously worked as a <span className="text-earth-700 font-bold bg-earth-100 px-1 rounded">Web Developer Intern</span> at Destination Brides,
              and currently serving as an IT Student Assistant at FIU, gaining hands-on experience in React, TypeScript, and modern web technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-white/70 backdrop-blur-md border-earth-200 shadow-md shadow-forest-900/5 p-4 text-center hover:bg-white hover:-translate-y-1 transition-all duration-300 rounded-3xl">
                    <stat.icon className="w-8 h-8 text-forest-500 mx-auto mb-2" />
                    <p className="text-2xl font-black text-forest-900 mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-forest-700">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}