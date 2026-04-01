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
    <section id="experience" className="relative py-32 px-4 bg-earth-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-forest-900 to-forest-700 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-forest-500 to-clay-500 mb-16 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-400 via-clay-400 to-earth-300 rounded-full" />

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
                <div className="absolute left-8 md:left-1/2 w-5 h-5 -ml-2.5 rounded-full bg-gradient-to-r from-forest-500 to-clay-500 border-4 border-[#fdfbf7] z-10 shadow-sm" />

                <div className="w-full md:w-5/12">
                  <Card className="bg-white/80 backdrop-blur-md shadow-lg shadow-forest-900/5 border-earth-200 hover:border-forest-400 transition-all duration-300 ml-16 md:ml-0 rounded-3xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`p-3 rounded-xl ${
                          exp.type === 'education' 
                            ? 'bg-clay-500/10' 
                            : 'bg-forest-500/10'
                        }`}>
                          {exp.type === 'education' ? (
                            <GraduationCap className="w-6 h-6 text-clay-600" />
                          ) : (
                            <Briefcase className="w-6 h-6 text-forest-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-forest-900 mb-1">{exp.title}</h3>
                          <p className="text-forest-600 font-bold">{exp.company}</p>
                          <div className="flex items-center gap-2 text-sm text-forest-700/80 font-medium mt-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-forest-800 font-medium flex items-start gap-2 leading-relaxed">
                            <span className="text-forest-500 mt-1 font-bold">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-earth-100 text-forest-700 hover:bg-earth-200 border border-earth-200 transition-colors"
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