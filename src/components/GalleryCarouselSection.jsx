import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/spaData';
import { X } from 'lucide-react';

export default function GalleryCarouselSection() {
  const [activeImageModal, setActiveImageModal] = useState(null);

  // Duplicate images for infinite seamless 360-degree marquee loop
  const infiniteImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

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

      </div>

      {/* CONTINUOUS SMOOTH MARQUEE CAROUSEL TRACK (PAUSES ON MOUSE HOVER, NO DOTS) */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Subtle Soft Gradient Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Continuous Smooth Infinite Moving Track */}
        <div className="animate-continuous-scroll flex gap-6 px-4">
          {infiniteImages.map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              onClick={() => setActiveImageModal(img)}
              className="w-72 sm:w-80 h-60 sm:h-72 rounded-3xl overflow-hidden border-2 border-amber-300/80 cursor-pointer shadow-md hover:shadow-2xl hover:border-amber-500 hover:scale-105 transition-all duration-300 shrink-0 bg-white group"
            >
              {/* Pure Clean Photo Image without overlays */}
              <img
                src={img.url}
                alt="RR Luxury Spa Gallery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
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
              aria-label="Close Lightbox"
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
