import React, { useState } from 'react';
import { Sparkles, FileText, Send, CalendarCheck, Clock, Mail, Check } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface AutomationDemoProps {
  locale: Locale;
}

export const AutomationDemo: React.FC<AutomationDemoProps> = ({ locale }) => {
  const t = translations[locale].automationDemo;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [Mail, Sparkles, FileText, CalendarCheck, Clock];

  const workflowSteps = [
    {
      num: '01',
      title: locale === 'es' ? 'Captura Omnicanal' : 'Capture',
      desc: locale === 'es' ? 'Maxander recibe consultas de Gmail, Outlook, TheFork, WhatsApp y formularios web en tiempo real.' : 'Maxander receives inquiries from the communication channels your business already uses.',
      badge: 'Omnichannel Ingest',
      payload: `[INBOUND INGEST] source: "Gmail API (oauth2)"
thread_id: "thread_99182"
from: "sofia@brightlabs.io"
raw_message: "Hi! We'd love a private dinner for 24 on Dec 12 — do you have space and vegetarian options?"
timestamp: 2026-12-01T23:40:12Z`,
      insight1: 'Zero tool switching',
      insight2: '100% thread capture'
    },
    {
      num: '02',
      title: locale === 'es' ? 'Comprensión y Extracción' : 'Understand',
      desc: locale === 'es' ? 'La IA identifica intención, fechas, número de comensales, requerimientos dietéticos y contexto.' : 'AI identifies intent, dates, guest counts, dietary requirements, budget, and context.',
      badge: 'NLP Extraction',
      payload: `[PARSER MATRIX]
intent: "PRIVATE_DINING_EVENT" (confidence: 0.998)
party_size: 24
target_date: "2026-12-12T20:30:00"
area_preferred: "Garden Room"
dietary_flags: ["Vegetarian Tasting Menu"]`,
      insight1: 'Accuracy: 99.8%',
      insight2: 'Multi-lingual NLP'
    },
    {
      num: '03',
      title: locale === 'es' ? 'Respuesta Fundamentada' : 'Respond',
      desc: locale === 'es' ? 'Maxander redacta o envía una respuesta personalizada utilizando la información real del negocio.' : 'Maxander drafts or sends an appropriate response grounded in your menus, FAQs, and house rules.',
      badge: 'Grounded Drafting',
      payload: `[GROUNDED DRAFT]
cited_source_1: "Events FAQ v4.pdf (Sec 2: Capacities)"
cited_source_2: "Autumn Tasting 2026.pdf (€58/pp)"
attached_files: ["GardenRoom_Events.pdf"]
tone_match: "Formal Hospitality Spanish/English"`,
      insight1: 'Every claim cited',
      insight2: 'Never hallucinates'
    },
    {
      num: '04',
      title: locale === 'es' ? 'Creación de Reserva' : 'Book',
      desc: locale === 'es' ? 'Las reservas se crean automáticamente en Restoo o TheFork con retención de fianza vía Stripe.' : 'Bookings are created automatically in Restoo or TheFork with deposit links via Stripe.',
      badge: 'Table Reservation',
      payload: `[RESTOO REST API]
endpoint: "POST /v2/reservations/hold"
venue_id: "elforo_madrid"
table_id: "T-GARDEN-4B" (seats: 28)
deposit_amount: "€480.00"
stripe_intent: "pi_3Mtwx249104"`,
      insight1: 'Direct 2-way sync',
      insight2: 'Real-time table hold'
    },
    {
      num: '05',
      title: locale === 'es' ? 'Seguimiento Automático' : 'Follow up',
      desc: locale === 'es' ? 'Maxander gestiona recordatorios y seguimientos para que ninguna oportunidad de venta se pierda.' : 'Maxander handles follow-ups so quotes and holds never disappear into unanswered threads.',
      badge: 'Revenue Recovery',
      payload: `[AUTONOMOUS CADENCE]
trigger: "NO_CUSTOMER_REPLY_48H"
action: "SEND_POLITE_FOLLOWUP"
template: "Hold expiring in 24h"
recovered_revenue_est: "€1,680.00"`,
      insight1: '+3.2x conversion',
      insight2: 'Automated recovery'
    },
  ];

  const currentStep = workflowSteps[activeStepIndex];
  const Icon = icons[activeStepIndex];

  return (
    <section className="py-20 sm:py-28 border-b border-dashed border-[#e4e7ec] bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#e4e7ec] pb-3 mb-12">
          <span className="label-mono">
            <span className="text-[#626874]/50">[02]</span> Workflow Engine
          </span>
          <span className="label-mono hidden sm:block text-[#626874]">/ 5-Stage Automation</span>
        </div>

        {/* Title and Intro */}
        <div className="max-w-3xl mb-12">
          <h2 className="headline text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#121417]">
            {locale === 'es' ? 'El motor de reservas paso a paso.' : 'The booking engine from inquiry to confirmation.'}{' '}
            <span className="headline-quiet block sm:inline">
              {locale === 'es' ? 'Sin trabajo repetitivo para tu equipo.' : 'Without manual work for your team.'}
            </span>
          </h2>
          <p className="mt-4 text-base text-[#626874] leading-relaxed">
            {locale === 'es'
              ? 'Un flujo inteligente de 5 etapas que convierte cada mensaje en una reserva confirmada en tus herramientas habituales.'
              : 'A continuous 5-stage pipeline that captures, understands, responds, books, and follows up automatically.'}
          </p>
        </div>

        {/* Interactive Step Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Step Navigation List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {workflowSteps.map((step, idx) => {
              const StepIcon = icons[idx] || Sparkles;
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#384bc7] shadow-[0_4px_16px_-4px_rgba(56,75,199,0.15)] ring-1 ring-[#384bc7]'
                      : 'bg-white border-[#e4e7ec] hover:border-[#d0d5dd] hover:bg-[#f8f9fb]'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-semibold shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#121417] text-white'
                        : 'bg-[#f4f5f7] text-[#626874]'
                    }`}
                  >
                    {step.num}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-semibold tracking-tight ${
                          isActive ? 'text-[#121417]' : 'text-[#626874]'
                        }`}
                      >
                        {step.title}
                      </span>
                      <StepIcon
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? 'text-[#384bc7]' : 'text-[#98a2b3]'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-[#626874] mt-1 line-clamp-2">
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Contextual Step Preview Inspector (7 cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-2xl border border-[#e4e7ec] bg-white p-6 sm:p-8 shadow-[0_12px_32px_-12px_rgba(16,24,40,0.12)] relative overflow-hidden">
              <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

              {/* Inspector Header */}
              <div className="relative flex items-center justify-between pb-4 border-b border-[#e4e7ec]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0b935d] animate-pulse" />
                  <span className="font-mono text-xs text-[#121417] font-semibold uppercase">
                    {locale === 'es' ? 'Inspector de Ejecución // Paso' : 'Execution Inspector // Step'} {currentStep.num}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#eef2ff] text-[#384bc7] border border-[#c7d2fe] font-medium">
                  {currentStep.badge}
                </span>
              </div>

              {/* Step Deep-Dive Card */}
              <div className="relative mt-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-[#384bc7]" />
                    <h3 className="text-xl font-display font-medium text-[#121417]">
                      {currentStep.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#626874] mt-2 leading-relaxed">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Code / Data Payload Box */}
                <div className="p-4 rounded-xl bg-[#f8f9fb] border border-[#e4e7ec] font-mono text-xs text-[#121417] space-y-2">
                  <div className="text-[10px] text-[#626874] uppercase tracking-wider pb-1.5 border-b border-[#e4e7ec] flex items-center justify-between font-semibold">
                    <span>{locale === 'es' ? 'Registro de Carga Útil en Vivo' : 'Live Payload & System Log'}</span>
                    <span className="text-[#0b935d]">Status: 200 OK</span>
                  </div>
                  <pre className="text-[#626874] leading-relaxed whitespace-pre-wrap font-mono text-[11px]">
                    {currentStep.payload}
                  </pre>
                </div>

                {/* Step Contextual Insights */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-[11px] font-mono">
                  <div className="p-3 rounded-lg bg-[#f8f9fb] border border-[#e4e7ec]">
                    <span className="text-[#98a2b3] block uppercase text-[10px]">Metric</span>
                    <span className="text-[#0b935d] font-semibold">{currentStep.insight1}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#f8f9fb] border border-[#e4e7ec]">
                    <span className="text-[#98a2b3] block uppercase text-[10px]">Safeguard</span>
                    <span className="text-[#121417] font-semibold">{currentStep.insight2}</span>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="pt-4 border-t border-[#e4e7ec] flex items-center justify-between text-xs font-mono text-[#626874]">
                  <span>
                    {locale === 'es' ? 'Paso activo:' : 'Active Step:'} {activeStepIndex + 1} / {workflowSteps.length}
                  </span>
                  <div className="flex gap-1.5">
                    {workflowSteps.map((_, i) => (
                      <span
                        key={i}
                        className={`w-6 h-1.5 rounded-full transition-all ${
                          i === activeStepIndex
                            ? 'bg-[#384bc7]'
                            : i < activeStepIndex
                            ? 'bg-[#0b935d]'
                            : 'bg-[#e4e7ec]'
                        }`}
                      />
                    ))}
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

