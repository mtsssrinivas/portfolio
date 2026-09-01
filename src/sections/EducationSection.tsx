import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { educationData } from '../data/education';

export const EducationSection: React.FC = () => {
  const [courseworkOpen, setCourseworkOpen] = useState(true);
  const edu = educationData[0];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-2 font-semibold">
            07 // ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Computer science degree program and foundational engineering curriculum.
          </p>
        </div>

        {/* Clean, Compact Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-7 rounded-2xl bg-background-card border border-background-border saas-border-hover shadow-saas-card"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-background-border">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-background-elevated border border-background-border flex items-center justify-center text-primary-400 flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  {edu.institution}
                </h3>
                <p className="text-sm text-primary-400 font-medium mt-0.5">
                  {edu.degree}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap self-start md:self-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-elevated border border-background-border text-xs font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-primary-400" />
                <span>{edu.period}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>CGPA: {edu.grade}</span>
              </div>
            </div>
          </div>

          {/* Coursework Toggle Area */}
          <div className="mt-5">
            <button
              onClick={() => setCourseworkOpen(!courseworkOpen)}
              className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors mb-3"
            >
              <span>Relevant Coursework</span>
              {courseworkOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {courseworkOpen && (
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-background-elevated text-slate-300 border border-background-border"
                  >
                    {course}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
