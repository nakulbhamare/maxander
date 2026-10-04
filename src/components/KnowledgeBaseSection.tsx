import React, { useState } from 'react';
import { FileText, Database, RefreshCw, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface KnowledgeBaseSectionProps {
  locale: Locale;
}

export const KnowledgeBaseSection: React.FC<KnowledgeBaseSectionProps> = ({ locale }) => {
  const t = translations[locale].knowledgeBase;
  const [selectedDocIndex, setSelectedDocIndex] = useState<number>(0);

  return (
    <section className="py-20 sm:py-28 border-b border-[#161D2B] bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222B3D] bg-[#0E131E] text-xs font-mono text-[#D6A856] mb-4">
            <Database className="w-3 h-3" />
            <span>{locale === 'es' ? 'BASE DE CONOCIMIENTO EMBEBIDA' : 'EMBEDDED KNOWLEDGE BASE'}</span>
          </div>
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl text-[#F4F2ED]">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-[#8F96A8]">
            {t.subtitle}
          </p>
        </div>

        {/* Document Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Document Row List (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            {t.docs.map((doc, idx) => {
              const isSelected = selectedDocIndex === idx;

              return (
                <div
                  key={doc.name}
                  onClick={() => setSelectedDocIndex(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#111724] border-[#D6A856]/50 shadow-lg'
                      : 'bg-[#0A0D15] border-[#182030] hover:border-[#26334A] hover:bg-[#0D111A]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#D6A856]/20 text-[#ECC67A]' : 'bg-[#141A27] text-[#697285]'
                      }`}
                    >
                      <FileText className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#F4F2ED] truncate">
                          {doc.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#182030] text-[#8695B2]">
                          {doc.type}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[#7A8398] mt-1">
                        {doc.meta}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#ECC67A] translate-x-1' : 'text-[#444C60]'
                    }`}
                  />
                </div>
              );
            })}

            {/* Bottom Status Ribbon */}
            <div className="p-4 rounded-xl border border-dashed border-[#1E2638] bg-[#0A0D14] flex items-center justify-between text-xs font-mono text-[#7E879B]">
              <span className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[#10B981] animate-spin-slow" />
                {locale === 'es' ? 'Sincronizado cada noche a las 04:00 CET' : 'Nightly sync active at 04:00 CET'}
              </span>
              <span className="text-[#10B981]">100% Ready</span>
            </div>
          </div>

          {/* Right Column: Document Details & Indexed Chunks (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#20293D] bg-[#0B0E16] p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#1A2234]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D6A856]" />
                  <span className="font-mono text-xs text-[#F4F2ED] font-semibold">
                    {t.docs[selectedDocIndex].name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                  {locale === 'es' ? 'Indexado' : 'Indexed & Active'}
                </span>
              </div>

              {/* Document Preview Snippet */}
              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-[#656E82] uppercase tracking-wider mb-1.5">
                    {locale === 'es' ? 'Extracto verificado:' : 'Ground Truth Snippet:'}
                  </div>
                  <div className="p-4 rounded-xl bg-[#07090E] border border-[#182030] text-xs text-[#CCD2E2] font-mono leading-relaxed">
                    “{t.docs[selectedDocIndex].preview}”
                  </div>
                </div>

                {/* Indexed Sections Pill Grid */}
                <div>
                  <div className="text-[11px] font-mono text-[#656E82] uppercase tracking-wider mb-2">
                    {locale === 'es' ? 'Secciones y cláusulas indexadas:' : 'Indexed Clauses & Entities:'}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {t.docs[selectedDocIndex].sections.map((sec, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-[#0E121B] border border-[#1B2232] text-[#A6ADC0] flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span className="truncate">{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-[#182030] text-xs font-mono text-[#8C94A7] flex items-center justify-between">
                <span>{t.footerText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
