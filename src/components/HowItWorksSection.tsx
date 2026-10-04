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
      badgeColor: 'text-[#60A5FA] bg-[#3B82F6]/15 border-[#3B82F6]/30'
    },
    {
      name: locale === 'es' ? 'Nivel 2: Borradores para Revisión' : 'Level 2: Draft for Review',
      tag: 'Co-Pilot Mode (Default)',
      description: locale === 'es'
        ? 'La IA prepara la respuesta exacta con carta y fianza. El jefe de sala solo tiene que pulsar «Aprobar».'
        : 'AI prepares complete on-brand replies with attached PDF and deposit link. Staff simply clicks "Approve".',
      badgeColor: 'text-[#ECC67A] bg-[#D6A856]/15 border-[#D6A856]/30'
    },
    {
      name: locale === 'es' ? 'Nivel 3: Auto-Envío por Categoría' : 'Level 3: Category Auto-Send',
      tag: 'Selective Automation',
      description: locale === 'es'
        ? 'Las categorías consolidadas (menús, reservas estándar) se envían solas. Preguntas complejas van a borrador.'
        : 'High-confidence categories (send menu, standard booking) auto-send. Edge cases remain in review queue.',
      badgeColor: 'text-[#34D399] bg-[#10B981]/15 border-[#10B981]/30'
    },
    {
      name: locale === 'es' ? 'Nivel 4: Copiloto Autónomo Total' : 'Level 4: Full Autonomous Pilot',
      tag: 'Autonomous with Guardrails',
      description: locale === 'es'
        ? 'Gestión autónoma integral del 85%+ del buzón con sincronización en Restoo/TheFork y alertas VIP para sala.'
        : 'Full autonomous handling of 85%+ inbound with instant booking sync and instant manager escalation.',
      badgeColor: 'text-[#A78BFA] bg-[#8B5CF6]/15 border-[#8B5CF6]/30'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 border-b border-[#161D2B] bg-[#07080C] fine-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#1E2638] pb-4 mb-12">
          <span className="label-mono">
            <span className="text-[#D6A856] font-semibold">{t.tag}</span>
          </span>
          <span className="label-mono hidden sm:block text-[#697285]">{t.subtitle}</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16">
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

        {/* 3 Horizontal Stage FlipCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.stages.map((stage, idx) => (
            <FlipCard
              key={stage.number}
              axis="y"
              flipOnClick
              tilt
              tiltMax={10}
              glare
              glareOpacity={0.16}
              hoverScale={1.02}
              perspective={1100}
              width="100%"
              height="100%"
              radius={20}
              background="#0A0D15"
              color="#F4F2ED"
              shadow
              shadowColor="#000000"
              shadowOpacity={0.5}
              className="min-h-[440px] flex"
              front={
                <div className="h-full p-6 sm:p-7 flex flex-col justify-between border border-[#1F2739] rounded-[20px] bg-[#0A0D15] relative group hover:border-[#D6A856]/40 transition-colors">
                  <div className="absolute top-0 right-0 p-4 font-mono text-3xl font-bold text-[#141B2A] select-none group-hover:text-[#D6A856]/20 transition-colors">
                    {stage.number}
                  </div>

                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#141C2B] text-[#D6A856] font-mono font-semibold text-xs flex items-center justify-center mb-5 border border-[#242F46]">
                      0{idx + 1}
                    </div>

                    <h3 className="text-xl font-display font-medium text-[#F4F2ED]">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-[#8C93A7] mt-3 leading-relaxed">
                      {stage.description}
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-[#CCD1E0]">
                      {stage.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6A856]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#182030] flex items-center justify-between text-[11px] font-mono">
                    <div>
                      <div className="text-[#ECC67A] font-semibold">{stage.boxTitle}</div>
                      <div className="text-[#656C7D] mt-0.5">{stage.boxSubtitle}</div>
                    </div>
                    <span className="text-[10px] text-[#D6A856]/70 flex items-center gap-1 group-hover:text-[#ECC67A] transition-colors">
                      <span>↻</span>
                      <span className="hidden sm:inline">{locale === 'es' ? 'Detalles' : 'Details'}</span>
                    </span>
                  </div>
                </div>
              }
              back={
                <div className="h-full p-6 sm:p-7 flex flex-col justify-between border border-[#D6A856]/40 rounded-[20px] bg-[#0E131F] text-left relative">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#D6A856]/20 text-[#ECC67A] font-mono font-semibold text-xs flex items-center justify-center border border-[#D6A856]/30">
                        0{idx + 1}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded border border-[#10B981]/30">
                        {stageBackData[idx].status}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-medium text-[#F4F2ED]">
                      {stageBackData[idx].title}
                    </h4>
                    <div className="text-xs font-mono text-[#ECC67A] mt-1 mb-4">
                      {stageBackData[idx].subtitle}
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#CCD1E0]">
                      {stageBackData[idx].items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#9AA2B5]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#1F2739] flex items-center justify-between text-[11px] font-mono text-[#788094]">
                    <span className="text-[#8E95A8]">{stageBackData[idx].metric}</span>
                    <span className="text-[#ECC67A] flex items-center gap-1 hover:underline">
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
        <div className="rounded-2xl border border-[#222B3D] bg-[#090C13] p-6 sm:p-10 shadow-2xl mb-16">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27324A] bg-[#101522] text-xs font-mono text-[#D6A856] mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>{t.autonomyTitle}</span>
            </div>
            <p className="text-sm text-[#8E95A8]">
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
                className="w-full h-2 bg-[#171E2D] rounded-lg appearance-none cursor-pointer accent-[#D6A856]"
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
                      ? 'bg-[#151D2C] border-[#D6A856] text-[#ECC67A] font-semibold shadow-md'
                      : 'bg-[#0B0E16] border-[#182030] text-[#71788A] hover:text-[#CCD1DF]'
                  }`}
                >
                  {lbl}
                </button>
              ))}
            </div>

            {/* Active Level Card */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl border border-[#27334C] bg-[#0E131E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-[#F4F2ED]">
                    {autonomyLevels[autonomyLevel].name}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-mono border ${autonomyLevels[autonomyLevel].badgeColor}`}>
                    {autonomyLevels[autonomyLevel].tag}
                  </span>
                </div>
                <p className="text-xs text-[#959CB0] mt-1.5 leading-relaxed max-w-xl">
                  {autonomyLevels[autonomyLevel].description}
                </p>
              </div>

              <button
                onClick={onOpenDemo}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#D6A856] text-[#07080B] hover:bg-[#ECC67A] transition-all shrink-0"
              >
                {locale === 'es' ? 'Ver en demo' : 'Experience Mode'}
              </button>
            </div>
          </div>
        </div>

        {/* Safety & Control Matrix Table */}
        <div className="rounded-2xl border border-[#1F2739] bg-[#0A0D15] p-6 sm:p-8 shadow-xl overflow-x-auto">
          <div className="flex items-center justify-between pb-4 border-b border-[#182030] mb-6">
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#10B981]" />
              <span className="text-base font-semibold text-[#F4F2ED]">
                {t.matrixTitle}
              </span>
            </div>
            <span className="text-xs font-mono text-[#788094]">
              {locale === 'es' ? 'Reglas Granulares de Categoría' : 'Granular Category Rules'}
            </span>
          </div>

          <table className="w-full text-left text-xs font-mono border-collapse min-w-[550px]">
            <thead>
              <tr className="border-b border-[#182030] text-[#697285] uppercase text-[11px]">
                <th className="py-3 px-3">{t.matrixActionCol}</th>
                <th className="py-3 px-3">{t.matrixModeCol}</th>
                <th className="py-3 px-3">{t.matrixDescCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#141A27] text-[#CCD1E0]">
              {t.matrixRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#0E121B] transition-colors">
                  <td className="py-3.5 px-3 font-medium text-[#F4F2ED]">
                    {row.action}
                  </td>
                  <td className="py-3.5 px-3">
                    {row.mode === 'AUTO' && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                        {row.modeLabel}
                      </span>
                    )}
                    {row.mode === 'REVIEW' && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#F59E0B]/15 text-[#FBBF24] border border-[#F59E0B]/30">
                        {row.modeLabel}
                      </span>
                    )}
                    {row.mode === 'HUMAN' && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#EF4444]/15 text-[#F87171] border border-[#EF4444]/30 flex items-center gap-1 w-max">
                        <ShieldAlert className="w-3 h-3" />
                        {row.modeLabel}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-[#8A92A6]">
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
