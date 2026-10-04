import React from 'react';
import { ArrowRight, Sparkles, Shield, Check } from 'lucide-react';
import { Locale, translations } from '../data/translations';
import { HeroProductVisual } from './HeroProductVisual';
import { SpecularButton } from './ui/SpecularButton';

interface HeroProps {
  locale: Locale;
  onOpenDemo: () => void;
  onOpenKnowledgeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ locale, onOpenDemo, onOpenKnowledgeModal }) => {
  const t = translations[locale].hero;

  const channels = [
    { name: 'Gmail', icon: 'M', color: '#EA4335' },
    { name: 'Outlook', icon: 'O', color: '#0078D4' },
    { name: 'TheFork', icon: 'TF', color: '#00A19A' },
    { name: 'Restoo', icon: 'R', color: '#F25C54' },
    { name: 'WhatsApp', icon: 'WA', color: '#25D366' },
    { name: locale === 'es' ? 'Web' : 'Website', icon: '🌐', color: '#94A3B8' },
  ];

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
      {/* Background Radial Glow & Fine Grid */}
      <div className="absolute inset-0 fine-grid opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-b from-[#D6A856]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#263147] bg-[#0E131F]/90 text-xs text-[#A0A8BC] shadow-sm backdrop-blur-md mb-6 hover:border-[#D6A856]/40 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-[#ECC67A]" />
          <span className="font-mono tracking-widest uppercase text-[11px] text-[#ECC67A] font-semibold">
            {t.badge}
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="headline text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#F4F2ED] max-w-4xl mx-auto leading-[1.08]">
          {t.headlinePart1}
          <br />
          <span className="text-[#9FA6B8] font-normal italic">
            {t.headlinePart2}
          </span>
        </h1>

        {/* Concise positioning description */}
        <p className="mt-6 text-base sm:text-lg text-[#9AA1B5] max-w-2xl mx-auto leading-relaxed text-balance">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <SpecularButton
            size="lg"
            radius={14}
            tint="#D6A856"
            tintOpacity={1}
            blur={0}
            textColor="#07080B"
            lineColor="#FFFFFF"
            baseColor="#8F6E29"
            intensity={1.2}
            shineSize={14}
            shineFade={35}
            thickness={1.5}
            speed={0.35}
            followMouse={true}
            proximity={280}
            autoAnimate={false}
            onClick={onOpenDemo}
            className="w-full sm:w-auto font-semibold shadow-[0_0_30px_rgba(214,168,86,0.35)] hover:shadow-[0_0_40px_rgba(214,168,86,0.55)] transition-all"
          >
            <span className="flex items-center justify-center gap-2">
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </SpecularButton>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base font-medium text-[#F4F2ED] bg-[#0F131D] border border-[#222A3D] hover:bg-[#151B2A] hover:border-[#323D57] transition-all flex items-center justify-center gap-2"
          >
            <span>{t.ctaSecondary}</span>
            <span className="text-[#ECC67A]">→</span>
          </a>
        </div>

        {/* Trust bullet */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-mono text-[#7A8296]">
          <Shield className="w-3.5 h-3.5 text-[#10B981]" />
          <span>{t.trustText}</span>
        </div>

        {/* Multi-Channel Inbound Flow Ribbon */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {channels.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-[#1C2333] bg-[#0A0D14]/80 text-xs font-medium text-[#A0A7BA] shadow-xs hover:border-[#D6A856]/40 hover:text-[#F4F2ED] transition-all"
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: c.color }}
                />
                <span className="truncate">{c.name}</span>
              </div>
            ))}
          </div>

          {/* Animated Connecting SVG Beams */}
          <div className="hidden sm:block relative h-16 w-full my-1">
            <svg
              viewBox="0 0 600 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {[50, 150, 250, 350, 450, 550].map((x, i) => (
                <g key={x}>
                  <path
                    d={`M ${x} 0 C ${x} 32, 300 32, 300 64`}
                    stroke="#1C2436"
                    strokeWidth="1.2"
                  />
                  <path
                    d={`M ${x} 0 C ${x} 32, 300 32, 300 64`}
                    stroke="#D6A856"
                    strokeWidth="1.5"
                    strokeDasharray="8 80"
                    className="animate-beam-flow"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Hero Interactive Application Visual */}
        <HeroProductVisual locale={locale} onOpenKnowledgeModal={onOpenKnowledgeModal} />
      </div>
    </section>
  );
};
