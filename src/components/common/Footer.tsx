import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Info (span 2) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {PERSONAL_INFO.aboutSummary}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span className="truncate max-w-[200px]">{PERSONAL_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p>Built with React & TailwindCSS</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
