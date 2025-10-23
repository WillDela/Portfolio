import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'],
    },
    {
      icon: Layout,
      title: 'Frameworks & Libraries',
      color: 'from-purple-500 to-pink-500',
      skills: ['React', 'Node.js', 'Express', 'TensorFlow', 'React Native', 'Bootstrap5'],
    },
    {
      icon: Database,
      title: 'Data & AI',
      color: 'from-green-500 to-emerald-500',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'MongoDB', 'PostgreSQL', 'Django'],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Google Cloud', 'Auth0', 'Salesforce'],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                      className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-200 text-sm font-medium hover:bg-slate-700 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}