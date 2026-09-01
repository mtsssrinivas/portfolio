import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personal';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: "Full-Stack Engineering",
      items: ["React.js", "Node.js", "Express.js", "REST APIs", "TypeScript", "Tailwind CSS"],
      description: "Building responsive, accessible web interfaces paired with robust backend services and structured REST APIs."
    },
    {
      title: "Backend & Data",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM", "ACID Transactions"],
      description: "Designing isolated database schemas, row-level locking strategies, caching layers, and rate-limiting middleware."
    },
    {
      title: "Systems & CS Fundamentals",
      items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
      description: "Strong foundation in data structures, algorithms, object-oriented design, network protocols, and distributed reliability."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial 2-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-[#EAEAEA]">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-medium text-[#666666] uppercase tracking-wider block mb-3">
              03 // About Me
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight">
              I enjoy turning complex technical problems into simple, reliable software.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed">
            <p>
              {personalData.aboutSummary}
            </p>
            <p className="text-xs sm:text-sm text-[#777777]">
              My focus centers on building reliable backend systems, distributed event streams with Kafka, and clean full-stack SaaS applications. I care deeply about system correctness, database concurrency, performance telemetry, and clean code.
            </p>
          </div>
        </div>

        {/* 3 Clean Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-sm hover:border-[#CCCCCC] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#888888] uppercase block mb-1">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#111111] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-5">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA] flex flex-wrap gap-1.5">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAFAF8] text-[#444444] border border-[#EAEAEA]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
