import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Cpu } from 'lucide-react';
import { personalData } from '../data/personal';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: "Full-Stack Engineering",
      icon: Layers,
      items: ["React.js", "Node.js", "Express.js", "REST APIs", "TypeScript", "Tailwind CSS"],
      description: "Building responsive, accessible web interfaces coupled with scalable backend services and structured REST APIs."
    },
    {
      title: "Backend & Data",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM", "ACID Transactions"],
      description: "Designing isolated database schemas, row-level locking strategies, caching tiers, and rate-limiting middleware."
    },
    {
      title: "Systems & CS Fundamentals",
      icon: Cpu,
      items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks", "System Design"],
      description: "Strong grounding in core computer science, algorithmic complexity, low-level design patterns, and distributed reliability."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header (Left / Right Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 pb-10 border-b border-background-border">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-2 font-semibold">
              01 // BACKGROUND & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              About Me
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              {personalData.aboutSummary}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              My engineering focus centers on building reliable backend platforms, resilient event-driven architectures, and high-quality full-stack user experiences. I approach software through measurable performance, concurrency safety, and clean modular code.
            </p>
          </div>
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-background-card border border-background-border saas-border-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-background-elevated border border-background-border flex items-center justify-center text-primary-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      CARD 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-background-border">
                  <div className="flex flex-wrap gap-1.5">
                    {card.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-background-elevated text-slate-300 border border-background-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
