import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, career opportunity, or collaboration inquiry? Feel free to send a message.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (5 cols): Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* 1. Email Card */}
            <div className="pro-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors shrink-0 ml-2"
                title={copiedEmail ? 'Copied to clipboard!' : 'Copy email address'}
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* 2. LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pro-card p-5 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Mohammed Mehwish
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
            </a>

            {/* 3. GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pro-card p-5 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    GitHub
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    @{PERSONAL_INFO.githubUsername}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
            </a>

            {/* 4. Location Card */}
            <div className="pro-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="pro-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block"
                    >
                      Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block"
                    >
                      Your Email <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block"
                  >
                    Message <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y"
                  />
                </div>

                {/* Submit button or Success notification */}
                {submitted ? (
                  <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                        Thank you for reaching out. I will get back to you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
