import React from 'react';
import { SPA_INFO } from '../data/spaData';
import { Sparkles, ShieldCheck, Users, ArrowRight, Calendar } from 'lucide-react';

export default function AboutPage({ setActivePage, onOpenBooking }) {
  return (
    <div className="min-h-screen pt-20 bg-spa-light">
      
      {/* 1. CUSTOM ABOUT US HERO BANNER IMAGE (ENTIRELY FILLS BANNER AREA PERFECTLY) */}
      <section className="relative w-full overflow-hidden bg-white border-b border-amber-300 shadow-md">
        <div className="relative w-full aspect-[16/9] sm:aspect-[1.85/1] max-h-[640px] bg-amber-50 cursor-pointer group" onClick={() => onOpenBooking()}>
          <img
            src="/about_banner.jpg"
            alt="About Us - RR LUXURY SPA"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay Trigger for Booking */}
          <div className="absolute inset-0 z-10 flex items-end justify-start max-w-7xl mx-auto px-6 sm:px-12 pb-8 sm:pb-14 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenBooking();
              }}
              className="pointer-events-auto opacity-0 hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-slate-950 font-extrabold text-xs sm:text-sm border border-amber-400 shadow-xl"
              title="Click to Book Appointment"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT NOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. MATTER RELATED TO THEM AND AN IMAGE */}
      <section className="py-20 bg-white border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Matter / Text Content */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-900 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300">
                  Our Philosophy & Excellence
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-gradient mt-3 leading-tight">
                  Crafting Royal Moments of Physical & Mental Bliss
                </h2>
              </div>

              <p className="text-slate-700 text-base leading-relaxed font-medium">
                <strong className="text-amber-900 font-extrabold">RR LUXURY SPA</strong> was established with a singular vision: to create an opulent urban refuge in a gold and white aesthetic where clients can pause from demanding modern lifestyles and immerse themselves in deep therapeutic healing.
              </p>

              <p className="text-slate-700 text-base leading-relaxed font-medium">
                Located on the 4th Floor of MMSR Tower, Near Marrichettu Circle in Manikonda, Hyderabad, our center features state-of-the-art private treatment suites, aromatic botanical tub baths, and custom Jacuzzi facilities designed according to international luxury spa standards.
              </p>

              <p className="text-slate-700 text-base leading-relaxed font-medium">
                Our certified therapists specialize in custom oil massages, skin-nourishing cream massages, dry compression, deep tissue strain release, and dual-therapist Four Hands massages. Every therapy is tailored to your individual comfort, preferred pressure, and muscle needs.
              </p>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 flex items-start gap-3 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-amber-950 font-bold text-sm">Hygienic Excellence</h4>
                    <p className="text-xs text-slate-700 mt-1 font-medium">Single-use organic towels, steam sterilized suites, and fresh aromatic linens.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 flex items-start gap-3 shadow-sm">
                  <Users className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-amber-950 font-bold text-sm">Expert Therapists</h4>
                    <p className="text-xs text-slate-700 mt-1 font-medium">Certified wellness practitioners with extensive mastery in human anatomy.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: High Resolution Spa Image */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-amber-200 opacity-50 blur-xl group-hover:opacity-70 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400 shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
                  alt="RR Spa Ambiance & Therapists"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 border border-amber-300 backdrop-blur-md shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg text-amber-900 font-bold">RR LUXURY SPA</h4>
                      <p className="text-xs text-slate-700 font-medium">MMSR Tower, Manikonda, Hyderabad</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-amber-900 font-extrabold">Daily Hours</span>
                      <p className="text-xs text-slate-900 font-bold">{SPA_INFO.timings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ADD THE BANNER (HIGHLIGHT CTA BANNER BELOW MATTER) */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-amber-50 via-white to-amber-50 border-t border-amber-300">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80"
            alt="Jacuzzi Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
          
          <Sparkles className="w-10 h-10 text-amber-800 mb-4 animate-bounce" />

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-gradient mb-4">
            Indulge In Pure Gold & White Luxury Today
          </h2>

          <p className="text-slate-800 text-base sm:text-lg max-w-2xl font-medium mb-8 leading-relaxed">
            Your personal sanctuary awaits in Manikonda. Book your preferred massage therapy, botanical tub bath, or Jacuzzi session now.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-gold-gradient text-slate-950 font-extrabold text-base border border-amber-400 hover:shadow-xl hover:shadow-spa-gold/30 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-white border border-amber-400 text-amber-900 hover:bg-gold-gradient hover:text-slate-950 font-bold text-base transition-all shadow-md"
            >
              Contact & Directions
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
