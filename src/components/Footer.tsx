import React from 'react';
import { Locale, translations } from '../data/translations';

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = translations[locale].footer;

  return (
    <footer className="bg-[#121417] text-[#98A2B3] border-t border-[#22262F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#22262F]">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                <span className="font-display text-lg font-medium text-white">M</span>
              </div>
              <span className="font-display text-xl font-medium tracking-[0.14em] uppercase text-white">
                Maxander
              </span>
            </div>

            <p className="font-display text-base text-[#E4E7EC] italic">
              {t.tagline}
            </p>

            <p className="text-xs text-[#98A2B3] max-w-sm leading-relaxed">
              {t.description}
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#667085]">
              {t.origin}
            </div>
          </div>

          {/* Navigation Columns (7 cols -> 3 cols each) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {t.columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#98A2B3] hover:text-white transition-colors"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#667085]">
          <span>{t.copyright}</span>
          <span className="text-[#98A2B3]">{t.audience}</span>
        </div>
      </div>
    </footer>
  );
};
