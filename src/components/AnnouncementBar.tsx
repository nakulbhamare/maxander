import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Locale, translations } from '../data/translations';

interface AnnouncementBarProps {
  locale: Locale;
  onOpenDemo: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ locale, onOpenDemo }) => {
  const t = translations[locale].announcement;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#121417] text-[#ffffff] text-[13px] font-medium">
      <div className="flex h-10 items-center justify-center px-4 text-center">
        <button
          onClick={onOpenDemo}
          className="group inline-flex items-center justify-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-90 focus-visible:outline-none"
        >
          <span className="truncate">
            {locale === 'es' 
              ? 'Nuevo — Maxander ahora crea reservas en Restoo, directo desde la bandeja de entrada' 
              : 'New — Maxander now creates bookings in Restoo, straight from the inbox'}
          </span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </aside>
  );
};

