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
    <section ref={sectionRef} className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#07080B] dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#F4F2ED]">
            {t.title}{' '}
            <span className="headline-quiet block sm:inline">
              {t.titleQuiet}
            </span>
          </h2>
          <p className="mt-4 text-base text-[#989FB2] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Massive Stat Blocks with BorderGlow + SpotlightCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.metrics.map((metric, idx) => (
            <BorderGlow
              key={idx}
              edgeSensitivity={35}
              glowColor="40 80 80"
              backgroundColor="#090C12"
              borderRadius={20}
              glowRadius={50}
              glowIntensity={1.0}
              coneSpread={25}
              animated={false}
              colors={['#D6A856', '#ECC67A', '#F59E0B']}
              className="h-full shadow-2xl transition-transform hover:-translate-y-1 duration-300"
            >
              <SpotlightCard
                className="h-full rounded-[19px]"
                spotlightColor="rgba(214, 168, 86, 0.16)"
              >
                <div className="p-8 sm:p-9 flex flex-col justify-between h-full">
                  <div>
                    <div className="font-display text-5xl sm:text-6xl text-[#F4F2ED] font-medium tracking-tight flex items-baseline">
                      <span>{hasAnimated ? metric.value : 0}</span>
                      <span className="text-[#D6A856] text-3xl sm:text-4xl ml-1 font-sans font-normal">
                        {metric.suffix}
                      </span>
                    </div>

                    <div className="w-8 h-0.5 bg-[#D6A856]/40 my-5" />

                    <p className="text-xs sm:text-sm text-[#8E95A8] leading-relaxed">
                      {metric.label}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#141A26] text-[10px] font-mono text-[#586072] uppercase tracking-wider flex items-center justify-between">
                    <span>{locale === 'es' ? 'Validado en local real' : 'Live venue telemetry'}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                </div>
              </SpotlightCard>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};
