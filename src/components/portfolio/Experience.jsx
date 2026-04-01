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
    <section id="experience" className="relative py-32 px-4 w-full max-w-6xl mx-auto">
      <div className="mb-24 text-center md:text-right md:mr-8 lg:mr-0 md:pr-[50%] md:translate-x-[120px]">
        <h2 className="text-4xl md:text-5xl font-black text-forest-900 mb-6 uppercase tracking-tight">
          Experience
        </h2>
        <div className="h-px w-24 bg-forest-900 mx-auto md:mx-0 opacity-20" />
      </div>

      <div className="relative z-10 space-y-32 pb-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center relative ${
              exp.side === 'left' ? '' : 'md:flex-row-reverse'
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
                  exp.side === 'left' ? '-right-12 lg:-right-24' : '-left-12 lg:-left-24'
                }`} 
              >
                <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q25,25 50,10 T100,10" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              {/* Subtle Leaf Embed */}
              <svg className={`absolute top-0 ${exp.side === 'left' ? '-right-6 rotate-0' : '-left-6 -rotate-90'} w-8 h-8 text-clay-500 opacity-80 z-10 hidden md:block`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22S2 16 2 8c0-4 3-7 7-7 2.5 0 4.5 1.5 6 3 1.5-1.5 3.5-3 6-3 4 0 7 3 7 7 0 8-10 14-10 14z" />
              </svg>
              
              <div className={`${exp.side === 'left' ? 'md:pr-12 lg:pr-24 md:text-right' : 'md:pl-12 lg:pl-24 pl-12'}`}>
                <div className="flex items-center gap-4 mb-4 ${exp.side === 'left' ? 'md:flex-row-reverse' : ''}">
                  <div className={`p-4 rounded-full border border-forest-900/20 ${exp.type === 'education' ? 'bg-earth-100' : 'bg-white'}`}>
                    {exp.type === 'education' ? (
                      <GraduationCap className="w-6 h-6 text-clay-600" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-forest-900" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-forest-900 mb-1">{exp.title}</h3>
                    <p className="text-clay-600 font-bold tracking-widest uppercase text-xs">{exp.company}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-2 text-sm text-forest-800 font-bold mb-6 ${exp.side === 'left' ? 'md:justify-end' : ''}`}>
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                  <span className="mx-2 opacity-20">|</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`text-lg text-forest-800 font-medium flex gap-3 ${exp.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-forest-900/30 font-black mt-1">—</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-2 ${exp.side === 'left' ? 'md:justify-end' : ''}`}>
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs font-bold uppercase tracking-widest text-forest-900 border border-forest-900/20 px-3 py-1 bg-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}