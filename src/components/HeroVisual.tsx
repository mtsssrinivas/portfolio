import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShieldCheck, 
  Layers, 
  Database, 
  Zap, 
  Activity, 
  CheckCircle2,
  Lock,
  Cpu
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
      title: "Client & Edge",
      subtitle: "HTTPS / TLS 1.3",
      icon: Globe,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/40",
      bgColor: "bg-cyan-950/30",
      tag: "req: 120ms"
    },
    {
      id: 1,
      title: "API Gateway",
      subtitle: "L1/L2 Rate Limit & Auth",
      icon: ShieldCheck,
      color: "text-blue-400",
      borderColor: "border-blue-500/40",
      bgColor: "bg-blue-950/30",
      tag: "80% Deflection"
    },
    {
      id: 2,
      title: "Microservices",
      subtitle: "8 Decoupled Services",
      icon: Layers,
      color: "text-violet-400",
      borderColor: "border-violet-500/40",
      bgColor: "bg-violet-950/30",
      tag: "Saga Choreography"
    },
    {
      id: 3,
      title: "Kafka Event Stream",
      subtitle: "7 Partitioned Topics",
      icon: Zap,
      color: "text-amber-400",
      borderColor: "border-amber-500/40",
      bgColor: "bg-amber-950/30",
      tag: "Transactional Outbox"
    },
    {
      id: 4,
      title: "PostgreSQL & Redis",
      subtitle: "Row Locks & Sorted Sets",
      icon: Database,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      bgColor: "bg-emerald-950/30",
      tag: "0.00% Double-Spend"
    }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-accent-violet/20 to-accent-cyan/20 rounded-2xl blur-xl opacity-75"></div>

      <div className="relative rounded-2xl bg-background-card/90 border border-background-border p-5 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-background-border/80 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="font-mono text-slate-400 ml-1">system://distributed-topology</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>ONLINE</span>
          </div>
        </div>

        {/* System Pipeline Nodes */}
        <div className="space-y-2.5 relative">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isCurrent = activeStep === index;
            const isPassed = activeStep > index;

            return (
              <div key={node.id} className="relative">
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.02 : 1,
                    borderColor: isCurrent ? 'rgba(96, 165, 250, 0.6)' : 'rgba(31, 41, 61, 0.6)'
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                    isCurrent
                      ? `${node.bgColor} ${node.borderColor} shadow-md shadow-primary-500/10`
                      : 'bg-background-subtle/50 border-background-border/50 hover:bg-background-subtle/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                        isCurrent
                          ? `${node.bgColor} ${node.borderColor} ${node.color}`
                          : 'bg-background-card border-background-border text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-xs text-slate-200">
                          {node.title}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 block font-mono">
                        {node.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background/60 text-slate-300 border border-background-border hidden sm:inline-block">
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
                </motion.div>

                {/* Connecting arrow/line */}
                {index < nodes.length - 1 && (
                  <div className="h-2.5 flex items-center justify-center my-0.5">
                    <div className="w-[1px] h-full bg-gradient-to-b from-primary-500/40 to-transparent relative">
                      {isCurrent && (
                        <motion.div
                          className="absolute w-1.5 h-1.5 -left-[2px] rounded-full bg-primary-400 shadow-sm shadow-primary-400"
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
        <div className="mt-4 pt-3.5 border-t border-background-border/80 grid grid-cols-3 gap-2 text-center font-mono">
          <div className="p-2 rounded-lg bg-background/60 border border-background-border/60">
            <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Cpu className="w-3 h-3 text-primary-400" />
              <span>Throughput</span>
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5">
              {throughputCounter.toLocaleString()} RPS
            </div>
          </div>

          <div className="p-2 rounded-lg bg-background/60 border border-background-border/60">
            <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>p95 Latency</span>
            </div>
            <div className="text-xs font-semibold text-emerald-400 mt-0.5">
              7.38 ms
            </div>
          </div>

          <div className="p-2 rounded-lg bg-background/60 border border-background-border/60">
            <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3 text-violet-400" />
              <span>ACID Lock</span>
            </div>
            <div className="text-xs font-semibold text-violet-400 mt-0.5">
              Row-Level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
