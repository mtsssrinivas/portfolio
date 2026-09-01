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
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatusNote('Please complete all fields.');
      return;
    }

    // Compose mailto link with encoded parameters
    const subject = encodeURIComponent(`Engineering Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;

    setStatusNote('Opening your default mail client to dispatch your message...');
  };

  return (
    <div className="rounded-2xl bg-background-card/80 border border-background-border p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-background-border">
        <div>
          <span className="text-xs font-mono text-primary-400 block mb-1">
            DIRECT COMMUNICATION
          </span>
          <h3 className="text-xl font-bold text-slate-100">
            Send an Engineering Message
          </h3>
        </div>

        {/* Copy Email Pill */}
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background-subtle border border-background-border hover:border-primary-500/40 text-xs font-mono text-slate-300 transition-all self-start sm:self-auto"
          title="Copy email to clipboard"
        >
          <Mail className="w-3.5 h-3.5 text-primary-400" />
          <span className="truncate max-w-[200px] sm:max-w-none">{personalData.email}</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-400 ml-1" />
          )}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sender-name" className="block text-xs font-mono text-slate-400 mb-1.5">
              Your Name *
            </label>
            <input
              id="sender-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Mercer"
              className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-background-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="sender-email" className="block text-xs font-mono text-slate-400 mb-1.5">
              Your Email Address *
            </label>
            <input
              id="sender-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-background-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="sender-message" className="block text-xs font-mono text-slate-400 mb-1.5">
            Message / Project Details *
          </label>
          <textarea
            id="sender-message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Discuss role opportunities, distributed system architecture, full-stack development, or collaboration..."
            className="w-full px-4 py-2.5 rounded-xl bg-background-subtle border border-background-border focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-xs sm:text-sm text-slate-200 placeholder-slate-500 outline-none transition-all resize-none"
          />
        </div>

        {statusNote && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-xs text-primary-300">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{statusNote}</span>
          </div>
        )}

        <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
          <span className="text-[11px] font-mono text-slate-500">
            Direct routing via client mail protocol
          </span>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/20 border border-primary-400/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
