import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  CalendarCheck, 
  Clock, 
  Send, 
  Check, 
  Play, 
  Pause, 
  RotateCcw,
  ShieldCheck,
  Building2,
  Lock
} from 'lucide-react';
import { Locale, translations } from '../data/translations';
import confetti from 'canvas-confetti';

interface HeroProductVisualProps {
  locale: Locale;
  onOpenKnowledgeModal?: () => void;
}

export const HeroProductVisual: React.FC<HeroProductVisualProps> = ({ locale, onOpenKnowledgeModal }) => {
  const t = translations[locale].hero;
  
  // Step state: 0 (classify), 1 (knowledge), 2 (draft), 3 (booking), 4 (followup)
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<'live' | 'audit' | 'knowledge'>('live');

  // Sequential autoplay loop
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 3800);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleApprove = () => {
    setIsApproved(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D6A856', '#ECC67A', '#10B981', '#FFFFFF']
    });
  };

  const handleReset = () => {
    setIsApproved(false);
    setActiveStep(0);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16">
      {/* Background ambient lighting */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#D6A856]/10 via-[#3B82F6]/5 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />
      
      {/* Main Container Card */}
      <div className="relative rounded-2xl border border-[#1F2739] bg-[#0A0D14]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A2233] bg-[#0D1017]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#E05252]/80 border border-[#F27070]/30" />
              <span className="w-3 h-3 rounded-full bg-[#E5A83B]/80 border border-[#F4BE5B]/30" />
              <span className="w-3 h-3 rounded-full bg-[#3FB950]/80 border border-[#56D364]/30" />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#20273A] text-[11px] font-mono text-[#8C93A4]">
              <Lock className="w-3 h-3 text-[#D6A856]" />
              <span>maxander-inbox // elforo.com (live session)</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg border border-[#222A3D] bg-[#0B0E15] p-0.5 text-[11px] font-mono">
              <button
                onClick={() => setSelectedTab('live')}
                className={`px-2 py-0.5 rounded-[4px] transition-colors ${
                  selectedTab === 'live' ? 'bg-[#1D2536] text-[#F4F2ED]' : 'text-[#7D8495] hover:text-[#D5DAE5]'
                }`}
              >
                {locale === 'es' ? 'Simulación en vivo' : 'Live Simulation'}
              </button>
              <button
                onClick={() => setSelectedTab('audit')}
                className={`px-2 py-0.5 rounded-[4px] transition-colors ${
                  selectedTab === 'audit' ? 'bg-[#1D2536] text-[#F4F2ED]' : 'text-[#7D8495] hover:text-[#D5DAE5]'
                }`}
              >
                {locale === 'es' ? 'Auditoría' : 'Audit Log'}
              </button>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg border border-[#222A3D] bg-[#0E121B] text-[#A0A5B5] hover:text-[#F4F2ED] transition-colors"
              title={isPlaying ? 'Pause simulation' : 'Play simulation'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#D6A856]" />}
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg border border-[#222A3D] bg-[#0E121B] text-[#A0A5B5] hover:text-[#F4F2ED] transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Step Progression Ribbon */}
        <div className="grid grid-cols-5 border-b border-[#181F2D] bg-[#090C12] text-xs">
          {[
            { id: 0, label: locale === 'es' ? '1. Extraer' : '1. Classify', icon: Sparkles },
            { id: 1, label: locale === 'es' ? '2. Vincular' : '2. Match', icon: FileText },
            { id: 2, label: locale === 'es' ? '3. Redactar' : '3. Draft', icon: Send },
            { id: 3, label: locale === 'es' ? '4. Reservar' : '4. Book', icon: CalendarCheck },
            { id: 4, label: locale === 'es' ? '5. Seguimiento' : '5. Follow-up', icon: Clock },
          ].map((s) => {
            const Icon = s.icon;
            const isCurrent = activeStep === s.id;
            const isPassed = activeStep > s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(s.id);
                  setIsPlaying(false);
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2 border-r border-[#181F2D] last:border-r-0 font-mono text-[11px] transition-all ${
                  isCurrent
                    ? 'bg-[#151D2A] text-[#ECC67A] font-semibold border-b-2 border-b-[#D6A856]'
                    : isPassed
                    ? 'text-[#48BB78] bg-[#0C1017]'
                    : 'text-[#656C7D] hover:text-[#A0A5B5] hover:bg-[#0D1118]'
                }`}
              >
                {isPassed ? (
                  <Check className="w-3 h-3 text-[#48BB78]" />
                ) : (
                  <Icon className={`w-3 h-3 ${isCurrent ? 'text-[#D6A856]' : ''}`} />
                )}
                <span className="truncate hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dual-Pane Interface */}
        {selectedTab === 'live' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
            {/* Left Pane: Inbound Customer Thread (5 cols) */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#1A2233] bg-[#0B0E15] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-[#1A2233]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#182030] text-[#8695B2] border border-[#243048]">
                      Gmail / Inbound
                    </span>
                    <span className="text-[11px] text-[#636A7D] font-mono">23:42 CET</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-[#D6A856]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6A856] animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Customer Card */}
                <div className="mt-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#232D42] to-[#121622] border border-[#313E5C] flex items-center justify-center font-medium text-xs text-[#F4F2ED] shrink-0">
                    SM
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#F4F2ED]">Sofia Marín</span>
                      <span className="text-[11px] text-[#82899C]">sofia@brightlabs.io</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#D6A856] font-medium mt-0.5">
                      <Building2 className="w-3 h-3 text-[#D6A856]" />
                      BrightLabs Corporate
                    </div>
                  </div>
                </div>

                {/* Email Body */}
                <div className="mt-4 p-4 rounded-xl bg-[#0F1420] border border-[#1E2638] text-[13px] leading-relaxed text-[#D2D6E2] relative">
                  <div className="text-[11px] font-mono text-[#6A7387] mb-1.5">
                    Subject: Private dining inquiry for 24 guests (Dec 12)
                  </div>
                  <p>{t.demoInboundMessage}</p>
                </div>

                {/* Metadata Pill Grid */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-[#0F131D] border border-[#1B2232] text-[#868D9E]">
                    <span className="text-[#565C6D] block">PARTY SIZE:</span>
                    <span className="text-[#F4F2ED] font-medium">24 Guests</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#0F131D] border border-[#1B2232] text-[#868D9E]">
                    <span className="text-[#565C6D] block">REQUESTED DATE:</span>
                    <span className="text-[#F4F2ED] font-medium">12 Dec 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#161D2C] flex items-center justify-between text-[11px] text-[#636B7E] font-mono">
                <span>Thread ID: #774-BRIGHT</span>
                <span className="text-[#10B981] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  Verified Sender
                </span>
              </div>
            </div>

            {/* Right Pane: Maxander AI Engine Workspace (7 cols) */}
            <div className="lg:col-span-7 bg-[#090C12] p-5 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Engine Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#182030]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#D6A856]/15 border border-[#D6A856]/40 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-[#ECC67A]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F4F2ED]">
                      Maxander Co-Pilot Engine
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#D6A856] bg-[#D6A856]/10 px-2 py-0.5 rounded border border-[#D6A856]/20">
                    {locale === 'es' ? 'Precisión 99.8%' : 'Accuracy: 99.8%'}
                  </span>
                </div>

                {/* Stage 1: Classify */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    activeStep >= 0
                      ? 'bg-[#0E131E] border-[#253046] shadow-xs'
                      : 'bg-[#0A0D14] border-[#151B28] opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-medium text-[#ECC67A] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      {t.stepClassify}
                    </span>
                    <span className="text-[10px] font-mono text-[#6A7387]">NLP Parser v4.2</span>
                  </div>
                  <div className="text-xs text-[#A8AFC0] font-mono bg-[#090C12] p-2 rounded-lg border border-[#192131]">
                    {t.stepClassifyDetail}
                  </div>
                </div>

                {/* Stage 2: Knowledge Match */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    activeStep >= 1
                      ? 'bg-[#0E131E] border-[#253046] shadow-xs'
                      : 'bg-[#0A0D14] border-[#151B28] opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-medium text-[#7AA2F7] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#7AA2F7]" />
                      {t.stepKnowledge}
                    </span>
                    <button
                      onClick={onOpenKnowledgeModal}
                      className="text-[10px] font-mono text-[#D6A856] hover:underline cursor-pointer"
                    >
                      {locale === 'es' ? 'Ver norma' : 'Inspect citation'} →
                    </button>
                  </div>
                  <div className="text-xs text-[#A8AFC0] leading-relaxed bg-[#090C12] p-2 rounded-lg border border-[#192131]">
                    {t.stepKnowledgeDetail}
                  </div>
                </div>

                {/* Stage 3: Draft Reply & Restoo Hold */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    activeStep >= 2
                      ? 'bg-[#0E131E] border-[#253046] shadow-xs'
                      : 'bg-[#0A0D14] border-[#151B28] opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-medium text-[#F4F2ED] flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-[#ECC67A]" />
                      {t.stepDraft}
                    </span>
                    <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded">
                      + Autumn_Tasting.pdf
                    </span>
                  </div>
                  <div className="text-xs text-[#CCD1DF] italic bg-[#090C12] p-2.5 rounded-lg border border-[#192131] leading-relaxed">
                    {t.stepDraftDetail}
                  </div>
                </div>

                {/* Stage 4: Booking & Follow-up status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    className={`p-2.5 rounded-xl border text-xs transition-all ${
                      activeStep >= 3
                        ? 'bg-[#0E131E] border-[#253046]'
                        : 'bg-[#0A0D14] border-[#151B28] opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#10B981] font-medium">
                      <CalendarCheck className="w-3.5 h-3.5" />
                      {t.stepBooking}
                    </div>
                    <p className="text-[11px] text-[#868D9E] mt-1 font-mono">
                      {t.stepBookingDetail}
                    </p>
                  </div>

                  <div
                    className={`p-2.5 rounded-xl border text-xs transition-all ${
                      activeStep >= 4
                        ? 'bg-[#0E131E] border-[#253046]'
                        : 'bg-[#0A0D14] border-[#151B28] opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#ECC67A] font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {t.stepFollowup}
                    </div>
                    <p className="text-[11px] text-[#868D9E] mt-1 font-mono">
                      {t.stepFollowupDetail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Action Bar */}
              <div className="mt-5 pt-4 border-t border-[#182030] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isApproved ? 'bg-[#10B981]' : 'bg-[#D6A856] animate-ping'
                    }`}
                  />
                  <span className="text-xs font-mono text-[#98A0B2]">
                    {isApproved ? t.statusApproved : t.statusAwaiting}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {!isApproved ? (
                    <button
                      onClick={handleApprove}
                      className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-semibold bg-[#10B981] text-[#07080B] hover:bg-[#34D399] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95"
                    >
                      <Check className="w-3.5 h-3.5" />
                      {t.buttonApprove}
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#D6A856] border border-[#D6A856]/40 bg-[#D6A856]/10 hover:bg-[#D6A856]/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-3 h-3" />
                      {t.buttonReset}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Audit Log Tab View */
          <div className="p-6 bg-[#090C12] text-xs font-mono text-[#A0A5B5] space-y-3 min-h-[380px]">
            <div className="flex items-center justify-between pb-3 border-b border-[#182030]">
              <span className="text-[#F4F2ED] font-semibold">MAXANDER AUDIT TRAIL // RECORD #99281-ELF</span>
              <span className="text-[#10B981]">IMMUTABLE LOG · EU GDPR COMPLIANT</span>
            </div>
            <div className="space-y-2 text-[11px] leading-relaxed">
              <p className="text-[#656C7D]">
                [2026-12-01 23:40:12 UTC] Inbound email ingested from Gmail API (oauth: bookings@elforo.com)
              </p>
              <p className="text-[#7AA2F7]">
                [2026-12-01 23:40:13 UTC] Extraction confidence: intent=private_dining (0.998), date=2026-12-12 (1.00), party=24 (1.00)
              </p>
              <p className="text-[#ECC67A]">
                [2026-12-01 23:40:14 UTC] Grounded match: Document 'Events FAQ Autumn 2026.pdf' (Sections: 2, 4) - cited in drafted response
              </p>
              <p className="text-[#D6A856]">
                [2026-12-01 23:40:15 UTC] Restoo hold created: ID #84920 (Garden Room, Dec 12 20:30, 24 pax, deposit link generated)
              </p>
              <p className="text-[#10B981]">
                [2026-12-01 23:40:15 UTC] Thread queued for operator review (Autonomy mode: Level 2 Drafts)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
