import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'from-clay-500 to-earth-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'],
    },
    {
      icon: Layout,
      title: 'Frameworks & Libraries',
      color: 'from-forest-500 to-clay-400',
      skills: ['React', 'Node.js', 'Express', 'TensorFlow', 'React Native', 'Bootstrap5'],
    },
    {
      icon: Database,
      title: 'Data & AI',
      color: 'from-forest-400 to-earth-400',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'MongoDB', 'PostgreSQL', 'Django'],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'from-clay-600 to-earth-600',
      skills: ['Git', 'GitHub', 'VS Code', 'Google Cloud', 'Auth0', 'Salesforce'],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-4 bg-earth-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-forest-900 to-forest-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-forest-500 to-clay-500 mb-16 rounded-full" />
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
              <Card className="bg-white/80 backdrop-blur-md shadow-lg shadow-forest-900/5 border-earth-200 p-6 hover:border-forest-400 hover:-translate-y-1 transition-all duration-300 h-full rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-sm`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-forest-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                      className="px-4 py-2 bg-earth-100 rounded-xl border border-earth-200 text-forest-800 text-sm font-bold hover:bg-earth-200 hover:border-earth-300 transition-colors cursor-default shadow-sm"
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