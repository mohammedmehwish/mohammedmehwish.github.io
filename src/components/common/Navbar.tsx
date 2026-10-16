import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'GitHub', href: '#github', id: 'github' },
  { label: 'Resume', href: '#resume', id: 'resume' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const getElementForId = (id: string): HTMLElement | null => {
    let el = document.getElementById(id);
    if (!el && id === 'hero') el = document.getElementById('home');
    if (!el && id === 'certifications') el = document.getElementById('certificates');
    return el;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const scrollPosition = window.scrollY + 140;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Bottom of page detection for Contact section
      if (windowHeight + window.scrollY >= fullHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Top of page
      if (window.scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = getElementForId(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (id === 'hero' && !getElementForId('hero')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }

    const targetEl = getElementForId(id);
    if (targetEl) {
      const navOffset = 76;
      const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navOffset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    } else {
      const fallback = document.querySelector(href);
      if (fallback) {
        fallback.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-3'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          className="flex flex-col text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
            M. Mehwish
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Robotics Engineer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs xl:text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`px-2.5 py-1.5 transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-8 decoration-2'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            className="btn-primary text-xs xl:text-sm px-4 py-2"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger & ThemeToggle */}
        <div className="flex items-center space-x-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                  className="btn-primary w-full text-center block text-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
