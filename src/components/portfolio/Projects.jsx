import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Award } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sylly - AI Academic Planner',
      award: 'Best Authentication with Auth0 - ShellHacks 2025',
      description: 'AI-powered academic planner that converts syllabus PDFs into synchronized Google Calendar events, winning against 245 competing projects.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/e8dd767e3_WhatsAppImage2025-10-22at222745_b62a362c.jpg',
      achievements: [
        'Led frontend development with React and TypeScript',
        'Architected secure Auth0 and Google OAuth 2.0 integration',
        'Coordinated Gemini AI for syllabus parsing and Google Calendar API',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Auth0', 'Google Cloud', 'PostgreSQL'],
      link: 'https://devpost.com/software/sylly',
    },
    {
      title: 'AI Garbage Classification System',
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
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-forest-900 to-forest-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-forest-500 to-clay-500 mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="bg-white/80 backdrop-blur-md shadow-lg shadow-forest-900/5 border-earth-200 overflow-hidden hover:border-forest-400 hover:-translate-y-1 transition-all duration-300 h-full group cursor-pointer rounded-3xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.award && (
                      <div className="absolute top-4 right-4 bg-clay-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-md">
                        <Trophy className="w-4 h-4 text-white" />
                        <span className="text-xs font-bold text-white">Winner</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md transform -translate-x-4 group-hover:translate-x-0">
                      <ExternalLink className="w-4 h-4 text-forest-600" />
                      <span className="text-xs font-bold text-forest-700">View Project</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black text-forest-900 mb-2">{project.title}</h3>
                    {project.award && (
                      <div className="flex items-center gap-2 text-clay-600 font-bold text-sm mb-3">
                        <Award className="w-4 h-4" />
                        <span>{project.award}</span>
                      </div>
                    )}
                    <p className="text-forest-800 font-medium leading-relaxed mb-4">{project.description}</p>

                    <div className="space-y-2 mb-6">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-forest-700">
                          <span className="text-forest-500 mt-0.5 font-bold">▸</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-earth-100 text-forest-700 hover:bg-earth-200 border border-earth-200 text-xs transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}