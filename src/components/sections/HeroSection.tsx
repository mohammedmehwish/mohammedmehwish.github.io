import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

const DOMAINS = ['Design Engineering', 'Automation Engineering', 'Robotics Engineering'];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.slice(0, displayText.length + 1));
        if (displayText.length === currentTagline.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTagline.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section id="hero" className="relative bg-white dark:bg-slate-900 py-20 pt-32 transition-colors">
      <span id="home" className="absolute top-0" aria-hidden="true" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Introduction & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-left"
          >
            <div>
              <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-2">
                Hi, I'm
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Typewriter tagline */}
            <div className="h-8 flex items-center text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300">
              <span>Specializing in&nbsp;</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{displayText}</span>
              <span className="inline-block w-0.5 h-6 bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse align-middle" />
            </div>

            {/* Summary */}
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.aboutSummary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2 items-center">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="btn-primary cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
              <a href="#projects" className="btn-secondary">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Engineering domain badges */}
            <div className="flex gap-2 flex-wrap pt-1">
              {DOMAINS.map((domain) => (
                <span
                  key={domain}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-700/40 whitespace-nowrap"
                >
                  {domain}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Professional Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent blur-2xl pointer-events-none" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-600/25 dark:ring-blue-400/30 bg-slate-100 dark:bg-slate-800">
                <img
                  src="./assets/profile-photo.jpg"
                  alt="Mohammed Mehwish V M — Robotics & Mechatronics Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center border border-slate-200 dark:border-slate-700 shadow-card"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
