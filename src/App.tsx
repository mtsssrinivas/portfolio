import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ExploreFilterBar, FilterCategory } from './components/ExploreFilterBar';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { FeaturedProjectSection } from './sections/FeaturedProjectSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { MindsetSection } from './sections/MindsetSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { GitHubSection } from './sections/GitHubSection';
import { LinkedInSection } from './sections/LinkedInSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setCaseStudyOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setCaseStudyOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 bg-tech-grid relative selection:bg-primary-500/30 selection:text-primary-200">
      {/* Subtle depth glow */}
      <div className="fixed inset-0 bg-hero-glow pointer-events-none -z-10" />

      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Flow — Strict UI/UX Hierarchy */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* 2. Interactive Explore Bar (System Discovery) */}
        <ExploreFilterBar
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        {/* 3. About Me (Editorial + 3 Cards) */}
        <AboutSection />

        {/* 4. Experience (VSRI Internship Timeline) */}
        <ExperienceSection />

        {/* 5. Featured Engineering Story (FraudShield Centerpiece) */}
        <FeaturedProjectSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 6. Selected Systems (InterviewIQ, Nestora, ProjectFlow in Bento Grid) */}
        <ProjectsSection
          onOpenCaseStudy={handleOpenCaseStudy}
          activeFilter={activeFilter}
        />

        {/* 7. Technical Arsenal (Visual Technology Wall) */}
        <SkillsSection />

        {/* 8. How I Think About Software (4-Step Engineering Methodology) */}
        <MindsetSection />

        {/* 9. Academic Foundation (VIT-AP B.Tech CSE) */}
        <EducationSection />

        {/* 10. Certifications (AWS & Full-Stack) */}
        <CertificationsSection />

        {/* 11. GitHub Showcase CTA */}
        <GitHubSection />

        {/* 12. LinkedIn Networking CTA */}
        <LinkedInSection />

        {/* 13. Contact & Direct Inquiries */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Width Interactive Case Study Inspector Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={caseStudyOpen}
        onClose={handleCloseCaseStudy}
      />

      {/* Downloadable / Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
