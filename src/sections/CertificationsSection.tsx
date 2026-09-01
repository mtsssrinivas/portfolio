import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-1.5 font-semibold">
            08 // CREDENTIALS & SPECIALIZATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Compact Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-background-elevated border border-background-border flex items-center justify-center text-primary-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 truncate">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-100">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-background-border flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
