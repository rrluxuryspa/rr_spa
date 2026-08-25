import React, { useState } from 'react';
import { SERVICES } from '../data/spaData';
import BookingForm from '../components/BookingForm';
import { Calendar } from 'lucide-react';

export default function ServicesPage({ onOpenBooking, selectedPreselectedService = '' }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Massage Therapies', 'Specialty Therapies', 'Hydrotherapy', 'Luxury Signature'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-spa-light">
      
      {/* 1. CUSTOM SERVICES HERO BANNER IMAGE */}
      <section className="relative w-full overflow-hidden bg-white border-b border-emerald-300 shadow-md">
        <div className="relative w-full bg-white cursor-pointer group" onClick={() => onOpenBooking()}>
          <img
            src="/ser_ban.png"
            alt="Our Services - RR LUXURY SPA"
            className="w-full h-auto object-contain block"
          />
        </div>
      </section>

      {/* 2. SERVICES GRID - CLEAN CARD: IMAGE, NAME, BOOK BUTTON */}
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
                    ? 'bg-emerald-gradient text-white shadow-md scale-105 border border-emerald-400'
                    : 'bg-emerald-50/80 border border-emerald-300 text-slate-700 hover:text-emerald-900 hover:bg-emerald-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Clean Service Cards Grid Without Timings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-3xl overflow-hidden border-2 border-emerald-200 shadow-md hover:shadow-xl hover:border-emerald-400 bg-white transition-all duration-300 flex flex-col"
              >
                {/* Service Image */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Card Bottom: Name & Book Button */}
                <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                  {/* Service Name */}
                  <h3 className="font-serif text-lg font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-tight">
                    {service.name}
                  </h3>

                  {/* Book Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenBooking(service.name)}
                      className="w-full py-2.5 rounded-xl bg-emerald-gradient text-white font-bold text-xs border border-emerald-400 hover:shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5"
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

      {/* 3. BOOKING FORM BELOW SERVICES */}
      <section className="py-20 bg-spa-light border-t border-emerald-300 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm preselectedService={selectedPreselectedService} />
        </div>
      </section>

    </div>
  );
}
