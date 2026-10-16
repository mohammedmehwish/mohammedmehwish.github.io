import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Modal } from './components/common/Modal';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { EducationSection } from './components/sections/EducationSection';
import { GitHubSection } from './components/sections/GitHubSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';

import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, SKILL_CATEGORIES } from './data/portfolioData';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleDownloadResumeFile = () => {
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
    <div className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <EducationSection />
        <GitHubSection />
        <ResumeSection onOpenModal={() => setIsResumeModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Resume Preview Modal */}
      <Modal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        title="Resume Preview"
      >
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">{PERSONAL_INFO.title}</p>
                <p className="text-xs text-slate-500 mt-1">{PERSONAL_INFO.location} · {PERSONAL_INFO.email}</p>
              </div>
              <button
                onClick={handleDownloadResumeFile}
                className="btn-primary text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-5">
              <div>
                <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Professional Summary</h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{PERSONAL_INFO.aboutSummary}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Experience</h4>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{EXPERIENCE_DATA[0].role} — {EXPERIENCE_DATA[0].company}</div>
                  <div className="text-xs text-slate-500">{EXPERIENCE_DATA[0].period} · {EXPERIENCE_DATA[0].location}</div>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {EXPERIENCE_DATA[0].achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Education</h4>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{EDUCATION_DATA.degree} in {EDUCATION_DATA.major}</div>
                <div className="text-xs text-slate-500">{EDUCATION_DATA.institution} ({EDUCATION_DATA.period})</div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {SKILL_CATEGORIES.flatMap(c => c.skills).map(s => (
                    <span key={s.name} className="badge text-xs">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
