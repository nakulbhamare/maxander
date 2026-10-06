import React, { useState } from 'react';
import { Mail, Calendar, MessageSquare, Sparkles, Check, ArrowRight, FileText, CalendarCheck } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface OneFunnelSectionProps {
  locale: Locale;
  onOpenDemo: () => void;
}

export const OneFunnelSection: React.FC<OneFunnelSectionProps> = ({ locale, onOpenDemo }) => {
  const t = translations[locale].oneFunnel;
  const [selectedChannel, setSelectedChannel] = useState<'gmail' | 'whatsapp' | 'thefork'>('gmail');

  const channelData = {
    gmail: {
      source: 'Gmail',
      icon: Mail,
      color: '#EA4335',
      message: locale === 'es' ? '«¿Tienen mesa privada para 24 personas el 12 de diciembre?»' : '“Do you have private dining availability for 24 people on Dec 12?”',
      extracted: {
        intent: locale === 'es' ? 'Cena privada' : 'Private dining',
        party: '24 pax',
        date: 'Dec 12 · 20:30'
      }
    },
    whatsapp: {
      source: 'WhatsApp',
      icon: MessageSquare,
      color: '#25D366',
      message: locale === 'es' ? '«Hola! Somos 6 para comer este sábado, ¿tenéis terraza?»' : '“Hi! 6 of us for lunch this Saturday, is terrace available?”',
      extracted: {
        intent: locale === 'es' ? 'Reserva terraza' : 'Terrace booking',
        party: '6 pax',
        date: 'This Sat · 14:00'
      }
    },
    thefork: {
      source: 'TheFork API',
      icon: Calendar,
      color: '#00857A',
      message: locale === 'es' ? '«Consulta de evento corporativo con maridaje y menú cerrado»' : '“Corporate group inquiry with pairing and set tasting menu”',
      extracted: {
        intent: locale === 'es' ? 'Evento corporativo' : 'Corporate event',
        party: '18 pax',
        date: 'Dec 18 · 21:00'
      }
    }
  };

  const activeData = channelData[selectedChannel];

  return (
    <section id="product" className="py-20 sm:py-28 border-b border-dashed border-[#e4e7ec] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#e4e7ec] pb-3 mb-12">
          <span className="label-mono">
            <span className="text-[#626874]/50">[01]</span> One funnel
          </span>
          <span className="label-mono hidden sm:block text-[#626874]">/ Every channel</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#121417]">
              {t.title}{' '}
              <span className="headline-quiet block sm:inline">
                {t.titleQuiet}
              </span>
            </h2>

            <p className="text-base text-[#626874] leading-relaxed">
              {t.description}
            </p>

            {/* Checklist */}
            <ul className="space-y-3 pt-2 text-sm text-[#121417]">
              {t.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#ddf9e4]">
                    <Check className="h-3 w-3 text-[#0b935d]" />
                  </span>
                  <span className="text-[#626874]">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#121417] hover:text-[#384bc7] transition-colors cursor-pointer"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Workflow Diagram */}
          <div className="lg:col-span-7">
            {/* Channel Tabs */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[#626874] mr-1">
                {locale === 'es' ? 'Simular canal:' : 'Simulate channel:'}
              </span>
              {(['gmail', 'whatsapp', 'thefork'] as const).map((ch) => (
                <button
                  key={ch}
                  onClick={() => setSelectedChannel(ch)}
                  className={`px-3 py-1 rounded-[8px] text-xs font-mono transition-all cursor-pointer ${
                    selectedChannel === ch
                      ? 'bg-[#121417] text-white font-semibold shadow-xs'
                      : 'bg-white text-[#626874] border border-[#e4e7ec] hover:bg-[#f4f5f7] hover:text-[#121417]'
                  }`}
                >
                  {ch === 'gmail' && 'Gmail'}
                  {ch === 'whatsapp' && 'WhatsApp'}
                  {ch === 'thefork' && 'TheFork'}
                </button>
              ))}
            </div>

            <div className="relative rounded-2xl border border-[#e4e7ec] bg-white p-6 sm:p-8 shadow-[0_1px_3px_rgba(16,24,40,0.05)] overflow-hidden">
              <div className="dot-grid absolute inset-0 opacity-50 pointer-events-none" />
              <div aria-hidden="true" className="hatch absolute inset-y-0 left-0 hidden w-7 border-r border-dashed border-[#e4e7ec] sm:block" />
              <div aria-hidden="true" className="hatch absolute inset-y-0 right-0 hidden w-7 border-l border-dashed border-[#e4e7ec] sm:block" />

              <div className="relative max-w-[420px] mx-auto space-y-4">
                {/* Node 1: Inbound Message */}
                <div className="relative rounded-xl border border-[#e4e7ec] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center gap-2 px-3 py-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                      {selectedChannel === 'gmail' && <Mail className="h-3.5 w-3.5" />}
                      {selectedChannel === 'whatsapp' && <MessageSquare className="h-3.5 w-3.5" />}
                      {selectedChannel === 'thefork' && <Calendar className="h-3.5 w-3.5" />}
                    </span>
                    <span className="truncate text-[13px] font-medium text-[#121417]">{t.inboundLabel}</span>
                    <span className="ml-auto shrink-0 rounded-md border border-[#e4e7ec] bg-white px-1.5 py-0.5 text-[11px] text-[#626874]">
                      {activeData.source}
                    </span>
                  </div>
                  <div className="border-t border-[#e4e7ec] px-3 py-2 text-left text-xs leading-relaxed text-[#626874]">
                    {activeData.message}
                  </div>
                </div>

                {/* Flow Connector Line */}
                <div className="relative mx-auto w-px h-8">
                  <div className="absolute inset-0 bg-[#e4e7ec]" />
                  <div className="absolute inset-0 bg-[#0b935d]/60 animate-pulse" />
                  <span className="absolute -bottom-[3px] left-1/2 block h-[7px] w-[7px] -translate-x-1/2 rounded-full border border-[#e4e7ec] bg-white" />
                </div>

                {/* Node 2: Classify & Extract */}
                <div className="relative rounded-xl border border-[#e4e7ec] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center gap-2 px-3 py-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-50 text-violet-600">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate text-[13px] font-medium text-[#121417]">{t.classifyLabel}</span>
                    <span className="ml-auto shrink-0 rounded-md border border-[#e4e7ec] bg-white px-1.5 py-0.5 text-[11px] text-[#626874]">
                      AI Extract
                    </span>
                  </div>
                  <div className="border-t border-[#e4e7ec] px-3 py-2.5 text-left text-xs leading-relaxed text-[#626874]">
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="p-1.5 rounded bg-[#f8f9fb] border border-[#e4e7ec]">
                        <span className="text-[#98a2b3] block text-[10px]">INTENT:</span>
                        <span className="text-[#121417] font-semibold">{activeData.extracted.intent}</span>
                      </div>
                      <div className="p-1.5 rounded bg-[#f8f9fb] border border-[#e4e7ec]">
                        <span className="text-[#98a2b3] block text-[10px]">PARTY:</span>
                        <span className="text-[#0b935d] font-semibold">{activeData.extracted.party}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branching SVG */}
                <div className="relative h-9 w-full my-1">
                  <svg
                    viewBox="0 0 400 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M200 0 V8 Q200 18 100 18 V36"
                      stroke="hsl(220 13% 91%)"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M200 0 V8 Q200 18 300 18 V36"
                      stroke="hsl(220 13% 91%)"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M200 0 V8 Q200 18 100 18 V36"
                      stroke="#0b935d"
                      strokeOpacity="0.75"
                      strokeWidth="1.4"
                      strokeDasharray="4 24"
                      className="animate-beam-flow"
                    />
                    <path
                      d="M200 0 V8 Q200 18 300 18 V36"
                      stroke="#384bc7"
                      strokeOpacity="0.75"
                      strokeWidth="1.4"
                      strokeDasharray="4 24"
                      className="animate-beam-flow"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </svg>
                </div>

                {/* Node 3 & 4: Branching Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Action 1: Draft Reply */}
                  <div className="rounded-xl border border-[#e4e7ec] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                    <div className="flex items-center gap-2 px-3 py-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                        <FileText className="h-3.5 w-3.5" />
                      </span>
                      <span className="truncate text-[13px] font-medium text-[#121417]">{t.draftLabel}</span>
                    </div>
                    <div className="border-t border-[#e4e7ec] px-3 py-2 text-left text-xs leading-relaxed text-[#626874]">
                      {t.draftText}
                    </div>
                  </div>

                  {/* Action 2: Book Table */}
                  <div className="rounded-xl border border-[#e4e7ec] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                    <div className="flex items-center gap-2 px-3 py-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <CalendarCheck className="h-3.5 w-3.5" />
                      </span>
                      <span className="truncate text-[13px] font-medium text-[#121417]">{t.bookLabel}</span>
                    </div>
                    <div className="border-t border-[#e4e7ec] px-3 py-2 text-left text-xs leading-relaxed text-[#626874]">
                      {t.bookText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
