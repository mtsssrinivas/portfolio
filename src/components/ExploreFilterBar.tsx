import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Sparkles, Network, Database, ArrowDown } from 'lucide-react';

export type FilterCategory = 'all' | 'fullstack' | 'backend' | 'ai' | 'distributed' | 'databases';

interface ExploreFilterBarProps {
  activeFilter: FilterCategory;
  onSelectFilter: (category: FilterCategory) => void;
}

export const ExploreFilterBar: React.FC<ExploreFilterBarProps> = ({
  activeFilter,
  onSelectFilter
}) => {
  const filterOptions: { id: FilterCategory; label: string; count: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Projects', count: '4 Systems', icon: Layers },
    { id: 'distributed', label: 'Distributed Systems', count: 'FraudShield', icon: Network },
    { id: 'backend', label: 'Backend Engineering', count: 'Kafka / APIs', icon: Server },
    { id: 'ai', label: 'AI / GenAI', count: 'InterviewIQ', icon: Sparkles },
    { id: 'fullstack', label: 'Full-Stack SaaS', count: 'React & Node', icon: Layers },
    { id: 'databases', label: 'Databases & Cache', count: 'Postgres/Redis', icon: Database }
  ];

  const handleFilterClick = (id: FilterCategory) => {
    onSelectFilter(id);
    const target = document.getElementById(id === 'distributed' ? 'featured-project' : 'projects');
    if (target) {
      const navOffset = 90;
      const topPos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
      {/* Large SaaS Explore Container inspired by reference booking/search widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl sm:rounded-3xl bg-background-elevated/95 border border-background-border shadow-saas-elevated backdrop-blur-xl p-5 sm:p-7"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-background-border">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-primary-400 font-semibold block mb-1">
              SYSTEM DISCOVERY
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-100">
              Explore what I build
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Select an engineering domain to filter architecture blueprints, APIs, and production codebases.
            </p>
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-slate-400 self-start md:self-auto bg-background-card px-3 py-1.5 rounded-lg border border-background-border">
            <span>Scrolls to matching systems</span>
            <ArrowDown className="w-3.5 h-3.5 text-primary-400 animate-bounce ml-1" />
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {filterOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = activeFilter === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleFilterClick(opt.id)}
                className={`p-3.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-primary-600/15 border-primary-500 text-white shadow-md shadow-primary-500/10'
                    : 'bg-background-card hover:bg-background-card/80 border-background-border hover:border-slate-600 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-primary-400' : 'text-slate-400'}`} />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background text-slate-400 border border-background-border">
                    {opt.count}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-slate-100">
                    {opt.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
