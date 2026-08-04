import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-800/60 dark:bg-cyber-card/80 border border-slate-700 dark:border-cyber-cyan/30 text-amber-400 dark:text-cyber-cyan hover:shadow-glow-cyan transition-all flex items-center justify-center"
      aria-label="Toggle Theme Mode"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform rotate-0 hover:rotate-90 duration-300" />
      ) : (
        <Moon className="w-5 h-5 transition-transform rotate-0 hover:-rotate-45 duration-300 text-cyan-500" />
      )}
    </button>
  );
};
