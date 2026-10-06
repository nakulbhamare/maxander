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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121417]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#667085] hover:text-[#121417] hover:bg-[#F2F4F7] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#384BC7] mb-2 font-semibold">
          <Database className="w-3.5 h-3.5 text-[#384BC7]" />
          <span>{locale === 'es' ? 'AUDITORÍA DE FUENTE ORIGINAL' : 'GROUND TRUTH CITATION AUDIT'}</span>
        </div>

        <h2 className="headline text-2xl sm:text-3xl text-[#121417]">
          {locale === 'es' ? 'Documento: FAQ Eventos y Menús 2026' : 'Document: Events FAQ & Menus 2026'}
        </h2>

        <div className="mt-4 p-4 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] font-mono text-xs text-[#475467] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#E4E7EC] text-[11px]">
            <span className="text-[#384BC7] font-semibold">SHA256: 8f9b40...a91e</span>
            <span className="text-[#0B935D] flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3 h-3" />
              Verified Authenticity
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-[#121417] font-semibold">
              § 3.4 — {locale === 'es' ? 'Capacidades de la Sala Jardín' : 'Garden Room Capacities & Private Dining'}:
            </div>
            <p className="bg-white p-3 rounded-lg border border-[#E4E7EC] italic text-[#344054] leading-relaxed shadow-xs">
              {locale === 'es'
                ? '«La Sala Jardín tiene un aforo máximo de 28 personas para cenas privadas sentadas. El menú degustación vegetariano de temporada está disponible a 58 € por persona e incluye 5 pases con maridaje opcional.»'
                : '“The Garden Room seats up to 28 guests for seated private dinners. The seasonal vegetarian tasting menu is available at €58 per person and includes 5 courses with optional wine pairing.”'}
            </p>
          </div>

          <div className="pt-2 border-t border-[#E4E7EC] flex items-center justify-between text-[11px] text-[#667085]">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#384BC7]" />
              {locale === 'es' ? 'Contrastado con 212 hilos históricos' : 'Cross-checked against 212 historical threads'}
            </span>
            <span className="text-[#0B935D] font-semibold">0% Hallucination Tolerance</span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#121417] text-white hover:bg-[#22262F] transition-all cursor-pointer"
          >
            {locale === 'es' ? 'Entendido' : 'Close Audit View'}
          </button>
        </div>
      </div>
    </div>
  );
};
