import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth cycling typewriter effect
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
      {/* Anchor for backward compatibility with navbar #home link */}
      <span id="home" className="absolute top-0" aria-hidden="true" />

      <div className="section-container">
        {/* Two-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Introductions & CTAs */}
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
            </div>

            {/* Cycling Taglines Subtitle */}
            <div className="h-8 flex items-center text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300">
              <span>Specializing in&nbsp;</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse align-middle" />
            </div>

            {/* About Summary */}
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-xl">
              {PERSONAL_INFO.aboutSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 items-center">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="btn-primary cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="btn-secondary"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Professional Robotics Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop"
                alt="Robotics and Engineering"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center border border-slate-200 dark:border-slate-700 shadow-card"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
