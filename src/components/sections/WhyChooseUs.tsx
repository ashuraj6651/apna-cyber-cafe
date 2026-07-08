'use client';

import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { Zap, Users, Shield, Headphones, Building } from 'lucide-react';

const features = [
  { key: 'fast' as const, Icon: Zap },
  { key: 'trusted' as const, Icon: Users },
  { key: 'secure' as const, Icon: Shield },
  { key: 'support' as const, Icon: Headphones },
  { key: 'gov' as const, Icon: Building },
];

export default function WhyChooseUs() {
  const { t } = useLang();
  const { ref, isVisible } = useIO();

  return (
    <section id="why-us" className="section-padding bg-secondary-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="bg-blob w-60 h-60 bg-primary top-20 right-10" />
      <div className="bg-blob w-48 h-48 bg-accent bottom-20 left-10" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto relative z-10 ${isVisible ? 'io-visible' : 'io-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 font-heading">
            {t.whyUs.title}
          </h2>
          <p className="text-text text-lg max-w-xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ key, Icon }, i) => (
            <div
              key={key}
              className="premium-card bg-white rounded-2xl p-6 md:p-7 border border-border shadow-sm group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/20">
                <Icon className="size-6 text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-heading mb-2 font-heading">
                {t.whyUs[key].title}
              </h3>

              {/* Description */}
              <p className="text-text leading-relaxed">
                {t.whyUs[key].desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}