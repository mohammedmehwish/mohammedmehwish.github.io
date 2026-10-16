import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering degree education, technical curriculum, and academic accomplishments.
          </p>
        </div>

        {/* Centered Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto pro-card p-8 md:p-10"
        >
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-200 dark:border-slate-700">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {EDUCATION_DATA.degree}{' '}
                <span className="font-normal text-slate-500 dark:text-slate-400">in</span>{' '}
                {EDUCATION_DATA.major}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mt-1">
                {EDUCATION_DATA.institution}
              </p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-slate-500 dark:text-slate-400 mt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {EDUCATION_DATA.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {EDUCATION_DATA.location}
                </span>
                {EDUCATION_DATA.grade && (
                  <span className="badge text-xs">
                    Grade: {EDUCATION_DATA.grade}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-6">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Academic Highlights & Specializations
            </h4>
            <ul className="space-y-3.5">
              {EDUCATION_DATA.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
