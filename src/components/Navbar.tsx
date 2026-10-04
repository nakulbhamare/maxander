import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Locale, translations } from '../data/translations';
import { DepthText } from './ui/DepthText';

interface NavbarProps {
  locale: Locale;
  onSelectLocale: (l: Locale) => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ locale, onSelectLocale, onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[locale].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.product, href: '#product' },
    { label: t.howItWorks, href: '#how-it-works' },
    { label: t.integrations, href: '#integrations' },
    { label: t.pricing, href: '#pricing' },
    { label: t.faq, href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080B]/90 backdrop-blur-md border-b border-[#1A202C] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            aria-label="Maxander home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6A856]"
          >
            <div className="w-8 h-8 rounded-lg bg-[#121620] border border-[#252C3E] flex items-center justify-center shadow-inner group-hover:border-[#D6A856]/40 transition-colors">
              <span className="font-display text-lg font-medium text-[#F4F2ED] leading-none">M</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl font-medium tracking-[0.14em] uppercase text-[#F4F2ED]">
                Maxander
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6A856] inline-block animate-pulse"></span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#989FAEP] text-[#9EA4B5] hover:text-[#F4F2ED] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-[#202738] bg-[#0E1118] p-0.5 text-[11px] font-mono shadow-sm">
              <button
                onClick={() => onSelectLocale('en')}
                className={`px-2 py-1 rounded-[5px] uppercase transition-all ${
                  locale === 'en'
                    ? 'bg-[#1D2434] text-[#F4F2ED] font-semibold shadow-xs border border-[#2F384E]'
                    : 'text-[#82889A] hover:text-[#F4F2ED]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onSelectLocale('es')}
                className={`px-2 py-1 rounded-[5px] uppercase transition-all ${
                  locale === 'es'
                    ? 'bg-[#1D2434] text-[#F4F2ED] font-semibold shadow-xs border border-[#2F384E]'
                    : 'text-[#82889A] hover:text-[#F4F2ED]'
                }`}
              >
                ES
              </button>
            </div>

            {/* Sign in */}
            <a
              href="https://app.maxander.es/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-[#A0A5B5] hover:text-[#F4F2ED] px-3 py-1.5 rounded-lg hover:bg-[#121620] border border-transparent hover:border-[#222B3D] transition-all"
            >
              {t.signIn}
            </a>

            {/* Primary CTA */}
            <button
              onClick={onOpenDemo}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium bg-[#D6A856] text-[#07080B] shadow-[0_0_18px_rgba(214,168,86,0.25)] hover:bg-[#ECC67A] hover:shadow-[0_0_24px_rgba(214,168,86,0.4)] transition-all transform active:scale-95 cursor-pointer"
            >
              <DepthText
                text={t.bookDemo}
                layers={12}
                depth={0.9}
                faceColor="#07080B"
                depthColor="#8A6720"
                tilt={6}
                pointerTracking
                smoothing={0.14}
                perspective={800}
                fontSize="13px"
                fontWeight={600}
                shadow={false}
              />
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 text-[#07080B]" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center rounded-lg border border-[#202738] bg-[#0E1118] p-0.5 text-[11px] font-mono">
              <button
                onClick={() => onSelectLocale('en')}
                className={`px-1.5 py-0.5 rounded-[4px] uppercase ${
                  locale === 'en' ? 'bg-[#1D2434] text-[#F4F2ED]' : 'text-[#82889A]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onSelectLocale('es')}
                className={`px-1.5 py-0.5 rounded-[4px] uppercase ${
                  locale === 'es' ? 'bg-[#1D2434] text-[#F4F2ED]' : 'text-[#82889A]'
                }`}
              >
                ES
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#222B3D] bg-[#0E1118] text-[#A0A5B5] hover:text-[#F4F2ED]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0C11] border-b border-[#1E2536] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#A0A5B5] hover:text-[#F4F2ED] hover:bg-[#121622] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#1C2232] flex flex-col gap-2.5">
            <a
              href="https://app.maxander.es/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 text-sm font-medium text-[#A0A5B5] border border-[#20273A] rounded-lg"
            >
              {t.signIn}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-lg text-sm font-medium bg-[#D6A856] text-[#07080B] text-center font-medium shadow-md"
            >
              {t.bookDemo}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
