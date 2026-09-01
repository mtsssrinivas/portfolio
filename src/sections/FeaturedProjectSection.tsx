import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Github, 
  Layers, 
  Zap, 
  Repeat, 
  Lock, 
  Flame, 
  BookOpen, 
  Cpu
} from 'lucide-react';
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

  return (
    <section id="featured-project" className="py-24 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-background-border">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-primary-400 uppercase tracking-widest mb-2 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>03 // FEATURED ENGINEERING STORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              01 / FraudShield
            </h2>
            <p className="text-sm sm:text-base text-primary-300 font-medium mt-1.5">
              Real-Time Fraud Detection & Digital Banking Platform
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenCaseStudy(fraudshield)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white shadow-md shadow-primary-500/20 border border-primary-400/30 transition-all hover:scale-[1.02]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Architecture →</span>
            </button>

            {fraudshield.liveUrl && (
              <a
                href={fraudshield.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-background-card hover:bg-background-elevated text-slate-200 border border-background-border transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-primary-400" />
              </a>
            )}

            {fraudshield.githubUrl && (
              <a
                href={fraudshield.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-background-card hover:bg-background-elevated text-slate-200 border border-background-border transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Featured Big Bento Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-background-card border border-background-border shadow-saas-card space-y-5">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-4xl">
            &ldquo;An event-driven distributed platform combining microservices, Kafka, PostgreSQL, Redis, and real-time fraud detection.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
            Engineered with TypeScript, Node.js, Express, Apache Kafka, PostgreSQL 16, Redis 7, and React 18. FraudShield processes high-frequency financial transactions with sub-millisecond fraud scoring, zero double-debit ledger failures, and complete event-driven audit observability.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {fraudshield.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-background-elevated border border-background-border text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Architecture Diagram */}
        <ArchitectureDiagram />

        {/* Engineering Decisions: 6 Clean Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-100 font-mono">
              ENGINEERING DECISIONS & PATTERNS
            </h3>
            <span className="text-xs font-mono text-slate-500">6 Architectural Pillars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Saga */}
            <div className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Repeat className="w-4 h-4 text-primary-400" />
                <span>Saga Compensation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Asynchronous transaction choreography without single-point bottlenecks. Downstream gateway failures execute automated compensation rollback workflows instantly.
              </p>
            </div>

            {/* 2. Outbox */}
            <div className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Zap className="w-4 h-4 text-primary-400" />
                <span>Transactional Outbox</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eliminates dual-write inconsistencies between PostgreSQL database writes and Kafka event emissions by staging messages atomically in an outbox table.
              </p>
            </div>

            {/* 3. Chain of Responsibility */}
            <div className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Cpu className="w-4 h-4 text-primary-400" />
                <span>Chain of Responsibility</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modular 6-link heuristic risk pipeline evaluating velocity, ceilings, and balance drain. Bypasses subsequent rules at score &ge; 81 (1.52&times; speedup).
              </p>
            </div>

            {/* 4. Redis */}
            <div className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Layers className="w-4 h-4 text-primary-400" />
                <span>Redis Velocity & Rate Limiting</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sliding-window velocity tracking using Redis Sorted Sets and 2-tier rate limiting deflecting 80% of burst traffic to shield connection pools.
              </p>
            </div>

            {/* 5. PostgreSQL */}
            <div className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Lock className="w-4 h-4 text-primary-400" />
                <span>PostgreSQL Pessimistic Locking</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All balance adjustments execute inside isolated PostgreSQL transactions using <code className="text-primary-300">SELECT ... FOR UPDATE</code> locks for 0.00% double-debits.
              </p>
            </div>

            {/* 6. Kafka & DLQ */}
            <div className="p-5 rounded-2xl bg-background-card border border-background-border saas-border-hover space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Flame className="w-4 h-4 text-primary-400" />
                <span>Kafka Retry & DLQ Flow</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exponential backoff (100ms &rarr; 200ms &rarr; 400ms) with Dead Letter Queue routing poison-pill payloads without halting consumer groups.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Benchmark Dashboard */}
        <BenchmarkDashboard />
      </div>
    </section>
  );
};
