import React, { useState } from 'react';
import { Locale, translations } from '../data/translations';
import { Mail, Calendar, CreditCard, MessageSquare, Globe, CheckCircle2 } from 'lucide-react';

interface IntegrationStripProps {
  locale: Locale;
}

export const IntegrationStrip: React.FC<IntegrationStripProps> = ({ locale }) => {
  const t = translations[locale].integrationsStrip;
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'gmail',
      name: 'Gmail',
      icon: Mail,
      category: locale === 'es' ? 'Email' : 'Email',
      desc: locale === 'es' ? 'Lee y redacta borradores directamente en buzones de Google Workspace.' : 'Read and draft responses directly in Google Workspace mailboxes.'
    },
    {
      id: 'outlook',
      name: 'Outlook',
      icon: Mail,
      category: locale === 'es' ? 'Email' : 'Email',
      desc: locale === 'es' ? 'Sincronización completa con buzones de Microsoft 365 y Exchange.' : 'Full sync with Microsoft 365 and Exchange mailboxes.'
    },
    {
      id: 'thefork',
      name: 'TheFork',
      icon: Calendar,
      category: locale === 'es' ? 'Reservas' : 'Bookings',
      desc: locale === 'es' ? 'Crea, modifica y confirma reservas en la plataforma de TheFork.' : 'Create, modify and confirm reservations on TheFork platform.'
    },
    {
      id: 'restoo',
      name: 'Restoo',
      icon: Calendar,
      category: locale === 'es' ? 'Reservas' : 'Bookings',
      desc: locale === 'es' ? 'Disponibilidad en vivo y bloqueo de mesas en España, Francia y Portugal.' : 'Live availability and table holds in Spain, France, and Portugal.'
    },
    {
      id: 'stripe',
      name: 'Stripe',
      icon: CreditCard,
      category: locale === 'es' ? 'Cobros' : 'Billing',
      desc: locale === 'es' ? 'Fianzas automáticas, garantías anti no-show y enlaces de pago.' : 'Automated deposits, no-show guarantees, and payment links.'
    },
    {
      id: 'gcal',
      name: 'Google Calendar',
      icon: Calendar,
      category: locale === 'es' ? 'Calendario' : 'Calendar',
      desc: locale === 'es' ? 'Sincronización bidireccional continua con el planning de sala.' : 'Continuous two-way sync with the front-of-house schedule.'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageSquare,
      category: locale === 'es' ? 'Mensajería' : 'Messaging',
      desc: locale === 'es' ? 'Respuestas instantáneas y gestión de audios vía API oficial.' : 'Instant responses and voice note processing via official API.'
    },
    {
      id: 'website',
      name: 'Website Form',
      icon: Globe,
      category: locale === 'es' ? 'Web' : 'Website',
      desc: locale === 'es' ? 'Captura consultas desde cualquier formulario de contacto.' : 'Ingests inquiries from any website contact form instantly.'
    },
  ];

  return (
    <section className="relative border-y border-[#182030] bg-[#0A0C11] py-8 sm:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="label-mono text-center mb-6 tracking-widest text-[#7C8497]">
          {t.title}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isHovered = hoveredTool === tool.id;

            return (
              <div
                key={tool.id}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                className="relative group cursor-pointer"
              >
                <div className="flex items-center gap-2 text-[#7C8395] group-hover:text-[#F4F2ED] transition-all duration-200 py-1">
                  <Icon className="w-4 h-4 text-[#6A7182] group-hover:text-[#D6A856] transition-colors" />
                  <span className="text-xs sm:text-sm font-medium tracking-tight">
                    {tool.name}
                  </span>
                </div>

                {/* Subtle Hover Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 rounded-xl bg-[#121622] border border-[#253046] shadow-xl text-[11px] text-[#A6ADC0] z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#D6A856] mb-1">
                      <span>{tool.category}</span>
                      <span className="text-[#10B981] flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        {locale === 'es' ? 'Conectado' : 'Connected'}
                      </span>
                    </div>
                    <p className="leading-relaxed">{tool.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
