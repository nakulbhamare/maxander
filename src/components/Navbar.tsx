import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Locale, translations } from '../data/translations';

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
      setScrolled(window.scrollY > 15);
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
    <header className="sticky top-0 z-40 transition-all duration-300">
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-[#e4e7ec] shadow-[0_2px_8px_rgba(16,24,40,0.04)]'
            : 'bg-white/90 backdrop-blur-md border-[#e4e7ec]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            aria-label="Maxander — home"
            className="shrink-0 group flex items-center gap-2"
          >
            <span className="font-display text-xl font-medium uppercase leading-none tracking-[0.14em] text-[#121417]">
              Maxander
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#626874] transition-colors hover:text-[#121417]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="flex items-center rounded-[10px] border border-[#e4e7ec] bg-white p-0.5 text-[11px] font-medium shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
              <button
                type="button"
                onClick={() => onSelectLocale('en')}
                aria-current={locale === 'en'}
                className={`rounded-lg px-2 py-1 uppercase transition-colors ${
                  locale === 'en'
                    ? 'bg-[#121417] text-white'
                    : 'text-[#626874] hover:text-[#121417]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onSelectLocale('es')}
                aria-current={locale === 'es'}
                className={`rounded-lg px-2 py-1 uppercase transition-colors ${
                  locale === 'es'
                    ? 'bg-[#121417] text-white'
                    : 'text-[#626874] hover:text-[#121417]'
                }`}
              >
                ES
              </button>
            </div>

            {/* Sign in Button */}
            <a
              href="https://app.maxander.es/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-[10px] font-medium transition-colors border border-[#e4e7ec] bg-white text-[#121417] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-[#f4f5f7] h-9 px-4 text-[13px]"
            >
              {t.signIn}
            </a>

            {/* Book a demo Button */}
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center rounded-[10px] font-medium transition-all bg-[#121417] text-white shadow-sm hover:bg-[#121417]/90 h-9 px-4 text-[13px] active:scale-95 cursor-pointer"
            >
              {t.bookDemo}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#e4e7ec] text-[#626874] hover:bg-[#f4f5f7] hover:text-[#121417] md:hidden"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e4e7ec] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#626874] hover:text-[#121417] hover:bg-[#f4f5f7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#e4e7ec] flex flex-col gap-2.5">
            <a
              href="https://app.maxander.es/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 text-sm font-medium text-[#121417] border border-[#e4e7ec] rounded-[10px] hover:bg-[#f4f5f7]"
            >
              {t.signIn}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-[10px] text-sm font-medium bg-[#121417] text-white text-center shadow-sm hover:bg-[#121417]/90"
            >
              {t.bookDemo}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

