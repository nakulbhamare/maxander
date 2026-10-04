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
      statusColor: 'bg-[#3B82F6]/15 text-[#60A5FA] border-[#3B82F6]/30'
    },
    {
      initials: 'JO',
      name: 'James Okafor',
      company: 'Northwind',
      status: locale === 'es' ? 'Esperando respuesta' : 'Awaiting reply',
      statusColor: 'bg-[#F59E0B]/15 text-[#FBBF24] border-[#F59E0B]/30'
    },
    {
      initials: 'MV',
      name: 'Marta Vidal',
      company: 'Atelier 9',
      status: locale === 'es' ? 'Requiere seguimiento' : 'Needs follow-up',
      statusColor: 'bg-[#8B5CF6]/15 text-[#A78BFA] border-[#8B5CF6]/30'
    },
    {
      initials: 'TK',
      name: 'Tom Keller',
      company: 'Keller & Co',
      status: locale === 'es' ? 'Ganado' : 'Won',
      statusColor: 'bg-[#10B981]/15 text-[#34D399] border-[#10B981]/30'
    },
  ];

  const events = [
    {
      date: 'Dec 12',
      title: 'BrightLabs · Private dinner',
      guests: '24 guests',
      amount: '€1,680',
      status: locale === 'es' ? 'Pendiente' : 'Pending',
      statusColor: 'text-[#FBBF24] bg-[#F59E0B]/10 border-[#F59E0B]/20'
    },
    {
      date: 'Dec 14',
      title: 'Keller & Co · Holiday party',
      guests: '56 guests',
      amount: '€4,480',
      status: locale === 'es' ? 'Abonado' : 'Paid',
      statusColor: 'text-[#34D399] bg-[#10B981]/10 border-[#10B981]/20'
    },
    {
      date: 'Dec 19',
      title: 'Atelier 9 · Tasting menu',
      guests: '12 guests',
      amount: '€960',
      status: locale === 'es' ? 'Abonado' : 'Paid',
      statusColor: 'text-[#34D399] bg-[#10B981]/10 border-[#10B981]/20'
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#08090D] dot-grid">
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

        {/* Dashboard 3-Card Operational Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Clients Signals */}
          <div className="rounded-2xl border border-[#1F2739] bg-[#0A0D14] flex flex-col shadow-lg overflow-hidden hover:border-[#2C3852] transition-colors">
            <div className="flex items-center justify-between p-4 border-b border-[#182030] bg-[#0D1017]">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-[#F4F2ED]">{t.clientsTitle}</span>
              </div>
              <span className="text-[11px] font-mono text-[#7A8398]">{t.clientsSubtitle}</span>
            </div>

            <div className="p-4 space-y-2.5 flex-1 bg-[#090C12]">
              {contacts.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-[#1A2234] bg-[#0D111A] hover:bg-[#111722] transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-[#182030] text-[#A0A7BA] font-mono text-[10px] flex items-center justify-center shrink-0">
                      {c.initials}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#F4F2ED] truncate">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-[#788094] truncate">
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
          <div className="rounded-2xl border border-[#1F2739] bg-[#0A0D14] flex flex-col shadow-lg overflow-hidden hover:border-[#2C3852] transition-colors">
            <div className="flex items-center justify-between p-4 border-b border-[#182030] bg-[#0D1017]">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#10B981]/15 text-[#34D399] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-[#F4F2ED]">{t.eventsTitle}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-[#7A8398] block">CONFIRMED</span>
                <span className="text-xs font-mono font-bold text-[#10B981]">{t.eventsTotal}</span>
              </div>
            </div>

            <div className="p-4 space-y-2.5 flex-1 bg-[#090C12]">
              {events.map((e, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl border border-[#1A2234] bg-[#0D111A] hover:bg-[#111722] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#ECC67A] font-semibold">{e.date}</span>
                    <span className="font-mono font-semibold text-[#F4F2ED]">{e.amount}</span>
                  </div>
                  <div className="text-xs text-[#CCD1E0] font-medium mt-1 truncate">
                    {e.title}
                  </div>
                  <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-[#171E2D] text-[10px] font-mono">
                    <span className="text-[#788094]">{e.guests}</span>
                    <span className={`px-1.5 py-0.2 rounded border ${e.statusColor}`}>
                      {e.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Nightly Refreshed Knowledge Graph */}
          <div className="rounded-2xl border border-[#1F2739] bg-[#0A0D14] flex flex-col shadow-lg overflow-hidden hover:border-[#2C3852] transition-colors">
            <div className="flex items-center justify-between p-4 border-b border-[#182030] bg-[#0D1017]">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#D6A856]/15 text-[#ECC67A] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-[#F4F2ED]">{t.knowledgeTitle}</span>
              </div>
              <span className="text-[11px] font-mono text-[#7A8398]">{t.knowledgeSubtitle}</span>
            </div>

            <div className="p-4 flex-1 bg-[#090C12] flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {['Menus', 'Policies', 'Spaces', 'Pricing'].map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl border border-[#1A2234] bg-[#0D111A] text-center"
                  >
                    <span className="text-[#555C6E] text-[10px] block uppercase">INDEXED</span>
                    <span className="text-sm font-semibold text-[#F4F2ED] mt-0.5 block">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl border border-[#232E44] bg-[#0D121D] text-xs font-mono">
                <div className="flex items-center gap-2 text-[#D6A856] font-semibold text-sm mb-1">
                  <span>{t.answersCount}</span>
                  <span className="text-[10px] text-[#10B981] bg-[#10B981]/15 px-1.5 py-0.5 rounded">Active</span>
                </div>
                <p className="text-[11px] text-[#868F9F] leading-relaxed">
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
