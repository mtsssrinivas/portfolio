import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShieldCheck, 
  Layers, 
  Database, 
  Zap, 
  Lock,
  Cpu,
  Activity,
  CheckCircle2
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [throughputCounter, setThroughputCounter] = useState(371788);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
      setThroughputCounter((prev) => prev + Math.floor(Math.random() * 21) - 10);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    {
      id: 0,
      title: "CLIENT",
      subtitle: "React / Browser (TLS 1.3)",
      icon: Globe,
      tag: "HTTPS Request"
    },
    {
      id: 1,
      title: "API GATEWAY",
      subtitle: "Node / Express (Rate Limit L1/L2)",
      icon: ShieldCheck,
      tag: "80% Burst Deflection"
    },
    {
      id: 2,
      title: "MICROSERVICES",
      subtitle: "8 Monorepo Decoupled Services",
      icon: Layers,
      tag: "Saga Choreography"
    },
    {
      id: 3,
      title: "KAFKA & REDIS",
      subtitle: "7 Topics + Sliding-Window Velocity",
      icon: Zap,
      tag: "Transactional Outbox"
    },
    {
      id: 4,
      title: "POSTGRESQL",
      subtitle: "ACID Ledger & Row Locks",
      icon: Database,
      tag: "0.00% Double-Debit"
    }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* SaaS Card Container */}
      <div className="relative rounded-2xl bg-background-elevated border border-background-border p-5 sm:p-6 shadow-saas-elevated">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-background-border text-xs">
          <div className="flex items-center gap-2 font-mono text-slate-300">
            <span className="text-primary-400 font-bold">SYSTEM TOPOLOGY</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-[11px]">distributed.mesh</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LIVE PIPELINE</span>
          </div>
        </div>

        {/* System Pipeline Nodes */}
        <div className="space-y-2.5">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isCurrent = activeStep === index;
            const isPassed = activeStep > index;

            return (
              <div key={node.id} className="relative">
                <div
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-background-card border-primary-500/50 shadow-md shadow-primary-500/10'
                      : 'bg-background-card/50 border-background-border hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                        isCurrent
                          ? 'bg-primary-500/20 border-primary-400 text-primary-300'
                          : 'bg-background border-background-border text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs font-mono text-slate-100">
                          {node.title}
                        </span>
                        {isCurrent && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 block">
                        {node.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background text-slate-400 border border-background-border hidden sm:inline-block">
                      {node.tag}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : isCurrent ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <Activity className="w-3.5 h-3.5 text-primary-400" />
                      </motion.div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    )}
                  </div>
                </div>

                {/* Connecting arrow/line */}
                {index < nodes.length - 1 && (
                  <div className="h-2 flex items-center justify-center my-0.5">
                    <div className="w-[1px] h-full bg-slate-800 relative">
                      {isCurrent && (
                        <motion.div
                          className="absolute w-1.5 h-1.5 -left-[2px] rounded-full bg-primary-400"
                          initial={{ top: 0 }}
                          animate={{ top: '100%' }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Mini Telemetry Footer */}
        <div className="mt-4 pt-3.5 border-t border-background-border grid grid-cols-3 gap-2 text-center font-mono">
          <div className="p-2 rounded-lg bg-background-card border border-background-border">
            <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Cpu className="w-3 h-3 text-primary-400" />
              <span>Throughput</span>
            </div>
            <div className="text-xs font-semibold text-slate-100 mt-0.5">
              {throughputCounter.toLocaleString()} RPS
            </div>
          </div>

          <div className="p-2 rounded-lg bg-background-card border border-background-border">
            <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>p95 Latency</span>
            </div>
            <div className="text-xs font-semibold text-emerald-400 mt-0.5">
              7.38 ms
            </div>
          </div>

          <div className="p-2 rounded-lg bg-background-card border border-background-border">
            <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3 text-primary-400" />
              <span>ACID Lock</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5">
              Row-Level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
