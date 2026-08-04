import React, { useState } from 'react';
import { LoadingScreen } from './components/common/LoadingScreen';
import { ParticleBackground } from './components/common/ParticleBackground';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
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
  const [isLoading, setIsLoading] = useState(true);
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
    <div className="relative min-h-screen bg-cyber-bg text-slate-100 selection:bg-cyber-cyan selection:text-cyber-bg overflow-x-hidden">
      {/* Boot sequence loader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Interactive Circuit Particle Canvas Background */}
      <ParticleBackground />

      {/* Targeting Reticle Custom Cursor (desktop viewports) */}
      <CustomCursor />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Main Section Content */}
      <main className="relative z-10">
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

      {/* Floating Scroll back to top */}
      <ScrollToTop />

      {/* Interactive Resume Preview Modal */}
      <Modal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        title="CURRICULUM VITAE PREVIEW"
      >
        <div className="space-y-6 text-slate-200 font-sans">
          <div className="p-6 rounded-2xl bg-slate-900 border border-cyber-cyan/30 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold font-mono text-white">{PERSONAL_INFO.name}</h3>
                <p className="text-sm font-mono text-cyber-cyan">{PERSONAL_INFO.title}</p>
                <p className="text-xs font-mono text-slate-400 mt-1">{PERSONAL_INFO.location} | {PERSONAL_INFO.email}</p>
              </div>
              <button
                onClick={handleDownloadResumeFile}
                className="px-4 py-2.5 rounded-xl bg-cyber-cyan text-slate-950 font-mono font-bold text-xs flex items-center gap-2 shadow-glow-cyan"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD FILE</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div>
                <h4 className="text-xs font-mono text-cyber-sky font-bold uppercase tracking-wider mb-1">PROFESSIONAL SUMMARY</h4>
                <p className="text-xs leading-relaxed text-slate-300">{PERSONAL_INFO.aboutSummary}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyber-sky font-bold uppercase tracking-wider mb-2">EXPERIENCE</h4>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-white">{EXPERIENCE_DATA[0].role} — {EXPERIENCE_DATA[0].company}</div>
                  <div className="text-[11px] font-mono text-slate-400">{EXPERIENCE_DATA[0].period} | {EXPERIENCE_DATA[0].location}</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {EXPERIENCE_DATA[0].achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyber-sky font-bold uppercase tracking-wider mb-2">EDUCATION</h4>
                <div className="text-xs font-bold text-white">{EDUCATION_DATA.degree} in {EDUCATION_DATA.major}</div>
                <div className="text-[11px] font-mono text-slate-400">{EDUCATION_DATA.institution} ({EDUCATION_DATA.period})</div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyber-sky font-bold uppercase tracking-wider mb-2">TECHNICAL SKILLS</h4>
                <div className="flex flex-wrap gap-1.5">
                  {SKILL_CATEGORIES.flatMap(c => c.skills).map(s => (
                    <span key={s.name} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyber-cyan">
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
