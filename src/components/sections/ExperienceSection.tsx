import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-800 transition-colors">
      <div className="section-container">
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <p className="section-label">Career Journey</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Hands-on professional engineering internships, research roles, and technical milestones.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Guide Line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-blue-200 dark:bg-slate-700" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Dot on the timeline line */}
                <div className="absolute left-0 top-6 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-blue-50 dark:ring-slate-800" />

                {/* Content Card on the right */}
                <div className="ml-8 pro-card p-6 sm:p-8">
                  {/* Period Badge & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.period}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5 mb-4">
                    {item.company}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-2 mb-6">
                      {item.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-700">
                    {item.skills.map((skill) => (
                      <span key={skill} className="badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
