import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface PricingSectionProps {
  locale: Locale;
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ locale, onOpenDemo }) => {
  const t = translations[locale].pricing;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 sm:py-32 border-b border-[#E4E7EC] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#E4E7EC] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#384BC7] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#667085]">{t.subtitle}</span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#121417]">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#475467] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center gap-3 mb-16">
          <div className="flex items-center rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] p-1 font-mono text-xs shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#121417] font-semibold shadow-xs border border-[#E4E7EC]'
                  : 'text-[#667085] hover:text-[#121417]'
              }`}
            >
              {t.billingMonthly}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#121417] font-semibold shadow-xs border border-[#E4E7EC]'
                  : 'text-[#667085] hover:text-[#121417]'
              }`}
            >
              <span>{t.billingAnnual}</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#384BC7]/10 text-[#384BC7]">
                {t.saveBadge}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {t.plans.map((plan) => {
            const isGrowth = plan.id === 'growth';
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`h-full rounded-2xl flex flex-col justify-between p-6 sm:p-8 relative transition-all duration-200 ${
                  isGrowth
                    ? 'bg-white border-2 border-[#384BC7] shadow-xl ring-4 ring-[#384BC7]/5'
                    : 'bg-[#FAFAFA] border border-[#E4E7EC] hover:border-[#CBD5E1] shadow-sm'
                }`}
              >
                {/* Most Popular Badge for Growth Plan */}
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#384BC7] text-white shadow-md uppercase tracking-wider z-20">
                    {t.mostPopular}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-semibold text-[#121417]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#475467] mt-2 min-h-[34px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-[#E4E7EC] flex items-baseline gap-1.5">
                    {plan.isCustom ? (
                      <span className="font-display text-4xl sm:text-5xl font-medium text-[#121417]">
                        {locale === 'es' ? 'A medida' : 'Custom'}
                      </span>
                    ) : (
                      <>
                        <span className="font-display text-2xl text-[#667085] font-normal">€</span>
                        <span className="font-display text-4xl sm:text-5xl font-medium text-[#121417] tracking-tight">
                          {price}
                        </span>
                        <span className="text-xs font-mono text-[#667085]">
                          {t.perMonth}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3 text-xs text-[#344054]">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#384BC7] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isGrowth
                        ? 'bg-[#384BC7] text-white hover:bg-[#2F3FA6] shadow-md'
                        : 'bg-white text-[#121417] border border-[#D0D5DD] hover:bg-[#F9FAFB] hover:border-[#98A2B3]'
                    }`}
                  >
                    <span>{plan.isCustom ? t.contactUs : t.startTrial}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Trust Footer */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-mono text-[#667085] text-center">
          <ShieldCheck className="w-4 h-4 text-[#0B935D]" />
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
