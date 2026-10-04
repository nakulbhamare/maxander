import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface FinalCTAProps {
  locale: Locale;
  onOpenDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ locale, onOpenDemo }) => {
  const t = translations[locale].finalCta;

  return (
    <section className="relative py-28 sm:py-36 border-b border-[#161D2B] bg-[#07080C] fine-grid overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D6A856]/15 via-[#3B82F6]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#26324A] bg-[#0F1422] text-xs font-mono text-[#D6A856] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#ECC67A]" />
          <span>{locale === 'es' ? 'COMIENZA HOY' : 'READY TO DEPLOY'}</span>
        </div>

        <h2 className="headline text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F4F2ED]">
          {t.title}
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#9AA1B5] max-w-xl mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-semibold bg-[#D6A856] text-[#07080B] hover:bg-[#ECC67A] shadow-[0_0_30px_rgba(214,168,86,0.35)] transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <span>{t.buttonDemo}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#pricing"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base font-medium text-[#F4F2ED] bg-[#0F131D] border border-[#222A3D] hover:bg-[#151B2A] hover:border-[#323D57] transition-all flex items-center justify-center gap-2"
          >
            <span>{t.buttonPricing}</span>
          </a>
        </div>

        {/* Guarantee note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-[#788195]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
          <span>{t.guarantee}</span>
        </div>
      </div>
    </section>
  );
};
