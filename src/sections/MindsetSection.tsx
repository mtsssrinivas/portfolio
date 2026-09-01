import React from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, Code2, ShieldCheck, Gauge } from 'lucide-react';
import { personalData } from '../data/personal';

export const MindsetSection: React.FC = () => {
  const getMindsetIcon = (icon: string) => {
    switch (icon) {
      case 'DraftingCompass': return DraftingCompass;
      case 'Code2': return Code2;
      case 'ShieldCheck': return ShieldCheck;
      case 'Gauge': return Gauge;
      default: return Code2;
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest block mb-2">
            06 // ENGINEERING METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            How I Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A disciplined approach to architecting, developing, securing, and optimizing real-world software products.
          </p>
        </div>

        {/* Mindset 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalData.howIBuild.map((item, idx) => {
            const Icon = getMindsetIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-background-card/70 border border-background-border hover:border-primary-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-primary-400 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-background-border/50 font-mono text-[10px] text-slate-500 uppercase">
                  Step {item.step} Phase
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
