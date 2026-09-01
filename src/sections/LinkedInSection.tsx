import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { personalData } from '../data/personal';

export const LinkedInSection: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/30 via-background-card/80 to-background-card/90 border border-primary-500/20 hover:border-primary-500/40 transition-all backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-primary-400">
              <MessageSquareCode className="w-4 h-4" />
              <span>PROFESSIONAL NETWORKING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Let&apos;s Connect
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Interested in software engineering, full-stack development, backend systems, distributed applications, or AI-powered products?
            </p>
          </div>

          <div>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#0077B5] hover:bg-[#006097] text-white shadow-lg shadow-[#0077B5]/20 border border-blue-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
