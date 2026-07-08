'use client';

import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { Search, MapPin, Upload, CheckCircle } from 'lucide-react';

const steps = [
  { key: 'step1' as const, Icon: Search, num: 1 },
  { key: 'step2' as const, Icon: MapPin, num: 2 },
  { key: 'step3' as const, Icon: Upload, num: 3 },
  { key: 'step4' as const, Icon: CheckCircle, num: 4 },
];

export default function HowItWorks() {
  const { t } = useLang();
  const { ref, isVisible } = useIO();

  return (
    <section className="section-padding bg-secondary-bg relative overflow-hidden">
      <div className="bg-blob w-64 h-64 bg-accent top-0 left-1/2 -translate-x-1/2" />

      <div
        ref={ref}
        className={`max-w-5xl mx-auto relative z-10 ${isVisible ? 'io-visible' : 'io-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 font-heading">
            {t.howItWorks.title}
          </h2>
          <p className="text-text text-lg max-w-xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Timeline – vertical on mobile, horizontal on md+ */}
        <div className="relative">
          {/* ---- Desktop: horizontal layout ---- */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting line behind the circles */}
            <div className="absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[3px] rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

            {steps.map(({ key, Icon, num }) => (
              <div key={key} className="flex flex-col items-center text-center w-1/4 relative z-10">
                {/* Circle */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/25 mb-5 ring-4 ring-white">
                  {num}
                </div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary-light/60 flex items-center justify-center mb-3">
                  <Icon className="size-5 text-primary" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-heading mb-1.5 font-heading">
                  {t.howItWorks[key].title}
                </h3>
                <p className="text-text text-sm leading-relaxed max-w-[200px]">
                  {t.howItWorks[key].desc}
                </p>
              </div>
            ))}
          </div>

          {/* ---- Mobile: vertical layout ---- */}
          <div className="flex flex-col gap-8 md:hidden relative pl-12">
            {/* Vertical connecting line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

            {steps.map(({ key, Icon, num }) => (
              <div key={key} className="relative flex gap-5 items-start">
                {/* Circle */}
                <div className="absolute -left-12 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-base shadow-lg shadow-primary/25 ring-4 ring-secondary-bg z-10">
                  {num}
                </div>

                {/* Content card */}
                <div className="bg-white rounded-2xl border border-border p-5 shadow-sm flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary-light/60 flex items-center justify-center flex-shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-heading font-heading">
                      {t.howItWorks[key].title}
                    </h3>
                  </div>
                  <p className="text-text text-sm leading-relaxed">
                    {t.howItWorks[key].desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}