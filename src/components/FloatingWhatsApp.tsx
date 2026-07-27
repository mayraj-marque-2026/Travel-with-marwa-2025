import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Phone Call Float */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        aria-label="Call Travel With Marwa"
        className="w-12 h-12 rounded-full bg-slate-900 text-emerald-400 border border-emerald-500/40 shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 hidden sm:flex"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefilledMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/80 hover:scale-105 transition-all duration-300 border-2 border-emerald-300/40"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
        <span className="font-bold text-sm hidden sm:inline-block pr-1">
          Chat & Book Now
        </span>

        {/* Pulse ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
        </span>
      </a>
    </div>
  );
};
