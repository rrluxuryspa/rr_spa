import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function BannerCarousel({ onOpenBooking }) {
  const slides = [
    {
      id: 1,
      image: '/home_ban1.png',
      alt: 'RR Luxury Spa - Premier Spa Experience'
    },
    {
      id: 2,
      image: '/home_ban_img2.png',
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
    <section className="relative w-full overflow-hidden bg-white border-b border-emerald-300 shadow-md">

      {/* Slide Wrapper — natural height from image, slides stack and fade */}
      <div className="relative w-full">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 relative z-10'
                : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-auto object-contain block cursor-pointer"
              onClick={() => onOpenBooking()}
            />
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/85 hover:bg-emerald-gradient text-slate-900 hover:text-white border border-emerald-300/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/85 hover:bg-emerald-gradient text-slate-900 hover:text-white border border-emerald-300/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-300/60 shadow-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'w-8 bg-emerald-700 shadow-sm'
                  : 'w-2.5 bg-slate-400 hover:bg-emerald-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
