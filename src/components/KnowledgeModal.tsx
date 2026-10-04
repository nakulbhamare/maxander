import React, { useEffect } from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Database, Layers } from 'lucide-react';
import { Locale } from '../data/translations';

interface KnowledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export const KnowledgeModal: React.FC<KnowledgeModalProps> = ({ isOpen, onClose, locale }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040508]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-[#232D42] bg-[#0A0D15] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#7A8296] hover:text-[#F4F2ED] hover:bg-[#141B2A] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#D6A856] mb-2">
          <Database className="w-3.5 h-3.5 text-[#ECC67A]" />
          <span>{locale === 'es' ? 'AUDITORÍA DE FUENTE ORIGINAL' : 'GROUND TRUTH CITATION AUDIT'}</span>
        </div>

        <h2 className="headline text-2xl sm:text-3xl text-[#F4F2ED]">
          {locale === 'es' ? 'Documento: FAQ Eventos y Menús 2026' : 'Document: Events FAQ & Menus 2026'}
        </h2>

        <div className="mt-4 p-4 rounded-xl bg-[#080B10] border border-[#1C2538] font-mono text-xs text-[#A8AFC0] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#161D2C] text-[11px]">
            <span className="text-[#ECC67A]">SHA256: 8f9b40...a91e</span>
            <span className="text-[#10B981] flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Verified Authenticity
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-[#F4F2ED] font-semibold">
              § 3.4 — {locale === 'es' ? 'Capacidades de la Sala Jardín' : 'Garden Room Capacities & Private Dining'}:
            </div>
            <p className="bg-[#0D121B] p-3 rounded-lg border border-[#1A2336] italic text-[#CCD2E2] leading-relaxed">
              {locale === 'es'
                ? '«La Sala Jardín tiene un aforo máximo de 28 personas para cenas privadas sentadas. El menú degustación vegetariano de temporada está disponible a 58 € por persona e incluye 5 pases con maridaje opcional.»'
                : '“The Garden Room seats up to 28 guests for seated private dinners. The seasonal vegetarian tasting menu is available at €58 per person and includes 5 courses with optional wine pairing.”'}
            </p>
          </div>

          <div className="pt-2 border-t border-[#161D2C] flex items-center justify-between text-[11px] text-[#697285]">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#7AA2F7]" />
              {locale === 'es' ? 'Contrastado con 212 hilos históricos' : 'Cross-checked against 212 historical threads'}
            </span>
            <span className="text-[#D6A856]">0% Hallucination Tolerance</span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#182133] text-[#F4F2ED] border border-[#2B3852] hover:bg-[#202C44]"
          >
            {locale === 'es' ? 'Entendido' : 'Close Audit View'}
          </button>
        </div>
      </div>
    </div>
  );
};
