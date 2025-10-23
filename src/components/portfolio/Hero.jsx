import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown, MapPin } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Track Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 left-0 right-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          style={{ top: `${20 + i * 15}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Available for opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            William Delaosa
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Computer Science Student • Former Web Developer Intern • Runner
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-2 text-slate-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MapPin className="w-4 h-4" />
            <span>Miami, Florida • Florida International University</span>
          </motion.div>

          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building modern web experiences and leading communities. 
            Passionate about AI, full-stack development, and helping runners reach their goals.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/WillDela"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full border border-slate-700/50 hover:bg-slate-700 transition-colors"
            >
              <Github className="w-5 h-5 text-slate-300" />
            </a>
            <a
              href="https://linkedin.com/in/williamdelaosa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full border border-slate-700/50 hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-slate-300" />
            </a>
            <a
              href="mailto:wdelaosa24@gmail.com"
              className="p-3 bg-slate-800/50 rounded-full border border-slate-700/50 hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-5 h-5 text-slate-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}