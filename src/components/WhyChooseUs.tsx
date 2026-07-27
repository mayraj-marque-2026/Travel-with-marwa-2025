import React from 'react';
import { ShieldCheck, Armchair, Award, PiggyBank, Map, Smile, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/tourData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-emerald-400" />;
      case 'Armchair':
        return <Armchair className="w-7 h-7 text-emerald-400" />;
      case 'Award':
        return <Award className="w-7 h-7 text-emerald-400" />;
      case 'PiggyBank':
        return <PiggyBank className="w-7 h-7 text-emerald-400" />;
      case 'Map':
        return <Map className="w-7 h-7 text-emerald-400" />;
      case 'Smile':
      default:
        return <Smile className="w-7 h-7 text-emerald-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Our Commitment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We prioritize family comfort, safety, and hospitality above everything else.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 rounded-2xl p-7 shadow-xl hover:shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 group-hover:bg-emerald-600 transition-colors duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-700/60 text-xs text-emerald-400 font-semibold flex items-center justify-between">
                <span>TRAVEL WITH MARWA Standard</span>
                <span>Verified &check;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
