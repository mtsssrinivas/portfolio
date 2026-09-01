import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ExploreFilterBar, FilterCategory } from './components/ExploreFilterBar';
import { FeaturedProjectSection } from './sections/FeaturedProjectSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
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
    <div className="min-h-screen bg-[#FAFAF8] text-[#111111] relative selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      {/* Sticky Minimal Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Flow — Strict Hierarchy */}
      <main>
        {/* 1. Hero */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* 2. Selected Work Filter Bar */}
        <ExploreFilterBar
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        {/* 3. FraudShield Featured Case Study */}
        <FeaturedProjectSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 4. Other Projects */}
        <ProjectsSection
          onOpenCaseStudy={handleOpenCaseStudy}
          activeFilter={activeFilter}
        />

        {/* 5. Experience */}
        <ExperienceSection />

        {/* 6. About */}
        <AboutSection />

        {/* 7. Skills */}
        <SkillsSection />

        {/* 8. Education */}
        <EducationSection />

        {/* 9. Certifications */}
        <CertificationsSection />

        {/* 10. Contact */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={caseStudyOpen}
        onClose={handleCloseCaseStudy}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
