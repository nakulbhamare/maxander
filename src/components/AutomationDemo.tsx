import React, { useState } from 'react';
import { Sparkles, FileText, Send, CalendarCheck, Clock, Mail, ChevronRight, Check } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface AutomationDemoProps {
  locale: Locale;
}

export const AutomationDemo: React.FC<AutomationDemoProps> = ({ locale }) => {
  const t = translations[locale].automationDemo;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [Mail, Sparkles, FileText, Send, CalendarCheck, Clock];

  return (
    <section className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#07090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* Title and Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#F4F2ED]">
            {t.title}{' '}
            <span className="headline-quiet block sm:inline">
              {t.titleQuiet}
            </span>
          </h2>
          <p className="mt-4 text-base text-[#989FB2] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Interactive Step Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Step Navigation List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {t.steps.map((step, idx) => {
              const Icon = icons[idx] || Sparkles;
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#111622] border-[#D6A856]/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                      : 'bg-[#090C12] border-[#182030] hover:border-[#253048] hover:bg-[#0D1018]'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-semibold shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#D6A856] text-[#07080B]'
                        : 'bg-[#151C2B] text-[#7A8296]'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-semibold tracking-tight ${
                          isActive ? 'text-[#F4F2ED]' : 'text-[#A0A8BC]'
                        }`}
                      >
                        {step.title}
                      </span>
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? 'text-[#ECC67A]' : 'text-[#4A5266]'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-[#7C8497] mt-1 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Contextual Step Preview Inspector (7 cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-2xl border border-[#20293D] bg-[#0A0D15] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="fine-grid absolute inset-0 opacity-40 pointer-events-none" />

              {/* Inspector Header */}
              <div className="relative flex items-center justify-between pb-4 border-b border-[#1C2538]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="font-mono text-xs text-[#8C95AB] uppercase">
                    {locale === 'es' ? 'Inspector de Ejecución // Paso' : 'Execution Inspector // Step'} {t.steps[activeStepIndex].number}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#182133] text-[#ECC67A] border border-[#283652]">
                  {t.steps[activeStepIndex].badge}
                </span>
              </div>

              {/* Step Deep-Dive Card */}
              <div className="relative mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-display font-medium text-[#F4F2ED]">
                    {t.steps[activeStepIndex].title}
                  </h3>
                  <p className="text-sm text-[#949CAF] mt-2 leading-relaxed">
                    {t.steps[activeStepIndex].description}
                  </p>
                </div>

                {/* Code / Data Payload Box */}
                <div className="p-4 rounded-xl bg-[#06080C] border border-[#182030] font-mono text-xs text-[#CCD2E2] space-y-2">
                  <div className="text-[10px] text-[#555D70] uppercase tracking-wider pb-1 border-b border-[#141A26]">
                    {locale === 'es' ? 'Registro de Carga Útil' : 'Payload & Audit'}
                  </div>
                  <p className="text-[#8994AD] leading-relaxed break-words">
                    {t.steps[activeStepIndex].detailSnippet}
                  </p>
                </div>

                {/* Step Contextual Insights */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono text-[#7A8398]">
                  <div className="p-3 rounded-lg bg-[#0F131E] border border-[#1B2334]">
                    <span className="text-[#52596C] block">LATENCY:</span>
                    <span className="text-[#10B981] font-medium">180ms</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0F131E] border border-[#1B2334]">
                    <span className="text-[#52596C] block">OPERATOR OVERRIDE:</span>
                    <span className="text-[#ECC67A] font-medium">Active (1-click)</span>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="pt-4 border-t border-[#182030] flex items-center justify-between text-xs font-mono text-[#6A7387]">
                  <span>
                    {locale === 'es' ? 'Progreso:' : 'Progress:'} {activeStepIndex + 1} / {t.steps.length}
                  </span>
                  <div className="flex gap-1.5">
                    {t.steps.map((_, i) => (
                      <span
                        key={i}
                        className={`w-6 h-1.5 rounded-full transition-all ${
                          i === activeStepIndex
                            ? 'bg-[#D6A856]'
                            : i < activeStepIndex
                            ? 'bg-[#10B981]'
                            : 'bg-[#1C2436]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
