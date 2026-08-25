import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SpaVideoSection() {
  return (
    <section className="py-16 bg-[#f8fbf9] border-b border-emerald-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-900 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300">
            VIDEO TOUR & AMBIANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-gradient mt-3">
            Experience RR Luxury Spa In Motion
          </h2>
          <p className="text-slate-700 text-sm mt-2 font-medium">
            Immerse yourself in our soothing treatment suites, relaxing hydrotherapy, and royal wellness atmosphere.
          </p>
        </div>

        {/* Responsive Video Container */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border-4 border-emerald-400 shadow-2xl bg-black group">
          <video
            src="/spa_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto max-h-[600px] object-cover rounded-2xl"
          />

          {/* Floating Glassmorphic Overlay Badge */}
          <div className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-white/90 border border-emerald-300 backdrop-blur-md shadow-md flex items-center gap-2 pointer-events-none">
            <Sparkles className="w-4 h-4 text-emerald-800 animate-spin-slow" />
            <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
              RR LUXURY SPA AMBIANCE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
