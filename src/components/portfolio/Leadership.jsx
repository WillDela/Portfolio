import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Trophy, TrendingUp, Target } from 'lucide-react';

export default function Leadership() {
  const stats = [
    { icon: Users, value: '100+', label: 'Active Members' },
    { icon: TrendingUp, value: '800+', label: 'Social Followers' },
    { icon: Trophy, value: '50+', label: 'First-Time Racers' },
    { icon: Target, value: '2 Years', label: 'Leadership' },
  ];

  return (
    <section id="leadership" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-forest-900 to-forest-700 bg-clip-text text-transparent">
            Leadership & Community
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-forest-500 to-clay-500 mb-16 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-forest-400/20 to-clay-400/20 rounded-3xl blur-3xl mix-blend-multiply" />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/ef1e7f84c_WhatsAppImage2025-10-22at222745_40ec4697.jpg"
              alt="Panthers Run Club team"
              className="relative rounded-3xl w-full h-[400px] object-cover border-8 border-white/50 shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-black text-forest-900 mb-2">Panthers Run Club</h3>
              <p className="text-clay-600 text-lg font-bold mb-4">President & Co-Founder</p>
              <p className="text-forest-800 font-medium leading-relaxed mb-4">
                Co-founded and scaled Panthers Run Club from zero to 100+ active members with 800+ social media followers 
                in under 2 years, creating FIU's premier running community.
              </p>
              <p className="text-forest-800 font-medium leading-relaxed">
                Leading 3-4 weekly group runs and organizing 3-5 social events per semester while building partnerships 
                with FIU organizations. Successfully guided 50+ beginning runners to complete their first 5K races to 
                half/full marathons through customized workouts and pacing strategies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-md shadow-md shadow-forest-900/5 border-earth-200 p-4 text-center hover:bg-white hover:-translate-y-1 hover:border-forest-400 transition-all duration-300 rounded-3xl">
                    <stat.icon className="w-8 h-8 text-forest-500 mx-auto mb-2" />
                    <p className="text-2xl font-black text-forest-900 mb-1">{stat.value}</p>
                    <p className="text-sm font-bold text-forest-700">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Leadership', 'Community Building', 'Coaching', 'Event Planning'].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-earth-100 rounded-full text-forest-800 text-sm font-bold border border-earth-200 shadow-sm hover:bg-earth-200 transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}