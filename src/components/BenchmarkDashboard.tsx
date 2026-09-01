import React from 'react';
import { motion } from 'framer-motion';
import { benchmarkMetrics } from '../data/architecture';
import { Gauge, CheckCheck, Info } from 'lucide-react';

export const BenchmarkDashboard: React.FC = () => {
  return (
    <div className="rounded-2xl bg-background-card/80 border border-background-border p-6 md:p-8 backdrop-blur-xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-background-border">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
            <Gauge className="w-3.5 h-3.5" />
            <span>MEASURED BENCHMARK & PERFORMANCE</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100">
            Performance Telemetry & System Resilience
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Verified performance metrics recorded during high-concurrency automated stress tests (150 Virtual Users / 10,000 transactions).
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs self-start md:self-auto">
          <CheckCheck className="w-4 h-4" />
          <span>77 / 77 Tests Passed (100%)</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {benchmarkMetrics.map((metric, index) => {
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 rounded-xl bg-background-subtle/80 border border-background-border/80 hover:border-slate-600 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">
                    {metric.label}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background text-slate-300 border border-background-border group-hover:border-primary-500/30 group-hover:text-primary-300 transition-colors">
                    {metric.badge}
                  </span>
                </div>

                <div className="text-2xl font-bold font-mono text-slate-100 tracking-tight group-hover:text-primary-400 transition-colors">
                  {metric.value}
                </div>
              </div>

              <div className="text-[11px] text-slate-400 mt-3 pt-2.5 border-t border-background-border/50">
                {metric.detail}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Benchmark Disclaimer Badge */}
      <div className="mt-6 pt-4 border-t border-background-border/60 flex items-center gap-2 text-xs text-slate-400">
        <Info className="w-3.5 h-3.5 text-primary-400 flex-shrink-0" />
        <span>
          Metrics gathered via automated Jest & Supertest integration load suites on isolated cloud instances. Labelled as project engineering benchmark results.
        </span>
      </div>
    </div>
  );
};
