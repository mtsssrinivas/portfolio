import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      className={`group p-6 sm:p-8 rounded-2xl bg-white border border-[#EAEAEA] hover:border-[#CCCCCC] transition-all flex flex-col justify-between shadow-sm hover:-translate-y-1 ${
        isWide ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="space-y-4">
        {/* Top order indicator */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[#888888]">
            {project.order} / SELECTED SYSTEM
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#666666] mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
          {project.description}
        </p>

        {/* Feature deliverables */}
        <div className="space-y-1.5 pt-1">
          {project.features.slice(0, isWide ? 4 : 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#666666]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F4F4F0] text-[#444444] border border-[#EAEAEA]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="mt-8 pt-4 border-t border-[#EAEAEA] flex items-center justify-between gap-2 flex-wrap">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-[#2563EB] transition-colors group/btn"
        >
          <span>View project details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-[#666666] hover:text-[#111111] transition-colors"
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
              className="p-1.5 rounded text-[#666666] hover:text-[#2563EB] transition-colors"
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
