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
  Lock,
  Mail,
  ArrowRight
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
  const [selectedTab, setSelectedTab] = useState<'live' | 'audit'>('live');

  // Sequential autoplay loop
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 4200);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleApprove = () => {
    setIsApproved(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#384bc7', '#0b935d', '#121417', '#ffffff']
    });
  };

  const handleReset = () => {
    setIsApproved(false);
    setActiveStep(0);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 sm:mt-14">
      {/* Background ambient lighting */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#384bc7]/5 via-[#0b935d]/5 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />
      
      {/* Main Container Card */}
      <div className="relative rounded-2xl border border-[#e4e7ec] bg-white shadow-[0_16px_48px_-16px_rgba(16,24,40,0.14)] overflow-hidden">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#e4e7ec] bg-[#f8f9fb]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]/80" />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#e4e7ec] text-[11px] font-mono text-[#626874]">
              <Lock className="w-3 h-3 text-[#384bc7]" />
              <span>maxander-inbox // elforo.com (session #882)</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg border border-[#e4e7ec] bg-white p-0.5 text-[11px] font-mono shadow-xs">
              <button
                onClick={() => setSelectedTab('live')}
                className={`px-2.5 py-1 rounded-[6px] transition-colors font-medium ${
                  selectedTab === 'live' ? 'bg-[#121417] text-white' : 'text-[#626874] hover:text-[#121417]'
                }`}
              >
                {locale === 'es' ? 'Simulación en vivo' : 'Live Workflow'}
              </button>
              <button
                onClick={() => setSelectedTab('audit')}
                className={`px-2.5 py-1 rounded-[6px] transition-colors font-medium ${
                  selectedTab === 'audit' ? 'bg-[#121417] text-white' : 'text-[#626874] hover:text-[#121417]'
                }`}
              >
                {locale === 'es' ? 'Registro de auditoría' : 'Audit Trail'}
              </button>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg border border-[#e4e7ec] bg-white text-[#626874] hover:text-[#121417] hover:bg-[#f4f5f7] transition-colors"
              title={isPlaying ? 'Pause simulation' : 'Play simulation'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#384bc7]" />}
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg border border-[#e4e7ec] bg-white text-[#626874] hover:text-[#121417] hover:bg-[#f4f5f7] transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Step Progression Ribbon */}
        <div className="grid grid-cols-5 border-b border-[#e4e7ec] bg-[#fcfdfe] text-xs">
          {[
            { id: 0, label: locale === 'es' ? '1. Capturar' : '1. Capture', icon: Mail },
            { id: 1, label: locale === 'es' ? '2. Entender' : '2. Understand', icon: Sparkles },
            { id: 2, label: locale === 'es' ? '3. Citar norma' : '3. Match', icon: FileText },
            { id: 3, label: locale === 'es' ? '4. Redactar & Reservar' : '4. Draft & Book', icon: CalendarCheck },
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
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2 border-r border-[#e4e7ec] last:border-r-0 font-mono text-[11px] transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-white text-[#384bc7] font-semibold border-b-2 border-b-[#384bc7] shadow-xs'
                    : isPassed
                    ? 'text-[#0b935d] bg-[#f8fcf9]'
                    : 'text-[#626874] hover:text-[#121417] hover:bg-[#f4f5f7]'
                }`}
              >
                {isPassed ? (
                  <Check className="w-3.5 h-3.5 text-[#0b935d]" />
                ) : (
                  <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#384bc7]' : ''}`} />
                )}
                <span className="truncate hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dual-Pane Interface */}
        {selectedTab === 'live' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Pane: Inbound Customer Thread (5 cols) */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#e4e7ec] bg-[#ffffff] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-[#e4e7ec]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Gmail · Inbound
                    </span>
                    <span className="text-[11px] text-[#626874] font-mono">23:40 CET</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#0b935d] bg-[#ddf9e4] px-2 py-0.5 rounded-full border border-[#c7f4d3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b935d] animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Customer Card */}
                <div className="mt-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f4f5f7] border border-[#e4e7ec] flex items-center justify-center font-medium text-xs text-[#121417] shrink-0 shadow-xs">
                    SM
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#121417]">Sofia Marín</span>
                      <span className="text-[11px] text-[#626874]">sofia@brightlabs.io</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#626874] font-medium mt-0.5">
                      <Building2 className="w-3 h-3 text-[#384bc7]" />
                      BrightLabs Corporate
                    </div>
                  </div>
                </div>

                {/* Email Body */}
                <div className="mt-4 p-4 rounded-xl bg-[#f8f9fb] border border-[#e4e7ec] text-[13px] leading-relaxed text-[#121417]">
                  <div className="text-[11px] font-mono text-[#626874] mb-1.5">
                    Subject: Private dinner inquiry for 24 guests (Dec 12)
                  </div>
                  <p className="font-normal text-muted-foreground">
                    “{locale === 'es' 
                      ? '¡Hola! Nos gustaría organizar una cena privada para 24 personas el 12 de diciembre. ¿Tienen espacio y menú vegetariano disponible?' 
                      : 'Hi! We’d love a private dinner for 24 on Dec 12 — do you have space and is there a vegetarian tasting menu available?'}”
                  </p>
                </div>

                {/* Metadata Pill Grid */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2.5 rounded-lg bg-[#f8f9fb] border border-[#e4e7ec]">
                    <span className="text-[#626874] block text-[10px] uppercase">Party Size</span>
                    <span className="text-[#121417] font-semibold">24 Guests</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#f8f9fb] border border-[#e4e7ec]">
                    <span className="text-[#626874] block text-[10px] uppercase">Requested Date</span>
                    <span className="text-[#121417] font-semibold">12 Dec 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#e4e7ec] flex items-center justify-between text-[11px] text-[#626874] font-mono">
                <span>Thread #774-BRIGHT</span>
                <span className="text-[#0b935d] flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0b935d]" />
                  Verified Sender
                </span>
              </div>
            </div>

            {/* Right Pane: Maxander AI Engine Workspace (7 cols) */}
            <div className="lg:col-span-7 bg-[#fafbfc] p-5 flex flex-col justify-between">
              <div className="space-y-3.5">
                {/* Engine Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#e4e7ec]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#384bc7] flex items-center justify-center text-white">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#121417]">
                      Maxander Co-Pilot Engine
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#384bc7] bg-[#eef2ff] px-2.5 py-0.5 rounded-md border border-[#c7d2fe] font-medium">
                    {locale === 'es' ? 'Precisión 99.8%' : 'Accuracy: 99.8%'}
                  </span>
                </div>

                {/* Stage 1: Classify */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    activeStep >= 0
                      ? 'bg-white border-[#e4e7ec] shadow-xs'
                      : 'bg-white/40 border-[#e4e7ec]/60 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-medium text-[#121417] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0b935d]" />
                      {t.stepClassify}
                    </span>
                    <span className="text-[10px] font-mono text-[#626874]">NLP Intent Extractor</span>
                  </div>
                  <div className="text-xs text-[#626874] font-mono bg-[#f8f9fb] p-2 rounded-lg border border-[#e4e7ec]">
                    Intent: <strong className="text-[#121417]">Private Dining</strong> · Party: <strong className="text-[#121417]">24 pax</strong> · Date: <strong className="text-[#121417]">12 Dec</strong> · Diet: <strong className="text-[#121417]">Vegetarian</strong>
                  </div>
                </div>

                {/* Stage 2: Knowledge Match */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    activeStep >= 1
                      ? 'bg-white border-[#e4e7ec] shadow-xs'
                      : 'bg-white/40 border-[#e4e7ec]/60 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-medium text-[#384bc7] flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#384bc7]" />
                      {t.stepKnowledge}
                    </span>
                    <button
                      onClick={onOpenKnowledgeModal}
                      className="text-[10px] font-mono text-[#384bc7] hover:underline cursor-pointer font-medium"
                    >
                      {locale === 'es' ? 'Ver norma' : 'Inspect citation'} →
                    </button>
                  </div>
                  <div className="text-xs text-[#626874] leading-relaxed bg-[#f8f9fb] p-2 rounded-lg border border-[#e4e7ec]">
                    “The Garden Room seats up to 28 for private dinners. Vegetarian tasting menu available at €58 per person.”
                    <div className="mt-1 text-[10px] text-[#384bc7] font-mono font-medium">
                      From: Events FAQ v4 · learned from 212 sent threads
                    </div>
                  </div>
                </div>

                {/* Stage 3: Draft Reply & Restoo Booking */}
                <div
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    activeStep >= 2
                      ? 'bg-white border-[#e4e7ec] shadow-xs'
                      : 'bg-white/40 border-[#e4e7ec]/60 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-medium text-[#121417] flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5 text-[#384bc7]" />
                      {t.stepDraft}
                    </span>
                    <span className="text-[10px] font-mono text-rose-600 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded font-medium">
                      + GardenRoom_Events.pdf
                    </span>
                  </div>
                  <div className="text-xs text-[#121417] bg-[#f8f9fb] p-2.5 rounded-lg border border-[#e4e7ec] leading-relaxed">
                    “Hi Sofia — we’d love to host you. The Garden Room accommodates 24 comfortably, and our vegetarian tasting menu is €58 per person…”
                  </div>
                </div>

                {/* Stage 4: Booking & Follow-up status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    className={`p-2.5 rounded-xl border text-xs transition-all ${
                      activeStep >= 3
                        ? 'bg-white border-[#e4e7ec] shadow-xs'
                        : 'bg-white/40 border-[#e4e7ec]/60 opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#0b935d] font-semibold">
                      <CalendarCheck className="w-3.5 h-3.5 text-[#0b935d]" />
                      {t.stepBooking}
                    </div>
                    <p className="text-[11px] text-[#626874] mt-1 font-mono">
                      Restoo hold · Garden Room · deposit link included
                    </p>
                  </div>

                  <div
                    className={`p-2.5 rounded-xl border text-xs transition-all ${
                      activeStep >= 4
                        ? 'bg-white border-[#e4e7ec] shadow-xs'
                        : 'bg-white/40 border-[#e4e7ec]/60 opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#384bc7] font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#384bc7]" />
                      {t.stepFollowup}
                    </div>
                    <p className="text-[11px] text-[#626874] mt-1 font-mono">
                      Scheduled for day 30 · auto-send ready
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Action Bar */}
              <div className="mt-4 pt-3.5 border-t border-[#e4e7ec] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isApproved ? 'bg-[#0b935d]' : 'bg-[#384bc7] animate-ping'
                    }`}
                  />
                  <span className="text-xs font-mono text-[#626874]">
                    {isApproved ? t.statusApproved : t.statusAwaiting}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {!isApproved ? (
                    <button
                      onClick={handleApprove}
                      className="w-full sm:w-auto px-4 py-2 rounded-[10px] text-xs font-semibold bg-[#121417] text-white hover:bg-[#121417]/90 transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-95 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5 text-[#0b935d]" />
                      {t.buttonApprove}
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-3.5 py-1.5 rounded-[10px] text-xs font-mono text-[#121417] border border-[#e4e7ec] bg-white hover:bg-[#f4f5f7] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3 text-[#626874]" />
                      {t.buttonReset}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Audit Log Tab View */
          <div className="p-6 bg-white text-xs font-mono text-[#626874] space-y-3 min-h-[420px]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e4e7ec]">
              <span className="text-[#121417] font-semibold">MAXANDER AUDIT TRAIL // RECORD #99281-ELF</span>
              <span className="text-[#0b935d] font-medium">IMMUTABLE LOG · EU GDPR COMPLIANT</span>
            </div>
            <div className="space-y-2.5 text-[12px] leading-relaxed">
              <p className="p-2 rounded bg-[#f8f9fb] border border-[#e4e7ec]">
                <strong className="text-[#121417]">[23:40:12 UTC]</strong> Inbound inquiry received from Gmail API (oauth: bookings@elforo.com)
              </p>
              <p className="p-2 rounded bg-[#f8f9fb] border border-[#e4e7ec]">
                <strong className="text-[#384bc7]">[23:40:13 UTC]</strong> NLP classification: intent=private_dining (0.998), date=2026-12-12 (1.00), party=24 (1.00)
              </p>
              <p className="p-2 rounded bg-[#f8f9fb] border border-[#e4e7ec]">
                <strong className="text-[#384bc7]">[23:40:14 UTC]</strong> Knowledge match: Document 'Events FAQ Autumn 2026.pdf' (Sections: 2, 4) cited in response
              </p>
              <p className="p-2 rounded bg-[#f8f9fb] border border-[#e4e7ec]">
                <strong className="text-[#0b935d]">[23:40:15 UTC]</strong> Restoo hold created: ID #84920 (Garden Room, Dec 12 20:30, 24 pax, deposit link generated)
              </p>
              <p className="p-2 rounded bg-[#f8f9fb] border border-[#e4e7ec]">
                <strong className="text-[#121417]">[23:40:15 UTC]</strong> Thread queued for operator 1-click approval (Autonomy Stage: Level 2 Drafts)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

