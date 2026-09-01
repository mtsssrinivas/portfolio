import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
  isWide?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  index,
  isWide = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className={`group rounded-2xl bg-background-card border border-background-border saas-border-hover p-6 sm:p-7 flex flex-col justify-between shadow-saas-card ${
        isWide ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-3.5">
          <span className="font-mono text-xs font-semibold text-primary-400 px-2 py-0.5 rounded bg-background-elevated border border-background-border">
            {project.order} / PROJECT
          </span>
          <span className="text-[11px] font-mono text-slate-500 uppercase">
            Full-Stack System
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-1">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed">
          {project.description}
        </p>

        {/* Feature deliverables */}
        <div className="mt-4 space-y-2">
          {project.features.slice(0, isWide ? 4 : 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2">{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-background-elevated text-slate-300 border border-background-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="mt-6 pt-4 border-t border-background-border flex items-center justify-between gap-2 flex-wrap">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="flex items-center gap-1.5 text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors py-1 group/btn"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-background-elevated border border-transparent hover:border-background-border transition-all"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-primary-400 hover:bg-background-elevated border border-transparent hover:border-background-border transition-all"
              aria-label={`${project.title} Live Preview`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
