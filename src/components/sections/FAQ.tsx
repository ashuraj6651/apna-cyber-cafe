'use client';

import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useIO(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = t.faq.items;

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="section-padding bg-card relative overflow-hidden">
      <div className="bg-blob w-80 h-80 bg-accent top-10 -right-40" />

      <div
        ref={ref}
        className={`max-w-3xl mx-auto relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3 font-heading">
            {t.faq.title}
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-primary/30 shadow-md shadow-primary/5'
                    : 'border-border shadow-sm hover:shadow-md hover:border-primary/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span
                    className={`font-medium transition-colors duration-200 ${
                      isOpen ? 'text-primary' : 'text-heading'
                    }`}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                  <div>
                    <p className="px-5 pb-5 text-text leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}