import React from 'react';
import { Cpu, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050814] border-t border-cyber-cyan/15 text-slate-400 font-sans pt-12 pb-8 overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyber-cyan/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-mono font-bold text-lg text-white tracking-wider">
                MOHAMMED MEHWISH V M
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Detail-oriented Mechatronics Engineering graduate passionate about building intelligent robotic systems, embedded microcontrollers, computer vision pipelines, and industrial automation solutions.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEMS OPERATIONAL & AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-widest mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li><a href="#about" className="hover:text-cyber-cyan transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyber-cyan transition-colors">Skills & Tech</a></li>
              <li><a href="#projects" className="hover:text-cyber-cyan transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-cyber-cyan transition-colors">Experience</a></li>
              <li><a href="#github" className="hover:text-cyber-cyan transition-colors">GitHub Activity</a></li>
              <li><a href="#contact" className="hover:text-cyber-cyan transition-colors">Get In Touch</a></li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-widest mb-4">
              CONNECT
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyber-cyan transition-colors group"
              >
                <Github className="w-4 h-4 text-cyber-sky group-hover:scale-110 transition-transform" />
                <span className="font-mono">github.com/mohammedmehwish</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyber-cyan transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-cyber-sky group-hover:scale-110 transition-transform" />
                <span className="font-mono">LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyber-cyan transition-colors group"
              >
                <Mail className="w-4 h-4 text-cyber-sky group-hover:scale-110 transition-transform" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Tailwind CSS, and GitHub Pages.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyber-cyan hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
