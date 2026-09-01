import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  context: string;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  context,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="p-5 rounded-2xl bg-background-card/60 border border-background-border hover:border-primary-500/30 transition-all group backdrop-blur-sm"
    >
      <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-100 tracking-tight group-hover:text-primary-400 transition-colors">
        {value}
      </div>
      <div className="text-sm font-semibold text-slate-200 mt-2">
        {label}
      </div>
      <div className="text-xs text-slate-400 mt-0.5 font-mono">
        {context}
      </div>
    </motion.div>
  );
};
