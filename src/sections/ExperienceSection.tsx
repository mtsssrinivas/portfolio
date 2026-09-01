import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  const exp = experienceData[0];

  const deliverables = [
    "Full-Stack Web Development: Building responsive, accessible applications using React.js, Node.js, Express.js, and JavaScript.",
    "API & Database Integration: Designing RESTful APIs and integrating MySQL relational database schemas with optimized query performance.",
    "Component Architecture: Creating reusable frontend component libraries and standardizing UI patterns across screens.",
    "Agile Collaboration & Delivery: Collaborating in Agile/Scrum sprints using Git for version control, unit testing, and deployment."
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-medium text-[#666666] uppercase tracking-wider block mb-2">
            02 // Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Minimal Editorial Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="p-7 sm:p-9 rounded-2xl bg-white border border-[#EAEAEA] shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#EAEAEA]">
            <div>
              <h3 className="text-xl font-bold text-[#111111]">
                {exp.role}
              </h3>
              <div className="text-sm font-medium text-[#2563EB] mt-0.5">
                {exp.company}
              </div>
            </div>

            <span className="text-xs font-mono text-[#888888] bg-[#FAFAF8] px-2.5 py-1 rounded border border-[#EAEAEA]">
              {exp.period}
            </span>
          </div>

          <div className="space-y-3 text-sm text-[#444444] leading-relaxed">
            {deliverables.map((item, idx) => (
              <p key={idx} className="flex items-start gap-2.5">
                <span className="text-[#888888] mt-1 text-xs">―</span>
                <span>{item}</span>
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EAEAEA] text-xs font-mono text-[#666666]">
            <span className="text-[#999999] mr-2">Tech:</span>
            <span>React · Node.js · Express.js · JavaScript · MySQL · REST APIs · Git</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
