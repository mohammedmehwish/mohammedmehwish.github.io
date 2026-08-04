import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Eye, Cpu, Settings, Bot, Box, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

  const CATEGORY_ICONS = [
    Code,
    Eye,
    Cpu,
    Settings,
    Bot,
    Box,
    Wrench
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#070b19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
            TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="cyber-gradient-text">Skillset</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Core technologies, programming paradigms, hardware architectures, and automation suites.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              activeCategory === 'all'
                ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan shadow-glow-cyan font-bold'
                : 'bg-cyber-card/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-600'
            }`}
          >
            ALL SKILLS
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                  isSelected
                    ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan shadow-glow-cyan font-bold'
                    : 'bg-cyber-card/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-600'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            if (activeCategory !== 'all' && activeCategory !== catIdx) return null;

            const IconComp = CATEGORY_ICONS[catIdx % CATEGORY_ICONS.length];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 hover:border-cyber-cyan/40 hover:shadow-glow-cyan transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-mono text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                          {skill.highlight && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
                          )}
                          {skill.name}
                        </span>
                        <span className="text-cyber-cyan">{skill.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-cyber-blue via-cyber-sky to-cyber-cyan shadow-glow-cyan'
                              : 'bg-slate-500'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
