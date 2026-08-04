import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#070b19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
            COMMUNICATION PROTOCOL
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="cyber-gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Have a project, collaboration proposal, or job opportunity? Send a message directly.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 space-y-3 hover:border-cyber-cyan/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase">DIRECT EMAIL</h4>
                    <p className="text-sm font-semibold font-mono text-white">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 space-y-3 hover:border-cyber-cyan/40 transition-colors flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">LINKEDIN PROFILE</h4>
                  <p className="text-sm font-semibold font-mono text-white group-hover:text-cyber-cyan transition-colors">
                    mohammed-mehwish-202677307
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-cyber-cyan group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 space-y-3 hover:border-cyber-cyan/40 transition-colors flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">GITHUB PROFILE</h4>
                  <p className="text-sm font-semibold font-mono text-white group-hover:text-cyber-cyan transition-colors">
                    @mohammedmehwish
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-cyber-cyan group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase">LOCATION</h4>
                <p className="text-sm font-semibold font-mono text-white">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-cyber-cyan/30 shadow-glow-cyan"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-mono text-white">MESSAGE TRANSMITTED</h3>
                <p className="text-sm font-mono text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, Mohammed Mehwish will review your message and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-2 text-sm font-mono text-cyber-cyan font-bold mb-4">
                  <MessageSquare className="w-4 h-4" />
                  <span>TRANSMIT DIRECT MESSAGE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 font-semibold">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm font-sans text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 font-semibold">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm font-sans text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 font-semibold">SUBJECT</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Robotics Collaboration Opportunity"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm font-sans text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 font-semibold">YOUR MESSAGE *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your project details or inquiry here..."
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm font-sans text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-cyan via-cyber-sky to-cyber-blue text-slate-950 font-mono font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
