import React from 'react';
import { Mail, Github, Linkedin, FileText, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';
import { ContactForm } from '../components/ContactForm';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[350px] bg-primary-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            09 // GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Open for Software Engineer, Full-Stack Developer, Backend Engineer, and AI/GenAI developer opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-background-card/80 border border-background-border backdrop-blur-sm space-y-6">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span>Contact Details & Channels</span>
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-background-subtle border border-background-border hover:border-primary-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-primary-300 truncate block">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-background-subtle border border-background-border hover:border-primary-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-primary-300 block">
                      mtsssrinivas
                    </span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-background-subtle border border-background-border hover:border-primary-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-700/20 border border-slate-600/30 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">GitHub Profile</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-primary-300 block">
                      mtsssrinivas
                    </span>
                  </div>
                </a>
              </div>

              {/* Resume Download Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-background-subtle hover:bg-slate-800 text-slate-200 border border-background-border hover:border-slate-600 transition-all hover:scale-[1.01]"
                >
                  <FileText className="w-4 h-4 text-primary-400" />
                  <span>View / Download Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
