import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoriesList = ['All', ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const visibleCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title === selectedCategory);

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-800 transition-colors">
      <div className="section-container">
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive breakdown of my engineering proficiencies across software, hardware, and automation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="pro-card p-6"
            >
              {/* Category Header */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-3 mb-4 border-b border-slate-100 dark:border-slate-700">
                {cat.title}
              </h3>

              {/* Skills List with Progress Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                      <span className="flex items-center gap-2">
                        {skill.name}
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        )}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          skill.highlight ? 'bg-blue-600' : 'bg-slate-400 dark:bg-slate-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
