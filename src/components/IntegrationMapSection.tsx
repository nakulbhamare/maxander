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
    <section id="integrations" className="py-24 sm:py-32 border-b border-[#E4E7EC] bg-[#FAFAFA] fine-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#E4E7EC] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#384BC7] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#667085]">{t.subtitle}</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#121417]">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#475467] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Interactive Hub & Spoke System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Interactive Grid Map (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-8 shadow-sm relative">
              <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

              {/* Central Maxander Core Node */}
              <div className="mb-6 p-4 rounded-xl border border-[#384BC7]/30 bg-[#F9FAFB] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#384BC7] text-white font-display font-semibold text-lg flex items-center justify-center shadow-sm">
                    M
                  </div>
                  <div>
                    <span className="font-display text-base font-semibold text-[#121417] tracking-wide block">
                      MAXANDER CENTRAL HUB
                    </span>
                    <span className="text-[11px] font-mono text-[#0B935D] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B935D] animate-pulse" />
                      Two-way bidirectional synchronization
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-[#384BC7]/10 text-[#384BC7] font-semibold border border-[#384BC7]/20">
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
                          ? 'bg-[#F9FAFB] border-[#384BC7] shadow-sm text-[#121417] ring-1 ring-[#384BC7]/30'
                          : 'bg-white border-[#E4E7EC] text-[#475467] hover:border-[#CBD5E1] hover:bg-[#FAFAFA]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#384BC7]' : 'text-[#667085]'}`} />
                        <span className="text-[9px] font-mono uppercase text-[#667085]">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-xs font-semibold truncate text-[#121417]">
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
            <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#F2F4F7]">
                <span className="text-xs font-mono text-[#384BC7] uppercase tracking-wider font-semibold">
                  {selectedTool.category} {locale === 'es' ? 'Integración' : 'Integration'}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0B935D]/10 text-[#0B935D] border border-[#0B935D]/20">
                  {selectedTool.badge}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <h3 className="text-2xl font-display font-medium text-[#121417]">
                  {selectedTool.name}
                </h3>
                <p className="text-sm text-[#475467] leading-relaxed">
                  {selectedTool.description}
                </p>

                <div className="p-4 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs font-mono text-[#475467] space-y-2">
                  <div className="text-[#384BC7] font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#384BC7]" />
                    {locale === 'es' ? 'Capacidades del Conector:' : 'Connector Capabilities:'}
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#344054]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#0B935D]" />
                      Real-time webhook ingestion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#0B935D]" />
                      Automated table capacity validation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#0B935D]" />
                      Zero-latency status callback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Systems Note */}
        <div className="mt-8 p-4 rounded-xl border border-dashed border-[#E4E7EC] bg-white text-center text-xs font-mono text-[#667085]">
          {t.upcomingNote}
        </div>
      </div>
    </section>
  );
};
