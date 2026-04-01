import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:wdelaosa24@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'wdelaosa24@gmail.com', link: 'mailto:wdelaosa24@gmail.com' },
    { icon: Phone, label: 'Phone', value: '305-850-9778', link: 'tel:3058509778' },
    { icon: MapPin, label: 'Location', value: 'Miami, Florida' },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 w-full max-w-6xl mx-auto">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 relative bg-[#fdfbf7] py-8 mx-auto w-fit px-8"
        >
          {/* Node to cap off the trunk */}
          <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-forest-900 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" />
          
          <h2 className="text-4xl md:text-5xl font-black text-forest-900 mb-6 uppercase tracking-tight">
            Let's Connect
          </h2>
          <div className="h-px w-24 bg-forest-900 opacity-20 mx-auto mb-6" />
          <p className="text-forest-800 font-medium text-xl max-w-2xl mx-auto">
            Interested in collaborating or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-2 border-forest-900 p-8 bg-white relative">
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-clay-500" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-clay-500" />

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-forest-900 mb-2 font-black uppercase tracking-widest text-sm">Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-earth-100 border-2 border-forest-900/20 text-forest-900 focus:border-forest-900 outline-none p-4 transition-colors font-medium"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-forest-900 mb-2 font-black uppercase tracking-widest text-sm">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-earth-100 border-2 border-forest-900/20 text-forest-900 focus:border-forest-900 outline-none p-4 transition-colors font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-forest-900 mb-2 font-black uppercase tracking-widest text-sm">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-earth-100 border-2 border-forest-900/20 text-forest-900 focus:border-forest-900 outline-none p-4 min-h-[150px] transition-colors font-medium resize-y"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-forest-900 hover:bg-forest-800 text-[#fdfbf7] font-black tracking-widest uppercase py-4 flex items-center justify-center transition-colors"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-6 pb-6 border-b border-forest-900/10 last:border-0"
              >
                <div className="p-4 border-2 border-forest-900 bg-white">
                  <info.icon className="w-6 h-6 text-clay-600" />
                </div>
                <div>
                  <p className="text-sm text-forest-900/60 font-black tracking-widest uppercase mb-1">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-xl font-black text-forest-900 hover:text-clay-600 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-xl font-black text-forest-900">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-forest-900/20">
              <a
                href="https://github.com/WillDela"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-[#fdfbf7] font-black uppercase tracking-widest py-4 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/williamdelaosa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-[#fdfbf7] font-black uppercase tracking-widest py-4 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-32 text-forest-900/60 font-bold uppercase tracking-widest text-sm"
        >
          <p>© 2025 William Delaosa. Built with React and passion for both code and running. 🏃🏽‍♂️</p>
        </motion.div>
      </div>
    </section>
  );
}