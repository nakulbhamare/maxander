import React, { useState } from 'react';
import { FileText, Check, Sparkles, BookOpen, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface GroundedAISectionProps {
  locale: Locale;
  onOpenKnowledgeModal: () => void;
}

export const GroundedAISection: React.FC<GroundedAISectionProps> = ({ locale, onOpenKnowledgeModal }) => {
  const t = translations[locale].groundedAI;
  const [citationExpanded, setCitationExpanded] = useState<boolean>(false);

  return (
    <section className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Grounded AI Visual Box (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl border border-[#1F2739] bg-[#0B0E15] p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

              <div className="relative max-w-[460px] mx-auto space-y-4">
                {/* 1. Inbound message */}
                <div className="rounded-xl border border-[#242F46] bg-[#0F1420] p-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1D263A] text-xs">
                    <span className="font-mono text-[#7AA2F7]">{t.inboundEmail}</span>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#1A2234] text-[#8695B2]">
                      Inbound
                    </span>
                  </div>
                  <p className="text-xs text-[#CCD2E2] mt-2.5 leading-relaxed">
                    {t.inboundText}
                  </p>
                </div>

                {/* Connector line */}
                <div className="flex justify-center my-1">
                  <div className="w-px h-5 bg-[#2A344A]" />
                </div>

                {/* 2. Knowledge Match */}
                <div className="rounded-xl border border-[#2A4338] bg-[#0B1713] p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1A2E25] text-xs">
                    <div className="flex items-center gap-1.5 text-[#10B981] font-semibold">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.matchLabel}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded">
                      100% Verifiable
                    </span>
                  </div>
                  <p className="text-xs text-[#9DE8C9] mt-2.5 leading-relaxed">
                    {t.matchText}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-dashed border-[#1B352A] flex items-center justify-between text-[11px] font-mono text-[#6BA88F]">
                    <span>{t.matchSource}</span>
                    <button
                      onClick={() => setCitationExpanded(!citationExpanded)}
                      className="text-[#ECC67A] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {citationExpanded ? 'Hide' : 'Expand'}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  {/* Expandable Citation Drawer */}
                  {citationExpanded && (
                    <div className="mt-3 p-3 rounded-lg bg-[#06100D] border border-[#18362B] text-[11px] font-mono text-[#8ECFBA] space-y-1.5 animate-in fade-in duration-200">
                      <div className="text-[#ECC67A] font-semibold">
                        [INDEX RECORD #DOC-EVT-04]
                      </div>
                      <p>Section 3.1: Private dining room capacities & seasonal menu pricing.</p>
                      <p className="text-[#649C8B]">Cross-referenced against 212 past confirmed bookings at elforo.com.</p>
                    </div>
                  )}
                </div>

                {/* Connector line */}
                <div className="flex justify-center my-1">
                  <div className="w-px h-5 bg-[#2A344A]" />
                </div>

                {/* 3. Reply drafted with citations */}
                <div className="rounded-xl border border-[#2D364C] bg-[#101522] p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1E273C] text-xs">
                    <div className="flex items-center gap-1.5 text-[#ECC67A] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.draftLabel}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#D6A856] bg-[#D6A856]/15 px-2 py-0.5 rounded">
                      {t.draftBadge}
                    </span>
                  </div>
                  <p className="text-xs text-[#CCD1E0] mt-2.5 leading-relaxed italic">
                    {t.draftText}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-dashed border-[#1E273C] flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1 text-[#ECC67A]">
                      <FileText className="w-3 h-3" />
                      {t.draftAttachment}
                    </span>
                    <span className="text-[#888F9E] text-[10px]">
                      {t.draftStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#F4F2ED]">
              {t.title}{' '}
              <span className="headline-quiet block sm:inline">
                {t.titleQuiet}
              </span>
            </h2>

            <p className="text-base text-[#989FB2] leading-relaxed">
              {t.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-3 pt-2 text-sm text-[#CCD1E0]">
              {t.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6A856]/15 text-[#ECC67A] border border-[#D6A856]/30">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenKnowledgeModal}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#D6A856] hover:text-[#ECC67A] transition-colors"
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
