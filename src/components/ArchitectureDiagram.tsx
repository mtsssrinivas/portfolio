import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fraudshieldServices, MicroserviceNode } from '../data/architecture';
import { ChevronRight, Database, Zap } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedService, setSelectedService] = useState<MicroserviceNode>(fraudshieldServices[3]); // Transaction Service default

  return (
    <div className="rounded-2xl bg-white border border-[#EAEAEA] p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-[#EAEAEA]">
        <div>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-wider font-semibold">
            System Topology
          </span>
          <h3 className="text-lg font-bold text-[#111111] mt-0.5">
            Event-Driven Microservices Architecture
          </h3>
        </div>
        <div className="text-xs font-mono text-[#666666] bg-[#F4F4F0] px-2.5 py-1 rounded-md self-start sm:self-auto">
          8 Decoupled Services · 7 Kafka Topics
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Minimal Pipeline Flow */}
        <div className="lg:col-span-7 space-y-4">
          {/* Level 0: Client */}
          <div className="p-3 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] flex items-center justify-between text-xs font-mono text-[#333333]">
            <span>CLIENT (React / Browser)</span>
            <span className="text-[#888888]">HTTPS / TLS 1.3</span>
          </div>

          {/* Line */}
          <div className="flex justify-center -my-2">
            <div className="w-[1px] h-4 bg-[#D4D4D4]"></div>
          </div>

          {/* Level 1: API Gateway */}
          <button
            onClick={() => setSelectedService(fraudshieldServices[0])}
            className={`w-full text-left p-3.5 rounded-lg border transition-all ${
              selectedService.id === 'gateway'
                ? 'bg-[#F4F4F0] border-[#111111] shadow-sm'
                : 'bg-white border-[#EAEAEA] hover:border-[#CCCCCC]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-xs text-[#111111] block">
                  01. API Gateway (Port 8000)
                </span>
                <span className="text-[11px] text-[#666666]">
                  Edge Proxy · JWT Verification · Rate Limiting
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 text-[#888888] transition-transform ${selectedService.id === 'gateway' ? 'rotate-90 text-[#111111]' : ''}`} />
            </div>
          </button>

          {/* Line */}
          <div className="flex justify-center -my-2">
            <div className="w-[1px] h-4 bg-[#D4D4D4]"></div>
          </div>

          {/* Level 2: Core Domain Services (5) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {fraudshieldServices.slice(1, 6).map((svc) => {
              const isSelected = selectedService.id === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`p-3 rounded-lg text-left border transition-all ${
                    isSelected
                      ? 'bg-[#F4F4F0] border-[#111111] shadow-sm'
                      : 'bg-white border-[#EAEAEA] hover:border-[#CCCCCC]'
                  }`}
                >
                  <span className="font-semibold text-xs text-[#111111] block truncate">
                    {svc.name.replace(/^\d+\.\s*/, '')}
                  </span>
                  <span className="text-[10px] text-[#666666] block truncate mt-0.5">
                    {svc.role}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Kafka Event Bus Banner */}
          <div className="p-3.5 rounded-lg bg-[#FAFAF8] border border-[#EAEAEA] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="font-mono font-medium text-[#111111]">
                Apache Kafka Event Stream Bus (7 Partitioned Topics)
              </span>
            </div>
          </div>

          {/* Level 3: Consumer Services */}
          <div className="grid grid-cols-2 gap-2">
            {fraudshieldServices.slice(6, 8).map((svc) => {
              const isSelected = selectedService.id === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`p-3 rounded-lg text-left border transition-all ${
                    isSelected
                      ? 'bg-[#F4F4F0] border-[#111111] shadow-sm'
                      : 'bg-white border-[#EAEAEA] hover:border-[#CCCCCC]'
                  }`}
                >
                  <span className="font-semibold text-xs text-[#111111] block">
                    {svc.name}
                  </span>
                  <span className="text-[10px] text-[#666666] block">
                    {svc.role}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Selected Service Detail Inspector */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] space-y-4 text-xs"
            >
              <div className="pb-3 border-b border-[#EAEAEA] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#888888] uppercase">
                    Service Node Inspector
                  </span>
                  <h4 className="text-sm font-bold text-[#111111] mt-0.5">
                    {selectedService.name}
                  </h4>
                </div>
                <span className="font-mono text-[11px] text-[#666666] bg-white px-2 py-0.5 rounded border border-[#EAEAEA]">
                  Port {selectedService.port}
                </span>
              </div>

              <div>
                <span className="text-[#888888] font-mono block mb-1">Responsibility</span>
                <p className="text-[#333333] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div>
                <span className="text-[#888888] font-mono block mb-1">Tech &amp; Middleware</span>
                <div className="font-mono text-[#333333] bg-white p-2 rounded border border-[#EAEAEA] text-[11px]">
                  {selectedService.tech}
                </div>
              </div>

              <div>
                <span className="text-[#888888] font-mono block mb-1">State / Storage</span>
                <div className="flex items-center gap-1.5 font-mono text-[#333333] bg-white p-2 rounded border border-[#EAEAEA] text-[11px]">
                  <Database className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{selectedService.database}</span>
                </div>
              </div>

              {selectedService.eventsEmitted.length > 0 && (
                <div>
                  <span className="text-[#888888] font-mono block mb-1">Events Emitted</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedService.eventsEmitted.map((ev) => (
                      <span key={ev} className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-[#EAEAEA] text-[#2563EB]">
                        &uarr; {ev}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
