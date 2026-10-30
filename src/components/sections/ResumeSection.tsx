import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Eye,
  GraduationCap,
  Briefcase,
  Cpu,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  SKILL_CATEGORIES,
} from '../../data/portfolioData';

interface ResumeSectionProps {
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  const handleDownloadResume = () => {
    const element = document.createElement('a');
    element.href = './assets/resume/Mehwish-CV.pdf';
    element.download = 'Mohammed_Mehwish_CV.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="section-padding bg-white dark:bg-slate-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label">Curriculum Vitae</p>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            A comprehensive overview of academic qualifications, engineering experience, and technical capabilities.
          </p>
        </div>

        {/* Centered Main Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto pro-card p-8 md:p-10"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="btn-secondary flex-1 sm:flex-initial text-sm py-2.5 px-4"
              >
                <Eye className="w-4 h-4" />
                <span>Preview Resume</span>
              </button>
              <button
                onClick={handleDownloadResume}
                className="btn-primary flex-1 sm:flex-initial text-sm py-2.5 px-4"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Summary Cards Row (3 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {/* Degree Card */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Degree
                </p>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium">
                  {EDUCATION_DATA.major}
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60">
                {EDUCATION_DATA.institution} ({EDUCATION_DATA.period})
              </p>
            </div>

            {/* Internship Card */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Experience
                </p>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1">
                  {EXPERIENCE_DATA[0]?.role || 'Engineering Intern'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium">
                  {EXPERIENCE_DATA[0]?.company}
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60">
                {EXPERIENCE_DATA[0]?.location} ({EXPERIENCE_DATA[0]?.period})
              </p>
            </div>

            {/* Key Domains Card */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Key Domains
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="badge text-xs px-2 py-0.5">Embedded C</span>
                  <span className="badge text-xs px-2 py-0.5">ESP32 / Arduino</span>
                  <span className="badge text-xs px-2 py-0.5">Computer Vision</span>
                  <span className="badge text-xs px-2 py-0.5">PLC & SCADA</span>
                  <span className="badge text-xs px-2 py-0.5">SolidWorks</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60">
                Full-stack hardware & software integration
              </p>
            </div>
          </div>

          {/* Footer details */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <p>
              Click <span className="font-semibold text-slate-700 dark:text-slate-300">Preview Resume</span> to inspect the complete interactive profile or <span className="font-semibold text-slate-700 dark:text-slate-300">Download</span> for an offline copy.
            </p>
            <span className="badge text-xs shrink-0">
              Open to Opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
