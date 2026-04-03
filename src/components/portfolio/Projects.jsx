import React from 'react';
import { motion } from 'framer-motion';

const FEATURED = {
  title: 'Korsana',
  subtitle: 'AI Running Coach',
  period: 'Feb 2026 – Present',
  tag: 'In Development',
  image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&q=80',
  description:
    'Full-stack AI coaching platform that syncs your Strava data and generates personalized race training plans — blending Gemini AI and personal analysis for adaptive, goal-specific coaching.',
  bullets: [
    'Architecting in Golang (Gin) and React with Strava OAuth 2.0 for real-time activity sync, served by a RESTful API backed by PostgreSQL and Redis.',
    'Building a race readiness dashboard with pace-to-goal comparison, weekly mileage tracking, and AI-driven coaching insights via the Gemini API.',
  ],
  tech: ['Golang', 'Javascript', 'React', 'Gemini API', 'Strava OAuth 2.0', 'PostgreSQL', 'Redis'],
  link: 'https://github.com/WillDela/Korsana',
};

const PROJECTS = [
  {
    title: 'Sylly',
    subtitle: 'AI Academic Planner',
    period: 'Oct 2025',
    award: 'Best Authentication — ShellHacks 2025 (245 teams)',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f98dc8386ebb34a4e98146/e8dd767e3_WhatsAppImage2025-10-22at222745_b62a362c.jpg',
    description:
      'Converts syllabus PDFs into Google Calendar events automatically. Auth0 + Gemini AI + Google Calendar API wired into a single workflow — won Best Authentication at ShellHacks against 245 teams.',
    tech: ['React', 'TypeScript', 'Node.js', 'Auth0', 'Google Cloud', 'PostgreSQL'],
    link: 'https://devpost.com/software/sylly',
  },
  {
    title: 'AI Garbage Classifier',
    subtitle: 'Deep Learning System',
    period: 'Apr – May 2025',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    description:
      '83.4% test accuracy across 12 waste categories on 15,515 images. CNN with 9.7M parameters, progressive dropout, batch normalization, and a modular prediction API.',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Scikit-learn'],
    link: 'https://github.com/WillDela/AI_Garbage_Classification_System',
  },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-b-[4px] border-forest-900">
      
      {/* Edge-to-Edge Brutalist Section Header */}
      <motion.div {...up()} className="mb-16 border-b-[4px] border-forest-900 pb-6 px-6 md:px-12 w-full flex items-end justify-between">
        <h2 className="font-display font-black text-6xl md:text-8xl text-forest-900 tracking-tighter uppercase leading-none">
          Projects
        </h2>
        <p className="font-mono text-2xl md:text-4xl font-bold text-clay-500 leading-none">
          03
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Featured — Korsana (Wireframe Row) */}
        <motion.div
          {...up(0.1)}
          className="grid md:grid-cols-2 border-b-[4px] border-forest-900 mb-20 pb-16"
        >
          <a
            href={FEATURED.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-2 border-forest-900 p-2 bg-earth-100 hover:bg-forest-900/5 transition-colors mb-8 md:mb-0 md:mr-10 xl:mr-16"
          >
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              className="w-full aspect-[4/3] object-cover border-2 border-forest-900"
            />
          </a>

          <div className="flex flex-col justify-center">
            <div>
              <div className="flex items-center justify-between mb-4 border-b-2 border-forest-900 pb-4">
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-forest-900 bg-moss-500 border border-forest-900 px-3 py-1 shadow-[2px_2px_0px_0px_#1e2d1e]">
                  {FEATURED.tag}
                </span>
                <span className="font-mono text-xs text-forest-900/70 font-bold uppercase">{FEATURED.period}</span>
              </div>
              <a href={FEATURED.link} target="_blank" rel="noopener noreferrer" className="group/t inline-block mb-1">
                <h3 className="font-display font-black text-5xl md:text-6xl text-forest-900 tracking-tighter leading-none hover:text-clay-500 transition-colors uppercase">
                  {FEATURED.title}
                </h3>
              </a>
              <p className="font-mono text-forest-900 font-bold uppercase tracking-wide mb-6">{FEATURED.subtitle}</p>
            </div>
            
            <p className="font-mono text-forest-900/80 leading-relaxed text-sm lg:text-base mb-6 border-t-2 border-forest-900/20 pt-6">{FEATURED.description}</p>
            
            <ul className="space-y-4 mb-8">
              {FEATURED.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-[8px] w-2 h-2 bg-forest-900 shrink-0" />
                  <p className="font-mono text-sm text-forest-900/80 leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {FEATURED.tech.map((t, i) => (
                <span key={i} className="font-mono text-[10px] uppercase tracking-widest border border-forest-900/40 text-forest-900 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid — Sylly + AI Garbage */}
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} {...up(0.1 + i * 0.1)} className="flex flex-col border-[3px] border-forest-900 bg-earth-50 hover:bg-[#e8decb] hover:border-clay-500 transition-colors">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b-[3px] border-forest-900 p-2 bg-[#e8decb]/50"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full aspect-[16/9] object-cover border-2 border-forest-900 hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80';
                  }}
                />
              </a>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-4 border-b-2 border-forest-900/20 pb-4">
                  <div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block group/t mb-1">
                      <h3 className="font-display font-black text-3xl md:text-4xl text-forest-900 tracking-tighter uppercase leading-none hover:text-clay-500 transition-colors">
                        {p.title}
                      </h3>
                    </a>
                    <p className="font-mono text-xs text-forest-900 font-bold uppercase">{p.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-forest-900/60 font-bold uppercase whitespace-nowrap">{p.period}</span>
                </div>
                
                {p.award && (
                  <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-earth-50 bg-clay-500 border border-forest-900 px-2 py-1 shadow-[2px_2px_0px_0px_#1e2d1e] inline-block self-start mb-4">
                    {p.award}
                  </p>
                )}
                
                <p className="font-mono text-sm text-forest-900/80 leading-relaxed mb-6 pt-2 flex-grow">
                  {p.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-forest-900/20">
                  {p.tech.map((t, j) => (
                    <span key={j} className="font-mono text-[10px] uppercase tracking-widest border border-forest-900/40 text-forest-900 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
