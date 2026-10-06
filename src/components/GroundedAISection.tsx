import React, { useState } from 'react';
import { FileText, Check, Sparkles, BookOpen, ShieldCheck, ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface GroundedAISectionProps {
  locale: Locale;
  onOpenKnowledgeModal: () => void;
}

export const GroundedAISection: React.FC<GroundedAISectionProps> = ({ locale, onOpenKnowledgeModal }) => {
  const t = translations[locale].groundedAI;
  const [citationExpanded, setCitationExpanded] = useState<boolean>(false);

  return (
    <section className="py-20 sm:py-28 border-b border-dashed border-[#e4e7ec] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#e4e7ec] pb-3 mb-12">
          <span className="label-mono">
            <span className="text-[#626874]/50">[02]</span> Grounded AI
          </span>
          <span className="label-mono hidden sm:block text-[#626874]">/ Cites its sources</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Grounded AI Visual Box (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl border border-[#e4e7ec] bg-white p-6 sm:p-8 shadow-[0_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
              <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />
              <div aria-hidden="true" className="hatch absolute inset-y-0 left-0 hidden w-7 border-r border-dashed border-[#e4e7ec] sm:block" />
              <div aria-hidden="true" className="hatch absolute inset-y-0 right-0 hidden w-7 border-l border-dashed border-[#e4e7ec] sm:block" />

              <div className="relative max-w-[440px] mx-auto space-y-4">
                {/* 1. Inbound message */}
                <div className="relative rounded-xl border border-[#e4e7ec] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center gap-2 px-3.5 py-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate text-[13px] font-medium text-[#121417]">sofia@brightlabs.io</span>
                    <span className="ml-auto shrink-0 rounded-md border border-[#e4e7ec] bg-white px-1.5 py-0.5 text-[11px] text-[#626874]">
                      Inbound
                    </span>
                  </div>
                  <div className="border-t border-[#e4e7ec] px-3.5 py-2.5 text-left text-xs leading-relaxed text-[#626874]">
                    “Do you have space for a private dinner for 24 on Dec 12 — and is there a vegetarian menu?”
                  </div>
                </div>

                {/* Connector line */}
                <div className="relative mx-auto w-px h-8">
                  <div className="absolute inset-0 bg-[#e4e7ec]" />
                  <div className="absolute inset-0 bg-[#0b935d]/60 animate-pulse" />
                  <span className="absolute -bottom-[3px] left-1/2 block h-[7px] w-[7px] -translate-x-1/2 rounded-full border border-[#e4e7ec] bg-white" />
                </div>

                {/* 2. Knowledge Match */}
                <div className="relative rounded-xl border border-[#e4e7ec] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center gap-2 px-3.5 py-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                      <BookOpen className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate text-[13px] font-medium text-[#121417]">Knowledge match</span>
                    <span className="ml-auto shrink-0 rounded-md border border-teal-100 bg-teal-50 px-1.5 py-0.5 text-[11px] text-teal-700 font-medium">
                      100% Verifiable
                    </span>
                  </div>
                  <div className="border-t border-[#e4e7ec] px-3.5 py-2.5 text-left text-xs leading-relaxed text-[#626874]">
                    “The Garden Room seats up to 28 for private dinners. Vegetarian tasting menu available at €58 per person.”
                  </div>
                  <div className="flex items-center justify-between border-t border-dashed border-[#e4e7ec] px-3.5 py-2 text-[11px] text-[#626874]">
                    <span className="flex items-center gap-1.5">
                      <FileText className="h-3 w-3 text-[#384bc7]" />
                      From: Events FAQ · learned from 212 threads
                    </span>
                    <button
                      onClick={() => setCitationExpanded(!citationExpanded)}
                      className="text-[#384bc7] font-medium hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {citationExpanded ? 'Hide' : 'Inspect'}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  {/* Expandable Citation Drawer */}
                  {citationExpanded && (
                    <div className="mx-3 mb-3 p-3 rounded-lg bg-[#f8f9fb] border border-[#e4e7ec] text-[11px] font-mono text-[#626874] space-y-1.5 animate-in fade-in duration-200">
                      <div className="text-[#121417] font-semibold">
                        [INDEX RECORD #DOC-EVT-04]
                      </div>
                      <p>Section 3.1: Private dining room capacities & seasonal menu pricing.</p>
                      <p className="text-[#0b935d]">Cross-referenced against 212 past sent emails.</p>
                    </div>
                  )}
                </div>

                {/* Connector line */}
                <div className="relative mx-auto w-px h-8">
                  <div className="absolute inset-0 bg-[#e4e7ec]" />
                  <div className="absolute inset-0 bg-[#0b935d]/60 animate-pulse" />
                  <span className="absolute -bottom-[3px] left-1/2 block h-[7px] w-[7px] -translate-x-1/2 rounded-full border border-[#e4e7ec] bg-white" />
                </div>

                {/* 3. Reply drafted with citations */}
                <div className="relative rounded-xl border border-[#e4e7ec] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center gap-2 px-3.5 py-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-50 text-violet-600">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate text-[13px] font-medium text-[#121417]">Reply drafted</span>
                    <span className="ml-auto shrink-0 rounded-md border border-[#e4e7ec] bg-white px-1.5 py-0.5 text-[11px] text-[#626874]">
                      cites 2 sources
                    </span>
                  </div>
                  <div className="border-t border-[#e4e7ec] px-3.5 py-2.5 text-left text-xs leading-relaxed text-[#121417]">
                    Hi Sofia — we'd love to host you. The Garden Room takes 24 comfortably, and our vegetarian tasting menu is €58 per person…
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-[#e4e7ec] px-3.5 py-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e4e7ec] bg-[#f8f9fb] px-2 py-1 text-[11px] font-medium text-[#121417]">
                      <FileText className="h-3 w-3 text-rose-500" />
                      GardenRoom_Events.pdf
                    </span>
                    <span className="text-[11px] text-[#626874]">
                      Awaiting approval · auto-send off
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#121417]">
              {t.title}{' '}
              <span className="headline-quiet block sm:inline">
                {t.titleQuiet}
              </span>
            </h2>

            <p className="text-base text-[#626874] leading-relaxed">
              {t.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-3 pt-2 text-sm text-[#121417]">
              {t.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#ddf9e4]">
                    <Check className="h-3 w-3 text-[#0b935d]" />
                  </span>
                  <span className="text-[#626874]">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenKnowledgeModal}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#121417] hover:text-[#384bc7] transition-colors cursor-pointer"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

