import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            07 // ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Computer science degree program and fundamental engineering curriculum.
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-background-card/80 border border-background-border hover:border-primary-500/40 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-background-border/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-base text-primary-400 font-medium mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background-subtle border border-background-border text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-primary-400" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>CGPA: {edu.grade}</span>
                  </div>
                </div>
              </div>

              {/* Coursework List */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-primary-400" />
                  <span>RELEVANT COURSEWORK & FOCUS AREAS</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-background-subtle text-slate-300 border border-background-border/80"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
