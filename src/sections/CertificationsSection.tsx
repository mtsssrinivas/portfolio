import React from 'react';
import { certificationsData } from '../data/certifications';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-12 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-medium text-[#666666] uppercase tracking-wider block mb-2">
            06 // Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Clean list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-xl bg-white border border-[#EAEAEA] shadow-sm space-y-2"
            >
              <span className="text-[11px] font-mono text-[#888888] uppercase block">
                {cert.issuer}
              </span>
              <h3 className="text-sm font-bold text-[#111111]">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
