import React from 'react';
import { personalData } from '../data/personal';
import { StatCard } from '../components/StatCard';

export const QuickStatsSection: React.FC = () => {
  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personalData.quickStats.map((stat, idx) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              context={stat.context}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
