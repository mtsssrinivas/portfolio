import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, GitBranch, GitCommit, FolderGit2 } from 'lucide-react';
import { personalData } from '../data/personal';

export const GitHubSection: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-background-card/90 via-background-card/70 to-background-subtle/90 border border-background-border hover:border-primary-500/30 transition-all backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          {/* Subtle background icon */}
          <Github className="absolute -right-8 -bottom-8 w-64 h-64 text-slate-800/20 pointer-events-none -z-10" />

          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-primary-400">
              <FolderGit2 className="w-4 h-4" />
              <span>OPEN SOURCE & REPOSITORIES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Code, Systems & Projects
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore my repositories, backend services, architecture patterns, and open-source contributions directly on GitHub.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-primary-400" />
                <span>Distributed Microservices</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
                <span>Clean Commits</span>
              </span>
            </div>
          </div>

          <div>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white border border-slate-700 hover:border-primary-500/50 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="w-5 h-5 text-primary-400" />
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
