import React from 'react';
import { ArrowDown, MessageCircle, Calendar, ShieldCheck, Sparkles, MapPin, Bus, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourData';
import heroBgImage from '../assets/images/pakistan_mountains_hero_1785138688619.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-16"
    >
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Northern Pakistan Naran Kaghan Valley Mountains"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Layered luxury dark green & slate gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-black/40 to-slate-950/70" />
      </div>

      {/* Atmospheric Floating Cloud Effect */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-30">
        <div className="absolute -top-10 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8 sm:pt-12">
        {/* Top Family Tour Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 backdrop-blur-md shadow-xl text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{BUSINESS_INFO.featuredTourTitle}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white font-bold">Rs. 12,500 / Person</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl mb-4">
          {BUSINESS_INFO.name}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg sm:text-2xl md:text-3xl font-light tracking-widest text-emerald-200 uppercase mb-8 max-w-3xl drop-shadow-md">
          {BUSINESS_INFO.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-10 text-shadow">
          Experience the breathtaking beauty of Naran, Kaghan, Babusar Top, & Shogran with Khyber Pakhtunkhwa's most trusted family tourism agency.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#tour-package"
            id="hero-view-package-btn"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-emerald-950 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
          >
            <Calendar className="w-5 h-5 text-emerald-700" />
            <span>View Package</span>
          </a>

          <a
            href={`${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefilledMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-book-whatsapp-btn"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 hover:scale-105 transition-all duration-300 text-base border border-emerald-400/30"
          >
            <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600" />
            <span>Book on WhatsApp</span>
          </a>
        </div>

        {/* Key Highlights Quick Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl bg-slate-900/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 text-left p-2 rounded-lg bg-white/5">
            <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Bus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Travel Mode</div>
              <div className="text-xs sm:text-sm font-bold text-white">Luxury Coaster</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left p-2 rounded-lg bg-white/5">
            <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Environment</div>
              <div className="text-xs sm:text-sm font-bold text-white">100% Family Safe</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left p-2 rounded-lg bg-white/5">
            <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Departures</div>
              <div className="text-xs sm:text-sm font-bold text-white">4 KPK Cities</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left p-2 rounded-lg bg-white/5">
            <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">All Included</div>
              <div className="text-xs sm:text-sm font-bold text-white">Hotel & Meals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#tour-package"
        id="hero-scroll-down-link"
        aria-label="Scroll to tour package"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Explore Tour</span>
        <ArrowDown className="w-4 h-4 text-emerald-400" />
      </a>
    </section>
  );
};
