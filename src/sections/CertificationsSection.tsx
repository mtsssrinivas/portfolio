import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            08 // CREDENTIALS & SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Industry-aligned certifications across cloud architecture, AWS cloud foundations, and full-stack engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-background-card/80 border border-background-border hover:border-primary-500/40 transition-all flex flex-col justify-between group shadow-lg backdrop-blur-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-violet/20 border border-primary-500/30 flex items-center justify-center text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>

                <span className="text-[11px] font-mono text-primary-400/90 block mb-1">
                  {cert.issuer}
                </span>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
                  {cert.title}
                </h3>

                {cert.topics && (
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-background-border/60">
                    {cert.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-background-border/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
