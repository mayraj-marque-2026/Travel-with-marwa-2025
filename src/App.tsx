import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedTour } from './components/FeaturedTour';
import { PricingSection } from './components/PricingSection';
import { DepartureSection } from './components/DepartureSection';
import { PackageIncludes } from './components/PackageIncludes';
import { ItineraryTimeline } from './components/ItineraryTimeline';
import { Attractions } from './components/Attractions';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingSection } from './components/BookingSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Header onOpenBooking={scrollToBooking} />

      {/* Main Page Layout */}
      <main>
        {/* Fullscreen Hero Section */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* Featured Tour Destinations (Naran, Kaghan, Babusar Top, Shogran) */}
        <FeaturedTour />

        {/* Pricing Section with Large Green Circular Badge (Rs. 12,500 Per Person) */}
        <PricingSection />

        {/* Departure Cities (Peshawar, Charsadda, Mardan, Swabi) */}
        <DepartureSection />

        {/* Package Includes Icon Cards */}
        <PackageIncludes />

        {/* Detailed 3-Day Itinerary Schedule */}
        <ItineraryTimeline />

        {/* Tourist Attractions (7 Scenic Destinations) */}
        <Attractions />

        {/* Image Gallery with Lightbox Modal */}
        <Gallery />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Full-width Booking Section & Contact Banner */}
        <BookingSection />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & Call Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
