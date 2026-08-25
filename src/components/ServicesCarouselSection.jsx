import React, { useState } from 'react';
import { SERVICES } from '../data/spaData';
import { 
  Droplet, 
  Sparkles, 
  HeartHandshake, 
  Flame, 
  Wind, 
  Users, 
  Bath, 
  Waves, 
  ChevronLeft, 
  ChevronRight,
  Calendar
} from 'lucide-react';

export default function ServicesCarouselSection({ onOpenBooking }) {
  // Mapping custom icons for each service matching reference style
  const serviceIcons = {
    'oil-massage': <Droplet className="w-10 h-10 text-amber-700 stroke-[1.5]" />,
    'cream-massage': <Sparkles className="w-10 h-10 text-amber-700 stroke-[1.5]" />,
    'dry-massage': <HeartHandshake className="w-10 h-10 text-amber-700 stroke-[1.5]" />,
    'deep-tissue': <Flame className="w-10 h-10 text-amber-700 stroke-[1.5]" />,
    'aroma-massage': <Wind className="w-10 h-10 text-amber-700 stroke-[1.5]" />,
    'four-hands-massage': <Users className="w-10 h-10 text-amber-700 stroke-[1.5]" />,
    'tub-bath': <Bath className="w-10 h-10 text-amber-700 stroke-[1.5]" />,
    'jacuzzi': <Waves className="w-10 h-10 text-amber-700 stroke-[1.5]" />
  };

  const [currentPage, setCurrentPage] = useState(0);

  // Show 4 cards per page on desktop, 2 on tablet, 1 on mobile
  const itemsPerPage = 4;
  const totalPages = Math.ceil(SERVICES.length / itemsPerPage);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleServices = SERVICES.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-[#fdfbf7] border-b border-amber-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="text-amber-800">SERVICES</span>
            </h2>
            <span className="font-serif italic text-amber-700 text-lg sm:text-xl font-light">
              Relax Zone
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-2">
            Step into a world of physical restoration and pure tranquility. Experience a complete metamorphosis from daily tension to deep inner peace.
          </p>
        </div>

        {/* Services White Card Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {visibleServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onOpenBooking(service.name)}
              className="bg-white p-8 rounded-3xl border border-amber-200/70 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-pointer h-[320px]"
            >
              {/* Line Art Icon Container */}
              <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {serviceIcons[service.id] || <Sparkles className="w-10 h-10 text-amber-700 stroke-[1.5]" />}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-serif text-xl font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors mb-2">
                  {service.name}
                </h3>
                
                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3">
                  Experience a metamorphosis from tension to tranquility
                </p>
              </div>

              {/* Bottom Meta & Price Badge */}
              <div className="w-full pt-3 border-t border-amber-100 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {service.price}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking(service.name);
                  }}
                  className="p-2 rounded-full bg-gold-gradient text-slate-950 hover:scale-110 transition-transform shadow"
                  title={`Book ${service.name}`}
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Navigation Controls (< > Buttons at Bottom Center like reference) */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <button
            onClick={prevPage}
            className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-gold-gradient text-white hover:text-slate-950 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Previous Services Page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Page Indicators */}
          <div className="flex items-center gap-2 px-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentPage ? 'w-6 bg-amber-600' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-gold-gradient text-white hover:text-slate-950 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Next Services Page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
