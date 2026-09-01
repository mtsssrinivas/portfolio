import React from 'react';
import { benchmarkMetrics } from '../data/architecture';

export const BenchmarkDashboard: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white border border-[#EAEAEA] p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#EAEAEA]">
        <div>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-wider font-semibold">
            Performance Telemetry
          </span>
          <h3 className="text-lg font-bold text-[#111111] mt-0.5">
            Measured Benchmark &amp; Load Verification
          </h3>
        </div>
        <span className="text-xs font-mono text-[#666666] bg-[#F4F4F0] px-2.5 py-1 rounded-md self-start sm:self-auto">
          77 / 77 Tests Passed (100%)
        </span>
      </div>

      {/* Editorial Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-b border-[#EAEAEA]">
        {benchmarkMetrics.slice(0, 4).map((m) => (
          <div key={m.label} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight font-mono">
              {m.value}
            </div>
            <div className="text-xs font-semibold text-[#333333]">
              {m.label}
            </div>
            <div className="text-[11px] text-[#888888]">
              {m.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Benchmark Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5">
        {benchmarkMetrics.slice(4, 8).map((m) => (
          <div key={m.label} className="space-y-0.5 text-xs">
            <div className="font-mono font-bold text-[#111111] text-sm">
              {m.value}
            </div>
            <div className="text-[#666666]">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#EAEAEA] text-[11px] font-mono text-[#888888] flex items-center justify-between flex-wrap gap-2">
        <span>* Labelled strictly as project benchmark / load test results (150 Virtual Users / 10,000 Txns)</span>
        <span>Jest 29 · Supertest</span>
      </div>
    </div>
  );
};
