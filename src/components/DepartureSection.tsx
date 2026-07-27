import React from 'react';
import { CheckCircle2, MapPin, Clock, Navigation } from 'lucide-react';
import { DEPARTURE_CITIES } from '../data/tourData';

export const DepartureSection: React.FC = () => {
  return (
    <section id="departure" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            <span>Convenient Pickup Points</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Departure From
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We offer comfortable early morning pickups directly along the Khyber Pakhtunkhwa motorway route.
          </p>
        </div>

        {/* Departure Checkmark Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTURE_CITIES.map((city) => (
            <div
              key={city.name}
              className="group bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 rounded-2xl p-6 shadow-xl hover:shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Green Checkmark Badge */}
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-950 shrink-0" />
                    <h3 className="text-2xl font-black font-serif text-white tracking-wide">
                      ✔ {city.name}
                    </h3>
                  </div>
                  <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MapPin className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/40 w-fit">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Pickup Time: {city.pickupTime}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {city.locationDetails}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Motorway Interchange</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">Easy Pickup &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
