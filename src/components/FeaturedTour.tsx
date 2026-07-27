import React from 'react';
import { Mountain, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FEATURED_LOCATIONS, BUSINESS_INFO } from '../data/tourData';

interface FeaturedTourProps {
  onSelectLocation?: (locationName: string) => void;
}

export const FeaturedTour: React.FC<FeaturedTourProps> = () => {
  return (
    <section id="tour-package" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Signature Package</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {BUSINESS_INFO.featuredTourTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Embark on an unforgettable 3-day family journey through four of Northern Pakistan's most spectacular and iconic mountain destinations.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURED_LOCATIONS.map((loc, idx) => (
            <div
              key={loc.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Number Badge */}
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 font-bold text-xs px-2.5 py-1 rounded-lg border border-white/10">
                  Stop 0{idx + 1}
                </span>

                {/* Altitude Tag */}
                {loc.altitude && (
                  <span className="absolute top-3 right-3 bg-emerald-900/80 backdrop-blur-md text-emerald-200 font-medium text-xs px-2.5 py-1 rounded-lg border border-emerald-500/30 flex items-center gap-1">
                    <Mountain className="w-3 h-3 text-emerald-400" />
                    {loc.altitude}
                  </span>
                )}

                {/* Location Title on Image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-serif text-2xl font-black text-white tracking-wide uppercase drop-shadow-md">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-emerald-300 font-medium tracking-wide">
                    {loc.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {loc.description}
                </p>

                {/* Highlights List */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Key Spot Highlights
                  </div>
                  <ul className="space-y-1.5">
                    {loc.highlights.map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Summary Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#14532D] to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
              <Mountain className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-serif text-white">All 4 Major Destinations Included</h4>
              <p className="text-emerald-200 text-sm">Naran, Kaghan, Babusar Top & Shogran in one seamless 3-Day itinerary.</p>
            </div>
          </div>
          <a
            href="#booking"
            className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold px-6 py-3 rounded-xl shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <span>Book This Tour</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
