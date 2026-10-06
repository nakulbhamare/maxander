import React, { useEffect, useState, useRef } from 'react';
import { Locale, translations } from '../data/translations';
import { BorderGlow } from './ui/BorderGlow';
import { SpotlightCard } from './ui/SpotlightCard';

interface RealOutcomesSectionProps {
  locale: Locale;
}

export const RealOutcomesSection: React.FC<RealOutcomesSectionProps> = ({ locale }) => {
  const t = translations[locale].outcomes;
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 border-b border-[#E4E7EC] bg-white dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#E4E7EC] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#384BC7] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#667085]">{t.subtitle}</span>
        </div>

        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#121417]">
            {t.title}{' '}
            <span className="headline-quiet block sm:inline">
              {t.titleQuiet}
            </span>
          </h2>
          <p className="mt-4 text-base text-[#475467] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Massive Stat Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E4E7EC] bg-[#FAFAFA] p-8 sm:p-9 flex flex-col justify-between h-full shadow-sm hover:border-[#384BC7]/50 hover:shadow-md transition-all group"
            >
              <div>
                <div className="font-display text-5xl sm:text-6xl text-[#121417] font-medium tracking-tight flex items-baseline">
                  <span>{hasAnimated ? metric.value : 0}</span>
                  <span className="text-[#384BC7] text-3xl sm:text-4xl ml-1 font-sans font-normal">
                    {metric.suffix}
                  </span>
                </div>

                <div className="w-8 h-0.5 bg-[#384BC7] my-5 group-hover:w-12 transition-all" />

                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {metric.label}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E4E7EC] text-[10px] font-mono text-[#667085] uppercase tracking-wider flex items-center justify-between">
                <span>{locale === 'es' ? 'Validado en local real' : 'Live venue telemetry'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B935D] animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
