import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Eye, Cog, MapPin, Mail, Award, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const HIGHLIGHT_CARDS = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Microcontroller firmware development using C/C++, Arduino, ESP32, multi-sensor interfacing, and hardware communication protocols (I2C, SPI, UART)."
    },
    {
      icon: Bot,
      title: "Robotics & Controls",
      description: "Autonomous robot navigation, motor actuation, kinematic control, trajectory planning, and hardware-in-the-loop sensor fusion."
    },
    {
      icon: Eye,
      title: "Computer Vision & AI",
      description: "Real-time object detection models utilizing OpenCV, YOLO, and Python deep learning pipelines for safety and surveillance."
    },
    {
      icon: Cog,
      title: "Industrial Automation",
      description: "PLC ladder logic programming, SCADA supervisory dashboards, HMI control panels, and VFD variable frequency motor drives."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950/40 relative">
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
            ENGINEERING PROFILE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="cyber-gradient-text">Mohammed Mehwish</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Bridging hardware, software, and artificial intelligence to build the future of robotics.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Bio Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 glass-panel p-8 rounded-2xl border border-cyber-cyan/20 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-mono text-cyber-cyan flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-cyber-cyan" />
                EXECUTIVE SUMMARY
              </h3>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-sans">
                {PERSONAL_INFO.aboutSummary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-5 h-5 text-cyber-cyan shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LOCATION</div>
                    <div className="text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <GraduationCap className="w-5 h-5 text-cyber-cyan shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">DEGREE</div>
                    <div className="text-sm font-semibold text-slate-200">B.E. Mechatronics</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Mail className="w-5 h-5 text-cyber-cyan shrink-0" />
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400">EMAIL</div>
                    <div className="text-xs font-semibold text-slate-200 truncate">{PERSONAL_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Award className="w-5 h-5 text-cyber-cyan shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">SPECIALIZATION</div>
                    <div className="text-xs font-semibold text-slate-200">Robotics & Vision</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">STATUS: OPEN FOR NEW OPPORTUNITIES</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-cyber-cyan hover:underline"
              >
                CONNECT ON LINKEDIN &rarr;
              </a>
            </div>
          </motion.div>

          {/* Highlight Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHT_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl border border-cyber-cyan/15 hover:border-cyber-cyan/50 hover:shadow-glow-cyan transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyber-card border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan group-hover:scale-110 group-hover:bg-cyber-cyan group-hover:text-slate-950 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold font-mono text-white group-hover:text-cyber-cyan transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
