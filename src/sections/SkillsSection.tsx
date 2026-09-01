import React from 'react';
import { motion } from 'framer-motion';
import { 
  Binary, 
  Layers, 
  Database, 
  Sparkles, 
  Wrench, 
  Cpu,
  CheckCircle
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary': return Binary;
      case 'Layers': return Layers;
      case 'Database': return Database;
      case 'Sparkles': return Sparkles;
      case 'Wrench': return Wrench;
      case 'Cpu': return Cpu;
      default: return Layers;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            05 // TECHNICAL TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A comprehensive overview of programming languages, frameworks, cloud tooling, database systems, and foundational engineering principles.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => {
            const Icon = getCategoryIcon(group.iconName);
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-background-card/80 border border-background-border hover:border-primary-500/40 transition-all flex flex-col justify-between group shadow-lg backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-background-border/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-background-subtle border border-background-border flex items-center justify-center text-primary-400 group-hover:text-primary-300 group-hover:border-primary-500/30 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-slate-100">
                        {group.category}
                      </h3>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-background-subtle border border-background-border">
                      {group.badgeCount}
                    </span>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-background-subtle/90 hover:bg-background-card text-slate-300 border border-background-border/80 hover:border-slate-600 transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-background-border/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Hands-on verified implementation</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
