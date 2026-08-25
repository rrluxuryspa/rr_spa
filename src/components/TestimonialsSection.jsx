import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Absolutely wonderful experience! The oil massage and steam therapy were amazing, and the staff were very polite. Highly recommend RR Luxury Spa for a relaxing day.",
      author: "Sneha R.",
      location: "Manikonda, Hyderabad",
      rating: 5
    },
    {
      id: 2,
      quote: "The hydro-jet Jacuzzi suite and Four Hands massage were the best relaxation treatment I could have asked for. The team understood exactly what I wanted and made me feel so special.",
      author: "Priya K.",
      location: "Gachibowli, Hyderabad",
      rating: 5
    },
    {
      id: 3,
      quote: "Great deep tissue massage and therapy. The therapists are skilled, polite, and pay attention to muscle knots. Will definitely be coming back to RR Luxury Spa!",
      author: "Rahul M.",
      location: "Hitec City, Hyderabad",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#f8fbf9] border-b border-emerald-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-900 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-gradient mt-3">
            Guest Feedbacks
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-medium">
            Read real stories of physical restoration and peace from our esteemed guests in Hyderabad.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl border-2 border-emerald-200/80 shadow-md hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Top Row: 5 Gold Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-emerald-100 absolute -top-3 -left-2 -z-0 rotate-180" />
                <p className="text-slate-700 text-sm font-medium italic leading-relaxed relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-emerald-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {item.author}
                  </h4>
                  <span className="text-[11px] font-semibold text-emerald-800">
                    {item.location}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-extrabold text-xs shadow-inner">
                  ✓
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
