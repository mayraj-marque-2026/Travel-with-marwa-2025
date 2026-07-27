import React from 'react';
import { MapPin, Sparkles, Compass, Waves, Trees, Mountain, Sun } from 'lucide-react';
import { TOURIST_ATTRACTIONS } from '../data/tourData';

export const Attractions: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-emerald-600" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-emerald-600" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="attractions" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#14532d_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Scenic Wonders</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Tourist Attractions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore 7 breathtaking natural marvels across Kaghan, Naran, and high mountain passes.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TOURIST_ATTRACTIONS.map((spot, idx) => (
            <div
              key={spot.id}
              className={`group bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/50 shadow-xl hover:shadow-emerald-950/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2 lg:flex-row' : ''
              }`}
            >
              {/* Image Banner */}
              <div className={`relative overflow-hidden bg-slate-950 ${idx === 0 ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-48'}`}>
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <span className="absolute top-3 left-3 bg-emerald-950/80 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-emerald-500/30">
                  {spot.category}
                </span>
              </div>

              {/* Content Body */}
              <div className={`p-5 flex-1 flex flex-col justify-between ${idx === 0 ? 'lg:w-1/2 p-6' : ''}`}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      {getIcon(spot.icon)}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {spot.name}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {spot.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                  <span>Photo Point & Sightseeing</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
