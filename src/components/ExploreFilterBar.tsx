import React from 'react';

export type FilterCategory = 'all' | 'fullstack' | 'backend' | 'ai' | 'distributed' | 'databases';

interface ExploreFilterBarProps {
  activeFilter: FilterCategory;
  onSelectFilter: (category: FilterCategory) => void;
}

export const ExploreFilterBar: React.FC<ExploreFilterBarProps> = ({
  activeFilter,
  onSelectFilter
}) => {
  const filterOptions: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'distributed', label: 'Distributed Systems' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI / GenAI' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'databases', label: 'Databases' }
  ];

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAEAEA]">
        <div>
          <span className="text-xs font-mono font-medium text-[#666666] tracking-wider uppercase">
            Selected Work
          </span>
          <p className="text-xs text-[#888888] mt-0.5">
            Systems and intelligent products I&apos;ve designed, built, and shipped.
          </p>
        </div>

        {/* Minimalist Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {filterOptions.map((opt) => {
            const isSelected = activeFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onSelectFilter(opt.id)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white hover:bg-[#EFEFEA] text-[#666666] hover:text-[#111111] border border-[#EAEAEA]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
