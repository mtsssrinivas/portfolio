import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            02 // INDUSTRY EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Professional software development roles delivering production applications and APIs.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-primary-500/30 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-primary-500 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400 group-hover:bg-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-background-card/80 border border-background-border hover:border-primary-500/40 transition-all duration-300 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-background-border/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary-500/15 text-primary-300 border border-primary-500/25">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mt-2">
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium text-primary-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary-400" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="mt-5 space-y-2.5">
                  <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Key Responsibilities & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack used */}
                <div className="mt-6 pt-4 border-t border-background-border/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-background-subtle border border-background-border text-slate-300"
                    >
                      {tech}
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
