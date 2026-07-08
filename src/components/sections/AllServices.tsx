'use client';

import { useState } from 'react';
import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { serviceCategories } from '@/lib/services';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import {
  IdCard,
  Fingerprint,
  Printer,
  CreditCard,
  FileEdit,
  Vote,
  BookOpen,
  Car,
  Landmark,
  Building2,
  Wallet,
  ArrowRightLeft,
  Receipt,
  Link,
  Link2,
  Shield,
  Heart,
  ShieldCheck,
  Hospital,
  Wheat,
  Sprout,
  Banknote,
  ClipboardList,
  Leaf,
  GraduationCap,
  Award,
  FileText,
  Download,
  ScrollText,
  BookMarked,
  Zap,
  Lightbulb,
  Droplets,
  Flame,
  Smartphone,
  Satellite,
  Train,
  File,
  Image,
  Copy,
  Layers,
  Scan,
  FileCheck,
  Scroll,
  IndianRupee,
  Badge,
  Home,
  FileX,
  Baby,
  Camera,
  UserCircle,
  PenTool,
  ClipboardEdit,
  Globe,
  Building,
  PenLine,
  MessageSquare,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  IdCard,
  Fingerprint,
  Printer,
  CreditCard,
  FileEdit,
  Vote,
  BookOpen,
  Car,
  Landmark,
  Building2,
  Wallet,
  ArrowRightLeft,
  Receipt,
  Link,
  Link2,
  Shield,
  Heart,
  ShieldCheck,
  Hospital,
  Wheat,
  Sprout,
  Banknote,
  ClipboardList,
  Leaf,
  GraduationCap,
  Award,
  FileText,
  Download,
  ScrollText,
  BookMarked,
  Zap,
  Lightbulb,
  Droplets,
  Flame,
  Smartphone,
  Satellite,
  Train,
  File,
  Image,
  Copy,
  Layers,
  Scan,
  FileCheck,
  Scroll,
  IndianRupee,
  Badge,
  Home,
  FileX,
  Baby,
  Camera,
  UserCircle,
  PenTool,
  ClipboardEdit,
  Globe,
  Building,
  PenLine,
  MessageSquare,
};

const categoryGradients: string[] = [
  'from-primary to-blue-600',
  'from-secondary to-cyan-600',
  'from-accent to-teal-600',
  'from-emerald-500 to-green-600',
  'from-violet-500 to-purple-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-indigo-500 to-blue-600',
  'from-fuchsia-500 to-pink-600',
  'from-sky-500 to-cyan-600',
  'from-lime-500 to-green-600',
];

export default function AllServices() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useIO();
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="all-services" className="section-padding bg-secondary-bg" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${
            isVisible ? 'io-visible' : 'io-hidden'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {t.allServices.title.split(' ').map((word, i) => (
              <span key={i}>
                {i === t.allServices.title.split(' ').length - 1 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word + ' '
                )}
              </span>
            ))}
          </h2>
          <p className="text-text text-lg">{t.allServices.subtitle}</p>
        </div>

        {/* Categories Grid */}
        <div
          className={`grid md:grid-cols-2 gap-4 md:gap-5 ${
            isVisible ? 'io-visible' : 'io-hidden'
          }`}
        >
          {serviceCategories.map((category, catIdx) => {
            const isOpen = openCategories.has(category.id);
            const CategoryIcon = iconMap[category.icon] || FileText;
            const gradient = categoryGradients[catIdx % categoryGradients.length];

            return (
              <Collapsible
                key={category.id}
                open={isOpen}
                onOpenChange={() => toggleCategory(category.id)}
                className="rounded-2xl bg-card border border-border overflow-hidden premium-card"
              >
                {/* Category Header / Trigger */}
                <CollapsibleTrigger className="w-full flex items-center gap-4 p-5 md:p-6 text-left hover:bg-muted-bg/50 transition-colors">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-heading truncate">
                      {lang === 'hi' ? category.nameHi : category.nameEn}
                    </h3>
                    <p className="text-xs text-text mt-0.5">
                      {category.services.length}{' '}
                      {lang === 'hi' ? 'सेवाएं' : 'services'}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </CollapsibleTrigger>

                {/* Expandable Service List */}
                <CollapsibleContent>
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="border-t border-border pt-4 flex flex-wrap gap-2">
                      {category.services.map((service) => {
                        const ServiceIcon = iconMap[service.icon] || FileText;
                        return (
                          <div
                            key={service.id}
                            className="inline-flex items-center gap-2 bg-muted-bg hover:bg-primary-light/60 rounded-xl px-3.5 py-2.5 transition-colors group cursor-default"
                          >
                            <ServiceIcon className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm font-medium text-text group-hover:text-primary transition-colors whitespace-nowrap">
                              {lang === 'hi' ? service.nameHi : service.nameEn}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
}