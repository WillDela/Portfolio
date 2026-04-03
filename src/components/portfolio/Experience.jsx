import React from 'react';
import { motion } from 'framer-motion';

const JOBS = [
  {
    num: '01',
    role: 'Software Engineer Intern',
    company: 'Datadog',
    location: 'New York City, NY',
    period: 'Summer 2026',
    tag: 'Incoming',
    bullets: [
      'Incoming summer internship at one of the leading cloud observability and monitoring platforms.',
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
      'Conducting Reinforcement Learning from Human Feedback (RLHF) on multimodal LLM and vision models — evaluating 200+ prompts to reduce hallucinations and improve model alignment for production deployment pipelines.',
    ],
  },
  {
    num: '03',
    role: 'Web Developer Intern',
    company: 'Destination Brides',
    location: 'Remote',
    period: 'May 2025 – Jul 2025',
    bullets: [
      'Built scalable React architecture with standardized component libraries, delivering 6 responsive e-commerce platforms for wedding industry clients.',
      'Streamlined cross-functional workflow across a 6-person team by integrating GitHub, Slack, and Figma — reducing coordination overhead and accelerating delivery cycles.',
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
      'Delivering tier 1–2 technical support for 9,000+ students and faculty across 15 computer labs; maintaining 99% uptime via Faronics DeepFreeze system administration.',
      'Built technical documentation library and RMM Services ticketing system, reducing repeat service tickets and improving resolution efficiency.',
    ],
  },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-earth-50 border-b-[4px] border-forest-900">
      
      {/* Edge-to-Edge Brutalist Section Header */}
      <motion.div {...up()} className="mb-16 border-b-[4px] border-forest-900 pb-6 px-6 md:px-12 w-full flex items-end justify-between">
        <p className="font-mono text-2xl md:text-4xl font-bold text-clay-500 leading-none">
          02
        </p>
        <h2 className="font-display font-black text-6xl md:text-8xl text-forest-900 tracking-tighter uppercase leading-none text-right">
          Experience
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="space-y-8">
          {JOBS.map((job, i) => (
            <motion.div
              key={job.num}
              {...up(i * 0.08)}
              className="border-2 border-forest-900 shadow-[6px_6px_0px_0px_#1e2d1e] bg-earth-50 p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-16"
            >
              {/* Meta Schematic */}
              <div className="md:w-64 shrink-0 flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-forest-900 pb-6 md:pb-0 md:pr-6">
                <div className="flex justify-between items-start mb-6">
                  <p className="font-mono font-black text-4xl text-forest-900 leading-none select-none">
                    {job.num}
                  </p>
                  {job.tag && (
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-earth-50 bg-forest-900 px-3 py-1 shadow-[2px_2px_0px_0px_#c58361]">
                      {job.tag}
                    </span>
                  )}
                </div>
                <div className="mt-auto space-y-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-forest-900/50 mb-1">Company</p>
                    <p className="font-mono text-sm font-bold text-forest-900">{job.company}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-forest-900/50 mb-1">Location</p>
                    <p className="font-mono text-sm font-bold text-forest-900">{job.location}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-forest-900/50 mb-1">Timeline</p>
                    <span className={`inline-block font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-2 border-forest-900 ${
                      job.period.includes("Present") ? "bg-moss-500 text-forest-900 shadow-[2px_2px_0px_0px_#1e2d1e]" : "bg-clay-500 text-earth-50 shadow-[2px_2px_0px_0px_#1e2d1e]"
                    }`}>
                      {job.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow pt-2 md:pt-0">
                <h3 className="font-display font-black text-3xl md:text-5xl text-forest-900 uppercase leading-none mb-8 tracking-tighter">
                  {job.role}
                </h3>
                <ul className="space-y-4 border-t-2 border-forest-900 pt-6">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className={`mt-[8px] w-2.5 h-2.5 shrink-0 shadow-[2px_2px_0px_0px_#1e2d1e] ${
                        job.period.includes("Present") ? "bg-moss-500" : "bg-clay-500"
                      }`} />
                      <p className="font-mono text-sm md:text-[15px] text-forest-900/80 leading-relaxed">
                        {b}
                      </p>
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
