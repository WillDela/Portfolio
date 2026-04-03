import React from 'react';
import { motion } from 'framer-motion';

const FEATURED = {
  title: 'Korsana',
  subtitle: 'AI Running Coach',
  period: 'Feb 2026 – Present',
  tag: 'In Development',
  image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&q=80',
  description:
    'Full-stack AI coaching platform that syncs your Strava data and generates personalized race training plans — blending established periodization frameworks with Claude AI for adaptive, goal-specific coaching.',
  bullets: [
    'Architecting in Golang (Gin) and React with Strava OAuth 2.0 for real-time activity sync, served by a RESTful API backed by PostgreSQL and Redis.',
    'Building a race readiness dashboard with pace-to-goal comparison, weekly mileage tracking, and AI-driven coaching insights via the Claude API.',
  ],
  tech: ['Golang', 'TypeScript', 'React', 'Claude API', 'Strava OAuth 2.0', 'PostgreSQL', 'Redis'],
  link: 'https://github.com/WillDela',
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
    <section id="projects" className="py-28 px-6 bg-forest-900 text-earth-50">
      <div className="max-w-6xl mx-auto">

        {/* Brutalist Section Header */}
        <motion.div {...up()} className="mb-16 border-b-4 border-earth-50 pb-4 flex items-end justify-between">
          <h2 className="font-display font-black text-6xl md:text-8xl text-earth-50 tracking-tighter uppercase leading-none">
            Projects
          </h2>
          <p className="font-mono text-2xl md:text-4xl font-bold text-earth-50 leading-none">
            03
          </p>
        </motion.div>

        {/* Featured — Korsana */}
        <motion.div
          {...up(0.1)}
          className="grid md:grid-cols-2 bg-forest-900 border-2 border-earth-50 shadow-[8px_8px_0px_0px_#fdfbf7] mb-20"
        >
          <a
            href={FEATURED.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b-2 md:border-b-0 md:border-r-2 border-earth-50 overflow-hidden relative group p-2 bg-forest-800"
          >
            <div className="absolute inset-0 bg-earth-50/0 group-hover:bg-earth-50/10 transition-colors z-10 point-events-none" />
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              className="w-full h-full object-cover border-2 border-forest-900"
            />
          </a>

          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-forest-900 bg-earth-50 px-3 py-1 shadow-[2px_2px_0px_0px_#c58361]">
                  {FEATURED.tag}
                </span>
                <span className="font-mono text-xs text-earth-50/70 font-bold uppercase">{FEATURED.period}</span>
              </div>
              <a href={FEATURED.link} target="_blank" rel="noopener noreferrer" className="group/t inline-block mb-2">
                <h3 className="font-display font-black text-5xl md:text-6xl text-earth-50 tracking-tighter leading-none hover:text-clay-500 transition-colors uppercase">
                  {FEATURED.title}
                </h3>
              </a>
              <p className="font-mono text-earth-50 font-bold uppercase tracking-wide border-b-2 border-earth-50/20 pb-4 mb-4">{FEATURED.subtitle}</p>
            </div>
            
            <p className="font-mono text-earth-50/80 leading-relaxed text-sm mb-6">{FEATURED.description}</p>
            
            <ul className="space-y-4 pt-4 border-t-2 border-earth-50/20 mb-8">
              {FEATURED.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-[8px] w-2.5 h-2.5 bg-earth-50 shrink-0 shadow-[2px_2px_0px_0px_#c58361]" />
                  <p className="font-mono text-sm text-earth-50/80 leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {FEATURED.tech.map((t, i) => (
                <span key={i} className="font-mono text-[10px] uppercase tracking-widest border border-earth-50/40 text-earth-50 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid — Sylly + AI Garbage */}
        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} {...up(0.1 + i * 0.1)} className="flex flex-col bg-forest-900 border-2 border-earth-50 shadow-[6px_6px_0px_0px_#fdfbf7]">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b-2 border-earth-50 p-2 bg-forest-800"
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
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block group/t mb-1">
                      <h3 className="font-display font-black text-3xl md:text-4xl text-earth-50 tracking-tighter uppercase leading-none hover:text-clay-500 transition-colors">
                        {p.title}
                      </h3>
                    </a>
                    <p className="font-mono text-xs text-earth-50 font-bold uppercase">{p.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-earth-50/60 font-bold uppercase whitespace-nowrap">{p.period}</span>
                </div>
                
                {p.award && (
                  <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-forest-900 bg-clay-500 px-2 py-1 shadow-[2px_2px_0px_0px_#fdfbf7] inline-block self-start mb-4">
                    {p.award}
                  </p>
                )}
                
                <p className="font-mono text-sm text-earth-50/80 leading-relaxed mb-6 border-t-2 border-earth-50/20 pt-4 flex-grow">
                  {p.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-earth-50/20">
                  {p.tech.map((t, j) => (
                    <span key={j} className="font-mono text-[10px] uppercase tracking-widest border border-earth-50/40 text-earth-50 px-2 py-1">
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
