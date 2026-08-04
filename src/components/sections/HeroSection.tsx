import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Rocket, Mail, ChevronRight, Bot, Cpu, Zap, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        if (displayText.length === currentTagline.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background radial gradient spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-card/80 border border-cyber-cyan/30 backdrop-blur-md shadow-glow-cyan">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
              <span className="text-xs font-mono text-cyber-sky uppercase tracking-widest font-semibold">
                SYSTEM ONLINE • KERALA, INDIA
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-mono text-slate-300 font-medium">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-slate-100">{PERSONAL_INFO.name.split(' ')[0]}</span>
                <span className="cyber-gradient-text glow-text-cyan">
                  {PERSONAL_INFO.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </div>

            {/* Typing Animation Subtitle */}
            <div className="h-12 flex items-center text-xl sm:text-2xl font-mono text-cyber-sky">
              <span className="text-slate-400 mr-2">&gt;</span>
              <span className="font-semibold">{displayText}</span>
              <span className="w-2.5 h-6 bg-cyber-cyan ml-1 animate-pulse" />
            </div>

            {/* Short Bio snippet */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              Detail-oriented <strong className="text-cyber-cyan">Mechatronics Engineer</strong> specializing in embedded systems, industrial automation, autonomous robotics, and computer vision.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan via-cyber-sky to-cyber-blue text-slate-950 font-mono font-bold text-sm flex items-center gap-2 shadow-glow-cyan hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-cyber-card/90 border border-cyber-cyan/40 text-slate-100 hover:text-cyber-cyan hover:border-cyber-cyan font-mono font-semibold text-sm flex items-center gap-2 backdrop-blur-md hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <Rocket className="w-4 h-4 text-cyber-cyan" />
                <span>VIEW PROJECTS</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-mono font-semibold text-sm flex items-center gap-2 backdrop-blur-md hover:scale-[1.03] transition-all"
              >
                <Mail className="w-4 h-4 text-cyber-sky" />
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-cyber-card/40 p-3 rounded-lg border border-cyber-cyan/10">
                  <div className="text-2xl font-bold font-mono text-cyber-cyan">{stat.value}</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Futuristic Robotics Animated Graphics Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-6 glass-panel border border-cyber-cyan/30 shadow-glow-cyan overflow-hidden flex flex-col items-center justify-center group">
              
              {/* Outer Radar Rings */}
              <div className="absolute inset-4 rounded-2xl border border-cyber-cyan/20 pointer-events-none" />
              <div className="absolute inset-8 rounded-2xl border border-dashed border-cyber-blue/30 animate-radar-spin pointer-events-none" />

              {/* Animated Robot Graphic SVG */}
              <div className="relative z-10 my-4 flex flex-col items-center">
                <div className="relative">
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="relative"
                  >
                    <svg className="w-48 h-48 sm:w-56 sm:h-56 text-cyber-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]" viewBox="0 0 200 200" fill="none">
                      {/* Robot Head Outer Frame */}
                      <rect x="40" y="40" width="120" height="100" rx="20" fill="#0f172a" stroke="#00f0ff" strokeWidth="4" />
                      
                      {/* Visor Area */}
                      <rect x="55" y="60" width="90" height="40" rx="10" fill="#070b19" stroke="#0070f3" strokeWidth="2" />
                      
                      {/* Glowing Glowing Cyber Eyes */}
                      <circle cx="80" cy="80" r="10" fill="#00f0ff" className="animate-pulse" />
                      <circle cx="80" cy="80" r="4" fill="#ffffff" />
                      <circle cx="120" cy="80" r="10" fill="#00f0ff" className="animate-pulse" />
                      <circle cx="120" cy="80" r="4" fill="#ffffff" />

                      {/* Antenna Stem & Signal Node */}
                      <line x1="100" y1="40" x2="100" y2="15" stroke="#00f0ff" strokeWidth="3" />
                      <circle cx="100" cy="15" r="7" fill="#00f0ff" className="animate-ping" />

                      {/* Mouth Circuit Traces */}
                      <path d="M75 115 L85 125 L115 125 L125 115" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="100" cy="125" r="3" fill="#00f0ff" />

                      {/* Neck / Chest Connection */}
                      <path d="M70 140 L70 165 L130 165 L130 140" fill="#0f172a" stroke="#0070f3" strokeWidth="3" />
                      <line x1="85" y1="152" x2="115" y2="152" stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Live HUD System Telemetry Overlay Cards */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 text-[11px] font-mono text-cyber-cyan bg-slate-900/80 border border-cyber-cyan/30 px-2.5 py-1 rounded-md">
                <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span>FPS: 120 | STABLE</span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] font-mono text-cyber-sky bg-slate-900/80 border border-cyber-sky/30 px-2.5 py-1 rounded-md">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>PWR: 99.8%</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-cyber-cyan/20 p-2.5 rounded-xl flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">CORE ARCHITECTURE:</span>
                <span className="text-cyber-cyan font-bold">MECHATRONICS & AI</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
