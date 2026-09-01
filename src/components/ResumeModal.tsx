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
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-background-subtle border border-background-border shadow-2xl z-10 text-slate-200 print:bg-white print:text-black print:border-none print:max-h-none print:shadow-none"
        >
          {/* Header Action Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-background-subtle/95 border-b border-background-border backdrop-blur-md print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-primary-400">RESUME VIEWER</span>
              <span className="text-slate-400">•</span>
              <span className="text-xs text-slate-300 font-semibold">{personalData.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="Sampath_Srinivas_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-background-card hover:bg-slate-800 text-slate-300 border border-background-border transition-colors"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5 text-primary-400" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={handleCopyMarkdown}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-background-card hover:bg-slate-800 text-slate-300 border border-background-border transition-colors"
                title="Copy structured markdown to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-600 hover:bg-primary-500 text-white transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-background-card transition-colors ml-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Structured Resume Content */}
          <div className="p-6 sm:p-10 space-y-8 font-sans print:p-0 print:space-y-4 print:text-black">
            {/* Header */}
            <div className="border-b border-background-border pb-6 print:border-gray-300">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight print:text-black">
                {personalData.name}
              </h1>
              <p className="text-sm sm:text-base text-primary-400 font-medium mt-1 print:text-blue-700">
                {personalData.badge}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs font-mono text-slate-400 print:text-gray-700">
                <span>{personalData.email}</span>
                <span>•</span>
                <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span>•</span>
                <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold mb-2 print:text-blue-700">
                Profile Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
                {personalData.aboutSummary} Strong foundational background in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, and System Design.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold mb-3 print:text-blue-700">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-background-card/50 border border-background-border print:bg-transparent print:p-0 print:border-none">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-200 text-sm print:text-black">
                    <span>{edu.institution}</span>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">{edu.period}</span>
                  </div>
                  <div className="text-xs text-primary-400 mt-0.5 print:text-gray-700">
                    {edu.degree} — <strong>CGPA: {edu.grade}</strong>
                  </div>
                  <div className="text-xs text-slate-400 mt-2 print:text-gray-600">
                    <strong>Coursework:</strong> {edu.coursework.join(', ')}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold mb-3 print:text-blue-700">
                Professional Experience
              </h2>
              {experienceData.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-background-card/50 border border-background-border print:bg-transparent print:p-0 print:border-none">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-200 text-sm print:text-black">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-600">{exp.period}</span>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs text-slate-300 print:text-gray-800">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Engineering Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold mb-3 print:text-blue-700">
                Selected Engineering Projects
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-background-card/50 border border-background-border print:bg-transparent print:p-0 print:border-none">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-200 text-sm print:text-black">
                      <span>{proj.title} — {proj.subtitle}</span>
                      <span className="text-xs font-mono text-primary-400 print:text-gray-600">
                        {proj.tags.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed print:text-gray-800">
                      {proj.description}
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-slate-400 print:text-gray-700">
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
              <h2 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold mb-3 print:text-blue-700">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillsData.map((group) => (
                  <div key={group.category} className="p-3 rounded-lg bg-background-card/50 border border-background-border print:bg-transparent print:p-0 print:border-none">
                    <strong className="text-slate-200 block mb-1 print:text-black">{group.category}:</strong>
                    <span className="text-slate-400 font-mono print:text-gray-700">
                      {group.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold mb-2 print:text-blue-700">
                Certifications
              </h2>
              <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside print:text-gray-800">
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
