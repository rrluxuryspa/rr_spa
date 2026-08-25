import React from 'react';
import Logo from './Logo';
import { Phone, Mail, ChevronRight, ArrowUp, Facebook, Instagram } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export default function Footer({ activePage, setActivePage, onOpenBooking }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#022c22] text-slate-100 border-t border-emerald-900/60 pt-16 overflow-hidden">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COLUMN 1: Brand Logo & Description & Direct Contact (4 Cols) */}
          <div className="md:col-span-4 flex flex-col gap-4 items-start">
            {/* Official Logo Image */}
            <Logo size="large" showText={false} />

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light mt-1 max-w-sm">
              Experience luxury wellness, massages, and hydrotherapy at RR LUXURY SPA in Manikonda, Hyderabad. Melt away stress and find your inner peace.
            </p>

            <div className="flex flex-col gap-2.5 mt-2 text-xs sm:text-sm text-slate-200">
              <a 
                href={`tel:${SPA_INFO.rawPhone}`} 
                className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SPA_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${SPA_INFO.email}`} 
                className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SPA_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: IMPORTANT LINKS (5 Cols - Split 2-sub-columns) */}
          <div className="md:col-span-5">
            <h3 className="font-serif font-extrabold text-base tracking-widest text-white uppercase mb-4 inline-block border-b-2 border-emerald-500/80 pb-1">
              IMPORTANT LINKS
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 text-xs sm:text-sm">
              {/* Left Sub-Column: Services */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  <span>MASSAGES</span>
                </button>

                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  <span>HYDROTHERAPY</span>
                </button>

                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  <span>JACUZZI</span>
                </button>

                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  <span>TUB BATH</span>
                </button>
              </div>

              {/* Right Sub-Column: Pages */}
              <div className="flex flex-col gap-3">
                {[
                  { id: 'home', label: 'HOME' },
                  { id: 'about', label: 'ABOUT US' },
                  { id: 'services', label: 'SERVICES' },
                  { id: 'contact', label: 'CONTACT US' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1.5 transition-colors font-semibold uppercase text-left group ${
                      activePage === item.id 
                        ? 'text-emerald-300 font-extrabold' 
                        : 'text-slate-200 hover:text-emerald-300'
                    }`}
                  >
                    <ChevronRight className={`w-3.5 h-3.5 ${activePage === item.id ? 'text-emerald-300' : 'text-emerald-400/80 group-hover:translate-x-1'} transition-transform`} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: OUR ADDRESS & OPEN MAPS BUTTON (3 Cols) */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h3 className="font-serif font-extrabold text-base tracking-widest text-white uppercase border-b-2 border-emerald-500/80 pb-1">
              OUR ADDRESS
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              {SPA_INFO.address}
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SPA_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 rounded-xl bg-emerald-gradient text-white font-extrabold text-xs tracking-wider uppercase border border-emerald-400 hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              <span>OPEN MAPS</span>
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM SUB-FOOTER STRIP */}
      <div className="bg-[#011e17] border-t border-emerald-950/80 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          
          {/* Copyright */}
          <p className="text-center sm:text-left font-medium">
            Copyright © {new Date().getFullYear()} <strong className="text-emerald-400 font-bold">RR LUXURY SPA</strong>. All Rights Reserved.
          </p>

          {/* Social Media & Scroll To Top */}
          <div className="flex items-center gap-4">
            {/* Social Circle Icons */}
            <div className="flex items-center gap-2">
              <a 
                href={SPA_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-slate-200 hover:bg-emerald-gradient hover:text-white transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              <a 
                href={SPA_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-slate-200 hover:bg-emerald-gradient hover:text-white transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-emerald-gradient text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* STICKY FLOATING ACTION BUTTONS FOR WHATSAPP, INSTAGRAM & FACEBOOK (BOTTOM LEFT) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 items-center">
        
        {/* Official WhatsApp Sticky Button with Authentic WhatsApp SVG Icon */}
        <a
          href={`https://wa.me/${SPA_INFO.whatsapp}?text=Hi%20RR%20Luxury%20Spa,%20I%20would%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white/90 group relative"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white group-hover:rotate-12 transition-transform">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.705 1.464h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
          <span className="absolute left-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            WhatsApp Us
          </span>
        </a>

        {/* Instagram Sticky Button */}
        <a
          href={SPA_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white/80 group relative"
          title="Follow on Instagram"
          aria-label="Instagram Profile"
        >
          <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute left-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Instagram
          </span>
        </a>

        {/* Facebook Sticky Button */}
        <a
          href={SPA_INFO.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white/80 group relative"
          title="Follow on Facebook"
          aria-label="Facebook Page"
        >
          <Facebook className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform" />
          <span className="absolute left-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Facebook
          </span>
        </a>

      </div>

    </footer>
  );
}
