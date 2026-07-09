'use client';

import { LangProvider } from '@/lib/lang-context';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import Statistics from '@/components/sections/Statistics';
import PopularServices from '@/components/sections/PopularServices';
import AllServices from '@/components/sections/AllServices';
import DocumentFinder from '@/components/sections/DocumentFinder';
import AppointmentBooking from '@/components/sections/AppointmentBooking';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import GoogleMap from '@/components/sections/GoogleMap';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/sections/FloatingButtons';

export default function Home() {
  return (
    <LangProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustBadges />
          <Statistics />
          <PopularServices />
          <AllServices />
          <DocumentFinder />
          <AppointmentBooking />
          <WhyChooseUs />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <GoogleMap />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </LangProvider>
  );
}