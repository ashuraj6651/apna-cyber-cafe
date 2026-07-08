'use client';

import { useState } from 'react';
import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { useToast } from '@/hooks/use-toast';
import { businessInfo } from '@/lib/services';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  User,
  Mail,
  FileText,
} from 'lucide-react';

export default function Contact() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useIO();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      toast({ title: t.contact.sent });
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast({ title: 'Error', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: businessInfo.phone,
      href: `tel:${businessInfo.phone.replace(/\s/g, '')}`,
      color: 'from-primary to-primary-dark',
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: 'WhatsApp Chat',
      href: businessInfo.whatsapp,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: 'Sultanganj, Bihar 813213',
      href: businessInfo.mapDirectionsUrl,
      color: 'from-secondary to-accent',
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: lang === 'hi' ? '9:00 AM - 7:00 PM' : '9:00 AM - 7:00 PM',
      href: null,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary-bg">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'io-visible' : 'io-hidden'}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t.contact.title}
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="premium-card bg-white rounded-2xl p-5 border border-border"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-muted font-medium mb-1">{card.label}</p>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-heading font-semibold text-sm hover:text-primary transition-colors animated-underline inline-block"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-heading font-semibold text-sm">{card.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <h3 className="text-xl font-bold text-heading mb-6">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-heading mb-1.5 block">
                  {t.contact.nameLabel}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-heading placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-heading mb-1.5 block">
                  {t.contact.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-heading placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-heading mb-1.5 block">
                  {t.contact.messageLabel}
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 w-5 h-5 text-muted" />
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    rows={4}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-heading placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="ripple-btn w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 disabled:opacity-60"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}