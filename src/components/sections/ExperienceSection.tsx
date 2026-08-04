import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#070b19]">
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
            CAREER TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="cyber-gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Professional industry internships and hands-on engineering roles.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Guide Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-blue to-transparent -translate-x-1/2" />

          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative mb-12 flex flex-col md:flex-row items-center group"
            >
              {/* Timeline Marker Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-cyber-card border-2 border-cyber-cyan shadow-glow-cyan flex items-center justify-center text-cyber-cyan group-hover:scale-125 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 md:group-even:ml-auto glass-panel p-6 sm:p-8 rounded-2xl border border-cyber-cyan/20 hover:border-cyber-cyan/50 hover:shadow-glow-cyan transition-all">
                
                {/* Period Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30 text-xs font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyber-sky" />
                    {exp.location}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyber-cyan transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-mono text-cyber-sky font-semibold mb-4">
                  {exp.company}
                </h4>

                <p className="text-xs font-sans text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-cyber-cyan text-[10px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
