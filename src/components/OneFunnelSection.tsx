import React, { useState } from 'react';
import { Check, Mail, MessageSquare, Calendar, Sparkles, FileText, CalendarCheck, ArrowRight } from 'lucide-react';
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
      sender: 'sofia@brightlabs.io',
      time: '23:40 CET',
      message: locale === 'es'
        ? '«¡Hola! Nos gustaría una cena privada para 24 el 12 de diciembre. ¿Tenéis espacio?»'
        : '“Hi! We\'d love a private dinner for 24 on Dec 12 — do you have space?”',
      extracted: {
        intent: locale === 'es' ? 'Cena privada' : 'Private dinner',
        party: '24 guests',
        date: '12 Dec 2026',
        budget: '€58/pp tasting'
      }
    },
    whatsapp: {
      source: 'WhatsApp',
      sender: '+34 612 948 201',
      time: '23:44 CET',
      message: locale === 'es'
        ? '«Buenas noches, ¿mesa para 8 personas este viernes a las 21:30 para celebrar un cumpleaños?»'
        : '“Good evening, table for 8 this Friday at 21:30 to celebrate a birthday?”',
      extracted: {
        intent: locale === 'es' ? 'Celebración cumpleaños' : 'Birthday celebration',
        party: '8 guests',
        date: 'This Friday 21:30',
        budget: 'À la carte'
      }
    },
    thefork: {
      source: 'TheFork Widget',
      sender: 'Guest Inquiry #4928',
      time: '23:51 CET',
      message: locale === 'es'
        ? '«Solicitud de reserva de grupo: 16 personas para almuerzo de empresa con menú maridado.»'
        : '“Group booking inquiry: 16 guests for corporate lunch with wine pairing.”',
      extracted: {
        intent: locale === 'es' ? 'Almuerzo corporativo' : 'Corporate lunch',
        party: '16 guests',
        date: '18 Dec 14:00',
        budget: 'Tasting + Pairings'
      }
    }
  };

  const activeData = channelData[selectedChannel];

  return (
    <section id="product" className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#080A0F] fine-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="headline text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-[#F4F2ED]">
              {t.title}{' '}
              <span className="headline-quiet block sm:inline">
                {t.titleQuiet}
              </span>
            </h2>

            <p className="text-base text-[#989FB2] leading-relaxed">
              {t.description}
            </p>

            {/* Checklist */}
            <ul className="space-y-3 pt-2 text-sm text-[#CCD1E0]">
              {t.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#D6A856] hover:text-[#ECC67A] transition-colors"
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
              <span className="text-xs font-mono text-[#6A7387] mr-1">
                {locale === 'es' ? 'Simular canal:' : 'Simulate channel:'}
              </span>
              {(['gmail', 'whatsapp', 'thefork'] as const).map((ch) => (
                <button
                  key={ch}
                  onClick={() => setSelectedChannel(ch)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedChannel === ch
                      ? 'bg-[#1D2536] text-[#ECC67A] border border-[#D6A856]/40 font-semibold'
                      : 'bg-[#0E121B] text-[#7C8395] border border-[#1C2333] hover:text-[#CCD1DF]'
                  }`}
                >
                  {ch === 'gmail' && 'Gmail'}
                  {ch === 'whatsapp' && 'WhatsApp'}
                  {ch === 'thefork' && 'TheFork'}
                </button>
              ))}
            </div>

            <div className="relative rounded-2xl border border-[#1F2739] bg-[#0B0E15] p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

              <div className="relative max-w-[460px] mx-auto space-y-4">
                {/* Node 1: Inbound Message */}
                <div className="rounded-xl border border-[#242F46] bg-[#0F1420] p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1D263A] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center">
                        {selectedChannel === 'gmail' && <Mail className="w-3.5 h-3.5" />}
                        {selectedChannel === 'whatsapp' && <MessageSquare className="w-3.5 h-3.5" />}
                        {selectedChannel === 'thefork' && <Calendar className="w-3.5 h-3.5" />}
                      </span>
                      <span className="font-semibold text-[#F4F2ED]">{t.inboundLabel}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#1A2234] text-[#8695B2]">
                      {activeData.source}
                    </span>
                  </div>
                  <p className="text-xs text-[#CCD2E2] mt-2.5 italic">
                    {activeData.message}
                  </p>
                </div>

                {/* Flow Connector Line */}
                <div className="flex justify-center my-1">
                  <div className="w-px h-6 bg-gradient-to-b from-[#3B82F6] to-[#D6A856]" />
                </div>

                {/* Node 2: Classify & Extract */}
                <div className="rounded-xl border border-[#2B354C] bg-[#111624] p-4 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-[#20293E] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#8B5CF6]/15 text-[#A78BFA] flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-semibold text-[#F4F2ED]">{t.classifyLabel}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#D6A856]/15 text-[#ECC67A]">
                      AI Extract
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#8C94A7]">
                    <div className="bg-[#0B0E15] p-2 rounded border border-[#1B2232]">
                      <span className="text-[#555C6E] block">INTENT:</span>
                      <span className="text-[#F4F2ED]">{activeData.extracted.intent}</span>
                    </div>
                    <div className="bg-[#0B0E15] p-2 rounded border border-[#1B2232]">
                      <span className="text-[#555C6E] block">PARTY:</span>
                      <span className="text-[#10B981] font-semibold">{activeData.extracted.party}</span>
                    </div>
                  </div>
                </div>

                {/* Branching SVG */}
                <div className="relative h-9 w-full">
                  <svg
                    viewBox="0 0 400 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M200 0 V8 Q200 18 100 18 V36"
                      stroke="#27324A"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M200 0 V8 Q200 18 300 18 V36"
                      stroke="#27324A"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M200 0 V8 Q200 18 100 18 V36"
                      stroke="#D6A856"
                      strokeWidth="1.5"
                      strokeDasharray="6 40"
                      className="animate-beam-flow"
                    />
                    <path
                      d="M200 0 V8 Q200 18 300 18 V36"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      strokeDasharray="6 40"
                      className="animate-beam-flow"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </svg>
                </div>

                {/* Node 3 & 4: Branching Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Action 1: Draft Reply */}
                  <div className="rounded-xl border border-[#242F46] bg-[#0E131F] p-3.5">
                    <div className="flex items-center gap-2 mb-1.5 text-xs">
                      <span className="w-5 h-5 rounded bg-[#F59E0B]/15 text-[#FBBF24] flex items-center justify-center">
                        <FileText className="w-3 h-3" />
                      </span>
                      <span className="font-medium text-[#F4F2ED]">{t.draftLabel}</span>
                    </div>
                    <p className="text-[11px] text-[#868D9E] leading-relaxed">
                      {t.draftText}
                    </p>
                  </div>

                  {/* Action 2: Book Table */}
                  <div className="rounded-xl border border-[#242F46] bg-[#0E131F] p-3.5">
                    <div className="flex items-center gap-2 mb-1.5 text-xs">
                      <span className="w-5 h-5 rounded bg-[#10B981]/15 text-[#34D399] flex items-center justify-center">
                        <CalendarCheck className="w-3 h-3" />
                      </span>
                      <span className="font-medium text-[#F4F2ED]">{t.bookLabel}</span>
                    </div>
                    <p className="text-[11px] text-[#868D9E] leading-relaxed">
                      {t.bookText}
                    </p>
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
