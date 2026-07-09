'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLang } from '@/lib/lang-context';
import { useIO } from '@/lib/hooks';

export default function Testimonials() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useIO(0.1);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reviews = t.testimonials.reviews;
  const total = reviews.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  return (
    <section
      id="testimonials"
      className="section-padding bg-secondary-bg relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="bg-blob w-72 h-72 bg-primary top-20 -left-36" />
      <div className="bg-blob w-96 h-96 bg-secondary bottom-0 -right-48" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3 font-heading">
            {t.testimonials.title}
          </h2>
          <p className="text-text text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: show 3, Mobile: show 1 */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="testimonial-track"
              style={{
                transform: `translateX(-${current * (100 / 3)}%)`,
              }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-3"
                >
                  <div
                    className={`bg-card rounded-2xl p-6 h-full transition-all duration-500 ${
                      idx === current
                        ? 'gradient-border shadow-lg'
                        : 'border border-border shadow-sm'
                    }`}
                  >
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                    <p className="text-text leading-relaxed mb-6 min-h-[72px]">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-11 h-11">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                          {review.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-heading text-sm">
                          {review.name}
                        </p>
                        <div className="flex gap-0.5 mt-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < review.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-border'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-heading hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-heading hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-8 h-3 bg-primary'
                  : 'w-3 h-3 bg-border hover:bg-muted'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}