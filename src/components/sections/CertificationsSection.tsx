import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, X, FileCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { Certificate } from '../../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label">Accreditations</p>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">
            Verified industry credentials, technical training certifications, and championship achievements.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="pro-card overflow-hidden group flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                  <div className="p-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
                  {/* Skills Covered Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.slice(0, 3).map((skill) => (
                      <span key={skill} className="badge text-xs px-2.5 py-0.5">
                        {skill}
                      </span>
                    ))}
                    {cert.skillsCovered.length > 3 && (
                      <span className="badge text-xs px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        +{cert.skillsCovered.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 py-2 px-3 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-center"
                    >
                      View Details
                    </button>
                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-1"
                        title="View Certificate"
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>Certificate</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-10"
              >
                {/* Modal Header Image */}
                <div className="relative h-48 bg-slate-100 dark:bg-slate-900">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full shadow-sm transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                      <Award className="w-4 h-4" />
                      <span>{selectedCert.issuer} · {selectedCert.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {selectedCert.title}
                    </h3>
                    {selectedCert.credentialId && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Credential ID: <span className="font-medium text-slate-700 dark:text-slate-300">{selectedCert.credentialId}</span>
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedCert.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                      Competencies & Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skillsCovered.map((skill) => (
                        <span key={skill} className="badge text-xs flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end gap-3">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="btn-secondary py-2 px-4 text-sm"
                    >
                      Close
                    </button>
                    {selectedCert.pdfUrl && (
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 px-4 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
