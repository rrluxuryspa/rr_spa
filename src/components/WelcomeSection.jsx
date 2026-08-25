import React from 'react';
import { Calendar } from 'lucide-react';

export default function WelcomeSection({ onOpenBooking }) {
  return (
    <section className="py-24 bg-white border-b border-emerald-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: UPLOADED IMAGE */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl border border-emerald-200 group">
              <img
                src="/intro_image.png"
                alt="Welcome to RR Luxury Spa"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col items-start gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-900 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300">
              WELCOME TO RR LUXURY SPA
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              A Sanctuary for Your <span className="text-emerald-800 font-extrabold">Body & Soul</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Step into a world of ultimate relaxation and rejuvenation. At RR Luxury Spa, we are dedicated to providing you with an escape from the daily grind, offering world-class treatments in a serene, luxurious environment. Our expert therapists are here to guide you on a journey to wellness.
            </p>

            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="mt-4 px-8 py-3.5 rounded-xl bg-emerald-gradient text-white font-extrabold text-xs tracking-wider uppercase border border-emerald-500 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
