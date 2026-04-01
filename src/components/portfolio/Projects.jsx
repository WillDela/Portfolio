import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Sylly - AI Academic Planner',
      award: 'Best Auth0 Implementation - ShellHacks 2025',
      description: 'AI-powered academic planner that converts syllabus PDFs into synchronized Google Calendar events, winning against 245 competing projects.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/e8dd767e3_WhatsAppImage2025-10-22at222745_b62a362c.jpg',
      achievements: [
        'Led frontend development with React and TypeScript',
        'Architected secure Auth0 and Google OAuth 2.0 integration',
        'Coordinated Gemini AI for syllabus parsing and Calendar API',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Auth0', 'Google Cloud', 'PostgreSQL'],
      link: 'https://devpost.com/software/sylly',
    },
    {
      title: 'AI Garbage Classification',
      description: 'Deep learning CNN model achieving 83.4% accuracy across 12 waste categories for automated waste sorting.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
      achievements: [
        'Developed CNN with 9.7M parameters using TensorFlow/Keras',
        'Engineered preprocessing pipeline for 15,515 images',
        'Built modular prediction API with 94.7% accuracy on best classes',
      ],
      tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Scikit-learn'],
      link: 'https://github.com/WillDela/AI_Garbage_Classification_System',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-4 w-full max-w-6xl mx-auto">
      <div className="mb-24 text-center md:text-left md:ml-8 lg:ml-0 md:pl-[50%] md:-translate-x-[120px]">
        <h2 className="text-4xl md:text-5xl font-black text-forest-900 mb-6 uppercase tracking-tight">
          Projects
        </h2>
        <div className="h-px w-24 bg-forest-900 mx-auto md:mx-0 opacity-20" />
      </div>

      <div className="flex flex-col gap-32 relative z-10 pb-16">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div 
              key={project.title} 
              className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Tree Node / Anchor */}
              <div className="absolute left-4 md:left-1/2 top-48 w-3 h-3 rounded-full bg-forest-900 transform -translate-x-[5px] md:-translate-x-[6px] hidden md:block" />

              {/* Image Container */}
              <div className={`relative ${isLeft ? 'md:pr-8' : 'order-2 md:pl-8'}`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="overflow-hidden border-2 border-forest-900 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </a>
                {/* Organic Curved Branch */}
                <div className={`hidden md:block absolute top-48 w-24 h-12 text-forest-900 opacity-60 ${isLeft ? '-right-24' : '-left-24'}`}>
                  <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q25,25 50,10 T100,10" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>
                </div>
                {/* Subtle Leaf Embed */}
                <svg className={`absolute -top-6 ${isLeft ? '-right-4 rotate-0' : '-left-4 -rotate-90'} w-10 h-10 text-clay-500 opacity-80 z-10`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22S2 16 2 8c0-4 3-7 7-7 2.5 0 4.5 1.5 6 3 1.5-1.5 3.5-3 6-3 4 0 7 3 7 7 0 8-10 14-10 14z" />
                </svg>
              </div>

              {/* Content Container */}
              <div className={`space-y-6 ${isLeft ? 'md:pl-8' : 'order-1 md:pr-8 md:text-right'}`}>
                
                <div>
                  <h3 className="text-3xl font-black text-forest-900 mb-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-clay-600 transition-colors">
                      {project.title}
                    </a>
                  </h3>
                  {project.award && (
                    <p className="text-clay-600 font-bold tracking-widest uppercase text-xs mb-4">
                      🏆 {project.award}
                    </p>
                  )}
                  <p className="text-xl text-forest-800 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className={`border-t border-forest-900/20 pt-6 space-y-3 ${!isLeft && 'md:flex md:flex-col md:items-end'}`}>
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className={`flex items-start gap-3 text-forest-800 font-medium ${!isLeft && 'md:flex-row-reverse'}`}>
                      <span className="text-clay-500 mt-1 font-bold">▸</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className={`flex flex-wrap gap-2 pt-4 ${!isLeft && 'md:justify-end'}`}>
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-bold uppercase tracking-widest text-forest-900 border border-forest-900/20 px-3 py-1 bg-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}