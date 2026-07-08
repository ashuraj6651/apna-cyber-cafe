'use client';

import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { Phone, MessageCircle, Shield } from 'lucide-react';
import { businessInfo } from '@/lib/services';

export default function Hero() {
  const { t } = useLang();
  const { ref, isVisible } = useIO(0.05);

  const floatingCards = [
    {
      title: t.hero.floatingCard1Title,
      desc: t.hero.floatingCard1Desc,
      delay: 'delay-100',
      position: 'top-8 -right-4 md:top-12 md:right-4',
      icon: <Shield className="w-5 h-5 text-primary" />,
    },
    {
      title: t.hero.floatingCard2Title,
      desc: t.hero.floatingCard2Desc,
      delay: 'delay-300',
      position: 'top-1/2 -right-2 md:top-1/2 md:-right-8',
      icon: (
        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
    },
    {
      title: t.hero.floatingCard3Title,
      desc: t.hero.floatingCard3Desc,
      delay: 'delay-500',
      position: 'bottom-8 -right-4 md:bottom-12 md:right-8',
      icon: (
        <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" />
          <path d="M2 20h20" />
          <path d="M12 4v4" />
          <circle cx="12" cy="14" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      ref={ref}
    >
      {/* Background Blobs */}
      <div className="bg-blob w-[500px] h-[500px] bg-primary -top-40 -left-40 animate-blob" />
      <div className="bg-blob w-[400px] h-[400px] bg-secondary top-1/3 -right-32 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="bg-blob w-[300px] h-[300px] bg-accent bottom-0 left-1/3 animate-blob" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'io-visible-left' : 'io-hidden-left'}`}>
            {/* CSC Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                {t.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6">
              {t.hero.headline.split(' ').map((word, i) => (
                <span key={i}>
                  {i === t.hero.headline.split(' ').length - 1 ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word + ' '
                  )}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-text leading-relaxed mb-8 max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${businessInfo.phone}`}
                className="ripple-btn inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>{t.hero.cta1}</span>
              </a>
              <a
                href={businessInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-btn inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-heading font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-black/5 border border-border hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-success" />
                <span>{t.hero.cta2}</span>
              </a>
            </div>
          </div>

          {/* Right: Cyber Cafe Image + Floating Cards */}
          <div className={`${isVisible ? 'io-visible' : 'io-hidden'} relative hidden md:block`}>
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 blur-2xl" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 border border-white/50">
                <img
                  src="/hero-cafe.jpg"
                  alt="Apna Cyber Cafe - Digital Service Center"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Rating badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-xl animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4].map(i => (
                      <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                    <svg className="w-4 h-4 fill-amber-400/40 text-amber-400/40" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-heading">4.3★</span>
                </div>
              </div>

              {/* Floating Glass Cards */}
              {floatingCards.map((card, i) => (
                <div
                  key={i}
                  className={`absolute ${card.position} animate-float`}
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <div className="glass rounded-2xl px-4 py-3 shadow-lg shadow-black/5 min-w-[160px]">
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center">
                        {card.icon}
                      </div>
                      <span className="text-sm font-semibold text-heading whitespace-nowrap">
                        {card.title}
                      </span>
                    </div>
                    <p className="text-xs text-text ml-[2.5rem]">{card.desc}</p>
                  </div>
                </div>
              ))}

              {/* Decorative dots */}
              <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-primary/20 animate-float" />
              <div className="absolute -bottom-2 right-8 w-2 h-2 rounded-full bg-secondary/30 animate-float-slow" />
              <div className="absolute top-8 -right-2 w-2.5 h-2.5 rounded-full bg-accent/25 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}