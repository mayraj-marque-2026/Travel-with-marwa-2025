import React from 'react';
import { Bus, Hotel, Coffee, Utensils, Camera, Users, Sparkles, Check } from 'lucide-react';
import { PACKAGE_INCLUDES } from '../data/tourData';

export const PackageIncludes: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bus':
        return <Bus className="w-8 h-8 text-emerald-600" />;
      case 'Hotel':
        return <Hotel className="w-8 h-8 text-emerald-600" />;
      case 'Coffee':
        return <Coffee className="w-8 h-8 text-emerald-600" />;
      case 'Utensils':
        return <Utensils className="w-8 h-8 text-emerald-600" />;
      case 'Camera':
        return <Camera className="w-8 h-8 text-emerald-600" />;
      case 'Users':
      default:
        return <Users className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section id="inclusions" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Complete Comfort</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Package Includes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every ticket includes full access to all essential trip amenities so you can focus on creating memories.
          </p>
        </div>

        {/* 6 Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGE_INCLUDES.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-50 hover:bg-emerald-950 hover:text-white rounded-2xl p-8 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Container with Gradient Background */}
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 group-hover:bg-emerald-800/50 flex items-center justify-center transition-colors duration-300 border border-emerald-200 group-hover:border-emerald-600">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-600 group-hover:text-emerald-400">
                    <Check className="w-5 h-5" />
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 group-hover:border-emerald-800/60 text-xs font-semibold text-emerald-700 group-hover:text-emerald-400 flex items-center justify-between">
                <span>Included in Rs. 12,500</span>
                <span>Verified Standard &check;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
