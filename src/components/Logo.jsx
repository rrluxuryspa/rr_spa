import React from 'react';

export default function Logo({ size = 'medium', showText = false, className = '' }) {
  // Balanced uncompressed sizing for crisp visual harmony
  const heightClasses = {
    small: 'h-10 sm:h-12',
    medium: 'h-14 sm:h-16 md:h-18', // Perfectly proportioned for slim navbar
    large: 'h-28 sm:h-36 md:h-44 lg:h-48' // Grand sizing for Hero & Footer
  };

  const currentHeight = heightClasses[size] || heightClasses.medium;

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Official Uploaded Logo Image */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img 
          src="/logo_img.jpg" 
          alt="RR LUXURY SPA Logo" 
          className={`${currentHeight} w-auto max-w-full object-contain filter drop-shadow-md rounded-lg`}
        />
      </div>

      {/* Optional Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif font-extrabold tracking-widest text-emerald-gradient text-2xl md:text-3xl leading-tight drop-shadow-sm">
            RR LUXURY SPA
          </span>
          <span className="tracking-[0.25em] text-emerald-900 font-sans font-bold uppercase text-[10px] sm:text-[11px]">
            Manikonda, Hyderabad
          </span>
        </div>
      )}
    </div>
  );
}
