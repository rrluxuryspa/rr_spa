import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Calendar, Menu, X, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
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
      
      {/* TIER 1: DARK ROYAL EMERALD GREEN TOP STRIP */}
      <div className="bg-[#022c22] text-slate-100 py-1 px-4 sm:px-8 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[11px] leading-tight gap-2">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <span className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{SPA_INFO.addressShort}</span>
            </span>

            <a 
              href={`tel:${SPA_INFO.rawPhone}`} 
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{SPA_INFO.phone}</span>
            </a>

            <a 
              href={`mailto:${SPA_INFO.email}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{SPA_INFO.email}</span>
            </a>
          </div>

          {/* Right Side: Follow Us & Social Icons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase">
              FOLLOW US:
            </span>
            <div className="flex items-center gap-2.5 text-slate-200">
              <a 
                href={SPA_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a 
                href={SPA_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a 
                href={`https://wa.me/${SPA_INFO.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors flex items-center justify-center"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current text-slate-200 hover:text-emerald-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.705 1.464h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* TIER 2: SLIM & PROPORTIONED MAIN WHITE NAVBAR */}
      <div className={`bg-white border-b border-emerald-200/80 transition-all duration-300 ${scrolled ? 'py-1' : 'py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-14 sm:h-16">
            
            {/* Left Side: Brand Logo */}
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
                        ? 'text-emerald-900 border-b-2 border-emerald-600' 
                        : 'text-slate-700 hover:text-emerald-800'
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
                className="px-5 py-2 rounded-xl bg-emerald-gradient text-white font-extrabold text-xs tracking-wider uppercase border border-emerald-500 shadow-sm hover:shadow-md hover:shadow-emerald-600/30 hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="p-2 rounded-lg bg-emerald-gradient text-white text-xs font-bold shadow"
                title="Book Now"
              >
                <Calendar className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-emerald-900 hover:bg-emerald-50 border border-emerald-300 transition-colors"
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
        <div className="md:hidden bg-white border-b border-emerald-300 shadow-2xl animate-fadeIn px-4 pt-2 pb-6">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-extrabold text-xs tracking-wider transition-all ${
                    isActive
                      ? 'bg-emerald-gradient text-white shadow-sm'
                      : 'text-slate-800 hover:bg-emerald-50 hover:text-emerald-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-emerald-200 flex flex-col gap-2.5 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-gradient text-white font-extrabold text-center text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href={`tel:${SPA_INFO.rawPhone}`}
                className="w-full py-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold text-center text-xs flex items-center justify-center gap-2"
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
