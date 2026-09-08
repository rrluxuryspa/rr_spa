import React from 'react';
import { SPA_INFO } from '../data/spaData';

export default function StickyPhoneButton() {
  return (
    <a
      href={`tel:${SPA_INFO.rawPhone}`}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 hover:scale-110 transition-transform duration-300 group flex items-center justify-center shadow-2xl rounded-full"
      aria-label="Call Us Now"
      title="Call Us Now"
    >
      <div className="bg-[#2196F3] p-2.5 sm:p-3 rounded-full shadow-[0_4px_14px_rgba(33,150,243,0.5)] animate-pulse border-[1.5px] border-white flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
          fill="currentColor"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </div>
      
      {/* Optional tooltip that shows on hover for desktop */}
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Call Now
      </span>
    </a>
  );
}
