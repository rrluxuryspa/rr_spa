import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Calendar, Menu, X, MapPin, Mail, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md">
      
      {/* TIER 1: COMPACT TOP DARK STRIP */}
      <div className="bg-amber-950 text-slate-100 py-1 px-4 sm:px-8 border-b border-amber-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[11px] leading-tight gap-2">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{SPA_INFO.addressShort}</span>
            </span>

            <a 
              href={`tel:${SPA_INFO.rawPhone}`} 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{SPA_INFO.phone}</span>
            </a>

            <a 
              href={`mailto:${SPA_INFO.email}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{SPA_INFO.email}</span>
            </a>
          </div>

          {/* Right Side: Follow Us & Social Icons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="text-[10px] font-bold tracking-widest text-amber-300 uppercase">
              FOLLOW US:
            </span>
            <div className="flex items-center gap-2 text-slate-200">
              <a 
                href={SPA_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a 
                href={SPA_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a 
                href={`https://wa.me/${SPA_INFO.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-400 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* TIER 2: SLIM & PROPORTIONED MAIN NAVBAR */}
      <div className={`bg-white border-b border-amber-200/80 transition-all duration-300 ${scrolled ? 'py-1' : 'py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-14 sm:h-16">
            
            {/* Left Side: Brand Logo (Proportioned to fill height neatly without squishing) */}
            <div onClick={() => handleNavClick('home')} className="flex items-center shrink-0 cursor-pointer">
              <Logo size="medium" showText={false} />
            </div>

            {/* Center: Uppercase Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`py-1 text-xs sm:text-sm font-extrabold tracking-wider transition-all relative ${
                      isActive 
                        ? 'text-amber-900 border-b-2 border-amber-500' 
                        : 'text-slate-700 hover:text-amber-800'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Side: Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-xs tracking-wider uppercase border border-amber-400 shadow-sm hover:shadow-md hover:shadow-spa-gold/30 hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="p-2 rounded-lg bg-gold-gradient text-slate-950 text-xs font-bold shadow"
                title="Book Now"
              >
                <Calendar className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-amber-900 hover:bg-amber-100 border border-amber-300 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-300 shadow-2xl animate-fadeIn px-4 pt-2 pb-6">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-extrabold text-xs tracking-wider transition-all ${
                    isActive
                      ? 'bg-gold-gradient text-slate-950 shadow-sm'
                      : 'text-slate-800 hover:bg-amber-50 hover:text-amber-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-amber-200 flex flex-col gap-2.5 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-center text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href={`tel:${SPA_INFO.rawPhone}`}
                className="w-full py-2.5 rounded-xl bg-amber-50 border border-amber-400 text-amber-900 font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 91000 07856</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
