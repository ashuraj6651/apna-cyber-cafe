'use client';

import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';
import { businessInfo } from '@/lib/services';
import { MapPin, Navigation, Share2 } from 'lucide-react';

export default function GoogleMap() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useIO();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: businessInfo.name,
          text: lang === 'hi'
            ? `Apna Cyber Cafe - ${businessInfo.address}`
            : `${businessInfo.name} - ${businessInfo.address}`,
          url: businessInfo.mapDirectionsUrl,
        });
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(businessInfo.address);
    }
  };

  return (
    <section id="map" className="section-padding bg-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'io-visible' : 'io-hidden'}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t.map.title}
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            {t.map.subtitle}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
          <iframe
            src={businessInfo.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Apna Cyber Cafe Location"
            className="w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <a
            href={businessInfo.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ripple-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <Navigation className="w-5 h-5" />
            {t.map.direction}
          </a>
          <button
            onClick={handleShare}
            className="ripple-btn inline-flex items-center justify-center gap-2 bg-white border-2 border-border text-heading px-8 py-3.5 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
            {t.map.share}
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-text">
          <MapPin className="w-5 h-5 text-primary" />
          <p className="text-sm md:text-base">{businessInfo.address}</p>
        </div>
      </div>
    </section>
  );
}