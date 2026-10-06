import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, Building, Mail, User, ChevronRight } from 'lucide-react';
import { Locale, translations } from '../data/translations';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, locale }) => {
  const t = translations[locale].modal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    venue: '',
    venueType: t.venueTypes[0] || 'Fine Dining',
    date: '2026-10-08',
    time: '16:00'
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#384BC7', '#0B935D', '#121417', '#E4E7EC']
      });
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121417]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#667085] hover:text-[#121417] hover:bg-[#F2F4F7] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#384BC7] mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#384BC7]" />
              <span>{locale === 'es' ? 'SESIÓN PERSONALIZADA' : 'TAILORED WALKTHROUGH'}</span>
            </div>

            <h2 className="headline text-2xl sm:text-3xl text-[#121417]">
              {t.bookDemoTitle}
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-[#475467] leading-relaxed">
              {t.bookDemoSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#475467] mb-1.5">
                    {t.nameLabel} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexander Gomez"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs text-[#121417] focus:border-[#384BC7] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#475467] mb-1.5">
                    {t.emailLabel} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@elforo.com"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs text-[#121417] focus:border-[#384BC7] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#475467] mb-1.5">
                    {t.venueLabel} *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="Restaurante El Foro"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs text-[#121417] focus:border-[#384BC7] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#475467] mb-1.5">
                    {t.venueTypeLabel}
                  </label>
                  <select
                    value={formData.venueType}
                    onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs text-[#121417] focus:border-[#384BC7] focus:outline-none transition-colors"
                  >
                    {t.venueTypes.map((type) => (
                      <option key={type} value={type} className="bg-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Slot date & time */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-mono text-[#475467] mb-1.5">
                    {t.dateLabel}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs text-[#121417] focus:border-[#384BC7] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#475467] mb-1.5">
                    {t.timeLabel}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs text-[#121417] focus:border-[#384BC7] focus:outline-none transition-colors"
                    >
                      <option value="10:00">10:00 CET</option>
                      <option value="12:30">12:30 CET</option>
                      <option value="16:00">16:00 CET</option>
                      <option value="18:30">18:30 CET</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold bg-[#384BC7] text-white hover:bg-[#2F3FA6] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t.submitting}</span>
                  ) : (
                    <>
                      <span>{t.submitButton}</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#0B935D]/10 border border-[#0B935D]/20 text-[#0B935D] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="headline text-2xl sm:text-3xl text-[#121417]">
              {t.successTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#475467] leading-relaxed max-w-sm mx-auto">
              {t.successMessage}
            </p>

            <div className="p-4 rounded-xl bg-[#F9FAFB] border border-[#E4E7EC] text-xs font-mono text-[#384BC7] text-left space-y-1">
              <div><span className="text-[#667085]">Host:</span> Maxander Product Specialist</div>
              <div><span className="text-[#667085]">Date & Time:</span> {formData.date} at {formData.time} CET</div>
              <div><span className="text-[#667085]">Venue:</span> {formData.venue || 'Your Venue'}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 rounded-xl text-xs font-semibold bg-[#121417] text-white hover:bg-[#22262F]"
              >
                {t.closeButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
