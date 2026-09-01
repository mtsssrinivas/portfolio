import React from 'react';
import { educationData } from '../data/education';

export const EducationSection: React.FC = () => {
  const edu = educationData[0];

  return (
    <section id="education" className="py-16 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-medium text-[#666666] uppercase tracking-wider block mb-2">
            05 // Academic Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Education
          </h2>
        </div>

        {/* Clean, Compact Education Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EAEAEA] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#EAEAEA]">
            <div>
              <h3 className="text-lg font-bold text-[#111111]">
                {edu.institution}
              </h3>
              <p className="text-sm text-[#2563EB] font-medium mt-0.5">
                {edu.degree}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#666666]">
              <span>{edu.period}</span>
              <span>·</span>
              <strong className="text-[#111111]">CGPA: {edu.grade}</strong>
            </div>
          </div>

          <div className="text-xs text-[#666666] leading-relaxed">
            <strong className="text-[#333333] font-mono">Coursework:</strong> {edu.coursework.join(' · ')}
          </div>
        </div>
      </div>
    </section>
  );
};
