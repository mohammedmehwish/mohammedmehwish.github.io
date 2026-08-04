import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { Certificate } from '../../types';
import { Modal } from '../common/Modal';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-24 bg-slate-950/60">
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
            ACCREDITATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="cyber-gradient-text">Awards</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Verified industry credentials, competition honors, and specialization certificates.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl border border-cyber-cyan/20 overflow-hidden hover:border-cyber-cyan/50 hover:shadow-glow-cyan transition-all flex flex-col justify-between group"
            >
              {/* Certificate Banner Image */}
              <div className="relative h-36 overflow-hidden bg-slate-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-slate-950/80 border border-cyber-cyan/30 text-cyber-cyan">
                  <Award className="w-4 h-4" />
                </div>
                
                <span className="absolute top-3 right-3 text-[10px] font-mono font-bold text-cyber-cyan bg-slate-950/80 px-2 py-0.5 rounded border border-cyber-cyan/30">
                  {cert.date}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-mono text-white group-hover:text-cyber-cyan transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyber-sky font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs font-sans text-slate-300 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1">
                  {cert.skillsCovered.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-[9px] font-mono text-cyber-cyan">
                      +{cert.skillsCovered.length - 3}
                    </span>
                  )}
                </div>

                {/* Preview Trigger Button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>PREVIEW CERTIFICATE</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
        >
          <div className="space-y-6 text-slate-200">
            <div className="relative rounded-xl overflow-hidden border border-cyber-cyan/40 bg-slate-950 p-2 shadow-2xl">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-80 object-cover rounded-lg opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs">
                <div className="text-center p-6 border border-cyber-cyan/40 rounded-xl bg-cyber-card/90 max-w-md shadow-glow-cyan space-y-3">
                  <ShieldCheck className="w-12 h-12 text-cyber-cyan mx-auto animate-pulse" />
                  <h4 className="text-lg font-bold font-mono text-white">{selectedCert.title}</h4>
                  <p className="text-xs font-mono text-cyber-sky">Issued by: {selectedCert.issuer} ({selectedCert.date})</p>
                  {selectedCert.credentialId && (
                    <p className="text-[11px] font-mono text-slate-400">ID: {selectedCert.credentialId}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-2">DESCRIPTION</h4>
              <p className="text-sm font-sans text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-2">SKILLS & TOPICS VERIFIED</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skillsCovered.map((sk) => (
                  <span
                    key={sk}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
