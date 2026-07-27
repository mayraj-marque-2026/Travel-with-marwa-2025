import React, { useState } from 'react';
import { Check, MessageCircle, Users, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO, PACKAGE_INCLUDES } from '../data/tourData';

export const PricingSection: React.FC = () => {
  const [passengerCount, setPassengerCount] = useState<number>(2);
  const [selectedCity, setSelectedCity] = useState<string>('Peshawar');

  const totalPrice = passengerCount * BUSINESS_INFO.pricePerPerson;

  const customWhatsAppText = `Hello TRAVEL WITH MARWA,\nI want details and booking for the 3 Days / 2 Nights Family Tour.\n- Departure City: ${selectedCity}\n- Number of Persons: ${passengerCount}\n- Total Estimated Amount: Rs. ${totalPrice.toLocaleString()}`;

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Affordable Luxury Family Package
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No hidden costs. Everything you need for a comfortable 3-day family holiday in Northern Pakistan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Glassmorphism Pricing Card */}
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/80 overflow-hidden">
            {/* Top Badge Overlay */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-emerald-800 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-wider shadow-md">
              100% All-Inclusive Experience
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Large Green Circular Badge */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-emerald-950/60 to-slate-950/80 rounded-2xl border border-emerald-800/40">
                {/* LARGE GREEN CIRCULAR BADGE (Exact Prompt Requirement) */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#14532D] via-emerald-600 to-emerald-800 p-2 shadow-2xl shadow-emerald-600/40 flex flex-col items-center justify-center text-white border-4 border-emerald-400/40 relative group transition-transform duration-300 hover:scale-105">
                  <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-emerald-200">
                    CHARGES
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white my-1 tracking-tight drop-shadow-md">
                    Rs. 12,500
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-emerald-100 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-400/30 mt-1">
                    PER PERSON
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Full 3 Days & 2 Nights Package</span>
                </div>
              </div>

              {/* Right Column: Inclusions List & Interactive Calculator */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-2">
                    {BUSINESS_INFO.featuredTourTitle}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">
                    Comprehensive family tour package covering transport, hotel, breakfasts, dinners, and guided sightseeing.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {PACKAGE_INCLUDES.map((item) => (
                      <div key={item.id} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{item.title}</div>
                          <div className="text-[11px] text-slate-400 leading-tight">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Family Fare Calculator */}
                <div className="p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/30">
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      Family Fare Estimator
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">Select Passengers</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {/* Passenger Selector */}
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1 font-medium">Persons / Seats</label>
                      <select
                        value={passengerCount}
                        onChange={(e) => setPassengerCount(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white font-semibold focus:outline-none focus:border-emerald-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Person' : 'Persons'} (Rs. {(num * 12500).toLocaleString()})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Departure City Selector */}
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1 font-medium">Pickup City</label>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white font-semibold focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Peshawar">Peshawar</option>
                        <option value="Charsadda">Charsadda</option>
                        <option value="Mardan">Mardan</option>
                        <option value="Swabi">Swabi</option>
                      </select>
                    </div>
                  </div>

                  {/* Calculated Price Footer & CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
                    <div>
                      <div className="text-[10px] text-slate-400">Total Calculated Cost ({passengerCount} Pax):</div>
                      <div className="text-2xl font-extrabold text-emerald-400 font-serif">
                        Rs. {totalPrice.toLocaleString()}
                      </div>
                    </div>

                    <a
                      href={`${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent(customWhatsAppText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-emerald-950/60 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
                      <span>Book Total (Rs. {totalPrice.toLocaleString()})</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Child Policy & Note */}
          <div className="mt-6 text-center text-slate-400 text-xs flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Need custom family arrangements or extra hotel rooms? Contact us directly at 0329-9594741.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
