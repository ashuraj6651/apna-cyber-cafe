'use client';

import { useState, useEffect } from 'react';
import { businessInfo } from '@/lib/services';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={businessInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="floating-btn w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#22C55E] text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call */}
      <a
        href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
        aria-label="Call"
        className="floating-btn w-13 h-13 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`w-12 h-12 md:w-13 md:h-13 rounded-full bg-white border border-border text-text flex items-center justify-center shadow-lg hover:bg-slate-50 hover:scale-110 transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}