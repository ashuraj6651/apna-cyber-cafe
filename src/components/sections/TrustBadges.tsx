'use client';

import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { Shield, Lock, Zap, Users, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TrustBadgeItem {
  icon: LucideIcon;
  titleKey: 'govServices' | 'secure' | 'fast' | 'trusted' | 'experienced';
  descKey: 'govServicesDesc' | 'secureDesc' | 'fastDesc' | 'trustedDesc' | 'experiencedDesc';
  gradient: string;
}

const badges: TrustBadgeItem[] = [
  {
    icon: Shield,
    titleKey: 'govServices',
    descKey: 'govServicesDesc',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Lock,
    titleKey: 'secure',
    descKey: 'secureDesc',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Zap,
    titleKey: 'fast',
    descKey: 'fastDesc',
    gradient: 'from-accent to-secondary',
  },
  {
    icon: Users,
    titleKey: 'trusted',
    descKey: 'trustedDesc',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Award,
    titleKey: 'experienced',
    descKey: 'experiencedDesc',
    gradient: 'from-secondary to-accent',
  },
];

export default function TrustBadges() {
  const { t } = useLang();
  const { ref, isVisible } = useIO();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 ${
            isVisible ? 'io-visible' : 'io-hidden'
          }`}
        >
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.titleKey}
                className="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-heading mb-1">
                  {t.trustBadges[badge.titleKey]}
                </h3>
                <p className="text-xs text-text leading-relaxed">
                  {t.trustBadges[badge.descKey]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}