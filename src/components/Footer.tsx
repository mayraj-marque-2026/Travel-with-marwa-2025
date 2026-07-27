import React from 'react';
import { Mountain, Phone, MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
                <Mountain className="w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-black text-white tracking-wider">
                {BUSINESS_INFO.name}
              </span>
            </a>

            {/* TAGLINE REQUIRED BY PROMPT */}
            <p className="text-sm text-slate-400 leading-relaxed italic">
              "{BUSINESS_INFO.tagline}"
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>KP Departures: Peshawar | Charsadda | Mardan | Swabi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4 uppercase tracking-wider text-emerald-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#tour-package" className="hover:text-emerald-400 transition-colors">Tour Package</a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-emerald-400 transition-colors">Attractions</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-emerald-400 transition-colors">Booking</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Contact / FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4 uppercase tracking-wider text-emerald-400">
              Tour Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Naran Valley & Bazaar</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Kaghan Valley Rivers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Babusar Top (13,700 ft)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Shogran & Siri Paye Meadows</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Lulusar Turquoise Lake</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Direct Booking */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-4 uppercase tracking-wider text-emerald-400">
              Connect & Book
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Get in touch directly on WhatsApp or social media for tour schedules and family seat reservations.
            </p>

            <div className="flex items-center gap-3 mb-6">
              {/* WhatsApp Icon */}
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on WhatsApp"
                className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              </a>

              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook Page"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <span className="font-black text-sm">f</span>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram Profile"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <span className="font-black text-sm">ig</span>
              </a>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors w-full justify-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar (Exact text requirement) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 {BUSINESS_INFO.name}. All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <span>EXPLORE THE BEAUTY OF NORTHERN PAKISTAN</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600 text-white transition-colors flex items-center gap-1"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
