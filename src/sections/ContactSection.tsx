import React from 'react';
import { Mail, Github, Linkedin, FileText, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';
import { ContactForm } from '../components/ContactForm';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-2 font-semibold">
            09 // GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-400">
            Have an opportunity, project, or engineering problem worth discussing?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-background-card border border-background-border shadow-saas-card space-y-5">
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span>DIRECT CHANNELS</span>
              </h3>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-background-elevated border border-background-border hover:border-primary-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-background-card border border-background-border flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 block">Email Address</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-primary-300 truncate block">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-background-elevated border border-background-border hover:border-primary-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-background-card border border-background-border flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">LinkedIn</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-primary-300 block">
                      linkedin.com/in/mtsssrinivas
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-background-elevated border border-background-border hover:border-primary-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-background-card border border-background-border flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">GitHub</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-primary-300 block">
                      github.com/mtsssrinivas
                    </span>
                  </div>
                </a>
              </div>

              {/* Resume CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-background-elevated hover:bg-slate-800 text-slate-200 border border-background-border hover:border-slate-600 transition-all"
                >
                  <FileText className="w-4 h-4 text-primary-400" />
                  <span>View / Download Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
