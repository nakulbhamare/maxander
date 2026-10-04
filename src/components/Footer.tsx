import React from 'react';
import { Locale, translations } from '../data/translations';

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = translations[locale].footer;

  return (
    <footer className="bg-[#050608] text-[#A0A5B5] border-t border-[#141A26] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#141A26]">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#111622] border border-[#222A3E] flex items-center justify-center">
                <span className="font-display text-lg font-medium text-[#F4F2ED]">M</span>
              </div>
              <span className="font-display text-xl font-medium tracking-[0.14em] uppercase text-[#F4F2ED]">
                Maxander
              </span>
            </div>

            <p className="font-display text-base text-[#D4D8E2] italic">
              {t.tagline}
            </p>

            <p className="text-xs text-[#7A8398] max-w-sm leading-relaxed">
              {t.description}
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#5D6578]">
              {t.origin}
            </div>
          </div>

          {/* Navigation Columns (7 cols -> 3 cols each) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {t.columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F4F2ED] mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#848C9E] hover:text-[#F4F2ED] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#586072]">
          <span>{t.copyright}</span>
          <span className="text-[#8890A2]">{t.audience}</span>
        </div>
      </div>
    </footer>
  );
};
