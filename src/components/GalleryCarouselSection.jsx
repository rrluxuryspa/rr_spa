import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../data/spaData';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

export default function GalleryCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageModal, setActiveImageModal] = useState(null);

  // Auto-scroll carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const itemsPerPage = 3;
  const totalSlides = GALLERY_IMAGES.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - itemsPerPage : Math.max(0, prev - 1)));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - itemsPerPage ? 0 : prev + 1));
  };

  // Get current 3 visible images
  const visibleImages = GALLERY_IMAGES.slice(currentIndex, currentIndex + itemsPerPage);
  
  // If near end, fill remaining slots from beginning for seamless loop
  if (visibleImages.length < itemsPerPage) {
    visibleImages.push(...GALLERY_IMAGES.slice(0, itemsPerPage - visibleImages.length));
  }

  return (
    <section className="py-20 bg-white border-b border-amber-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-900 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300">
            VISUAL GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient mt-3">
            RR LUXURY SPA GALLERY
          </h2>
          <p className="text-slate-700 text-sm mt-2 font-medium">
            Take a peek into our serene treatment suites, private Jacuzzi tubs, and therapeutic ambiance.
          </p>
        </div>

        {/* Carousel Image Container (PURE CLEAN IMAGES, NO TEXT OVERLAYS) */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out">
            {visibleImages.map((img, idx) => (
              <div
                key={`${img.id}-${idx}`}
                onClick={() => setActiveImageModal(img)}
                className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden border-2 border-amber-300/80 cursor-pointer shadow-lg bg-white"
              >
                {/* Pure Clean Photo Image */}
                <img
                  src={img.url}
                  alt="RR Luxury Spa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-slate-950 shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Left & Right Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-gold-gradient text-white hover:text-slate-950 flex items-center justify-center shadow-xl border border-amber-400 backdrop-blur-md transition-all hover:scale-110"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-gold-gradient text-white hover:text-slate-950 flex items-center justify-center shadow-xl border border-amber-400 backdrop-blur-md transition-all hover:scale-110"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-8 bg-amber-600 shadow-sm'
                  : 'w-2.5 bg-slate-300 hover:bg-amber-400'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Enlarged Photo Lightbox Modal */}
      {activeImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveImageModal(null)}
        >
          <div className="relative max-w-4xl w-full bg-white border-2 border-amber-300 rounded-3xl overflow-hidden shadow-2xl p-4">
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-950/70 hover:bg-amber-600 text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImageModal.url}
              alt="RR Luxury Spa Preview"
              className="w-full max-h-[78vh] object-cover rounded-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
}
