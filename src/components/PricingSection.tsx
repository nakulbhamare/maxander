import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Locale, translations } from '../data/translations';
import { BorderGlow } from './ui/BorderGlow';
import { SpotlightCard } from './ui/SpotlightCard';

interface PricingSectionProps {
  locale: Locale;
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ locale, onOpenDemo }) => {
  const t = translations[locale].pricing;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#F4F2ED]">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#989FB2] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center gap-3 mb-16">
          <div className="flex items-center rounded-xl border border-[#202738] bg-[#0A0D15] p-1 font-mono text-xs shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#182133] text-[#F4F2ED] font-semibold shadow-xs border border-[#29354F]'
                  : 'text-[#7C8395] hover:text-[#D5DAE5]'
              }`}
            >
              {t.billingMonthly}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[#182133] text-[#F4F2ED] font-semibold shadow-xs border border-[#29354F]'
                  : 'text-[#7C8395] hover:text-[#D5DAE5]'
              }`}
            >
              <span>{t.billingAnnual}</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#D6A856]/20 text-[#ECC67A] border border-[#D6A856]/30">
                {t.saveBadge}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid with BorderGlow + SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {t.plans.map((plan) => {
            const isGrowth = plan.id === 'growth';
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <BorderGlow
                key={plan.id}
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor={isGrowth ? '#0E131E' : '#090C12'}
                borderRadius={24}
                glowRadius={45}
                glowIntensity={isGrowth ? 1.2 : 0.85}
                coneSpread={25}
                animated={false}
                colors={isGrowth ? ['#D6A856', '#ECC67A', '#F59E0B'] : ['#c084fc', '#f472b6', '#38bdf8']}
                className={`h-full relative transition-all duration-300 ${
                  isGrowth
                    ? 'shadow-[0_0_35px_rgba(214,168,86,0.18)]'
                    : 'hover:-translate-y-1'
                }`}
              >
                <SpotlightCard
                  className="h-full rounded-[23px] flex flex-col justify-between p-6 sm:p-8"
                  spotlightColor={isGrowth ? 'rgba(214, 168, 86, 0.18)' : 'rgba(56, 189, 248, 0.12)'}
                >
                  {/* Most Popular Badge for Growth Plan */}
                  {isGrowth && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#D6A856] text-[#07080B] shadow-md uppercase tracking-wider z-20">
                      {t.mostPopular}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-display font-semibold text-[#F4F2ED]">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#8C94A7] mt-2 min-h-[34px] leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 pb-6 border-b border-[#182030] flex items-baseline gap-1.5">
                      {plan.isCustom ? (
                        <span className="font-display text-4xl sm:text-5xl font-medium text-[#F4F2ED]">
                          {locale === 'es' ? 'A medida' : 'Custom'}
                        </span>
                      ) : (
                        <>
                          <span className="font-display text-2xl text-[#8E95A8] font-normal">€</span>
                          <span className="font-display text-4xl sm:text-5xl font-medium text-[#F4F2ED] tracking-tight">
                            {price}
                          </span>
                          <span className="text-xs font-mono text-[#767E90]">
                            {t.perMonth}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Feature Checklist */}
                    <ul className="mt-6 space-y-3 text-xs text-[#CCD1E0]">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#D6A856] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card CTA */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={onOpenDemo}
                      className={`w-full py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                        isGrowth
                          ? 'bg-[#D6A856] text-[#07080B] hover:bg-[#ECC67A] shadow-[0_0_20px_rgba(214,168,86,0.25)] cursor-pointer'
                          : 'bg-[#151C2B] text-[#F4F2ED] border border-[#26324A] hover:bg-[#1D263A] hover:border-[#384768] cursor-pointer'
                      }`}
                    >
                      <span>{plan.isCustom ? t.contactUs : t.startTrial}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </SpotlightCard>
              </BorderGlow>
            );
          })}
        </div>

        {/* Pricing Trust Footer */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-mono text-[#6A7387] text-center">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span>
            {locale === 'es'
              ? 'Prueba gratuita de 14 días · Cancela cuando quieras · Solo borradores por defecto'
              : '14-day free trial · Cancel anytime · Drafts-only by default'}
          </span>
        </div>
      </div>
    </section>
  );
};
