import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  const exp = experienceData[0];

  const conciseHighlights = [
    "Full-Stack Development: Engineering end-to-end web applications with React.js, Node.js, and Express.",
    "RESTful API & Database Integration: Designing structured API contracts and integrating MySQL relational schemas.",
    "Reusable UI Architecture: Developing modular, accessible, and responsive frontend component libraries.",
    "Agile Testing & Deployment: Collaborating in Agile sprints with Git version control, debugging, and production releases."
  ];

  const techRow = ["React", "Node", "Express", "JavaScript", "MySQL", "REST APIs", "Git"];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-2 font-semibold">
            02 // INDUSTRY EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Professional software development experience delivering production applications and APIs.
          </p>
        </div>

        {/* Large Experience Card with Vertical Accent Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative pl-6 sm:pl-8 border-l-2 border-primary-500"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-background-card border border-background-border saas-border-hover shadow-saas-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-background-border">
              <div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary-500/15 text-primary-300 border border-primary-500/30">
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-2">
                  {exp.role}
                </h3>
                <div className="text-base font-medium text-primary-400 mt-0.5">
                  {exp.company}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-background-elevated px-3 py-1.5 rounded-lg border border-background-border self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-primary-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* 4 Concise Bullets */}
            <div className="mt-6 space-y-3">
              {conciseHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Small Technology Row */}
            <div className="mt-7 pt-5 border-t border-background-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
              {techRow.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-0.5 rounded bg-background-elevated text-slate-300 border border-background-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
