import React from 'react';
import { Users, Calendar, Sparkles, CheckCircle2, Clock, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface OperationsDashboardProps {
  locale: Locale;
}

export const OperationsDashboard: React.FC<OperationsDashboardProps> = ({ locale }) => {
  const t = translations[locale].dashboard;

  const contacts = [
    {
      initials: 'SM',
      name: 'Sofia Marín',
      company: 'BrightLabs',
      status: locale === 'es' ? 'Nuevo email' : 'New email',
      statusColor: 'bg-[#384BC7]/10 text-[#384BC7] border-[#384BC7]/20'
    },
    {
      initials: 'JO',
      name: 'James Okafor',
      company: 'Northwind',
      status: locale === 'es' ? 'Esperando respuesta' : 'Awaiting reply',
      statusColor: 'bg-[#D97706]/10 text-[#B45309] border-[#D97706]/20'
    },
    {
      initials: 'MV',
      name: 'Marta Vidal',
      company: 'Atelier 9',
      status: locale === 'es' ? 'Requiere seguimiento' : 'Needs follow-up',
      statusColor: 'bg-[#7C3AED]/10 text-[#6D28D9] border-[#7C3AED]/20'
    },
    {
      initials: 'TK',
      name: 'Tom Keller',
      company: 'Keller & Co',
      status: locale === 'es' ? 'Ganado' : 'Won',
      statusColor: 'bg-[#0B935D]/10 text-[#0B935D] border-[#0B935D]/20'
    },
  ];

  const events = [
    {
      date: 'Dec 12',
      title: 'BrightLabs · Private dinner',
      guests: '24 guests',
      amount: '€1,680',
      status: locale === 'es' ? 'Pendiente' : 'Pending',
      statusColor: 'text-[#B45309] bg-[#D97706]/10 border-[#D97706]/20'
    },
    {
      date: 'Dec 14',
      title: 'Keller & Co · Holiday party',
      guests: '56 guests',
      amount: '€4,480',
      status: locale === 'es' ? 'Abonado' : 'Paid',
      statusColor: 'text-[#0B935D] bg-[#0B935D]/10 border-[#0B935D]/20'
    },
    {
      date: 'Dec 19',
      title: 'Atelier 9 · Tasting menu',
      guests: '12 guests',
      amount: '€960',
      status: locale === 'es' ? 'Abonado' : 'Paid',
      statusColor: 'text-[#0B935D] bg-[#0B935D]/10 border-[#0B935D]/20'
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-[#E4E7EC] bg-[#FAFAFA] dot-grid">
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

        {/* Dashboard 3-Card Operational Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Clients Signals */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white flex flex-col shadow-sm overflow-hidden hover:border-[#CBD5E1] transition-colors">
            <div className="flex items-center justify-between p-4 border-b border-[#F2F4F7] bg-[#F9FAFB]">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#384BC7]/10 text-[#384BC7] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-[#121417]">{t.clientsTitle}</span>
              </div>
              <span className="text-[11px] font-mono text-[#667085]">{t.clientsSubtitle}</span>
            </div>

            <div className="p-4 space-y-2.5 flex-1 bg-white">
              {contacts.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-[#F2F4F7] bg-[#FAFAFA] hover:bg-[#F4F5F7] transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-[#E4E7EC] text-[#344054] font-mono text-[10px] flex items-center justify-center shrink-0">
                      {c.initials}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#121417] truncate">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-[#667085] truncate">
                        {c.company}
                      </div>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${c.statusColor}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Events & Revenue */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white flex flex-col shadow-sm overflow-hidden hover:border-[#CBD5E1] transition-colors">
            <div className="flex items-center justify-between p-4 border-b border-[#F2F4F7] bg-[#F9FAFB]">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#0B935D]/10 text-[#0B935D] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-[#121417]">{t.eventsTitle}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-[#667085] block">CONFIRMED</span>
                <span className="text-xs font-mono font-bold text-[#0B935D]">{t.eventsTotal}</span>
              </div>
            </div>

            <div className="p-4 space-y-2.5 flex-1 bg-white">
              {events.map((e, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl border border-[#F2F4F7] bg-[#FAFAFA] hover:bg-[#F4F5F7] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#384BC7] font-semibold">{e.date}</span>
                    <span className="font-mono font-semibold text-[#121417]">{e.amount}</span>
                  </div>
                  <div className="text-xs text-[#344054] font-medium mt-1 truncate">
                    {e.title}
                  </div>
                  <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-[#F2F4F7] text-[10px] font-mono">
                    <span className="text-[#667085]">{e.guests}</span>
                    <span className={`px-1.5 py-0.2 rounded border ${e.statusColor}`}>
                      {e.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Nightly Refreshed Knowledge Graph */}
          <div className="rounded-2xl border border-[#E4E7EC] bg-white flex flex-col shadow-sm overflow-hidden hover:border-[#CBD5E1] transition-colors">
            <div className="flex items-center justify-between p-4 border-b border-[#F2F4F7] bg-[#F9FAFB]">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#384BC7]/10 text-[#384BC7] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-[#121417]">{t.knowledgeTitle}</span>
              </div>
              <span className="text-[11px] font-mono text-[#667085]">{t.knowledgeSubtitle}</span>
            </div>

            <div className="p-4 flex-1 bg-white flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {['Menus', 'Policies', 'Spaces', 'Pricing'].map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl border border-[#E4E7EC] bg-[#FAFAFA] text-center hover:bg-[#F4F5F7] transition-colors"
                  >
                    <span className="text-[#98A2B3] text-[10px] block uppercase">INDEXED</span>
                    <span className="text-sm font-semibold text-[#121417] mt-0.5 block">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] text-xs font-mono">
                <div className="flex items-center gap-2 text-[#384BC7] font-semibold text-sm mb-1">
                  <span>{t.answersCount}</span>
                  <span className="text-[10px] text-[#0B935D] bg-[#0B935D]/10 px-1.5 py-0.5 rounded font-mono">Active</span>
                </div>
                <p className="text-[11px] text-[#475467] leading-relaxed">
                  {t.answersSuffix}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

