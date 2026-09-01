import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { BenchmarkDashboard } from '../components/BenchmarkDashboard';

interface FeaturedProjectSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({
  onOpenCaseStudy
}) => {
  const fraudshield = projectsData[0]; // FraudShield
  const [activeDecision, setActiveDecision] = useState<number | null>(0);

  const decisions = [
    {
      title: "Distributed Choreography Saga",
      summary: "Zero central orchestrator bottlenecks. Propagates balance transfers asynchronously and automatically executes rollback compensation on downstream declination."
    },
    {
      title: "Transactional Outbox Pattern",
      summary: "Solves dual-write consistency between PostgreSQL ACID writes and Kafka event emissions by staging domain events in an outbox table within the same transaction."
    },
    {
      title: "6-Link Chain of Responsibility",
      summary: "Evaluates velocity, ceilings, balance drain (>=90%), device, location, and frequency. Short-circuits when score reaches >= 81 for a 1.52x measured speedup."
    },
    {
      title: "Redis Ephemeral State Tier",
      summary: "Prunes sliding-window velocity at O(log N) complexity within 60s windows via Sorted Sets, with 2-tier rate limiting deflecting 80% of burst traffic."
    },
    {
      title: "PostgreSQL Row-Level Locking",
      summary: "All ledger adjustments execute inside isolated transactions with SELECT ... FOR UPDATE pessimistic locks, preventing double debits under peak concurrency."
    },
    {
      title: "Resilient Kafka Consumers & DLQ",
      summary: "Exponential backoff (100ms -> 200ms -> 400ms) with poison-pill isolation to a Dead Letter Queue (DLQ) without halting the consumer group."
    }
  ];

  return (
    <section id="featured-project" className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Overview */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md">
              01 // FEATURED SYSTEM
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#EAEAEA]">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
                FraudShield
              </h2>
              <p className="text-base sm:text-xl text-[#666666] font-medium mt-1">
                Real-Time Fraud Detection &amp; Digital Banking Platform
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenCaseStudy(fraudshield)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-[#111111] hover:bg-[#222222] text-white transition-all shadow-sm active:scale-95"
              >
                <span>Explore Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {fraudshield.liveUrl && (
                <a
                  href={fraudshield.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-white hover:bg-[#F4F4F0] text-[#111111] border border-[#EAEAEA] transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#666666]" />
                </a>
              )}

              {fraudshield.githubUrl && (
                <a
                  href={fraudshield.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-white hover:bg-[#F4F4F0] text-[#111111] border border-[#EAEAEA] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed max-w-4xl">
            {fraudshield.description} {fraudshield.longDescription}
          </p>

          {/* Clean Tech Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[#666666]">
            <span className="text-[#999999]">Tech Stack:</span>
            {fraudshield.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded bg-white border border-[#EAEAEA] text-[#333333]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Minimal Architecture Visualization */}
        <ArchitectureDiagram />

        {/* Engineering Decisions (Clean Accordion/Cards) */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#666666] font-semibold">
            Core Engineering Decisions &amp; Patterns
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {decisions.map((dec, idx) => {
              const isOpen = activeDecision === idx;
              return (
                <div
                  key={dec.title}
                  onClick={() => setActiveDecision(isOpen ? null : idx)}
                  className="p-5 rounded-xl bg-white border border-[#EAEAEA] cursor-pointer hover:border-[#CCCCCC] transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#111111]">
                      {dec.title}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#888888]" /> : <ChevronDown className="w-4 h-4 text-[#888888]" />}
                  </div>
                  {isOpen && (
                    <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {dec.summary}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Telemetry Dashboard */}
        <BenchmarkDashboard />
      </div>
    </section>
  );
};
