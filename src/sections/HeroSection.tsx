import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { personalData } from '../data/personal';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('featured-project');
    if (el) {
      const navOffset = 70;
      const topPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center pt-32 pb-16 lg:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-3xl space-y-8"
        >
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-[#666666] bg-[#EFEFEA] px-2.5 py-1 rounded-md">
              Computer Science Engineer • Full-Stack Developer
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.08]">
            Building{' '}
            <span className="text-[#2563EB]">scalable software</span>{' '}
            and intelligent products.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-2xl font-normal">
            {personalData.supportingText}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="#featured-project"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-[#111111] hover:bg-[#222222] text-white transition-all shadow-sm active:scale-95"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-white hover:bg-[#F4F4F0] text-[#111111] border border-[#EAEAEA] transition-all shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#666666]" />
              <span>Download Resume</span>
            </button>

            <div className="flex items-center gap-1.5 pl-2">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[#666666] hover:text-[#111111] hover:bg-[#EFEFEA] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[#666666] hover:text-[#2563EB] hover:bg-[#EFEFEA] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Minimal Single Metadata Line */}
          <div className="pt-4 text-xs font-mono text-[#888888] flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span>React</span>
            <span>·</span>
            <span>Node.js</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>PostgreSQL</span>
            <span>·</span>
            <span>Kafka</span>
            <span>·</span>
            <span>Redis</span>
            <span>·</span>
            <span>Open to Engineering Roles</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
