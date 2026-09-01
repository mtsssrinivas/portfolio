import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { QuickStatsSection } from './sections/QuickStatsSection';
import { FeaturedProjectSection } from './sections/FeaturedProjectSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
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

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setCaseStudyOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setCaseStudyOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 bg-grid-pattern relative selection:bg-primary-500/30 selection:text-primary-200">
      {/* Radial Gradient overlay */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none -z-10" />

      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Flow — Ordered by Strict Visual & Recruiter Hierarchy */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* 1.1 About & Pillars Summary */}
        <AboutSection />

        {/* 1.2 Quick Stats Bar */}
        <QuickStatsSection />

        {/* 2. FraudShield (Featured Engineering Story Centerpiece) */}
        <FeaturedProjectSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 3. Other Selected Projects (InterviewIQ, Nestora, ProjectFlow) */}
        <ProjectsSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 4. Experience Timeline (VSRI Internship) */}
        <ExperienceSection />

        {/* 5. Technical Arsenal & Engineering Mindset */}
        <SkillsSection />
        <MindsetSection />

        {/* 6. Education & Certifications */}
        <EducationSection />
        <CertificationsSection />

        {/* 7. GitHub & LinkedIn Channels */}
        <GitHubSection />
        <LinkedInSection />

        {/* 8. Contact & Conversion */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={caseStudyOpen}
        onClose={handleCloseCaseStudy}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
