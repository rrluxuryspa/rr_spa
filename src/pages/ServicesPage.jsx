import React, { useState } from 'react';
import { SERVICES } from '../data/spaData';
import BookingForm from '../components/BookingForm';
import { Calendar, Check, Clock } from 'lucide-react';

export default function ServicesPage({ onOpenBooking, selectedPreselectedService = '' }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Massage Therapies', 'Specialty Therapies', 'Hydrotherapy', 'Luxury Signature'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-spa-light">
      
      {/* 1. CUSTOM SERVICES HERO BANNER IMAGE (ENTIRELY FILLS BANNER AREA PERFECTLY) */}
      <section className="relative w-full overflow-hidden bg-white border-b border-amber-300 shadow-md">
        <div className="relative w-full aspect-[16/9] sm:aspect-[1.85/1] max-h-[640px] bg-amber-50 cursor-pointer group" onClick={() => onOpenBooking()}>
          <img
            src="/services_banner.jpg"
            alt="Our Services - RR LUXURY SPA"
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

      {/* 2. SERVICES LIST BELOW BANNER */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-slate-950 shadow-md scale-105 border border-amber-400'
                    : 'bg-amber-50/80 border border-amber-300 text-slate-700 hover:text-amber-900 hover:bg-amber-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Detailed Services Grid (All 8 Services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="spa-card-light rounded-3xl overflow-hidden flex flex-col sm:flex-row group border-2 border-amber-300 shadow-lg bg-white"
              >
                {/* Service Image */}
                <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-white/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-amber-400 text-amber-900 text-xs font-bold shadow-md">
                    {service.category}
                  </span>
                </div>

                {/* Service Details */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-lg font-extrabold text-gold-gradient whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-amber-900 mb-3">
                      {service.tagline}
                    </p>

                    <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Service Feature Highlights */}
                    <div className="grid grid-cols-2 gap-1.5 mb-4">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-800 font-medium">
                          <Check className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Meta & Booking Trigger */}
                  <div className="pt-3 border-t border-amber-200 flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-700 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-800" />
                      <span>{service.duration}</span>
                    </span>

                    <button
                      onClick={() => onOpenBooking(service.name)}
                      className="px-4 py-2 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs border border-amber-400 hover:shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Service</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. GET IN TOUCH OR BOOK AN APPOINTMENT FORM BELOW SERVICES */}
      <section className="py-20 bg-spa-light border-t border-amber-300 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm preselectedService={selectedPreselectedService} />
        </div>
      </section>

    </div>
  );
}
