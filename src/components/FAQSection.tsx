import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface FAQSectionProps {
  locale: Locale;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ locale }) => {
  const t = translations[locale].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#08090D] dot-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#F4F2ED]">
            {t.title}{' '}
            <span className="headline-quiet block sm:inline">
              {t.titleQuiet}
            </span>
          </h2>
        </div>

        {/* Editorial Accordion */}
        <div className="rounded-2xl border border-[#1F2739] bg-[#0A0D14] divide-y divide-[#161D2C] shadow-2xl overflow-hidden">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`transition-colors ${
                  isOpen ? 'bg-[#0E121B]' : 'hover:bg-[#0C0F17]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6A856]"
                >
                  <span
                    className={`font-display text-lg sm:text-xl transition-colors ${
                      isOpen ? 'text-[#ECC67A] font-medium' : 'text-[#F4F2ED]'
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'bg-[#D6A856]/20 border-[#D6A856]/40 text-[#ECC67A]'
                        : 'bg-[#141A26] border-[#222B3D] text-[#7C8395]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-[#9AA2B5] leading-relaxed animate-in fade-in duration-200">
                    <p className="max-w-3xl">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
