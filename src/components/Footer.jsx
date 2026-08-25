import React from 'react';
import Logo from './Logo';
import { Phone, Mail, ChevronRight, ArrowUp, Facebook, Instagram, MessageSquare } from 'lucide-react';
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

          {/* COLUMN 3: OUR ADDRESS & GET DIRECTIONS BUTTON (3 Cols) */}
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
              <span>GET DIRECTIONS</span>
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
        
        {/* WhatsApp Sticky Button */}
        <a
          href={`https://wa.me/${SPA_INFO.whatsapp}?text=Hi%20RR%20Luxury%20Spa,%20I%20would%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white/80 group relative"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform" />
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
