import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export default function LearnAboutUsSection({ onOpenBooking }) {
  return (
    <section className="py-20 bg-white border-b border-amber-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE: CLEAN SPA PHOTO FRAME */}
          <div className="lg:col-span-6 relative w-full flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 group">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                alt="RR Luxury Spa Therapy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Floating Badge overlay inside photo frame */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-amber-300 backdrop-blur-md shadow-lg flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center text-slate-950 font-extrabold text-lg shrink-0 shadow-inner">
                  10+
                </div>
                <div>
                  <h4 className="font-serif text-slate-900 font-bold text-sm">Experience & Trust</h4>
                  <p className="text-xs text-amber-900 font-bold">RR LUXURY SPA - Manikonda</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TEXT & EXPERIENCE CONTENT */}
          <div className="lg:col-span-6 flex flex-col items-start gap-5">
            
            <span className="text-xs font-bold uppercase tracking-widest text-amber-900 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300">
              LEARN ABOUT US
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              We Have <span className="text-amber-800 font-extrabold">10+</span> Years Of Experience
            </h2>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mt-2">
              At RR LUXURY SPA in Manikonda, Hyderabad, we blend ancient therapeutic wisdom with modern spa hydrotherapy. Our master therapists customize every session to your muscle stress points, ensuring an unforgettably serene journey.
            </p>

            {/* Action Buttons (APPOINTMENT + Make A Call) */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-extrabold text-xs tracking-wider uppercase border border-amber-700 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>APPOINTMENT</span>
              </button>

              <a
                href={`tel:${SPA_INFO.rawPhone}`}
                className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs hover:border-amber-500 hover:text-amber-900 transition-all flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>Make A Call</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
