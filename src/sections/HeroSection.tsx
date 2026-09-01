import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Server, Database, Sparkles, Layers, Cpu } from 'lucide-react';
import { personalData } from '../data/personal';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'highlights'>('architecture');
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('featured-project');
    if (el) {
      const navOffset = 70;
      const topPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  const steps = [
    { label: 'Client / Interface', detail: 'React 18 · TypeScript · Tailwind CSS', icon: Layers },
    { label: 'API Gateway', detail: 'Node.js · Express · Rate Limiting L1/L2', icon: Server },
    { label: 'Distributed Event Bus', detail: 'Apache Kafka (7 Topics) · Redis 7', icon: Cpu },
    { label: 'ACID Ledger & Data Tier', detail: 'PostgreSQL 16 · Row-Level Locks', icon: Database },
  ];

  return (
    <section id="hero" className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center pt-28 pb-16 lg:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7"
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
            <p className="text-base sm:text-lg lg:text-xl text-[#666666] leading-relaxed max-w-xl font-normal">
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

            {/* Clean Metadata Line */}
            <div className="pt-2 text-xs font-mono text-[#888888] flex flex-wrap items-center gap-x-2.5 gap-y-1">
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
              <span>Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Engineering Visual Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white border border-[#EAEAEA] p-6 sm:p-7 shadow-sm space-y-5">
              {/* Header with Switcher Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EAEAEA]">
                <div className="flex items-center gap-1.5 bg-[#FAFAF8] p-1 rounded-lg border border-[#EAEAEA]">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      activeTab === 'architecture'
                        ? 'bg-white text-[#111111] shadow-xs font-semibold'
                        : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    System Flow
                  </button>
                  <button
                    onClick={() => setActiveTab('highlights')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      activeTab === 'highlights'
                        ? 'bg-white text-[#111111] shadow-xs font-semibold'
                        : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    Core Stack
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Engineer</span>
                </div>
              </div>

              {activeTab === 'architecture' ? (
                /* Tab 1: Minimal Animated Pipeline Flow */
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                    Full-Stack to Distributed Backend Flow
                  </div>

                  <div className="space-y-2">
                    {steps.map((step, idx) => {
                      const Icon = step.icon;
                      const isCurrent = activeStep === idx;

                      return (
                        <div
                          key={step.label}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                            isCurrent
                              ? 'bg-[#FAFAF8] border-[#111111] shadow-xs'
                              : 'bg-white border-[#EAEAEA]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                                isCurrent
                                  ? 'bg-[#111111] text-white'
                                  : 'bg-[#FAFAF8] text-[#666666]'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="font-semibold text-xs text-[#111111]">
                                {step.label}
                              </div>
                              <div className="text-[11px] text-[#666666] font-mono">
                                {step.detail}
                              </div>
                            </div>
                          </div>

                          {isCurrent ? (
                            <span className="text-[10px] font-mono text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded">
                              Active
                            </span>
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#EAEAEA]"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Tab 2: Core Engineering Pillars & Verified Metrics */
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                    Engineering Disciplines
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-xs font-bold text-[#111111] block">Full-Stack SaaS Products</strong>
                        <p className="text-[11px] text-[#666666]">Production React 18, TypeScript, REST APIs &amp; responsive modern interfaces.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] flex items-start gap-2.5">
                      <Cpu className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-xs font-bold text-[#111111] block">Distributed &amp; Backend Systems</strong>
                        <p className="text-[11px] text-[#666666]">Kafka event streaming, Saga rollbacks, Redis caching &amp; ACID transactions.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] flex items-start gap-2.5">
                      <Database className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-xs font-bold text-[#111111] block">Data &amp; AI Integration</strong>
                        <p className="text-[11px] text-[#666666]">PostgreSQL row locks, MongoDB schemas &amp; LLM prompt pipelines.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Quick Telemetry Stats */}
              <div className="pt-4 border-t border-[#EAEAEA] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA]">
                  <span className="text-[10px] text-[#888888] block">CGPA</span>
                  <span className="text-xs font-bold text-[#111111]">8.91 / 10</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA]">
                  <span className="text-[10px] text-[#888888] block">Throughput</span>
                  <span className="text-xs font-bold text-[#2563EB]">371K+ RPS</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA]">
                  <span className="text-[10px] text-[#888888] block">Tests Passed</span>
                  <span className="text-xs font-bold text-emerald-600">77 / 77</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
