import React, { useState, useEffect } from 'react';
import { Locale, translations } from '../data/translations';

interface EditorialIntroProps {
  locale: Locale;
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({ locale }) => {
  const t = translations[locale].editorialIntro;
  const [activeWord, setActiveWord] = useState<'messages' | 'bookings'>('messages');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWord((prev) => (prev === 'messages' ? 'bookings' : 'messages'));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 sm:py-36 border-b border-[#141A26] bg-[#07080B] dot-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.2] text-[#E0DFD8] tracking-tight font-normal">
          {t.part1}{' '}
          <span className="text-[#888E9E] italic transition-colors">
            {t.highlight1}
          </span>{' '}
          {t.part2}{' '}
          <span
            className="inline-block relative px-3 py-0.5 rounded-lg bg-[#D6A856]/15 border border-[#D6A856]/30 text-[#ECC67A] font-medium shadow-[0_0_20px_rgba(214,168,86,0.2)] cursor-pointer transition-all transform hover:scale-105"
            onClick={() => setActiveWord(activeWord === 'messages' ? 'bookings' : 'messages')}
            title="Click to toggle"
          >
            {activeWord === 'messages'
              ? (locale === 'es' ? 'mensajes' : 'messages')
              : (locale === 'es' ? 'reservas' : 'bookings')}
          </span>{' '}
          {t.part3}{' '}
          <span className="text-[#F4F2ED] font-semibold underline decoration-[#D6A856]/50 underline-offset-8">
            {t.part4}
          </span>
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono text-[#6A7182]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6A856]" />
          <span>{locale === 'es' ? 'COGNICIÓN HOSPITALARIA' : 'HOSPITALITY COGNITION'}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6A856]" />
        </div>
      </div>
    </section>
  );
};
