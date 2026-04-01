import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE = [
  {
    num: '01',
    role: 'Software Engineer Intern',
    company: 'Datadog',
    location: 'New York City, NY',
    period: 'Summer 2026',
    tag: 'Incoming',
    bullets: [
      'Incoming summer internship at one of the leading observability and cloud monitoring platforms.',
    ],
  },
  {
    num: '02',
    role: 'Machine Learning Fellow',
    company: 'Handshake',
    location: 'Remote',
    period: 'Feb 2026 – Aug 2026',
    tag: 'Current',
    bullets: [
      'Conducting Reinforcement Learning from Human Feedback (RLHF) on multimodal LLM and vision models, evaluating 200+ prompts to reduce hallucinations and improve model alignment for production deployment pipelines.',
    ],
  },
  {
    num: '03',
    role: 'Web Developer Intern',
    company: 'Destination Brides',
    location: 'Remote',
    period: 'May 2025 – Jul 2025',
    bullets: [
      'Built scalable React architecture with standardized component libraries and development protocols, delivering 6 responsive e-commerce platforms for wedding industry clients.',
      'Streamlined cross-functional workflow across 6-person team by integrating GitHub, Slack, and Figma, reducing coordination overhead and accelerating delivery cycles.',
    ],
  },
  {
    num: '04',
    role: 'Computer Lab & IT Student Assistant',
    company: 'Florida International University',
    location: 'Miami, FL',
    period: 'Oct 2024 – Present',
    tag: 'Current',
    bullets: [
      'Delivering tier 1–2 technical support for 9,000+ students and faculty across 15 computer labs; administering systems via Faronics DeepFreeze to maintain 99% uptime.',
      'Developed technical documentation library and RMM Services ticketing system, reducing repeat service tickets and improving resolution efficiency.',
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-earth-100/40">
      <div className="max-w-6xl mx-auto">

        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-clay-500 mb-3">02</p>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-forest-900 tracking-tight leading-none">
            Experience
          </h2>
          <div className="h-px w-16 bg-forest-900/20 mt-6" />
        </motion.div>

        <div>
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.num}
              {...fadeUp(i * 0.08)}
              className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12 py-10 border-t border-forest-900/12 last:border-b"
            >
              {/* Left: meta */}
              <div className="space-y-1 md:pt-1">
                <p className="font-display font-bold text-4xl text-forest-900/12 leading-none select-none">
                  {exp.num}
                </p>
                <p className="text-xs text-forest-800/60 font-medium pt-1">{exp.period}</p>
                <p className="text-xs text-forest-800/40">{exp.location}</p>
                {exp.tag && (
                  <span className="inline-block mt-1 text-[10px] font-bold tracking-widest uppercase text-clay-500 border border-clay-500/40 px-2 py-0.5">
                    {exp.tag}
                  </span>
                )}
              </div>

              {/* Right: content */}
              <div>
                <h3 className="font-semibold text-xl text-forest-900 leading-tight mb-0.5">
                  {exp.role}
                </h3>
                <p className="text-clay-500 font-semibold text-sm mb-4 tracking-wide">
                  {exp.company}
                </p>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-forest-800/75 leading-relaxed"
                    >
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-clay-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
