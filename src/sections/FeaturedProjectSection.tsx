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
  Cpu, 
  ArrowUpRight
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
    <section id="featured-project" className="py-20 relative">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-primary-400 uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>03 // FEATURED DISTRIBUTED SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              FraudShield
            </h2>
            <p className="text-base sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-violet mt-1">
              Production Real-Time Fraud Detection & Digital Banking Platform
            </p>
          </div>

          {/* Quick Action Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenCaseStudy(fraudshield)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/25 border border-primary-400/30 transition-all hover:scale-[1.02]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Full Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {fraudshield.liveUrl && (
              <a
                href={fraudshield.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-background-card hover:bg-slate-800 text-slate-200 border border-background-border transition-all"
              >
                <span>Live Banking Console</span>
                <ExternalLink className="w-4 h-4 text-primary-400" />
              </a>
            )}

            {fraudshield.apiUrl && (
              <a
                href={fraudshield.apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-background-card hover:bg-slate-800 text-slate-200 border border-background-border transition-all"
              >
                <span>Live API Gateway</span>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            )}

            {fraudshield.githubUrl && (
              <a
                href={fraudshield.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-background-card hover:bg-slate-800 text-slate-200 border border-background-border transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Featured Project Big Banner Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-background-card/90 border border-background-border shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="space-y-4 max-w-4xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              &ldquo;An enterprise-grade distributed digital banking and real-time fraud mitigation platform built around an event-driven microservice architecture.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Engineered with TypeScript, Node.js, Express, Apache Kafka, PostgreSQL 16, Redis 7, and React 18. FraudShield processes financial transactions with sub-millisecond fraud scoring, zero double-debit ledger failures, and complete event-driven audit observability.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {fraudshield.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-background-subtle border border-background-border text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Architecture Visualization Component */}
        <ArchitectureDiagram />

        {/* Engineering Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Distributed Architecture */}
          <div className="p-6 rounded-2xl bg-background-card/70 border border-background-border hover:border-primary-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">
                Distributed Architecture & Mesh
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                8 decoupled microservices communicating across 7 partitioned Kafka event streams, 5 isolated database schemas, and an ephemeral Redis state layer.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-background-border/50 font-mono text-[11px] text-primary-300">
              8 Services • 7 Kafka Topics • 5 Schemas
            </div>
          </div>

          {/* Card 2: Saga Pattern */}
          <div className="p-6 rounded-2xl bg-background-card/70 border border-background-border hover:border-violet-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
                <Repeat className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">
                Distributed Choreography Saga
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Asynchronous event flow across services without single-point bottlenecks. Downstream gateway failures execute automated compensation rollback workflows instantly.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-background-border/50 font-mono text-[11px] text-violet-300">
              Zero Orchestrator Bottlenecks • Auto Rollback
            </div>
          </div>

          {/* Card 3: Transactional Outbox */}
          <div className="p-6 rounded-2xl bg-background-card/70 border border-background-border hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">
                Transactional Outbox Pattern
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Eliminates dual-write inconsistencies between PostgreSQL transactions and Kafka event dispatch by staging domain events in an outbox table atomically.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-background-border/50 font-mono text-[11px] text-cyan-300">
              ACID + Kafka Dual-Write Consistency
            </div>
          </div>

          {/* Card 4: 6-Link Chain of Responsibility */}
          <div className="p-6 rounded-2xl bg-background-card/70 border border-background-border hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">
                6-Link Chain of Responsibility
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Evaluates Velocity, Transfer Ceilings, Balance Drain (≥90%), New Device, Location Leap, and Frequency. Bypasses subsequent rules at score ≥81.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-background-border/50 font-mono text-[11px] text-amber-300">
              1.52× Measured Speedup • 0.0015ms Latency
            </div>
          </div>

          {/* Card 5: PostgreSQL Pessimistic Locking */}
          <div className="p-6 rounded-2xl bg-background-card/70 border border-background-border hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">
                PostgreSQL Pessimistic Row Locking
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Balances are protected inside isolated transactions using <code className="text-emerald-300">SELECT ... FOR UPDATE</code> locks, eliminating race conditions and double-debit anomalies.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-background-border/50 font-mono text-[11px] text-emerald-300">
              0.00% Double-Debit • ACID Settlement
            </div>
          </div>

          {/* Card 6: Kafka Consumer Resilience & Redis */}
          <div className="p-6 rounded-2xl bg-background-card/70 border border-background-border hover:border-rose-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-100">
                Kafka Resilience & Deep Redis
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Exponential backoff (100ms → 200ms → 400ms) with Dead Letter Queue (DLQ), plus Redis Sorted Sets for velocity tracking and Level 1/2 rate limiting.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-background-border/50 font-mono text-[11px] text-rose-300">
              DLQ Isolation • 80% Burst Deflected
            </div>
          </div>
        </div>

        {/* Performance Benchmark Dashboard Component */}
        <BenchmarkDashboard />
      </div>
    </section>
  );
};
