import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Web Developer Intern',
      company: 'Destination Brides',
      location: 'Remote',
      period: 'May 2025 – July 2025',
      side: 'right',
      achievements: [
        'Streamlined development workflow by configuring GitHub, Slack, and Figma integration for 6-person cross-functional team',
        'Prepared technical foundation for scaling React-based architecture across 6 planned site launches',
        'Built expertise in modern frontend workflows and component-based architecture',
      ],
      skills: ['React', 'Figma', 'GitHub', 'Team Collaboration'],
    },
    {
      type: 'work',
      title: 'Computer Lab & IT Student Assistant',
      company: 'Florida International University',
      location: 'Miami, FL',
      period: 'October 2024 – Current',
      side: 'left',
      achievements: [
        'Deliver tier 1-2 technical support for 9,000+ students and faculty across College of Business',
        'Maintain 99% system uptime across 15 computer labs through proactive troubleshooting',
        'Developed technical documentation library reducing repeat service tickets',
      ],
      skills: ['Technical Support', 'System Administration', 'Documentation'],
    },
    {
      type: 'education',
      title: 'Bachelor of Arts in Computer Science',
      company: 'Florida International University',
      location: 'Miami, FL',
      period: 'June 2023 – May 2027',
      side: 'right',
      achievements: [
        'GPA: 3.85/4.0',
        'Relevant Coursework: Object-Oriented Programming, Data Structures, Discrete Structures, Applied Linear Structures, Systems Programming, Operating Systems, Intro to Deep Learning, Artificial Intelligence',
      ],
      skills: ['Python', 'Java', 'Algorithms', 'Machine Learning'],
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mb-16" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-950 z-10" />

                <div className="w-full md:w-5/12">
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 ml-16 md:ml-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${
                          exp.type === 'education' 
                            ? 'bg-purple-500/20' 
                            : 'bg-blue-500/20'
                        }`}>
                          {exp.type === 'education' ? (
                            <GraduationCap className="w-5 h-5 text-purple-400" />
                          ) : (
                            <Briefcase className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                          <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}