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
    <section className="relative py-28 sm:py-36 border-b border-[#E4E7EC] bg-[#121417] text-white fine-grid overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#384BC7]/20 via-[#384BC7]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#384BC7]" />
          <span>{locale === 'es' ? 'COMIENZA HOY' : 'READY TO DEPLOY'}</span>
        </div>

        <h2 className="headline text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
          {t.title}
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#98A2B3] max-w-xl mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-semibold bg-[#384BC7] text-white hover:bg-[#2F3FA6] shadow-lg shadow-[#384BC7]/25 transition-all flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
          >
            <span>{t.buttonDemo}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#pricing"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <span>{t.buttonPricing}</span>
          </a>
        </div>

        {/* Guarantee note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-[#98A2B3]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0B935D]" />
          <span>{t.guarantee}</span>
        </div>
      </div>
    </section>
  );
};
