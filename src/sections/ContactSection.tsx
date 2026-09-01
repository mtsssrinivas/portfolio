import React from 'react';
import { Mail, Linkedin, ArrowRight, Github } from 'lucide-react';
import { personalData } from '../data/personal';
import { ContactForm } from '../components/ContactForm';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-medium text-[#666666] uppercase tracking-wider block mb-2">
            07 // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666]">
            Have an opportunity, project, or engineering problem worth discussing?
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#111111] hover:bg-[#222222] text-white transition-all shadow-sm active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-[#F4F4F0] text-[#111111] border border-[#EAEAEA] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#2563EB]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-[#F4F4F0] text-[#111111] border border-[#EAEAEA] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Minimal Form Container */}
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
