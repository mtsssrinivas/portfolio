import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowRight, MessageSquareCode } from 'lucide-react';
import { personalData } from '../data/personal';

export const LinkedInSection: React.FC = () => {
  return (
    <section className="py-8 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-8 rounded-2xl bg-background-card border border-background-border saas-border-hover flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl space-y-1.5">
            <div className="flex items-center gap-2 text-[11px] font-mono text-primary-400 font-semibold uppercase">
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>PROFESSIONAL NETWORKING</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              Let&apos;s connect
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Interested in software engineering, backend systems, distributed applications, or AI-powered products?
            </p>
          </div>

          <div>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white shadow-md shadow-primary-500/20 border border-primary-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
