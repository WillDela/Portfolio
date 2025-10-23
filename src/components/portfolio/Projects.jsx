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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mb-16" />
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
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    {project.award && (
                      <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-slate-900" />
                        <span className="text-xs font-bold text-slate-900">Winner</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-medium text-white">View Project</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    {project.award && (
                      <div className="flex items-center gap-2 text-yellow-400 text-sm mb-3">
                        <Award className="w-4 h-4" />
                        <span>{project.award}</span>
                      </div>
                    )}
                    <p className="text-slate-300 mb-4">{project.description}</p>

                    <div className="space-y-2 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-cyan-400 mt-0.5">▸</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-300 text-xs"
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