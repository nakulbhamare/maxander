import React, { useState } from 'react';
import { Mail, Calendar, CreditCard, MessageSquare, Globe, Sparkles, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface IntegrationMapSectionProps {
  locale: Locale;
}

export const IntegrationMapSection: React.FC<IntegrationMapSectionProps> = ({ locale }) => {
  const t = translations[locale].integrationsMap;
  const [selectedToolId, setSelectedToolId] = useState<string>('restoo');

  const iconMap: Record<string, React.ElementType> = {
    gmail: Mail,
    outlook: Mail,
    thefork: Calendar,
    restoo: Calendar,
    stripe: CreditCard,
    'google-calendar': Calendar,
    whatsapp: MessageSquare,
    website: Globe
  };

  const selectedTool = t.items.find((item) => item.id === selectedToolId) || t.items[0];

  return (
    <section id="integrations" className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#080A0F] fine-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#F4F2ED]">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#989FB2] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Interactive Hub & Spoke System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Interactive Grid Map (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#1F2739] bg-[#0A0D14] p-6 sm:p-8 shadow-2xl relative">
              <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

              {/* Central Maxander Core Node */}
              <div className="mb-6 p-4 rounded-xl border border-[#D6A856]/40 bg-[#111622] flex items-center justify-between shadow-[0_0_20px_rgba(214,168,86,0.15)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D6A856] text-[#07080B] font-display font-semibold text-lg flex items-center justify-center">
                    M
                  </div>
                  <div>
                    <span className="font-display text-base font-semibold text-[#F4F2ED] tracking-wide block">
                      MAXANDER CENTRAL HUB
                    </span>
                    <span className="text-[11px] font-mono text-[#10B981] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Two-way bidirectional synchronization
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-[#1E273A] text-[#ECC67A] border border-[#2B3750]">
                  Core API
                </span>
              </div>

              {/* Surrounding Spokes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.items.map((item) => {
                  const Icon = iconMap[item.id] || Sparkles;
                  const isSelected = selectedToolId === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedToolId(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#151C2B] border-[#D6A856] shadow-lg text-[#F4F2ED]'
                          : 'bg-[#0E121B] border-[#182030] text-[#7C8395] hover:border-[#28354D] hover:text-[#CCD1DF]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#ECC67A]' : 'text-[#5C6477]'}`} />
                        <span className="text-[9px] font-mono uppercase text-[#5C6477]">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-xs font-semibold truncate">
                        {item.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Selected Tool Deep-Dive Inspector (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#222B3D] bg-[#0A0D15] p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#1A2234]">
                <span className="text-xs font-mono text-[#D6A856] uppercase tracking-wider">
                  {selectedTool.category} {locale === 'es' ? 'Integración' : 'Integration'}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                  {selectedTool.badge}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <h3 className="text-2xl font-display font-medium text-[#F4F2ED]">
                  {selectedTool.name}
                </h3>
                <p className="text-sm text-[#959CB0] leading-relaxed">
                  {selectedTool.description}
                </p>

                <div className="p-4 rounded-xl bg-[#06080C] border border-[#182030] text-xs font-mono text-[#8C94A8] space-y-2">
                  <div className="text-[#ECC67A] font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#ECC67A]" />
                    {locale === 'es' ? 'Capacidades del Conector:' : 'Connector Capabilities:'}
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#A6ADC0]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                      Real-time webhook ingestion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                      Automated table capacity validation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                      Zero-latency status callback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Systems Note */}
        <div className="mt-8 p-4 rounded-xl border border-dashed border-[#1C2436] bg-[#0A0C12] text-center text-xs font-mono text-[#788195]">
          {t.upcomingNote}
        </div>
      </div>
    </section>
  );
};
