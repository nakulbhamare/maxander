import React from 'react';
import { Quote, MapPin, Wine } from 'lucide-react';
import { Locale, translations } from '../data/translations';
import { GhostCursor } from './ui/GhostCursor';

interface FounderNoteProps {
  locale: Locale;
}

export const FounderNote: React.FC<FounderNoteProps> = ({ locale }) => {
  const t = translations[locale].founder;

  return (
    <section className="py-20 sm:py-28 border-b border-[#161D2B] bg-[#07080B] fine-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#1F2739] bg-[#0A0D14] p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
          {/* Interactive GhostCursor Ethereal Background Trail */}
          <GhostCursor
            color="#D6A856"
            brightness={1.0}
            edgeIntensity={0}
            trailLength={48}
            inertia={0.48}
            grainIntensity={0.05}
            bloomStrength={0.14}
            bloomRadius={1.2}
            bloomThreshold={0.025}
            fadeDelayMs={1000}
            fadeDurationMs={1500}
          />

          <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote & Identity (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D6A856] uppercase tracking-wider">
                <Wine className="w-3.5 h-3.5" />
                <span>{t.tag}</span>
              </div>

              <h3 className="headline text-2xl sm:text-3xl text-[#F4F2ED]">
                {t.title}
              </h3>

              <blockquote className="font-display text-lg text-[#CCD2E2] italic leading-relaxed pt-2 border-l-2 border-[#D6A856]/50 pl-4 my-4">
                {t.quote}
              </blockquote>

              <div className="pt-2">
                <div className="text-sm font-semibold text-[#F4F2ED]">
                  {t.author}
                </div>
                <div className="text-xs font-mono text-[#788094] flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#D6A856]" />
                  <span>{t.role}</span>
                </div>
              </div>
            </div>

            {/* Right Story & Venue Footprint (6 cols) */}
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#949CAF] leading-relaxed border-t lg:border-t-0 lg:border-l border-[#1A2234] pt-6 lg:pt-0 lg:pl-8">
              <p>{t.p1}</p>
              <p>{t.p2}</p>

              <div className="mt-6 p-3.5 rounded-xl bg-[#0F1420] border border-[#1C2538] flex items-center gap-3 text-xs font-mono text-[#ECC67A]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
