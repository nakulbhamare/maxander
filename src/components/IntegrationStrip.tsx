import React, { useState } from 'react';
import { Locale, translations } from '../data/translations';
import { Mail, Calendar, CreditCard, MessageSquare, Globe, CheckCircle2 } from 'lucide-react';
import { LogoLoop } from './ui/LogoLoop';

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
      category: 'Email',
      desc: locale === 'es' ? 'Lee y redacta borradores directamente en buzones de Google Workspace.' : 'Read and draft responses directly in Google Workspace mailboxes.'
    },
    {
      id: 'outlook',
      name: 'Outlook',
      icon: Mail,
      category: 'Email',
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
    <section className="relative border-y border-dashed border-[#e4e7ec] bg-[#fcfdfe] py-8 sm:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="label-mono text-center mb-6 tracking-widest text-[#626874]">
          {locale === 'es' ? 'SE CONECTA A LAS HERRAMIENTAS QUE YA USAS' : 'PLUGS INTO THE TOOLS YOU ALREADY RUN ON'}
        </p>

        <div className="relative py-2">
          <LogoLoop
            logos={tools}
            speed={80}
            direction="left"
            logoHeight={44}
            gap={36}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#fcfdfe"
            ariaLabel="Integrations"
            renderItem={(tool) => {
              const Icon = tool.icon;
              const isHovered = hoveredTool === tool.id;

              return (
                <div
                  onMouseEnter={() => setHoveredTool(tool.id ? String(tool.id) : null)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className="relative group cursor-pointer px-4 py-2.5 rounded-xl bg-white border border-[#e4e7ec] hover:border-[#384bc7]/40 hover:bg-[#f8f9fb] transition-all shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                >
                  <div className="flex items-center gap-2.5 text-[#626874] group-hover:text-[#121417] transition-all duration-200">
                    <Icon className="w-4 h-4 text-[#626874] group-hover:text-[#384bc7] transition-colors shrink-0" />
                    <span className="text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>

                  {/* Subtle Hover Tooltip */}
                  {isHovered && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-60 p-3 rounded-xl bg-white border border-[#e4e7ec] shadow-[0_12px_32px_-12px_rgba(16,24,40,0.2)] text-[11px] text-[#626874] z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#121417] mb-1 font-semibold">
                        <span>{tool.category}</span>
                        <span className="text-[#0b935d] flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#0b935d]" />
                          {locale === 'es' ? 'Conectado' : 'Connected'}
                        </span>
                      </div>
                      <p className="leading-relaxed text-left text-[#626874]">{tool.desc}</p>
                    </div>
                  )}
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

