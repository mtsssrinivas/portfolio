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
  const otherProjects = projectsData.slice(1).filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return p.id === 'interviewiq';
    if (activeFilter === 'fullstack') return true;
    if (activeFilter === 'backend') return true;
    if (activeFilter === 'databases') return true;
    if (activeFilter === 'distributed') return false; // In featured section
    return true;
  });

  return (
    <section id="projects" className="py-12 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
            Other Selected Systems
          </h3>
          <span className="text-xs font-mono text-[#888888]">
            3 Applications (AI, SaaS &amp; Marketplaces)
          </span>
        </div>

        {/* 2-column + full-width Bento */}
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
