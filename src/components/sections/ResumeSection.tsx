import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, SKILL_CATEGORIES } from '../../data/portfolioData';
import { Modal } from '../common/Modal';

interface ResumeSectionProps {
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  const handleDownloadResume = () => {
    // Generate a formatted print / PDF payload or download link
    const element = document.createElement("a");
    const file = new Blob([
      `MOHAMMED MEHWISH V M
Robotics Engineer | Mechatronics Engineer | Embedded Systems Engineer
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.aboutSummary}

EDUCATION:
- ${EDUCATION_DATA.degree} in ${EDUCATION_DATA.major} (${EDUCATION_DATA.period})
  ${EDUCATION_DATA.institution}, ${EDUCATION_DATA.location}

EXPERIENCE:
- ${EXPERIENCE_DATA[0].role} at ${EXPERIENCE_DATA[0].company} (${EXPERIENCE_DATA[0].period})
  Achievements:
  * ${EXPERIENCE_DATA[0].achievements.join('\n  * ')}

SKILLS:
- Embedded Systems: Arduino, ESP32, Microcontrollers, Sensors, Electronics
- Robotics & Vision: OpenCV, YOLO, Deep Learning, Robot Control
- Automation: PLC, SCADA, HMI, VFD
- CAD & Tools: SolidWorks, Fusion 360, C, Python, Embedded C, Git, Linux
`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "Mohammed_Mehwish_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="relative py-24 bg-slate-950/40">
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
            CURRICULUM VITAE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="cyber-gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Detailed breakdown of qualifications, academic background, and technical expertise.
          </p>
        </motion.div>

        {/* Resume Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-cyber-cyan/30 shadow-glow-cyan space-y-8"
        >
          {/* Top Bar Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-mono text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-mono text-cyber-cyan">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenModal}
                className="px-4 py-2.5 rounded-xl bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/10 font-mono font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>INTERACTIVE PREVIEW</span>
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue text-slate-950 font-mono font-bold text-xs flex items-center gap-2 shadow-glow-cyan hover:scale-[1.02] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          {/* Document Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-cyber-sky uppercase">DEGREE</div>
              <div className="text-sm font-bold text-white">B.E. Mechatronics Engineering</div>
              <div className="text-[11px] font-mono text-slate-400">Hindusthan College of Engg</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-cyber-sky uppercase">INTERNSHIP</div>
              <div className="text-sm font-bold text-white">Embedded Systems Intern</div>
              <div className="text-[11px] font-mono text-slate-400">CSEED (July - Aug 2024)</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-cyber-sky uppercase">KEY DOMAINS</div>
              <div className="text-sm font-bold text-white">Robotics, Vision, Automation</div>
              <div className="text-[11px] font-mono text-slate-400">C, Python, Embedded C, PLC</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
