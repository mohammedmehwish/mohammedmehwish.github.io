import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { Modal } from '../common/Modal';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const CATEGORY_TABS = ['All', 'Robotics', 'Embedded', 'Vision', 'Automation'];

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="section-container">
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore selected engineering solutions across autonomous robotics, computer vision, and embedded systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 pro-card max-w-md mx-auto">
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="pro-card overflow-hidden group flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge text-xs uppercase font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="line-clamp-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          title="View Live Demo / Readme"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            {/* Modal Image */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="badge text-xs uppercase font-semibold">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Project Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Highlights */}
            {selectedProject.highlights && selectedProject.highlights.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Key Achievements & Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              {selectedProject.liveDemoUrl && (
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo / Documentation</span>
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
