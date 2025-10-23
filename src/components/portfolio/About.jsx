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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/72d1e68b5_photo.jpg"
                alt="William Delaosa"
                className="relative rounded-2xl w-full h-[400px] object-cover border border-slate-700/50"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800";
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
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">Computer Science student</span> at Florida International University 
              with a passion for building innovative web applications and AI solutions. 
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Beyond coding, I'm the <span className="text-blue-400 font-semibold">President and Co-Founder</span> of Panthers Run Club, 
              where I've built a community of 100+ runners and helped 50+ beginners complete their first races. 
              I bring the same dedication to both development and coaching.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Previously worked as a <span className="text-purple-400 font-semibold">Web Developer Intern</span> at Destination Brides,
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
                  <Card className="bg-slate-800/50 border-slate-700/50 p-4 text-center hover:bg-slate-800 transition-colors">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
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