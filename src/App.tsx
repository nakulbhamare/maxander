import React, { useState, useEffect } from 'react';
import { Locale, translations } from './data/translations';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntegrationStrip } from './components/IntegrationStrip';
import { EditorialIntro } from './components/EditorialIntro';
import { OneFunnelSection } from './components/OneFunnelSection';
import { AutomationDemo } from './components/AutomationDemo';
import { GroundedAISection } from './components/GroundedAISection';
import { KnowledgeBaseSection } from './components/KnowledgeBaseSection';
import { OperationsDashboard } from './components/OperationsDashboard';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RealOutcomesSection } from './components/RealOutcomesSection';
import { IntegrationMapSection } from './components/IntegrationMapSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FounderNote } from './components/FounderNote';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { KnowledgeModal } from './components/KnowledgeModal';
import { Agentation } from 'agentation';

export const App: React.FC = () => {
  // Locale detection from URL hash / path or default to 'en'
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname.includes('/es') || window.location.hash.includes('lang=es')) {
        return 'es';
      }
    }
    return 'en';
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState<boolean>(false);

  // Sync document title and meta description when locale changes
  useEffect(() => {
    const meta = translations[locale].meta;
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const handleSelectLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    // Smooth URL update without full reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLocale);
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <div className="min-h-screen bg-white text-[#121417] flex flex-col font-sans selection:bg-[#384BC7]/15 selection:text-[#121417]">
      {/* Top Announcement Bar */}
      <AnnouncementBar
        locale={locale}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Header / Navigation */}
      <Navbar
        locale={locale}
        onSelectLocale={handleSelectLocale}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section & Interactive Application Simulation */}
        <Hero
          locale={locale}
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenKnowledgeModal={() => setIsKnowledgeModalOpen(true)}
        />

        {/* 2. Integration Strip */}
        <IntegrationStrip locale={locale} />

        {/* 3. Section [09] Problem & Inquiries Convergence Storytelling */}
        <EditorialIntro locale={locale} />

        {/* 4. Section [01] — One Funnel */}
        <OneFunnelSection
          locale={locale}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 5. Section [02] — Interactive Automation Demo */}
        <AutomationDemo locale={locale} />

        {/* 6. Section [03] — Grounded AI (Cites its sources) */}
        <GroundedAISection
          locale={locale}
          onOpenKnowledgeModal={() => setIsKnowledgeModalOpen(true)}
        />

        {/* 7. Knowledge Base Document View */}
        <KnowledgeBaseSection locale={locale} />

        {/* 8. Section [04] — One Source of Truth (Operations Dashboard) */}
        <OperationsDashboard locale={locale} />

        {/* 9. Section [05] — How It Works & Autonomy Dial */}
        <HowItWorksSection
          locale={locale}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 10. Section [06] — Real Outcomes (Madrid Venue Metrics) */}
        <RealOutcomesSection locale={locale} />

        {/* 11. Section [07] — Integrations Map */}
        <IntegrationMapSection locale={locale} />

        {/* 12. Section [08] — Pricing (Monthly / Annual Toggle) */}
        <PricingSection
          locale={locale}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 13. Section [09] — FAQ Accordion */}
        <FAQSection locale={locale} />

        {/* 14. Founder & Hospitality Heritage Note */}
        <FounderNote locale={locale} />

        {/* 15. Final Conversion CTA */}
        <FinalCTA
          locale={locale}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer locale={locale} />

      {/* Interactive Booking Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        locale={locale}
      />

      {/* Grounded Knowledge Citation Modal */}
      <KnowledgeModal
        isOpen={isKnowledgeModalOpen}
        onClose={() => setIsKnowledgeModalOpen(false)}
        locale={locale}
      />

      {/* Agentation Visual Feedback Toolbar */}
      <Agentation />
    </div>
  );
};

export default App;
