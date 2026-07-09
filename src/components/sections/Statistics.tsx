'use client';

import { useLang } from '@/lib/lang-context';
import { useIO, useCounter } from '@/lib/hooks';
import { Users, Layers, Star, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  labelKey: 'happyCustomers' | 'services' | 'googleRating' | 'documentsCompleted';
  gradient: string;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    labelKey: 'happyCustomers',
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: Layers,
    value: 15,
    suffix: '+',
    labelKey: 'services',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Star,
    value: 4.3,
    suffix: '★',
    labelKey: 'googleRating',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: FileCheck,
    value: 1000,
    suffix: '+',
    labelKey: 'documentsCompleted',
    gradient: 'from-accent to-secondary',
  },
];

function StatCard({ stat, isVisible, label }: { stat: StatItem; isVisible: boolean; label: string }) {
  const Icon = stat.icon;
  const isDecimal = stat.value % 1 !== 0;
  const target = isDecimal ? stat.value * 10 : stat.value;
  const raw = useCounter(target, 2000, isVisible);
  const display = isDecimal ? (raw / 10).toFixed(1) : raw;

  return (
    <div className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group overflow-hidden">
      {/* Subtle gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/3 group-hover:to-accent/3 transition-all duration-500" />

      <div className="relative z-10">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-2 tabular-nums">
          {display}
          <span className="text-primary">{stat.suffix}</span>
        </div>
        <p className="text-sm text-text font-medium">{label}</p>
      </div>
    </div>
  );
}

export default function Statistics() {
  const { t } = useLang();
  const { ref, isVisible } = useIO();

  return (
    <section className="section-padding bg-secondary-bg" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ${
            isVisible ? 'io-visible' : 'io-hidden'
          }`}
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.labelKey}
              stat={stat}
              isVisible={isVisible}
              label={t.stats[stat.labelKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}