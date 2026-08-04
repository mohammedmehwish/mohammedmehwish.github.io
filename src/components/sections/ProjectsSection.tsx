import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Info, ShieldCheck, Flame, Radio } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { Modal } from '../common/Modal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const PROJECT_ICONS = [ShieldCheck, Flame, Radio];

  return (
    <section id="projects" className="relative py-24 bg-slate-950/60">
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
            ENGINEERING PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="cyber-gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Robotics, computer vision models, and autonomous hardware prototypes.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => {
            const IconComponent = PROJECT_ICONS[idx % PROJECT_ICONS.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-panel rounded-2xl border border-cyber-cyan/20 overflow-hidden hover:border-cyber-cyan/60 hover:shadow-glow-cyan transition-all duration-300 flex flex-col group"
              >
                {/* Project Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent opacity-90" />

                  <div className="absolute top-4 left-4 p-2 rounded-xl bg-slate-950/80 border border-cyber-cyan/30 text-cyber-cyan backdrop-blur-md">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-mono text-white group-hover:text-cyber-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700 text-cyber-sky text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyber-cyan text-xs font-mono flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 text-xs font-mono flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-2 rounded-lg bg-cyber-card border border-cyber-cyan/30 text-white hover:text-cyber-cyan text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-cyber-cyan" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6 text-slate-200">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-xl border border-cyber-cyan/30"
            />

            <div>
              <h4 className="text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-2">OVERVIEW</h4>
              <p className="text-sm font-sans leading-relaxed text-slate-300">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {selectedProject.highlights && (
              <div>
                <h4 className="text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-2">KEY HIGHLIGHTS & INNOVATIONS</h4>
                <ul className="space-y-2 text-sm font-sans">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-cyber-cyan font-mono">&gt;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-2">TECHNOLOGY STACK</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-cyber-cyan text-slate-950 font-mono font-bold text-xs flex items-center gap-2 shadow-glow-cyan"
              >
                <Github className="w-4 h-4" />
                <span>VIEW REPOSITORY ON GITHUB</span>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
