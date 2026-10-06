import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
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
    <section id="faq" className="py-24 sm:py-32 border-b border-[#E4E7EC] bg-[#FAFAFA] dot-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#E4E7EC] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#384BC7] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#667085]">{t.subtitle}</span>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#121417]">
            {t.title}{' '}
            <span className="headline-quiet block sm:inline">
              {t.titleQuiet}
            </span>
          </h2>
        </div>

        {/* Editorial Accordion */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white divide-y divide-[#F2F4F7] shadow-sm overflow-hidden">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`transition-colors ${
                  isOpen ? 'bg-[#F9FAFB]' : 'hover:bg-[#FAFAFA]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left py-5 px-6 sm:px-8 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#384BC7]"
                >
                  <span
                    className={`font-display text-lg sm:text-xl transition-colors ${
                      isOpen ? 'text-[#384BC7] font-medium' : 'text-[#121417]'
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'bg-[#384BC7]/10 border-[#384BC7]/30 text-[#384BC7]'
                        : 'bg-[#F2F4F7] border-[#E4E7EC] text-[#667085]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-[#475467] leading-relaxed animate-in fade-in duration-200">
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
