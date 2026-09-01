import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';
import { HeroVisual } from '../components/HeroVisual';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('featured-project');
    if (el) {
      const navOffset = 80;
      const topPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center pt-28 pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Small Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono tracking-wider uppercase font-semibold bg-background-elevated text-primary-400 border border-background-border shadow-sm">
                COMPUTER SCIENCE ENGINEER • FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-violet">
                scalable software
              </span>{' '}
              and intelligent products.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalData.supportingText}
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#featured-project"
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white shadow-md shadow-primary-500/20 border border-primary-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Sampath_Srinivas_Resume.pdf"
                onClick={(e) => {
                  // Open modal viewer on desktop or trigger download
                  if (window.innerWidth > 768) {
                    e.preventDefault();
                    onOpenResume();
                  }
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-background-card hover:bg-background-elevated text-slate-200 border border-background-border hover:border-slate-600 transition-all"
              >
                <FileText className="w-4 h-4 text-primary-400" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-2 border-l border-background-border">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-background-card hover:bg-background-elevated text-slate-300 hover:text-white border border-background-border transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-background-card hover:bg-background-elevated text-slate-300 hover:text-primary-400 border border-background-border transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Micro-Cards */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-background-card/80 border border-background-border text-xs text-slate-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                <span className="truncate">Currently building Distributed & AI systems</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-background-card/80 border border-background-border text-xs text-slate-300 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-primary-400 flex-shrink-0" />
                <span className="truncate text-[11px]">React • Node • Kafka • Postgres • Redis</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            {/* Desktop Hero System Visual */}
            <div className="hidden sm:block">
              <HeroVisual />
            </div>

            {/* Mobile Simplified System Topology */}
            <div className="sm:hidden p-4 rounded-2xl bg-background-card border border-background-border space-y-2 font-mono text-xs text-center">
              <div className="text-primary-400 font-bold mb-2">SYSTEM ARCHITECTURE</div>
              <div className="p-2 rounded bg-background border border-background-border text-slate-200">CLIENT (React / Browser)</div>
              <div className="text-slate-500">↓</div>
              <div className="p-2 rounded bg-background border border-background-border text-slate-200">API GATEWAY (Node / Express)</div>
              <div className="text-slate-500">↓</div>
              <div className="p-2 rounded bg-background border border-background-border text-slate-200">8 MICROSERVICES (Saga)</div>
              <div className="text-slate-500">↓</div>
              <div className="p-2 rounded bg-background border border-background-border text-slate-200">KAFKA (7 Topics) & REDIS</div>
              <div className="text-slate-500">↓</div>
              <div className="p-2 rounded bg-background border border-background-border text-emerald-400">POSTGRESQL (Row Locks)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
