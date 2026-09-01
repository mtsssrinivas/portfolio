import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-background-border bg-background py-10 relative z-10">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-background-border">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="text-base font-bold text-slate-100 font-mono">
              {personalData.shortName}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-xs text-slate-400 font-mono">
              {personalData.badge}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-primary-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`mailto:${personalData.email}`}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-background-elevated hover:bg-slate-800 text-slate-400 hover:text-white border border-background-border transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-500">
          <div>
            © 2026 Sampath Srinivas. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
