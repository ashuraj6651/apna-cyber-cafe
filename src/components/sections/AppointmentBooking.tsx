'use client';

import { useState, type FormEvent } from 'react';
import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { allServiceNames } from '@/lib/services';
import { CalendarDays, User, Phone, Briefcase, Clock, CheckCircle, ChevronDown, Loader2 } from 'lucide-react';

export default function AppointmentBooking() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useIO();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.appointment.nameRequired;
    if (!form.phone.trim()) e.phone = t.appointment.phoneRequired;
    if (!form.service) e.service = t.appointment.serviceRequired;
    if (!form.date) e.date = t.appointment.dateRequired;
    if (!form.time) e.time = t.appointment.timeRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSuccess(true);
      setForm({ name: '', phone: '', service: '', date: '', time: '' });
      setErrors({});
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      // Silently fail — form resets on next attempt
    } finally {
      setLoading(false);
    }
  }

  function setField(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  }

  const inputClass = (field: string) =>
    `border border-border rounded-xl px-4 py-3 w-full bg-white text-heading placeholder:text-muted transition-all duration-200 hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/15 ${errors[field] ? 'border-destructive focus:border-destructive focus:ring-destructive/15' : ''}`;

  return (
    <section id="appointment" className="section-padding relative overflow-hidden">
      <div className="bg-blob w-80 h-80 bg-secondary top-10 -left-20" />
      <div className="bg-blob w-64 h-64 bg-accent bottom-10 right-0" />

      <div
        ref={ref}
        className={`max-w-2xl mx-auto relative z-10 ${isVisible ? 'io-visible' : 'io-hidden'}`}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 font-heading">
            {t.appointment.title}
          </h2>
          <p className="text-text text-lg max-w-xl mx-auto">
            {t.appointment.subtitle}
          </p>
        </div>

        {/* Success State */}
        {success ? (
          <div className="bg-white rounded-2xl shadow-lg border border-border p-10 text-center animate-scale-in">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="size-10 text-success animate-success-check" />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-2">
              {t.appointment.success}
            </h3>
            <p className="text-text text-lg">{t.appointment.successSub}</p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-heading mb-1.5 block">
                {t.appointment.nameLabel}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted size-4" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setField('name', e.target.value)}
                  placeholder={t.appointment.namePlaceholder}
                  className={`${inputClass('name')} pl-11`}
                />
              </div>
              {errors.name && (
                <p className="text-destructive text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-heading mb-1.5 block">
                {t.appointment.phoneLabel}
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted size-4" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  placeholder={t.appointment.phonePlaceholder}
                  className={`${inputClass('phone')} pl-11`}
                />
              </div>
              {errors.phone && (
                <p className="text-destructive text-xs mt-1.5">{errors.phone}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="text-sm font-medium text-heading mb-1.5 block">
                {t.appointment.serviceLabel}
              </label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-muted size-4" />
                <select
                  value={form.service}
                  onChange={(e) => setField('service', e.target.value)}
                  className={`${inputClass('service')} pl-11 appearance-none cursor-pointer pr-10`}
                >
                  <option value="">{t.appointment.servicePlaceholder}</option>
                  {allServiceNames.map((s) => (
                    <option key={s.id} value={s.id}>
                      {lang === 'hi' ? s.nameHi : s.nameEn}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted size-4 pointer-events-none" />
              </div>
              {errors.service && (
                <p className="text-destructive text-xs mt-1.5">{errors.service}</p>
              )}
            </div>

            {/* Date & Time row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Date */}
              <div>
                <label className="text-sm font-medium text-heading mb-1.5 block">
                  {t.appointment.dateLabel}
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-muted size-4" />
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setField('date', e.target.value)}
                    className={`${inputClass('date')} pl-11`}
                  />
                </div>
                {errors.date && (
                  <p className="text-destructive text-xs mt-1.5">{errors.date}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="text-sm font-medium text-heading mb-1.5 block">
                  {t.appointment.timeLabel}
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted size-4" />
                  <select
                    value={form.time}
                    onChange={(e) => setField('time', e.target.value)}
                    className={`${inputClass('time')} pl-11 appearance-none cursor-pointer pr-10`}
                  >
                    <option value="">{t.appointment.timePlaceholder}</option>
                    {t.appointment.slots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted size-4 pointer-events-none" />
                </div>
                {errors.time && (
                  <p className="text-destructive text-xs mt-1.5">{errors.time}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="ripple-btn w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  <span>{t.appointment.submit}</span>
                </>
              ) : (
                <span>{t.appointment.submit}</span>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}