import React, { useState } from 'react';
import { Calendar, ChevronDown, Clock, CheckCircle2, MapPin } from 'lucide-react';
import { TOUR_ITINERARY } from '../data/tourData';

export const ItineraryTimeline: React.FC = () => {
  const [openDay, setOpenDay] = useState<number>(0);

  return (
    <section id="itinerary" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Detailed Tour Plan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            3-Day Itinerary Schedule
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Carefully paced and relaxed schedule ensuring families enjoy every scenic vista without feeling rushed.
          </p>
        </div>

        {/* Accordion / Timeline */}
        <div className="space-y-4">
          {TOUR_ITINERARY.map((dayPlan, idx) => {
            const isOpen = openDay === idx;
            return (
              <div
                key={dayPlan.day}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-emerald-600 shadow-xl ring-2 ring-emerald-500/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenDay(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-serif text-base transition-colors ${
                      isOpen ? 'bg-[#14532D] text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {dayPlan.day}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                        {dayPlan.title}
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Full Day Guided Excursion & Meals</span>
                      </p>
                    </div>
                  </div>

                  <div className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Body */}
                {isOpen && (
                  <div className="px-6 pb-7 pt-2 border-t border-slate-100 bg-slate-50/50">
                    <div className="pl-4 sm:pl-16 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        Day Highlights & Schedule
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {dayPlan.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
