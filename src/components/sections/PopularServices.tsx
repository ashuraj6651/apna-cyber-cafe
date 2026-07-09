'use client';

import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { Fingerprint, CreditCard, BookOpen, Vote, Landmark, Zap, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PopularServiceItem {
  icon: LucideIcon;
  dataKey: 'aadhaar' | 'pan' | 'passport' | 'voter' | 'banking' | 'bill';
  gradient: string;
}

const popularItems: PopularServiceItem[] = [
  {
    icon: Fingerprint,
    dataKey: 'aadhaar',
    gradient: 'from-primary to-blue-600',
  },
  {
    icon: CreditCard,
    dataKey: 'pan',
    gradient: 'from-secondary to-cyan-600',
  },
  {
    icon: BookOpen,
    dataKey: 'passport',
    gradient: 'from-accent to-teal-600',
  },
  {
    icon: Vote,
    dataKey: 'voter',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Landmark,
    dataKey: 'banking',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Zap,
    dataKey: 'bill',
    gradient: 'from-rose-500 to-pink-600',
  },
];

export default function PopularServices() {
  const { t } = useLang();
  const { ref, isVisible } = useIO();

  return (
    <section id="popular-services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${
            isVisible ? 'io-visible' : 'io-hidden'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {t.popularServices.title.split(' ').map((word, i) => (
              <span key={i}>
                {i === t.popularServices.title.split(' ').length - 1 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word + ' '
                )}
              </span>
            ))}
          </h2>
          <p className="text-text text-lg">{t.popularServices.subtitle}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {popularItems.map((item, i) => {
            const Icon = item.icon;
            const serviceData = t.popularServices[item.dataKey];
            return (
              <div
                key={item.dataKey}
                className={`premium-card rounded-2xl bg-card border border-border p-6 md:p-8 group ${
                  isVisible ? 'io-visible' : 'io-hidden'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-heading mb-3">
                  {serviceData.title}
                </h3>

                {/* Description */}
                <p className="text-text text-sm leading-relaxed mb-5">
                  {serviceData.desc}
                </p>

                {/* Learn More */}
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/btn">
                  <span>{serviceData.learnMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}