'use client';

import { useState } from 'react';
import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { allServiceNames, docFinderData } from '@/lib/services';
import { FileCheck, Clock, AlertCircle, Search, ChevronDown } from 'lucide-react';

export default function DocumentFinder() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useIO();
  const [selected, setSelected] = useState('');

  const entry = docFinderData.find(d => d.id === selected);

  return (
    <section id="doc-finder" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="bg-blob w-72 h-72 bg-primary top-0 right-0" />
      <div className="bg-blob w-56 h-56 bg-secondary bottom-0 left-0" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto relative z-10 ${isVisible ? 'io-visible' : 'io-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 font-heading">
            {t.docFinder.title}
          </h2>
          <p className="text-text text-lg max-w-xl mx-auto">
            {t.docFinder.subtitle}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8">
          {/* Custom Select */}
          <div className="mb-2">
            <label className="text-sm font-medium text-heading mb-1.5 block">
              {t.docFinder.selectLabel}
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted size-5" />
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3.5 pl-12 bg-white text-heading appearance-none cursor-pointer text-base transition-all duration-200 hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/15"
              >
                <option value="">{t.docFinder.selectPlaceholder}</option>
                {allServiceNames.map((s) => (
                  <option key={s.id} value={s.id}>
                    {lang === 'hi' ? s.nameHi : s.nameEn}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted size-5 pointer-events-none" />
            </div>
          </div>

          {/* Results */}
          {entry && (
            <div
              key={selected}
              className="mt-6 animate-scale-in space-y-6"
            >
              {/* Required Documents */}
              <div className="bg-secondary-bg rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileCheck className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">
                    {t.docFinder.requiredDocs}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {(lang === 'hi' ? entry.docsHi : entry.docsEn).map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-text leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Processing Time */}
              <div className="bg-secondary-bg rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Clock className="size-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">
                    {t.docFinder.processingTime}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">{entry.time}</span>
                  <span className="text-text text-lg">{t.docFinder.days}</span>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-primary-light/50 rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">
                    {t.docFinder.importantNotes}
                  </h3>
                </div>
                <p className="text-text leading-relaxed">
                  {lang === 'hi' ? entry.notesHi : entry.notesEn}
                </p>
              </div>
            </div>
          )}

          {/* Empty state when nothing selected */}
          {!entry && selected === '' && (
            <div className="mt-10 text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary-bg flex items-center justify-center">
                <Search className="size-7 text-muted" />
              </div>
              <p className="text-muted text-sm">
                {t.docFinder.selectPlaceholder}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}