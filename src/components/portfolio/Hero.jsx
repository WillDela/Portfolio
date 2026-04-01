import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown, MapPin } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,131,97,0.05),transparent_60%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-400/20 rounded-full blur-3xl mix-blend-multiply"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-clay-400/20 rounded-full blur-3xl mix-blend-multiply"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Subtle organic wavy lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-earth-300 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] w-[120%] h-[120%]"
            style={{ transformOrigin: 'center center' }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05 + i * 0.05, 1],
            }}
            transition={{ duration: 25 + i * 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-earth-200 shadow-sm mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-forest-500 rounded-full animate-pulse" />
            <span className="text-sm text-forest-800 font-medium">Lacing up for the next challenge</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-forest-900">
            William <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-forest-600">Delaosa</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl font-medium text-forest-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Computer Science Student • Runner • Community Leader
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-2 text-forest-600 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MapPin className="w-5 h-5 text-clay-500" />
            <span>Miami, Florida • Florida International University</span>
          </motion.div>

          <motion.p
            className="text-lg text-forest-800/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building modern web experiences and leading communities. 
            Passionate about AI, full-stack development, and helping runners reach their goals. 🏃🏽‍♂️
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
              className="bg-forest-600 hover:bg-forest-700 text-white px-8 rounded-full shadow-lg shadow-forest-900/10 font-bold"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-earth-300 text-forest-800 hover:bg-earth-100 rounded-full bg-white/50 backdrop-blur-sm font-bold"
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
              className="p-3 bg-white/60 rounded-full border border-earth-200 hover:bg-earth-100 hover:scale-110 transition-all text-forest-700 hover:text-forest-900 shadow-sm"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/williamdelaosa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/60 rounded-full border border-earth-200 hover:bg-earth-100 hover:scale-110 transition-all text-forest-700 hover:text-forest-900 shadow-sm"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:wdelaosa24@gmail.com"
              className="p-3 bg-white/60 rounded-full border border-earth-200 hover:bg-earth-100 hover:scale-110 transition-all text-forest-700 hover:text-forest-900 shadow-sm"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-10 h-10 text-forest-400" />
        </motion.div>
      </div>
    </section>
  );
}