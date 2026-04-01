import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Korsana',
    subtitle: 'AI Running Coach',
    period: 'Feb 2026 – Present',
    tag: 'In Development',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80',
    description:
      'Full-stack AI coaching platform that syncs Strava running data and generates personalized race training plans — combining established periodization frameworks with Claude AI for adaptive, goal-specific coaching.',
    bullets: [
      'Architecting in Golang (Gin) and React with Strava OAuth 2.0 for real-time activity sync and RESTful data serving via PostgreSQL and Redis.',
      'Designing race readiness dashboard with pace-to-goal comparison, weekly mileage tracking, and AI-driven coaching insights using the Claude API.',
    ],
    tech: ['Golang', 'TypeScript', 'React', 'Claude API', 'Strava OAuth 2.0', 'PostgreSQL', 'Redis'],
    link: 'https://github.com/WillDela',
    featured: true,
  },
  {
    title: 'Sylly',
    subtitle: 'AI Academic Planner',
    period: 'Oct 2025',
    award: 'Best Authentication — ShellHacks 2025 (245 teams)',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/e8dd767e3_WhatsAppImage2025-10-22at222745_b62a362c.jpg',
    description:
      'Hackathon winner that converts syllabus PDFs into Google Calendar events automatically — Auth0 + Gemini AI + Google Calendar API wired into a single workflow.',
    bullets: [
      'Won "Best Authentication with Auth0" competing against 245 projects by architecting secure Auth0 + Google OAuth 2.0 + Calendar API integration.',
      'Led frontend and auth layer for 4-person team: React/TypeScript components, OAuth state management, and PDF-to-calendar pipeline coordination.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Auth0', 'Google Cloud', 'PostgreSQL'],
    link: 'https://devpost.com/software/sylly',
  },
  {
    title: 'AI Garbage Classifier',
    subtitle: 'Deep Learning System',
    period: 'Apr – May 2025',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    description:
      'CNN image classification model for automated waste sorting — 83.4% test accuracy across 12 waste categories on a dataset of 15,515 images.',
    bullets: [
      'Developed 9.7M parameter CNN with progressive dropout, batch normalization, and class weighting using TensorFlow/Keras.',
      'Built end-to-end ML pipeline: stratified splitting, LANCZOS resizing, pixel normalization, and a modular prediction API with model serialization.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Scikit-learn'],
    link: 'https://github.com/WillDela/AI_Garbage_Classification_System',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-clay-500 mb-3">03</p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            Projects
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        {/* Featured project */}
        <motion.div
          {...fadeUp(0.1)}
          className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 pb-24 border-b border-forest-900/12"
        >
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border-2 border-forest-900 overflow-hidden"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
          </a>

          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-clay-500 border border-clay-500/40 px-2 py-0.5">
                  {featured.tag}
                </span>
                <span className="text-xs text-forest-800/50 font-medium">{featured.period}</span>
              </div>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link"
              >
                <h3 className="font-display font-bold text-4xl md:text-5xl text-forest-900 tracking-tight leading-none group-hover/link:text-clay-500 transition-colors">
                  {featured.title}
                </h3>
              </a>
              <p className="text-forest-800/60 font-medium text-sm mt-1">{featured.subtitle}</p>
            </div>

            <p className="text-forest-800 leading-relaxed">{featured.description}</p>

            <ul className="space-y-2.5 border-t border-forest-900/12 pt-5">
              {featured.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-forest-800/75 leading-relaxed">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-clay-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <p className="text-xs text-forest-800/50 tracking-wide pt-1">
              {featured.tech.join(' · ')}
            </p>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-10">
          {rest.map((project, i) => (
            <motion.div key={project.title} {...fadeUp(0.1 + i * 0.1)}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-2 border-forest-900 overflow-hidden mb-5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80';
                  }}
                />
              </a>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link"
                    >
                      <h3 className="font-display font-bold text-2xl text-forest-900 tracking-tight group-hover/link:text-clay-500 transition-colors">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-forest-800/50 text-xs font-medium mt-0.5">{project.subtitle}</p>
                  </div>
                  <span className="text-xs text-forest-800/40 font-medium whitespace-nowrap mt-1">
                    {project.period}
                  </span>
                </div>

                {project.award && (
                  <p className="text-xs font-bold tracking-wide text-clay-500">
                    ◆ {project.award}
                  </p>
                )}

                <p className="text-sm text-forest-800/75 leading-relaxed">{project.description}</p>

                <p className="text-xs text-forest-800/45 tracking-wide pt-1">
                  {project.tech.join(' · ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
