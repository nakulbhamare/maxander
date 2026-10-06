import React, { useState } from 'react';
import { Shield, Sliders, CheckCircle2, Lock, ArrowRight, Eye, ShieldAlert, Cpu } from 'lucide-react';
import { Locale, translations } from '../data/translations';
import { FlipCard } from './ui/FlipCard';

interface HowItWorksSectionProps {
  locale: Locale;
  onOpenDemo: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ locale, onOpenDemo }) => {
  const t = translations[locale].howItWorks;
  const [autonomyLevel, setAutonomyLevel] = useState<number>(2); // 0 to 3 (Level 1 to 4)

  const stageBackData = locale === 'es' ? [
    {
      title: 'Protocolo de Ingesta y OAuth 2.0',
      subtitle: 'Conexión Segura de Cero Fricción',
      status: 'Activo',
      metric: 'Latencia: < 15ms',
      items: [
        'Webhooks bidireccionales con Restoo, TheFork y CoverManager.',
        'Cifrado en tránsito TLS 1.3 y reposo AES-256 (GDPR Compliant).',
        'Ingesta pasiva sin interferir con la operativa normal de sala.'
      ]
    },
    {
      title: 'Pipeline RAG y Control de Políticas',
      subtitle: '100% Determinista y Grounded',
      status: 'Sincronizado',
      metric: '0% Alucinación',
      items: [
        'Indexación semántica de PDFs, alérgenos y menús de grupos.',
        'Reglas estrictas de depósito bancario según comensales y turnos.',
        'Filtro de seguridad contra respuestas imprecisas o no verificadas.'
      ]
    },
    {
      title: 'Despacho Autónomo y Enrutamiento VIP',
      subtitle: 'Decisión por Nivel de Confianza',
      status: 'Autónomo',
      metric: 'Precisión: 99.4%',
      items: [
        'Respuesta instantánea < 60s en consultas de alta confianza.',
        'Alertas inmediatas en WhatsApp / móvil para eventos y VIPs.',
        'Trazabilidad completa con registro de auditoría en cada mensaje.'
      ]
    }
  ] : [
    {
      title: 'OAuth 2.0 & Webhook Protocol',
      subtitle: 'Zero-Friction Secure Ingestion',
      status: 'Live & Active',
      metric: 'Latency: < 15ms',
      items: [
        'Bi-directional webhooks with Restoo, TheFork & CoverManager.',
        'TLS 1.3 in-transit and AES-256 at-rest encryption (GDPR compliant).',
        'Passive ingestion without disrupting ongoing floor operations.'
      ]
    },
    {
      title: 'Grounded RAG & Policy Guardrails',
      subtitle: '100% Deterministic Engine',
      status: 'Synchronized',
      metric: '0% Hallucination',
      items: [
        'Semantic indexing of menus, allergen matrices & group dossiers.',
        'Strict deposit threshold rules per party size and service shift.',
        'Safety filter guaranteeing zero unverified or hallucinated claims.'
      ]
    },
    {
      title: 'Autonomous Dispatch & VIP Routing',
      subtitle: 'Confidence-Based Decision Engine',
      status: 'Autonomous',
      metric: 'Accuracy: 99.4%',
      items: [
        'Sub-60s instant replies for high-confidence inbound requests.',
        'Instant WhatsApp / push alerts to maître for VIPs & group events.',
        'Full audit trail and telemetry for every interaction.'
      ]
    }
  ];

  const autonomyLevels = [
    {
      name: locale === 'es' ? 'Nivel 1: Solo Lectura' : 'Level 1: Read-Only',
      tag: '0% Auto-Send',
      description: locale === 'es'
        ? 'Maxander solo indexa y analiza correos en silencio. Ningún mensaje sale sin redacción manual del equipo.'
        : 'Maxander reads and ingests mail quietly. Zero messages sent without complete manual drafting.',
      badgeColor: 'text-[#384BC7] bg-[#384BC7]/10 border-[#384BC7]/20'
    },
    {
      name: locale === 'es' ? 'Nivel 2: Borradores para Revisión' : 'Level 2: Draft for Review',
      tag: 'Co-Pilot Mode (Default)',
      description: locale === 'es'
        ? 'La IA prepara la respuesta exacta con carta y fianza. El jefe de sala solo tiene que pulsar «Aprobar».'
        : 'AI prepares complete on-brand replies with attached PDF and deposit link. Staff simply clicks "Approve".',
      badgeColor: 'text-[#384BC7] bg-[#384BC7]/10 border-[#384BC7]/20'
    },
    {
      name: locale === 'es' ? 'Nivel 3: Auto-Envío por Categoría' : 'Level 3: Category Auto-Send',
      tag: 'Selective Automation',
      description: locale === 'es'
        ? 'Las categorías consolidadas (menús, reservas estándar) se envían solas. Preguntas complejas van a borrador.'
        : 'High-confidence categories (send menu, standard booking) auto-send. Edge cases remain in review queue.',
      badgeColor: 'text-[#0B935D] bg-[#0B935D]/10 border-[#0B935D]/20'
    },
    {
      name: locale === 'es' ? 'Nivel 4: Copiloto Autónomo Total' : 'Level 4: Full Autonomous Pilot',
      tag: 'Autonomous with Guardrails',
      description: locale === 'es'
        ? 'Gestión autónoma integral del 85%+ del buzón con sincronización en Restoo/TheFork y alertas VIP para sala.'
        : 'Full autonomous handling of 85%+ inbound with instant booking sync and instant manager escalation.',
      badgeColor: 'text-[#7C3AED] bg-[#7C3AED]/10 border-[#7C3AED]/20'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 border-b border-[#E4E7EC] bg-[#FAFAFA] fine-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#E4E7EC] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#384BC7] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#667085]">{t.subtitle}</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16">
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

        {/* 3 Horizontal Stage FlipCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.stages.map((stage, idx) => (
            <FlipCard
              key={stage.number}
              axis="y"
              flipOnClick
              tilt
              tiltMax={8}
              glare
              glareOpacity={0.08}
              hoverScale={1.01}
              perspective={1100}
              width="100%"
              height="100%"
              radius={20}
              background="#FFFFFF"
              color="#121417"
              shadow
              shadowColor="#101828"
              shadowOpacity={0.06}
              className="min-h-[440px] flex"
              front={
                <div className="h-full p-6 sm:p-7 flex flex-col justify-between border border-[#E4E7EC] rounded-[20px] bg-white relative group hover:border-[#384BC7]/50 shadow-sm transition-all">
                  <div className="absolute top-0 right-0 p-4 font-mono text-3xl font-bold text-[#F2F4F7] select-none group-hover:text-[#384BC7]/10 transition-colors">
                    {stage.number}
                  </div>

                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#F2F4F7] text-[#384BC7] font-mono font-semibold text-xs flex items-center justify-center mb-5 border border-[#E4E7EC]">
                      0{idx + 1}
                    </div>

                    <h3 className="text-xl font-display font-medium text-[#121417]">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-[#475467] mt-3 leading-relaxed">
                      {stage.description}
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-[#344054]">
                      {stage.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#384BC7]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2F4F7] flex items-center justify-between text-[11px] font-mono">
                    <div>
                      <div className="text-[#384BC7] font-semibold">{stage.boxTitle}</div>
                      <div className="text-[#667085] mt-0.5">{stage.boxSubtitle}</div>
                    </div>
                    <span className="text-[10px] text-[#384BC7] flex items-center gap-1 font-medium group-hover:underline">
                      <span>↻</span>
                      <span className="hidden sm:inline">{locale === 'es' ? 'Detalles' : 'Details'}</span>
                    </span>
                  </div>
                </div>
              }
              back={
                <div className="h-full p-6 sm:p-7 flex flex-col justify-between border border-[#384BC7]/40 rounded-[20px] bg-[#F9FAFB] text-left relative shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#384BC7]/10 text-[#384BC7] font-mono font-semibold text-xs flex items-center justify-center border border-[#384BC7]/20">
                        0{idx + 1}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0B935D] bg-[#0B935D]/10 px-2 py-0.5 rounded border border-[#0B935D]/20">
                        {stageBackData[idx].status}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-medium text-[#121417]">
                      {stageBackData[idx].title}
                    </h4>
                    <div className="text-xs font-mono text-[#384BC7] mt-1 mb-4">
                      {stageBackData[idx].subtitle}
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#344054]">
                      {stageBackData[idx].items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B935D] shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#475467]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E4E7EC] flex items-center justify-between text-[11px] font-mono text-[#667085]">
                    <span className="text-[#344054] font-medium">{stageBackData[idx].metric}</span>
                    <span className="text-[#384BC7] flex items-center gap-1 font-semibold hover:underline">
                      <span>↺</span>
                      <span>{locale === 'es' ? 'Volver' : 'Flip back'}</span>
                    </span>
                  </div>
                </div>
              }
            />
          ))}
        </div>

        {/* Interactive Autonomy Meter / Dial */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-10 shadow-sm mb-16">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E4E7EC] bg-[#F9FAFB] text-xs font-mono text-[#384BC7] mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>{t.autonomyTitle}</span>
            </div>
            <p className="text-sm text-[#475467]">
              {t.autonomySubtitle}
            </p>
          </div>

          {/* Autonomy Dial Slider */}
          <div className="max-w-3xl mx-auto">
            {/* Slider track */}
            <div className="relative py-4">
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={autonomyLevel}
                onChange={(e) => setAutonomyLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-[#F2F4F7] rounded-lg appearance-none cursor-pointer accent-[#384BC7]"
              />
            </div>

            {/* Slider buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center font-mono text-xs">
              {t.sliderLabels.map((lbl, idx) => (
                <button
                  key={idx}
                  onClick={() => setAutonomyLevel(idx)}
                  className={`p-2.5 rounded-xl border transition-all ${
                    autonomyLevel === idx
                      ? 'bg-[#384BC7] border-[#384BC7] text-white font-semibold shadow-sm'
                      : 'bg-[#FAFAFA] border-[#E4E7EC] text-[#475467] hover:bg-[#F4F5F7] hover:text-[#121417]'
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>

            {/* Active Level Card */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-[#121417]">
                    {autonomyLevels[autonomyLevel].name}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-mono border ${autonomyLevels[autonomyLevel].badgeColor}`}>
                    {autonomyLevels[autonomyLevel].tag}
                  </span>
                </div>
                <p className="text-xs text-[#475467] mt-1.5 leading-relaxed max-w-xl">
                  {autonomyLevels[autonomyLevel].description}
                </p>
              </div>

              <button
                onClick={onOpenDemo}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#384BC7] text-white hover:bg-[#2F3FA6] transition-all shrink-0 shadow-sm"
              >
                {locale === 'es' ? 'Ver en demo' : 'Experience Mode'}
              </button>
            </div>
          </div>
        </div>

        {/* Safety & Control Matrix Table */}
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-8 shadow-sm overflow-x-auto">
          <div className="flex items-center justify-between pb-4 border-b border-[#F2F4F7] mb-6">
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#0B935D]" />
              <span className="text-base font-semibold text-[#121417]">
                {t.matrixTitle}
              </span>
            </div>
            <span className="text-xs font-mono text-[#667085]">
              {locale === 'es' ? 'Reglas Granulares de Categoría' : 'Granular Category Rules'}
            </span>
          </div>

          <table className="w-full text-left text-xs font-mono border-collapse min-w-[550px]">
            <thead>
              <tr className="border-b border-[#E4E7EC] text-[#667085] uppercase text-[11px]">
                <th className="py-3 px-3">{t.matrixActionCol}</th>
                <th className="py-3 px-3">{t.matrixModeCol}</th>
                <th className="py-3 px-3">{t.matrixDescCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2F4F7] text-[#344054]">
              {t.matrixRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="py-3.5 px-3 font-medium text-[#121417]">
                    {row.action}
                  </td>
                  <td className="py-3.5 px-3">
                    {row.mode === 'AUTO' && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#0B935D]/10 text-[#0B935D] border border-[#0B935D]/20">
                        {row.modeLabel}
                      </span>
                    )}
                    {row.mode === 'REVIEW' && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#D97706]/10 text-[#B45309] border border-[#D97706]/20">
                        {row.modeLabel}
                      </span>
                    )}
                    {row.mode === 'HUMAN' && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#EF4444]/10 text-[#DC2626] border border-[#EF4444]/20 flex items-center gap-1 w-max">
                        <ShieldAlert className="w-3 h-3" />
                        {row.modeLabel}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-[#475467]">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
