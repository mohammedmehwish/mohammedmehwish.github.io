import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 18; // radius 18
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-cyber-card/90 text-cyber-cyan border border-cyber-cyan/30 shadow-glow-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all flex items-center justify-center group"
          aria-label="Scroll to Top"
        >
          {/* Circular Progress SVG */}
          <svg className="w-10 h-10 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="3"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>

          <ChevronUp className="w-5 h-5 absolute text-cyber-cyan group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
