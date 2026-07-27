import React, { useState, useEffect } from 'react';
import { Mountain, Compass, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tour Package', href: '#tour-package' },
    { name: 'Inclusions', href: '#inclusions' },
    { name: 'Attractions', href: '#attractions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14532D]/95 backdrop-blur-md shadow-lg py-3 border-b border-emerald-700/30'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="header-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-950/30 group-hover:scale-105 transition-transform duration-300">
              <Mountain className="w-6 h-6 text-emerald-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white font-serif leading-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] text-emerald-300 font-medium tracking-widest uppercase">
                Northern Pakistan Tours
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-100 hover:text-emerald-300 transition-colors duration-200 rounded-lg hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="header-phone-btn"
              className="flex items-center gap-2 text-xs text-emerald-200 hover:text-white font-medium bg-white/10 px-3 py-2 rounded-lg border border-white/15 hover:bg-white/20 transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              id="header-book-now-btn"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-300" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0F172A]/98 backdrop-blur-xl border-b border-emerald-900/50 px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-100 hover:bg-emerald-800/40 hover:text-emerald-300 border-l-2 border-transparent hover:border-emerald-400 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-slate-800 text-emerald-300 py-3 rounded-xl font-medium border border-slate-700"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-emerald-900/50"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600" />
                <span>Book Now (Rs. 12,500/Person)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
