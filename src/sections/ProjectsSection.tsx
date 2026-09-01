import React from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { FilterCategory } from '../components/ExploreFilterBar';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
  activeFilter?: FilterCategory;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenCaseStudy,
  activeFilter = 'all'
}) => {
  // Filter logic:
  // Full-Stack: InterviewIQ, Nestora, ProjectFlow
  // Backend: FraudShield, InterviewIQ, Nestora, ProjectFlow
  // AI: InterviewIQ
  // Distributed: FraudShield
  // Databases: FraudShield, InterviewIQ, Nestora, ProjectFlow
  const otherProjects = projectsData.slice(1).filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return p.id === 'interviewiq';
    if (activeFilter === 'fullstack') return true;
    if (activeFilter === 'backend') return true;
    if (activeFilter === 'databases') return true;
    if (activeFilter === 'distributed') return false; // Handled in Featured Section
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-background-border">
          <div>
            <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-2 font-semibold">
              04 // SELECTED SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Selected Engineering Work
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-400">
              Systems I&apos;ve designed, built, and shipped.
            </p>
          </div>

          {activeFilter !== 'all' && (
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-300 self-start sm:self-auto">
              Filtered: <span className="uppercase font-bold">{activeFilter}</span>
            </div>
          )}
        </div>

        {/* Bento Grid: 2 columns top + 1 full-width bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => {
            const isWide = project.id === 'projectflow' || otherProjects.length === 1;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
                index={idx}
                isWide={isWide}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
