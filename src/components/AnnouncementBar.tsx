import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface AnnouncementBarProps {
  locale: Locale;
  onOpenDemo: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ locale, onOpenDemo }) => {
  const t = translations[locale].announcement;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#0C0E14] border-b border-[#1C2230] text-[13px] text-[#A0A5B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center text-center">
        <button
          onClick={onOpenDemo}
          className="group inline-flex items-center gap-2 transition-colors hover:text-[#F4F2ED] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6A856]"
        >
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide bg-[#D6A856]/15 text-[#ECC67A] border border-[#D6A856]/30">
            <Sparkles className="w-3 h-3 text-[#ECC67A]" />
            {locale === 'es' ? 'NUEVO' : 'NEW'}
          </span>
          <span className="font-medium text-xs sm:text-[13px] tracking-tight">
            {t.text}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#ECC67A] transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </aside>
  );
};
