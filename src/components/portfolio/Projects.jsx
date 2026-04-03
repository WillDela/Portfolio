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

        <motion.div {...up()} className="mb-16">
          <p className="font-display text-[7rem] font-bold leading-none text-earth-50/[0.04] select-none -mb-10">
            03
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-earth-50 tracking-tight leading-none">
            Projects
          </h2>
          <div className="h-px w-16 bg-earth-50/20 mt-6" />
        </motion.div>

        {/* Featured — Korsana */}
        <motion.div
          {...up(0.1)}
          className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 pb-20 border-b border-earth-50/10"
        >
          <a
            href={FEATURED.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border-2 border-earth-50/10 overflow-hidden"
          >
            <img
              src={FEATURED.image}
              alt={FEATURED.title}
              className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
          </a>

          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-clay-400 border border-clay-400/40 px-2 py-0.5">
                  {FEATURED.tag}
                </span>
                <span className="text-xs text-earth-50/50 font-medium">{FEATURED.period}</span>
              </div>
              <a href={FEATURED.link} target="_blank" rel="noopener noreferrer" className="group/t">
                <h3 className="font-display font-bold text-4xl md:text-5xl text-earth-50 tracking-tight leading-none group-hover/t:text-clay-400 transition-colors">
                  {FEATURED.title}
                </h3>
              </a>
              <p className="text-earth-50/60 text-sm font-medium mt-1">{FEATURED.subtitle}</p>
            </div>
            <p className="text-earth-50/80 leading-relaxed text-[15px]">{FEATURED.description}</p>
            <ul className="space-y-2.5 pt-1 border-t border-earth-50/10">
              {FEATURED.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-earth-50/70 leading-relaxed pt-2.5">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-clay-400 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-xs text-earth-50/40 tracking-wide">
              {FEATURED.tech.join(' · ')}
            </p>
          </div>
        </motion.div>

        {/* Grid — Sylly + AI Garbage */}
        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} {...up(0.1 + i * 0.1)}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-2 border-earth-50/10 overflow-hidden mb-5"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80';
                  }}
                />
              </a>
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group/t">
                      <h3 className="font-display font-bold text-2xl text-earth-50 tracking-tight group-hover/t:text-clay-400 transition-colors">
                        {p.title}
                      </h3>
                    </a>
                    <p className="text-xs text-earth-50/50 font-medium mt-0.5">{p.subtitle}</p>
                  </div>
                  <span className="text-xs text-earth-50/40 font-medium whitespace-nowrap mt-1">{p.period}</span>
                </div>
                {p.award && (
                  <p className="text-xs font-bold tracking-wide text-clay-400">◆ {p.award}</p>
                )}
                <p className="text-sm text-earth-50/70 leading-relaxed">{p.description}</p>
                <p className="text-xs text-earth-50/40 tracking-wide pt-1">{p.tech.join(' · ')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
