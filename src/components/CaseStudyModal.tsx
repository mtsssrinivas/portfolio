import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#EAEAEA] shadow-2xl z-10 text-[#111111]"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-white/95 border-b border-[#EAEAEA] backdrop-blur-md">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#666666] tracking-wider block">
                {project.order} / Case Study
              </span>
              <h2 className="text-xl font-bold text-[#111111]">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#666666] hover:text-[#111111] hover:bg-[#F4F4F0] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Subtitle */}
            <div className="space-y-3 pb-6 border-b border-[#EAEAEA]">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                {project.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#111111] hover:bg-[#222222] text-white transition-colors"
                  >
                    <span>Live Web Console</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.apiUrl && (
                  <a
                    href={project.apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-white hover:bg-[#F4F4F0] text-[#111111] border border-[#EAEAEA] transition-colors"
                  >
                    <span>API Gateway</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-white hover:bg-[#F4F4F0] text-[#111111] border border-[#EAEAEA] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Repository</span>
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888] mb-2 font-semibold">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#FAFAF8] border border-[#EAEAEA] text-[#333333]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Case Study Content */}
            {isFraudShield ? (
              <div className="space-y-8">
                {/* 1. Challenge & Problem */}
                <div className="p-6 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] space-y-2">
                  <span className="text-xs font-mono font-semibold text-[#2563EB] uppercase tracking-wider">
                    Engineering Challenge
                  </span>
                  <h4 className="text-base font-bold text-[#111111]">
                    Sub-Millisecond Fraud Scoring with Absolute Balance Correctness
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    Modern financial systems must process high-frequency transfers in sub-10ms intervals while evaluating multi-parameter heuristic risk indicators. Under concurrent bursts, unoptimized architectures face balance double-spends, dual-write state desynchronization, and database connection pool exhaustion.
                  </p>
                </div>

                {/* 2. Core Architecture Patterns */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold">
                    Architectural Patterns
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white border border-[#EAEAEA] space-y-1.5 shadow-sm">
                      <span className="font-semibold text-xs text-[#111111] block">
                        Distributed Choreography Saga
                      </span>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        Transfers propagate across microservices asynchronously without single points of failure. Downstream payment declination automatically triggers rollback compensation.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-[#EAEAEA] space-y-1.5 shadow-sm">
                      <span className="font-semibold text-xs text-[#111111] block">
                        Transactional Outbox Pattern
                      </span>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        Guarantees dual-write atomicity between PostgreSQL database writes and Kafka event emissions by staging events in an outbox table within the exact same transaction.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-[#EAEAEA] space-y-1.5 shadow-sm">
                      <span className="font-semibold text-xs text-[#111111] block">
                        Pessimistic Row-Level Locking
                      </span>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        Ledger updates execute inside isolated PostgreSQL transactions using <code className="text-[#2563EB]">SELECT ... FOR UPDATE</code> locks to completely eliminate race conditions.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-[#EAEAEA] space-y-1.5 shadow-sm">
                      <span className="font-semibold text-xs text-[#111111] block">
                        Resilient Kafka Consumers &amp; DLQ
                      </span>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        Exponential retry backoff (100ms &rarr; 200ms &rarr; 400ms) routes persistent failures to a Dead Letter Queue without halting consumer groups.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Fraud Engine Rules */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold">
                    6-Link Chain of Responsibility Fraud Rules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {fraudRulesList.map((rule) => (
                      <div key={rule.name} className="p-3.5 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] text-xs">
                        <div className="flex items-center justify-between mb-1 font-semibold text-[#111111]">
                          <span>{rule.name}</span>
                          <span className="font-mono text-[#2563EB]">{rule.score}</span>
                        </div>
                        <p className="text-[11px] text-[#666666]">{rule.mechanism}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Other Projects Features */
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold">
                  Key Technical Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-white/95 border-t border-[#EAEAEA] backdrop-blur-md">
            <span className="text-[11px] font-mono text-[#888888]">
              Verified source-of-truth project specification
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#111111] hover:bg-[#222222] text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
