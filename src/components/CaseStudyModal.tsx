import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  ShieldAlert, 
  Cpu, 
  Database, 
  Zap, 
  Lock, 
  CheckCircle2, 
  Flame,
  Server,
  Code
} from 'lucide-react';
import { Project } from '../types';
import { fraudRulesList } from '../data/architecture';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isFraudShield = project.id === 'fraudshield';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background-subtle border border-background-border shadow-2xl z-10 text-slate-200"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-5 bg-background-subtle/95 border-b border-background-border backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                {project.order} — CASE STUDY
              </span>
              <h2 className="text-lg font-bold text-slate-100 truncate">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-background-card border border-transparent hover:border-background-border transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Title & Headline */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                {project.subtitle}
              </h1>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/20 transition-all"
                  >
                    <span>Live Console</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.apiUrl && (
                  <a
                    href={project.apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-background-card hover:bg-slate-800 text-slate-200 border border-background-border transition-all"
                  >
                    <span>Edge Gateway API</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-background-card hover:bg-slate-800 text-slate-200 border border-background-border transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div>
              <h3 className="text-xs font-mono text-primary-400 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                <span>Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-background-card border border-background-border text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study Detailed Breakdown */}
            {isFraudShield ? (
              <div className="space-y-8">
                {/* 1. Problem Statement */}
                <div className="p-5 rounded-xl bg-background-card/60 border border-background-border space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
                    <ShieldAlert className="w-4 h-4" />
                    <span>THE ENGINEERING CHALLENGE</span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-100">
                    Low-Latency Fraud Scoring with Absolute Transaction Correctness
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Modern financial platforms face a dual challenge: processing high-throughput transfers in sub-10ms intervals while evaluating multi-parameter fraud indicators in real time. Under concurrent transfer bursts, naive implementations suffer from race conditions, double-debit anomalies, distributed data desynchronization, and database connection pool exhaustion.
                  </p>
                </div>

                {/* 2. Architecture & Design Patterns */}
                <div>
                  <h3 className="text-xs font-mono text-primary-400 mb-4 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Core Architectural Patterns</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-background-card/80 border border-background-border space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-violet-300">
                        <Zap className="w-4 h-4 text-violet-400" />
                        <span>Distributed Choreography Saga</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Transfers propagate across services via asynchronous event choreography without single points of failure. If downstream payment gateways decline, automated compensation transactions rollback ledger balances with zero human intervention.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-background-card/80 border border-background-border space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                        <Database className="w-4 h-4 text-cyan-400" />
                        <span>Transactional Outbox Pattern</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Guarantees dual-write atomicity between PostgreSQL ACID writes and Kafka event emissions by inserting event payloads into an <code className="text-cyan-300">outbox_events</code> table within the exact same database transaction.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-background-card/80 border border-background-border space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <span>Pessimistic Row-Level Locking</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        All balance adjustments execute inside isolated PostgreSQL transactions using <code className="text-emerald-300">SELECT ... FOR UPDATE</code> row locks, fully eliminating double-spending and balance drift across concurrent threads.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-background-card/80 border border-background-border space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                        <Flame className="w-4 h-4 text-amber-400" />
                        <span>Resilient Kafka Consumers & DLQ</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Event consumers utilize exponential retry backoff (100ms → 200ms → 400ms). Poison-pill payloads failing 3 consecutive attempts route to a dedicated Dead Letter Queue (DLQ) without halting the consumer group.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Fraud Engine: 6-Link Chain of Responsibility */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-mono text-primary-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>6-Link Chain of Responsibility Fraud Rules</span>
                    </h3>
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      Threshold ≥ 81 Critical Anomaly
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {fraudRulesList.map((rule) => (
                      <div
                        key={rule.name}
                        className={`p-3 rounded-lg border ${rule.color}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono font-semibold text-xs text-slate-200">
                            {rule.name}
                          </span>
                          <span className="font-mono text-xs font-bold">
                            {rule.score}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-tight">
                          {rule.mechanism}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 p-3 rounded-lg bg-background-card border border-background-border text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>
                      <strong>Short-Circuit Speedup:</strong> When cumulative risk reaches &ge; 81, subsequent checks are bypassed immediately, producing a <strong>1.52× measured evaluation speedup (0.0015ms latency)</strong>.
                    </span>
                  </div>
                </div>

                {/* 4. Redis Ephemeral State Integration */}
                <div className="p-5 rounded-xl bg-background-card/80 border border-background-border space-y-3">
                  <h4 className="text-xs font-mono text-primary-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    <span>Deep Redis 7 Ephemeral State Integration</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-background/60 border border-background-border">
                      <span className="font-mono font-semibold text-slate-200 block mb-1">
                        Sliding-Window Velocity
                      </span>
                      <p className="text-slate-400 text-[11px]">
                        Redis Sorted Sets pruned at O(log N) within a 60-second sliding time window.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/60 border border-background-border">
                      <span className="font-mono font-semibold text-slate-200 block mb-1">
                        Two-Tier Rate Limiting
                      </span>
                      <p className="text-slate-400 text-[11px]">
                        Level 1 (100 req/min/IP) + Level 2 (10k req/min global) deflecting 80% burst traffic.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/60 border border-background-border">
                      <span className="font-mono font-semibold text-slate-200 block mb-1">
                        Atomic OTP Destruction
                      </span>
                      <p className="text-slate-400 text-[11px]">
                        HMAC-SHA256 hashed OTPs with 5-min TTL and single-use atomic GETDEL.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Other Projects Detailed Features */
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-primary-400 mb-3 uppercase tracking-wider">
                    Key Features & Technical Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-background-card/60 border border-background-border text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 z-20 flex items-center justify-between p-4 bg-background-subtle/95 border-t border-background-border backdrop-blur-md">
            <span className="text-[11px] font-mono text-slate-500">
              Verified from project repository & architecture specs
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
