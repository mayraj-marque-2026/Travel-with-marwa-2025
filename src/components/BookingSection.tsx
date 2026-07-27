import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Users, MapPin, Send, CheckCircle2, ShieldCheck, User } from 'lucide-react';
import { BUSINESS_INFO, DEPARTURE_CITIES } from '../data/tourData';
import heroBgImage from '../assets/images/pakistan_mountains_hero_1785138688619.jpg';

export const BookingSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [selectedCity, setSelectedCity] = useState('Peshawar');
  const [pax, setPax] = useState(2);
  const [travelDate, setTravelDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calcTotal = pax * BUSINESS_INFO.pricePerPerson;

  const generateWhatsAppUrl = () => {
    let msg = BUSINESS_INFO.whatsappPrefilledMessage;
    if (guestName || phoneNum || travelDate) {
      msg = `Hello TRAVEL WITH MARWA,\nI want details and booking for the 3 Days / 2 Nights Family Tour.\n- Name: ${guestName || 'Guest'}\n- Contact: ${phoneNum || 'Not specified'}\n- Pickup City: ${selectedCity}\n- Preferred Date: ${travelDate || 'Upcoming Weekend'}\n- Passengers: ${pax} Person(s)\n- Estimated Total: Rs. ${calcTotal.toLocaleString()}`;
    }
    return `${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Redirect to WhatsApp after short delay or instantly
    window.open(generateWhatsAppUrl(), '_blank');
  };

  return (
    <section id="booking" className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark Mountain Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Northern Pakistan Mountain Landscape"
          className="w-full h-full object-cover object-center brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-emerald-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Booking Header Callout Banner */}
        <div className="bg-gradient-to-r from-[#14532D] via-emerald-800 to-slate-900 rounded-3xl p-8 sm:p-12 border border-emerald-500/40 shadow-2xl mb-16 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Instant Reservation & Assistance</span>
          </div>

          {/* EXACT TEXT REQUIRED BY PROMPT */}
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wider uppercase mb-3 drop-shadow-md">
            FOR BOOKING & DETAILS
          </h2>

          <div className="flex items-center justify-center gap-3 my-4 bg-slate-950/60 px-8 py-4 rounded-2xl border border-white/20 shadow-xl">
            <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 animate-pulse" />
            <span className="font-serif text-3xl sm:text-5xl font-black text-emerald-300 tracking-wider">
              0329-9594741
            </span>
          </div>

          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mb-8">
            Call or message us anytime. Our tour coordinators are available 24/7 to assist with seat bookings, family rooms, and pickup locations.
          </p>

          {/* PREMIUM WHATSAPP BUTTON (Exact Prompt Requirement) */}
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="booking-banner-whatsapp-btn"
            className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-10 py-5 rounded-2xl text-lg sm:text-xl shadow-2xl shadow-emerald-900/80 hover:scale-105 transition-all duration-300 border-2 border-emerald-300/50"
          >
            <MessageCircle className="w-7 h-7 fill-slate-950 text-emerald-400" />
            <span>Book on WhatsApp Now</span>
          </a>
        </div>

        {/* Interactive Booking & Date Selection Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Select Your Family Travel Date & Seats
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Fill out your details below to calculate total charges and directly initiate your WhatsApp booking.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/90 border border-emerald-500/50 rounded-2xl p-8 text-center text-white">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold font-serif mb-2">Thank You, {guestName || 'Valued Guest'}!</h4>
              <p className="text-emerald-200 text-sm mb-6">
                Your tour reservation details have been generated. We are opening WhatsApp to finalize your booking with our team.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-slate-800 text-slate-200 text-xs font-bold px-6 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-700"
              >
                Modify Reservation Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitForm} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Guest Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your Name / Family Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Khan Family / Ahmad"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Contact Number</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Departure Pickup</span>
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  >
                    {DEPARTURE_CITIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.pickupTime})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Passengers / Seats</span>
                  </label>
                  <select
                    value={pax}
                    onChange={(e) => setPax(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none font-bold text-emerald-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'Persons'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Travel Date */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Total Calculation Strip */}
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-emerald-200">Total Calculated Fare:</div>
                  <div className="text-2xl font-black font-serif text-white">
                    Rs. {calcTotal.toLocaleString()} <span className="text-xs font-normal text-slate-300">({pax} x Rs. 12,500)</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking Request via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
