import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  fraudshieldServices, 
  MicroserviceNode 
} from '../data/architecture';
import { 
  ShieldCheck, 
  Key, 
  Wallet, 
  Repeat, 
  SearchCheck, 
  CreditCard, 
  Bell, 
  FileSpreadsheet, 
  Zap, 
  Database, 
  CheckCircle,
  ChevronRight
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedService, setSelectedService] = useState<MicroserviceNode>(fraudshieldServices[3]); // Default to Transaction Service

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'gateway': return ShieldCheck;
      case 'auth': return Key;
      case 'account': return Wallet;
      case 'transaction': return Repeat;
      case 'fraud': return SearchCheck;
      case 'payment': return CreditCard;
      case 'notification': return Bell;
      case 'audit': return FileSpreadsheet;
      default: return Zap;
    }
  };

  return (
    <div className="rounded-2xl bg-background-card/80 border border-background-border p-6 md:p-8 backdrop-blur-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-background-border">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary-400 mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE SYSTEM TOPOLOGY</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100">
            Event-Driven Microservices Architecture
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            8 decoupled microservices communicating asynchronously via 7 partitioned Kafka event topics, Redis state tier, and 5 schema-isolated PostgreSQL databases.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
            8 Active Nodes
          </span>
          <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
            7 Kafka Topics
          </span>
        </div>
      </div>

      {/* Architecture Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Visual Map */}
        <div className="lg:col-span-7 space-y-4">
          {/* Level 0: Client */}
          <div className="p-3 rounded-xl bg-background-subtle/80 border border-background-border/80 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span>CLIENT / WEB CONSOLE</span>
            </div>
            <span className="text-slate-400 text-[11px]">HTTPS / TLS 1.3</span>
          </div>

          {/* Connection */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-500/50 to-primary-500/50"></div>
          </div>

          {/* Level 1: API Gateway */}
          <div
            onClick={() => setSelectedService(fraudshieldServices[0])}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
              selectedService.id === 'gateway'
                ? 'bg-primary-500/15 border-primary-400 shadow-md shadow-primary-500/10'
                : 'bg-background-card/90 border-background-border hover:border-primary-500/40 hover:bg-background-card'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs text-slate-200 flex items-center gap-2">
                    <span>01. API Gateway</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background/80 text-slate-400">
                      Port 8000
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Edge Proxy • Auth Guard • Level 1/2 Rate Limiting</span>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${selectedService.id === 'gateway' ? 'rotate-90 text-primary-400' : ''}`} />
            </div>
          </div>

          {/* Connection */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-4 bg-gradient-to-b from-primary-500/50 to-violet-500/50"></div>
          </div>

          {/* Level 2: Core Microservices Mesh (5 Services) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {fraudshieldServices.slice(1, 6).map((svc) => {
              const Icon = getServiceIcon(svc.id);
              const isSelected = selectedService.id === svc.id;
              return (
                <motion.div
                  key={svc.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(svc)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-violet-500/20 border-violet-400 shadow-md shadow-violet-500/10'
                      : 'bg-background-subtle/70 border-background-border/70 hover:border-slate-600 hover:bg-background-card'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className={`p-1.5 rounded-md ${isSelected ? 'bg-violet-500/30 text-violet-300' : 'bg-background-card text-slate-400'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-xs text-slate-200 truncate">
                      {svc.name.replace(/^\d+\.\s*/, '')}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {svc.role}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Kafka Event Bus Banner */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-primary-500/10 to-violet-500/10 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono font-semibold text-xs text-amber-300 block">
                  APACHE KAFKA EVENT STREAM BUS
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  transaction.events • fraud.events • payment.events • account.events
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              7 Topics
            </span>
          </div>

          {/* Level 3: Downstream Consumer Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {fraudshieldServices.slice(6, 8).map((svc) => {
              const Icon = getServiceIcon(svc.id);
              const isSelected = selectedService.id === svc.id;
              return (
                <div
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-500/20 border-emerald-400 shadow-md shadow-emerald-500/10'
                      : 'bg-background-subtle/70 border-background-border/70 hover:border-slate-600 hover:bg-background-card'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className={`p-1.5 rounded-md ${isSelected ? 'bg-emerald-500/30 text-emerald-300' : 'bg-background-card text-slate-400'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-xs text-slate-200">
                      {svc.name}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {svc.role}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Service Deep-Dive Inspector */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col justify-between rounded-xl bg-background-subtle/90 border border-background-border p-5"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-background-border">
                  <div>
                    <span className="text-[11px] font-mono text-primary-400 block">
                      NODE INSPECTOR
                    </span>
                    <h4 className="text-base font-bold text-slate-100">
                      {selectedService.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-background-card border border-background-border text-slate-300">
                    Port {selectedService.port}
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono block mb-1">Role / Responsibility</span>
                    <p className="text-slate-200 leading-relaxed bg-background/50 p-2.5 rounded-lg border border-background-border/50">
                      {selectedService.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono block mb-1">Tech Stack & Middleware</span>
                    <div className="p-2.5 rounded-lg bg-background/50 border border-background-border/50 font-mono text-slate-300 text-[11px]">
                      {selectedService.tech}
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono block mb-1">Database / State Layer</span>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-background/50 border border-background-border/50 font-mono text-slate-300 text-[11px]">
                      <Database className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{selectedService.database}</span>
                    </div>
                  </div>

                  {selectedService.eventsEmitted.length > 0 && (
                    <div>
                      <span className="text-slate-400 font-mono block mb-1">Events Emitted to Kafka</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedService.eventsEmitted.map((ev) => (
                          <span
                            key={ev}
                            className="px-2 py-0.5 rounded bg-primary-500/10 text-primary-300 border border-primary-500/20 font-mono text-[10px]"
                          >
                            ↑ {ev}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.eventsConsumed.length > 0 && (
                    <div>
                      <span className="text-slate-400 font-mono block mb-1">Events Consumed from Kafka</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedService.eventsConsumed.map((ev) => (
                          <span
                            key={ev}
                            className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 font-mono text-[10px]"
                          >
                            ↓ {ev}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-background-border/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Isolated Monorepo Package
                </span>
                <span className="text-slate-500">x-correlation-id enabled</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
