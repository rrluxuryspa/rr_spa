import React from 'react';
import Logo from './Logo';
import { Phone, Mail, ChevronRight, MapPin, ArrowUp, Facebook, Instagram } from 'lucide-react';
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
    <footer className="relative bg-amber-950 text-slate-100 border-t border-amber-900/50 pt-16 overflow-hidden">
      
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
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SPA_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${SPA_INFO.email}`} 
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SPA_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: IMPORTANT LINKS (5 Cols - Split 2-sub-columns) */}
          <div className="md:col-span-5">
            <h3 className="font-serif font-extrabold text-base tracking-widest text-white uppercase mb-4 inline-block border-b-2 border-amber-500/80 pb-1">
              IMPORTANT LINKS
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 text-xs sm:text-sm">
              {/* Left Sub-Column: Services */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>MASSAGES</span>
                </button>

                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>HYDROTHERAPY</span>
                </button>

                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>JACUZZI</span>
                </button>

                <button 
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-semibold uppercase text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
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
                        ? 'text-amber-300 font-extrabold' 
                        : 'text-slate-200 hover:text-amber-300'
                    }`}
                  >
                    <ChevronRight className={`w-3.5 h-3.5 ${activePage === item.id ? 'text-amber-300' : 'text-amber-400/80 group-hover:translate-x-1'} transition-transform`} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: OUR ADDRESS & GET DIRECTIONS BUTTON (3 Cols) */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h3 className="font-serif font-extrabold text-base tracking-widest text-white uppercase border-b-2 border-amber-500/80 pb-1">
              OUR ADDRESS
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              {SPA_INFO.address}
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SPA_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-xs tracking-wider uppercase border border-amber-400 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM SUB-FOOTER STRIP */}
      <div className="bg-amber-950 border-t border-amber-900/80 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          
          {/* Copyright */}
          <p className="text-center sm:text-left font-medium">
            Copyright © {new Date().getFullYear()} <strong className="text-amber-300 font-bold">RR LUXURY SPA</strong>. All Rights Reserved.
          </p>

          {/* Social Media & Scroll To Top */}
          <div className="flex items-center gap-4">
            {/* Social Circle Icons */}
            <div className="flex items-center gap-2">
              <a 
                href={SPA_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-amber-900/80 border border-amber-700/60 flex items-center justify-center text-slate-200 hover:bg-gold-gradient hover:text-slate-950 transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              <a 
                href={SPA_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-amber-900/80 border border-amber-700/60 flex items-center justify-center text-slate-200 hover:bg-gold-gradient hover:text-slate-950 transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-gold-gradient text-slate-950 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
