import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
    <section id="contact" className="relative py-32 px-4 bg-earth-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-forest-900 to-forest-700 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-forest-500 to-clay-500 mx-auto mb-6 rounded-full" />
          <p className="text-forest-800 font-medium text-lg max-w-2xl mx-auto">
            Interested in collaborating or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/80 backdrop-blur-md shadow-lg shadow-forest-900/5 border-earth-200 p-8 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-forest-900 mb-2 font-bold">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-earth-50 border-earth-300 text-forest-900 focus:border-forest-500 focus:ring-forest-500 rounded-xl"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-forest-900 mb-2 font-bold">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-earth-50 border-earth-300 text-forest-900 focus:border-forest-500 focus:ring-forest-500 rounded-xl"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-forest-900 mb-2 font-bold">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-earth-50 border-earth-300 text-forest-900 focus:border-forest-500 focus:ring-forest-500 min-h-[150px] rounded-xl"
                    placeholder="Your message..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white shadow-md shadow-forest-900/10 font-bold rounded-xl"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-md shadow-sm border-earth-200 p-6 hover:border-forest-400 hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-clay-500/10">
                      <info.icon className="w-6 h-6 text-clay-600" />
                    </div>
                    <div>
                      <p className="text-sm text-forest-700 font-bold mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-forest-900 font-black hover:text-clay-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-forest-900 font-black">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/WillDela"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full border-earth-300 text-forest-800 hover:bg-earth-100 hover:border-earth-400 rounded-xl font-bold bg-white/50 backdrop-blur-sm shadow-sm"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/williamdelaosa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full border-earth-300 text-forest-800 hover:bg-earth-100 hover:border-earth-400 rounded-xl font-bold bg-white/50 backdrop-blur-sm shadow-sm"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 text-forest-700 font-medium"
        >
          <p>© 2025 William Delaosa. Built with React and passion for both code and running. 🏃🏽‍♂️</p>
        </motion.div>
      </div>
    </section>
  );
}