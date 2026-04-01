import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'text-clay-600',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'],
    },
    {
      icon: Layout,
      title: 'Frameworks & Libraries',
      color: 'text-forest-600',
      skills: ['React', 'Node.js', 'Express', 'TensorFlow', 'React Native', 'Bootstrap5'],
    },
    {
      icon: Database,
      title: 'Data & AI',
      color: 'text-clay-600',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'MongoDB', 'PostgreSQL', 'Django'],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'text-forest-600',
      skills: ['Git', 'GitHub', 'VS Code', 'Google Cloud', 'Auth0', 'Salesforce'],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-4 w-full max-w-6xl mx-auto">
      <div className="mb-24 text-center md:text-left md:ml-8 lg:ml-0 md:pl-[50%] md:-translate-x-[120px]">
        <h2 className="text-4xl md:text-5xl font-black text-forest-900 mb-6 uppercase tracking-tight">
          Technical Skills
        </h2>
        <div className="h-px w-24 bg-forest-900 mx-auto md:mx-0 opacity-20" />
      </div>

      <div className="relative z-10 space-y-16 lg:space-y-24 pb-16">
        {skillCategories.map((category, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center relative ${
                isLeft ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Tree Node / Anchor */}
              <div className="absolute left-4 md:left-1/2 top-4 w-3 h-3 rounded-full bg-forest-900 transform -translate-x-[5px] md:-translate-x-[6px] hidden md:block" />

              {/* Empty space for the opposite side */}
              <div className="hidden md:block w-1/2" />

              {/* Content Side */}
              <div className="w-full md:w-1/2 relative space-y-6">
                {/* Organic Curved Branch */}
                <div 
                  className={`hidden md:block absolute top-4 w-12 lg:w-24 h-8 text-forest-900 opacity-60 ${
                    isLeft ? '-right-12 lg:-right-24' : '-left-12 lg:-left-24'
                  }`} 
                >
                  <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q25,25 50,10 T100,10" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
                {/* Subtle Leaf Embed */}
                <svg className={`absolute top-0 ${isLeft ? '-right-6 rotate-0' : '-left-6 -rotate-90'} w-8 h-8 text-clay-500 opacity-80 z-10 hidden md:block`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22S2 16 2 8c0-4 3-7 7-7 2.5 0 4.5 1.5 6 3 1.5-1.5 3.5-3 6-3 4 0 7 3 7 7 0 8-10 14-10 14z" />
                </svg>
                
                <div className={`${isLeft ? 'md:pr-12 lg:pr-24 md:text-right' : 'md:pl-12 lg:pl-24 pl-12'}`}>
                  <div className={`flex items-center gap-4 mb-6 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-4 rounded-full border border-forest-900/20 bg-earth-100">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-black text-forest-900">{category.title}</h3>
                  </div>

                  <div className={`flex flex-wrap gap-3 ${isLeft ? 'md:justify-end' : ''}`}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: isLeft ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                        className="px-4 py-2 border border-forest-900/20 text-forest-900 text-sm font-bold uppercase tracking-widest bg-white"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}