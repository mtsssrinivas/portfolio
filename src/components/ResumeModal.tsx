import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, Download } from 'lucide-react';
import { personalData } from '../data/personal';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const resumeText = `# ${personalData.name}
${personalData.badge}
Email: ${personalData.email} | GitHub: ${personalData.githubUrl} | LinkedIn: ${personalData.linkedinUrl}

## SUMMARY
${personalData.aboutSummary}

## EDUCATION
${educationData.map(e => `${e.institution} — ${e.degree} (${e.period}) - ${e.gradeLabel}: ${e.grade}\nRelevant Coursework: ${e.coursework.join(', ')}`).join('\n\n')}

## EXPERIENCE
${experienceData.map(exp => `${exp.role} — ${exp.company} (${exp.period})\n${exp.responsibilities.map(r => `* ${r}`).join('\n')}`).join('\n\n')}

## SELECTED PROJECTS
${projectsData.map(p => `### ${p.title} — ${p.subtitle}\nTech: ${p.tags.join(', ')}\n${p.description}\n${p.features.map(f => `* ${f}`).join('\n')}`).join('\n\n')}

## CERTIFICATIONS
${certificationsData.map(c => `* ${c.title} — ${c.issuer}`).join('\n')}
`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0 print:m-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm print:hidden"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white border border-[#EAEAEA] shadow-2xl z-10 text-[#111111] print:border-none print:max-h-none print:shadow-none"
        >
          {/* Header Action Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-white/95 border-b border-[#EAEAEA] backdrop-blur-md print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#666666]">RESUME VIEWER</span>
              <span className="text-[#888888]">·</span>
              <span className="text-xs text-[#111111] font-semibold">{personalData.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="Sampath_Srinivas_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FAFAF8] hover:bg-[#EFEFEA] text-[#111111] border border-[#EAEAEA] transition-colors"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FAFAF8] hover:bg-[#EFEFEA] text-[#111111] border border-[#EAEAEA] transition-colors"
                title="Copy markdown text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#111111] hover:bg-[#222222] text-white transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#666666] hover:text-[#111111] hover:bg-[#F4F4F0] transition-colors ml-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Structured Resume Content */}
          <div className="p-6 sm:p-10 space-y-8 font-sans print:p-0 print:space-y-4">
            {/* Header */}
            <div className="border-b border-[#EAEAEA] pb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                {personalData.name}
              </h1>
              <p className="text-sm sm:text-base text-[#2563EB] font-medium mt-1">
                {personalData.badge}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs font-mono text-[#666666]">
                <span>{personalData.email}</span>
                <span>·</span>
                <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span>·</span>
                <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-2">
                Summary
              </h2>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {personalData.aboutSummary} Strong foundational background in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, and System Design.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-3">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] print:p-0 print:border-none">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-[#111111] text-sm">
                    <span>{edu.institution}</span>
                    <span className="text-xs font-mono text-[#666666]">{edu.period}</span>
                  </div>
                  <div className="text-xs text-[#2563EB] mt-0.5">
                    {edu.degree} — <strong>CGPA: {edu.grade}</strong>
                  </div>
                  <div className="text-xs text-[#666666] mt-2">
                    <strong>Coursework:</strong> {edu.coursework.join(', ')}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-3">
                Experience
              </h2>
              {experienceData.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] print:p-0 print:border-none">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-[#111111] text-sm">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="text-xs font-mono text-[#666666]">{exp.period}</span>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs text-[#444444]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Engineering Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-3">
                Selected Projects
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] print:p-0 print:border-none">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-[#111111] text-sm">
                      <span>{proj.title} — {proj.subtitle}</span>
                      <span className="text-xs font-mono text-[#2563EB]">
                        {proj.tags.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <p className="text-xs text-[#444444] mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-[#666666]">
                      {proj.features.slice(0, 3).map((f, fIdx) => (
                        <li key={fIdx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-3">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillsData.map((group) => (
                  <div key={group.category} className="p-3 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] print:p-0 print:border-none">
                    <strong className="text-[#111111] block mb-1">{group.category}:</strong>
                    <span className="text-[#666666] font-mono">
                      {group.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#888888] font-semibold mb-2">
                Certifications
              </h2>
              <ul className="space-y-1 text-xs text-[#444444] list-disc list-inside">
                {certificationsData.map((cert, idx) => (
                  <li key={idx}>
                    <strong>{cert.title}</strong> — {cert.issuer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
