import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, FolderGit2 } from 'lucide-react';
import { personalData } from '../data/personal';

export const GitHubSection: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-10 rounded-3xl bg-background-elevated border border-background-border shadow-saas-elevated flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono text-primary-400 font-semibold uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SOURCE CODE & ARCHITECTURES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              See the code behind the work.
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Explore my repositories, projects, experiments, and engineering work.
            </p>
          </div>

          <div>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-background-card hover:bg-background-elevated text-white border border-background-border hover:border-slate-500 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="w-4 h-4 text-primary-400" />
              <span>Visit GitHub</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
