import React from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, Code2, ShieldCheck, Gauge } from 'lucide-react';

export const MindsetSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Design",
      icon: DraftingCompass,
      description: "Break complex requirements into clear modular systems, relational entities, and clean API contracts."
    },
    {
      number: "02",
      title: "Build",
      icon: Code2,
      description: "Create maintainable, type-safe frontend and backend components with high test coverage and zero deadlocks."
    },
    {
      number: "03",
      title: "Secure",
      icon: ShieldCheck,
      description: "Design robust authentication, granular authorization, rate limiting, and safe concurrent data flows."
    },
    {
      number: "04",
      title: "Optimize",
      icon: Gauge,
      description: "Measure bottlenecks with automated load testing, fine-tune database indexes, and improve latency."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono text-primary-400 uppercase tracking-widest block mb-2 font-semibold">
            06 // ENGINEERING METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            How I Think About Software
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A disciplined, performance-oriented mindset for designing, implementing, and shipping production applications.
          </p>
        </div>

        {/* 4-Step Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
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
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-background-border text-[10px] font-mono text-slate-500 uppercase">
                  Phase {item.number}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
