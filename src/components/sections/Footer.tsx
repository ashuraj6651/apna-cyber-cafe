'use client';

import { useLang } from '@/lib/lang-context';
import { businessInfo } from '@/lib/services';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Heart,
} from 'lucide-react';

const footerLinks = [
  { labelHi: 'होम', labelEn: 'Home', href: '#hero' },
  { labelHi: 'सेवाएं', labelEn: 'Services', href: '#services' },
  { labelHi: 'हमें क्यों चुनें', labelEn: 'Why Us', href: '#why-us' },
  { labelHi: 'संपर्क करें', labelEn: 'Contact', href: '#contact' },
  { labelHi: 'FAQ', labelEn: 'FAQ', href: '#faq' },
  { labelHi: 'अपॉइंटमेंट', labelEn: 'Appointment', href: '#appointment' },
];

const footerServices = [
  { labelHi: 'Aadhaar Update', labelEn: 'Aadhaar Update' },
  { labelHi: 'PAN Card', labelEn: 'PAN Card' },
  { labelHi: 'Passport', labelEn: 'Passport' },
  { labelHi: 'Banking', labelEn: 'Banking' },
  { labelHi: 'Bill Payment', labelEn: 'Bill Payment' },
  { labelHi: 'Insurance', labelEn: 'Insurance' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Apna Cyber Cafe"
                className="h-11 w-11 rounded-xl object-cover shadow-lg border border-white/10"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">Apna Cyber Cafe</span>
                <span className="text-[11px] text-white/50 font-medium">CSC • Sultanganj, Bihar</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {lang === 'hi' ? link.labelHi : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.ourServices}</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s, i) => (
                <li key={i}>
                  <span className="text-white/60 text-sm inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {lang === 'hi' ? s.labelHi : s.labelEn}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contactUs}</h4>
            <div className="space-y-3">
              <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="flex items-start gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                {businessInfo.phone}
              </a>
              <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4 mt-0.5 text-green-400 shrink-0" />
                WhatsApp
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                Sultanganj, Bihar 813213
              </div>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <Clock className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                {lang === 'hi' ? 'सुबह 9:00 - शाम 7:00' : '9:00 AM - 7:00 PM'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            {t.footer.madeWith}
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            {t.footer.rights} <Heart className="w-3 h-3 text-red-400 fill-red-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}