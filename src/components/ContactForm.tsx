import React, { useState } from 'react';
import { Send, Check, Copy, Mail, AlertCircle } from 'lucide-react';
import { personalData } from '../data/personal';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [statusNote, setStatusNote] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatusNote('Please fill out all fields.');
      return;
    }

    const subject = encodeURIComponent(`Engineering Opportunity / Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setStatusNote('Opening default email client...');
  };

  return (
    <div className="rounded-2xl bg-white border border-[#EAEAEA] p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#EAEAEA]">
        <div>
          <span className="text-xs font-mono text-[#888888] uppercase">Direct Email</span>
          <div className="text-sm font-semibold text-[#111111] mt-0.5 font-mono">
            {personalData.email}
          </div>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFAF8] hover:bg-[#F0F0EA] border border-[#EAEAEA] text-xs font-mono text-[#444444] transition-colors self-start sm:self-auto"
        >
          <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" /> : <Copy className="w-3.5 h-3.5 text-[#888888] ml-1" />}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name-input" className="block text-xs font-medium text-[#444444] mb-1">
              Your Name
            </label>
            <input
              id="name-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Mercer"
              className="w-full px-3.5 py-2 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] focus:border-[#111111] focus:bg-white text-xs sm:text-sm text-[#111111] outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="email-input" className="block text-xs font-medium text-[#444444] mb-1">
              Your Email
            </label>
            <input
              id="email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="w-full px-3.5 py-2 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] focus:border-[#111111] focus:bg-white text-xs sm:text-sm text-[#111111] outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message-input" className="block text-xs font-medium text-[#444444] mb-1">
            Message
          </label>
          <textarea
            id="message-input"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Discuss role opportunities, distributed system architecture, or full-stack development..."
            className="w-full px-3.5 py-2 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] focus:border-[#111111] focus:bg-white text-xs sm:text-sm text-[#111111] outline-none transition-all resize-none"
          />
        </div>

        {statusNote && (
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#EFF6FF] text-xs text-[#2563EB]">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{statusNote}</span>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] font-mono text-[#888888]">
            Dispatches directly via client mail protocol
          </span>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-[#111111] hover:bg-[#222222] text-white transition-all shadow-sm active:scale-95"
          >
            <span>Send Message</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
};
