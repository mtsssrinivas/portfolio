import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Cpu, Terminal } from 'lucide-react';
import { personalData } from '../data/personal';

export const AboutSection: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Layers': return Layers;
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      default: return Terminal;
    }
  };

  const csPillars = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'System Design',
    'Low-Level Design (LLD)'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            01 // BACKGROUND & CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {personalData.aboutSummary}
          </p>
        </div>

        {/* Three Core Engineering Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalData.pillars.map((pillar, idx) => {
            const Icon = getIcon(pillar.icon);
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-background-card/70 border border-background-border hover:border-primary-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-violet/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:text-primary-300 transition-all mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-background-border/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Pillar {`0${idx + 1}`}</span>
                  <span className="text-primary-400/80">Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CS Foundations Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 p-5 sm:p-6 rounded-2xl bg-background-card/40 border border-background-border backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wide">
              Computer Science Foundations & Engineering Rigor:
            </span>
            <div className="flex flex-wrap gap-2">
              {csPillars.map((cs) => (
                <span
                  key={cs}
                  className="px-3 py-1 rounded-lg bg-background-subtle border border-background-border text-slate-300 text-xs font-mono"
                >
                  {cs}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
