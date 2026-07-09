'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/lib/lang-context';
import { Menu, Globe, X } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { key: 'home', href: '#hero' },
  { key: 'services', href: '#services' },
  { key: 'popular', href: '#popular-services' },
  { key: 'allServices', href: '#all-services' },
  { key: 'docFinder', href: '#doc-finder' },
  { key: 'booking', href: '#appointment' },
  { key: 'whyUs', href: '#why-us' },
  { key: 'contact', href: '#contact' },
  { key: 'faq', href: '#faq' },
] as const;

export default function Navbar() {
  const { lang, t, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2.5 shrink-0"
          >
            <img
              src="/logo.jpg"
              alt="Apna Cyber Cafe"
              className="h-10 w-10 rounded-xl object-cover shadow-md"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="gradient-text font-bold text-base tracking-tight">
                Apna Cyber Cafe
              </span>
              <span className="text-[10px] text-muted font-medium -mt-0.5">CSC • Sultanganj</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="animated-underline px-3 py-2 text-sm font-medium text-text hover:text-primary transition-colors rounded-lg"
              >
                {t.nav[link.key]}
              </button>
            ))}
          </div>

          {/* Right Section: Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <div className="flex items-center bg-muted-bg rounded-full p-0.5">
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  lang === 'hi'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text hover:text-primary'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  lang === 'en'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text hover:text-primary'
                }`}
              >
                English
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-xl hover:bg-muted-bg transition-colors">
                    <Menu className="w-5 h-5 text-heading" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <SheetHeader className="p-6 pb-4 border-b border-border">
                    <SheetTitle className="flex items-center gap-2.5">
                      <img
                        src="/logo.jpg"
                        alt="Apna Cyber Cafe"
                        className="h-9 w-9 rounded-lg object-cover shadow-md"
                      />
                      <div className="flex flex-col leading-tight">
                        <span className="gradient-text font-bold text-sm">Apna Cyber Cafe</span>
                        <span className="text-[10px] text-muted font-medium">CSC • Sultanganj</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-8rem)]">
                    {navLinks.map((link) => (
                      <button
                        key={link.key}
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center gap-3 px-6 py-3.5 text-sm font-medium text-text hover:text-primary hover:bg-primary-light/50 transition-all text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary" />
                        {t.nav[link.key]}
                      </button>
                    ))}
                  </div>
                  {/* Mobile Language Toggle */}
                  <div className="p-6 border-t border-border mt-auto">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-muted" />
                      <span className="text-xs font-medium text-muted">
                        Language
                      </span>
                    </div>
                    <div className="flex items-center bg-muted-bg rounded-full p-0.5">
                      <button
                        onClick={() => setLang('hi')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          lang === 'hi'
                            ? 'bg-primary text-white shadow-md'
                            : 'text-text hover:text-primary'
                        }`}
                      >
                        हिन्दी
                      </button>
                      <button
                        onClick={() => setLang('en')}
                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          lang === 'en'
                            ? 'bg-primary text-white shadow-md'
                            : 'text-text hover:text-primary'
                        }`}
                      >
                        English
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}