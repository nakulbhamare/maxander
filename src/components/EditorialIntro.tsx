import React, { useState } from 'react';
import { Locale, translations } from '../data/translations';
import { Mail, MessageSquare, Calendar, Globe, Sparkles, Check, ArrowDown } from 'lucide-react';

interface EditorialIntroProps {
  locale: Locale;
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({ locale }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const inquiryCards = [
    {
      channel: 'Gmail',
      icon: Mail,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
      time: '23:14',
      text: locale === 'es' ? '“¿Tenéis disponibilidad para 24 personas el próximo viernes?”' : '“Do you have availability for 24 people next Friday?”',
      sender: 'carlos@santander-events.es',
      extracted: locale === 'es' ? '24 pax · Viernes · Cena corporativa' : '24 pax · Next Friday · Corporate dinner',
      action: locale === 'es' ? 'Borrador generado con dossier corporativo' : 'Draft generated with corporate package',
    },
    {
      channel: 'WhatsApp',
      icon: MessageSquare,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      time: '19:42',
      text: locale === 'es' ? '“Hola, ¿podemos mover la reserva de las 20:00 a las 20:30?”' : '“Can we move our booking to 8:30?”',
      sender: '+34 612 884 910',
      extracted: locale === 'es' ? 'Modificación de hora · Mesa 12 · 4 personas' : 'Time shift · Table 12 · 4 guests',
      action: locale === 'es' ? 'Mesa reasignada automáticamente en Restoo' : 'Table reassigned automatically in Restoo',
    },
    {
      channel: 'TheFork',
      icon: Calendar,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-100',
      time: '01:05',
      text: locale === 'es' ? '“¿Ofrecéis comedor privado para aniversario?”' : '“Do you offer private dining for an anniversary?”',
      sender: 'elena.rodriguez@gmail.com',
      extracted: locale === 'es' ? 'Comedor privado · 16 pax · Menú degustación' : 'Private dining · 16 guests · Tasting menu',
      action: locale === 'es' ? 'Disponibilidad comprobada + PDF adjuntado' : 'Availability verified + PDF attached',
    },
    {
      channel: 'Outlook',
      icon: Mail,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      time: '08:20',
      text: locale === 'es' ? '“¿Podemos organizar una cena de empresa para 56 el 18 de diciembre?”' : '“Can we organize a corporate dinner for 56 on Dec 18?”',
      sender: 'rrhh@inditex-group.com',
      extracted: locale === 'es' ? 'Evento masivo · 56 pax · 18 Dic · Sala Principal' : 'Large event · 56 pax · Dec 18 · Main Hall',
      action: locale === 'es' ? 'Presupuesto preparado citando tarifas de grupo' : 'Quote drafted citing group pricing rules',
    },
    {
      channel: locale === 'es' ? 'Formulario Web' : 'Website Form',
      icon: Globe,
      badgeColor: 'bg-orange-50 text-orange-700 border-orange-100',
      time: '14:35',
      text: locale === 'es' ? '“¿Hay disponibilidad el 12 de diciembre para maridaje de vinos?”' : '“Is there availability for December 12 with wine pairing?”',
      sender: 'marta.vidal@atelier9.com',
      extracted: locale === 'es' ? '12 Dic · 8 pax · Maridaje Sommelier €45/pp' : 'Dec 12 · 8 guests · Sommelier Pairing €45/pp',
      action: locale === 'es' ? 'Mesa bloqueada + Enlace de fianza Stripe' : 'Table held + Stripe deposit link generated',
    },
  ];

  return (
    <section className="relative dot-grid py-24 sm:py-36 border-b border-dashed border-[#e4e7ec] overflow-hidden">
      {/* Top & Bottom Gradient Masks */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="label-mono text-[#384bc7] mb-3">
            {locale === 'es' ? '[ EL PROBLEMA REAL ]' : '[ THE HOSPITALITY REALITY ]'}
          </p>
          <h2 className="headline text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.14] text-[#121417]">
            {locale === 'es' ? (
              <>
                La hostelería funciona con{' '}
                <span className="italic font-normal text-[#626874]">mil pequeños mensajes.</span>
              </>
            ) : (
              <>
                Hospitality runs on{' '}
                <span className="italic font-normal text-[#626874]">a thousand small messages.</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base text-[#626874] max-w-2xl mx-auto leading-relaxed">
            {locale === 'es'
              ? 'Cada canal disperso representa ingresos potenciales o fricción para el equipo de sala. Maxander los unifica al instante.'
              : 'Inquiries arrive at all hours across five different channels. Every unanswered thread is lost revenue.'}
          </p>
        </div>

        {/* Floating Real-World Inquiry Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inquiryCards.slice(0, 3).map((card, idx) => {
            const Icon = card.icon;
            const isHovered = activeCardIndex === idx;

            return (
              <div
                key={card.channel}
                onMouseEnter={() => setActiveCardIndex(idx)}
                onMouseLeave={() => setActiveCardIndex(null)}
                className={`relative rounded-2xl border bg-white p-5 transition-all duration-300 shadow-[0_1px_3px_rgba(16,24,40,0.05)] cursor-default ${
                  isHovered
                    ? 'border-[#384bc7] shadow-[0_12px_32px_-12px_rgba(56,75,199,0.18)] -translate-y-1'
                    : 'border-[#e4e7ec] hover:border-[#d0d5dd]'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#e4e7ec]">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border ${card.badgeColor}`}>
                      <Icon className="w-3 h-3" />
                      {card.channel}
                    </span>
                    <span className="text-[11px] font-mono text-[#626874]">{card.time}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#626874]">{card.sender}</span>
                </div>

                <p className="mt-3.5 text-[13px] font-medium leading-relaxed text-[#121417]">
                  {card.text}
                </p>

                <div className="mt-4 pt-3 border-t border-dashed border-[#e4e7ec] space-y-1.5 text-[11px] font-mono">
                  <div className="text-[#626874]">
                    <span className="text-[#98a2b3]">Extracted: </span>
                    <strong className="text-[#121417] font-semibold">{card.extracted}</strong>
                  </div>
                  <div className="text-[#0b935d] flex items-center gap-1 font-medium">
                    <Check className="w-3 h-3 text-[#0b935d] shrink-0" />
                    <span className="truncate">{card.action}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row of 2 Wider Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {inquiryCards.slice(3, 5).map((card, idx) => {
            const Icon = card.icon;
            const actualIdx = idx + 3;
            const isHovered = activeCardIndex === actualIdx;

            return (
              <div
                key={card.channel}
                onMouseEnter={() => setActiveCardIndex(actualIdx)}
                onMouseLeave={() => setActiveCardIndex(null)}
                className={`relative rounded-2xl border bg-white p-5 transition-all duration-300 shadow-[0_1px_3px_rgba(16,24,40,0.05)] cursor-default ${
                  isHovered
                    ? 'border-[#384bc7] shadow-[0_12px_32px_-12px_rgba(56,75,199,0.18)] -translate-y-1'
                    : 'border-[#e4e7ec] hover:border-[#d0d5dd]'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#e4e7ec]">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border ${card.badgeColor}`}>
                      <Icon className="w-3 h-3" />
                      {card.channel}
                    </span>
                    <span className="text-[11px] font-mono text-[#626874]">{card.time}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#626874]">{card.sender}</span>
                </div>

                <p className="mt-3.5 text-[13px] font-medium leading-relaxed text-[#121417]">
                  {card.text}
                </p>

                <div className="mt-4 pt-3 border-t border-dashed border-[#e4e7ec] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] font-mono">
                  <div className="text-[#626874]">
                    <span className="text-[#98a2b3]">Extracted: </span>
                    <strong className="text-[#121417] font-semibold">{card.extracted}</strong>
                  </div>
                  <div className="text-[#0b935d] flex items-center gap-1 font-medium">
                    <Check className="w-3 h-3 text-[#0b935d] shrink-0" />
                    <span>{card.action}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Statement: Maxander catches every one */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#f4f5f7] border border-[#e4e7ec] text-[#384bc7] mb-5">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          <p className="headline text-2xl sm:text-3xl md:text-[2.25rem] leading-snug text-[#121417]">
            {locale === 'es' ? (
              <>
                <strong className="font-semibold text-[#121417]">Maxander atrapa cada uno,</strong> responde con tu propia voz y los convierte en reservas confirmadas{' '}
                <span className="headline-quiet block mt-1">
                  — para que tu equipo atienda la sala, no la bandeja de entrada.
                </span>
              </>
            ) : (
              <>
                <strong className="font-semibold text-[#121417]">Maxander catches every one,</strong> answers in your voice, and turns them into bookings{' '}
                <span className="headline-quiet block mt-1">
                  — so your team can run the room, not the inbox.
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

