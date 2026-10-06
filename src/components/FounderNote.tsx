import React from 'react';
import { Quote, MapPin, Wine, Sparkles } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface FounderNoteProps {
  locale: Locale;
}

export const FounderNote: React.FC<FounderNoteProps> = ({ locale }) => {
  const t = translations[locale].founder;

  return (
    <section className="py-24 sm:py-32 border-b border-[#E4E7EC] bg-white fine-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E4E7EC] bg-[#FAFAFA] p-8 sm:p-12 lg:p-16 shadow-sm relative overflow-hidden">
          <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Quote & Identity (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#384BC7] uppercase tracking-wider font-semibold">
                <Wine className="w-3.5 h-3.5" />
                <span>{t.tag}</span>
              </div>

              <h3 className="headline text-3xl sm:text-4xl text-[#121417]">
                {t.title}
              </h3>

              <blockquote className="font-display text-lg sm:text-xl text-[#344054] italic leading-relaxed pt-2 border-l-2 border-[#384BC7] pl-4 my-4">
                {t.quote}
              </blockquote>

              <div className="pt-2">
                <div className="text-base font-semibold text-[#121417]">
                  {t.author}
                </div>
                <div className="text-xs font-mono text-[#667085] flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#384BC7]" />
                  <span>{t.role}</span>
                </div>
              </div>

              <div className="pt-4 space-y-3 text-xs sm:text-sm text-[#475467] leading-relaxed">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white border border-[#E4E7EC] flex items-center gap-3 text-xs font-mono text-[#121417] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0B935D] animate-pulse shrink-0" />
                <span>{t.location}</span>
              </div>
            </div>

            {/* Right Hospitality Photography & Context (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-md group">
                <img
                  src="/images/hospitality_dining_room.jpg"
                  alt="Fine dining dining room ambiance"
                  className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#98A2B3]">
                    {locale === 'es' ? 'Local Operativo en Madrid' : 'Live Operating Venue in Madrid'}
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    {locale === 'es' ? 'Donde cada segundo de servicio cuenta' : 'Where every second of service counts'}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden border border-[#E4E7EC] shadow-xs h-[140px] group">
                  <img
                    src="/images/hospitality_private_dining.jpg"
                    alt="Private dining room table setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/70 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-mono text-white font-medium">
                    {locale === 'es' ? 'Eventos & Grupos' : 'Private Events & Groups'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E4E7EC] flex flex-col justify-between shadow-xs">
                  <div className="text-[11px] font-mono text-[#667085] uppercase">
                    {locale === 'es' ? 'Enfoque Sala' : 'Floor Focus'}
                  </div>
                  <div className="text-xs font-semibold text-[#121417]">
                    {locale === 'es' ? '70% Tecnología SaaS · 30% Alma Hostelera' : '70% SaaS Precision · 30% Floor Soul'}
                  </div>
                  <div className="text-[10px] font-mono text-[#0B935D]">
                    Zero generic AI answers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
