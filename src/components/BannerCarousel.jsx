import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function BannerCarousel({ onOpenBooking }) {
  const slides = [
    {
      id: 1,
      image: '/banner_slide_1.jpg',
      alt: 'RR Luxury Spa - Massage & Hydrotherapy'
    },
    {
      id: 2,
      image: '/banner_slide_2.jpg',
      alt: 'RR Luxury Spa - Oils & Luxury Ambiance'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto carousel slide effect every 4 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-spa-light border-b border-amber-300 shadow-md">
      
      {/* Slide Images Container matching custom artwork aspect ratio */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[1.85/1] max-h-[640px] bg-amber-50">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center cursor-pointer"
              onClick={() => onOpenBooking()}
            />
          </div>
        ))}

        {/* Clickable Action Trigger Overlay on Banner */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-end justify-start max-w-7xl mx-auto px-6 sm:px-12 pb-8 sm:pb-14">
          <button
            onClick={() => onOpenBooking()}
            className="pointer-events-auto opacity-0 hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-slate-950 font-extrabold text-xs sm:text-sm border border-amber-400 shadow-xl"
            title="Click to Book Appointment"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK YOUR ESCAPE NOW</span>
          </button>
        </div>

        {/* Carousel Navigation Arrows (Left & Right) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/80 hover:bg-gold-gradient text-slate-900 hover:text-slate-950 border border-amber-300/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/80 hover:bg-gold-gradient text-slate-900 hover:text-slate-950 border border-amber-300/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-300/60 shadow-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'w-8 bg-amber-600 shadow-sm' 
                  : 'w-2.5 bg-slate-400 hover:bg-amber-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
