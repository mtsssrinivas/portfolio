import React from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenCaseStudy
}) => {
  const otherProjects = projectsData.slice(1); // InterviewIQ, Nestora, ProjectFlow

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            04 // FULL-STACK & AI SYSTEMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Selected Engineering Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real-world full-stack SaaS applications, AI workflows, relational database platforms, and marketplace systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
