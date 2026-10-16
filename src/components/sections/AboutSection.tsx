import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Mail, Cpu, Bot, Eye, Settings } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const INFO_ITEMS = [
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
    },
    {
      icon: GraduationCap,
      label: 'Degree',
      value: 'B.E. Mechatronics',
    },
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
    },
    {
      icon: Cpu,
      label: 'Specialization',
      value: 'Robotics & Embedded',
    },
  ];

  const HIGHLIGHT_CARDS = [
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Arduino, ESP32, STM32, microcontroller firmware, sensor integration, and reliable hardware protocols.',
    },
    {
      icon: Bot,
      title: 'Robotics',
      description: 'Autonomous systems, ROS 2, robot control algorithms, obstacle avoidance, and kinematics.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'OpenCV, YOLO object detection, deep learning pipelines, and real-time image processing.',
    },
    {
      icon: Settings,
      title: 'Industrial Automation',
      description: 'PLC ladder programming, SCADA supervisory control, HMI dashboards, and VFD drives.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="section-container">
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Background & Core Expertise</h2>
          <p className="section-subtitle">
            Bridging hardware, software, and intelligence to build robust autonomous solutions.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Summary and Quick Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Passionate Engineer with Hands-On Industry Experience
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {PERSONAL_INFO.aboutSummary}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                Whether deploying SLAM navigation for mobile robots or developing real-time neural network detection models, I focus on clean code, solid engineering fundamentals, and high reliability.
              </p>
            </div>

            {/* 2x2 Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {INFO_ITEMS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-card flex items-center gap-3.5"
                  >
                    <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: 4 Highlight Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHT_CARDS.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="pro-card p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {card.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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
