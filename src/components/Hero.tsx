import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Locale, translations } from '../data/translations';
import { HeroProductVisual } from './HeroProductVisual';

interface HeroProps {
  locale: Locale;
  onOpenDemo: () => void;
  onOpenKnowledgeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ locale, onOpenDemo, onOpenKnowledgeModal }) => {
  const t = translations[locale].hero;

  const channels = [
    {
      name: 'Gmail',
      icon: (
        <svg viewBox="0 0 24 24" role="img" aria-label="Gmail" fill="#EA4335" className="h-3.5 w-3.5">
          <title>Gmail</title>
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      name: 'Outlook',
      icon: (
        <svg viewBox="0 0 24 24" role="img" aria-label="Microsoft Outlook" className="h-3.5 w-3.5">
          <title>Microsoft Outlook</title>
          <rect x="9.5" y="4.5" width="13" height="15" rx="1.5" fill="#0078D4" />
          <rect x="11.25" y="6.5" width="9.5" height="3" fill="#fff" opacity="0.95" />
          <rect x="11.25" y="10.5" width="9.5" height="3" fill="#fff" opacity="0.8" />
          <rect x="11.25" y="14.5" width="9.5" height="3" fill="#fff" opacity="0.65" />
          <path d="M1.5 5.25 11 3.75v16.5L1.5 18.75z" fill="#0364B8" />
          <text x="6.25" y="14" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#fff">O</text>
        </svg>
      ),
    },
    {
      name: 'TheFork',
      icon: (
        <svg viewBox="0 0 24 24" role="img" aria-label="TheFork" className="h-3.5 w-3.5">
          <title>TheFork</title>
          <rect width="24" height="24" rx="5" fill="#00A19A" />
          <path d="M9.4 5.5c0 0-.6 2.6-.6 3.7 0 1 .5 1.7 1.3 2v6.2c0 .9.4 1.6 1.4 1.6h.2c1 0 1.4-.7 1.4-1.6v-6.2c.8-.3 1.3-1 1.3-2 0-1.1-.6-3.7-.6-3.7" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M10.9 5.5v3.5M13.1 5.5v3.5M12 5.5v3.5" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Restoo',
      icon: (
        <svg viewBox="0 0 24 24" role="img" aria-label="Restoo" className="h-3.5 w-3.5">
          <title>Restoo</title>
          <rect width="24" height="24" rx="5" fill="#F25C54" />
          <path d="M7.5 18V6.5h5.3c2.3 0 4 1.4 4 3.5 0 1.6-.9 2.7-2.4 3.2l3 4.8h-2.6l-2.7-4.4H9.8V18zm2.3-6.4h2.9c1.2 0 2-.6 2-1.6 0-1-.8-1.6-2-1.6H9.8z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" role="img" aria-label="WhatsApp" className="h-3.5 w-3.5">
          <title>WhatsApp</title>
          <circle cx="12" cy="12" r="11" fill="#25D366" />
          <path d="M16.7 14.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.2-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z" fill="#fff" />
        </svg>
      ),
    },
    {
      name: locale === 'es' ? 'Formulario web' : 'Website form',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-[#626874]">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24 lg:pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-500">
          <a
            href="#product"
            className="group inline-flex items-center gap-2 rounded-full border border-[#e4e7ec] bg-white px-3.5 py-1.5 text-[13px] text-[#626874] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-colors hover:text-[#121417]"
          >
            <span>{locale === 'es' ? 'Orqueste cada consulta con Automatizaciones' : 'Orchestrate every inquiry with Automations'}</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#626874] transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="headline mx-auto mt-7 text-balance text-[2.75rem] leading-[1.04] sm:text-6xl md:text-[4.5rem] tracking-tight">
          {locale === 'es' ? (
            <>
              El embudo de reservas
              <br className="hidden sm:block" /> que se gestiona solo.
            </>
          ) : (
            <>
              The booking funnel
              <br className="hidden sm:block" /> that runs itself.
            </>
          )}
        </h1>

        {/* Supporting Copy */}
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-[#626874] sm:text-lg">
          {locale === 'es'
            ? 'Maxander centraliza cada consulta — Gmail, Outlook, TheFork, tu web — en un solo lugar. La IA redacta la respuesta, adjunta el menú adecuado, reserva la mesa y hace el seguimiento automático.'
            : 'Maxander handles inquiries, replies to guests, creates bookings and follows up automatically — so your team can focus on running the room.'}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-medium transition-all bg-[#121417] text-white shadow-sm hover:bg-[#121417]/90 h-12 px-7 text-base active:scale-98 cursor-pointer"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-medium transition-colors border border-[#e4e7ec] bg-white text-[#121417] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-[#f4f5f7] h-12 px-7 text-base"
          >
            {t.ctaSecondary}
          </a>
        </div>

        {/* Trust footnote */}
        <p className="mt-5 text-xs text-[#626874]">
          {locale === 'es' 
            ? 'Modo solo lectura hasta que decidas activarlo · Cada respuesta cita su fuente' 
            : 'Read-only until you flip the switch · Every reply cites its source'}
        </p>
      </div>

      {/* Omnichannel Ingestion Grid + Animated Beams into Maxander */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-18">
        <div className="relative">
          {/* Channel Badges */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-2">
            {channels.map((channel) => (
              <div key={channel.name} className="flex justify-center">
                <div className="flex items-center justify-center gap-1.5 rounded-full border border-[#e4e7ec] bg-white px-2.5 py-1.5 text-xs font-medium text-[#121417] shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:px-3 sm:text-[13px] hover:border-[#384bc7]/40 transition-colors">
                  {channel.icon}
                  <span className="whitespace-nowrap">{channel.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Connecting SVG Beams */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 240"
            preserveAspectRatio="none"
            className="hidden h-36 w-full sm:block md:h-44 my-1"
          >
            <title>Every channel funnels into Maxander</title>
            {[100, 300, 500, 700, 900, 1100].map((startX, idx) => (
              <g key={startX}>
                <path
                  d={`M ${startX} 0 C ${startX} 120, 600 110, 600 238`}
                  fill="none"
                  stroke="hsl(220 13% 91%)"
                  strokeWidth="1.25"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={`M ${startX} 0 C ${startX} 120, 600 110, 600 238`}
                  fill="none"
                  stroke="hsl(232 56% 50%)"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  pathLength="200"
                  strokeDasharray="14 186"
                  className="animate-beam-flow"
                  style={{ animationDelay: `${idx * 0.55}s` }}
                />
              </g>
            ))}
          </svg>

          {/* Central Maxander Intelligence Engine */}
          <div className="relative flex justify-center mt-3 sm:mt-0">
            <div className="relative flex items-center gap-3 rounded-2xl border border-[#e4e7ec] bg-white px-5 py-3.5 shadow-[0_8px_24px_-12px_rgba(16,24,40,0.18)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#121417] pb-0.5 font-display text-lg font-medium text-white">
                M
              </span>
              <div className="min-w-[150px]">
                <div className="text-sm font-semibold leading-tight text-[#121417]">Maxander AI</div>
                <div className="h-4 overflow-hidden text-xs text-[#626874]">
                  <span className="block animate-pulse">
                    {locale === 'es' ? 'Analizando intención y disponibilidad…' : 'Classifying intent & availability…'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sophisticated 3D / Layered Product Visual Simulation */}
        <HeroProductVisual
          locale={locale}
          onOpenKnowledgeModal={onOpenKnowledgeModal}
        />
      </div>
    </section>
  );
};

