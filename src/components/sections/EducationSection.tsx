import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-[#070b19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="cyber-gradient-text">Degree</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Formal Mechatronics Engineering degree curriculum & specialized coursework.
          </p>
        </motion.div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-cyber-cyan/30 shadow-glow-cyan relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-cyber-cyan pointer-events-none">
            <GraduationCap className="w-48 h-48" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan shadow-glow-cyan">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <h4 className="text-base sm:text-lg font-mono text-cyber-cyan font-semibold">
                    {EDUCATION_DATA.major}
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 font-mono text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  {EDUCATION_DATA.period}
                </span>
                <span className="flex items-center gap-1 text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-cyber-sky" />
                  {EDUCATION_DATA.location}
                </span>
              </div>
            </div>

            {/* Institution */}
            <div className="flex items-center gap-2 text-base font-mono text-slate-200">
              <BookOpen className="w-5 h-5 text-cyber-sky" />
              <span className="font-bold">{EDUCATION_DATA.institution}</span>
            </div>

            {/* Program Highlights */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-widest">
                ACADEMIC HIGHLIGHTS & SPECIALIZATIONS
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {EDUCATION_DATA.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-sans text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
