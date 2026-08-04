import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'GitHub', href: '#github' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy algorithm
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-bg/85 dark:bg-[#070b19]/85 backdrop-blur-lg border-b border-cyber-cyan/20 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative p-2 rounded-xl bg-cyber-card/80 border border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors shadow-glow-cyan">
            <Cpu className="w-5 h-5 text-cyber-cyan group-hover:rotate-45 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-lg tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
              M. MEHWISH
            </span>
            <span className="text-[10px] font-mono text-cyber-sky tracking-widest uppercase">
              ROBOTICS ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-cyber-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyber-cyan/15">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyber-cyan font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-cyber-cyan/15 border border-cyber-cyan/40 -z-10 shadow-glow-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-blue text-slate-950 hover:shadow-glow-cyan hover:scale-[1.02] transition-all"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Menu Trigger & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cyber-card/95 border-b border-cyber-cyan/20 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-colors ${
                      isActive
                        ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 font-bold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-blue text-slate-950 font-mono text-xs font-bold shadow-glow-cyan"
                >
                  CONTACT ME
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
