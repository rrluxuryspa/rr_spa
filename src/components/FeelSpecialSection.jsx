import React from 'react';

export default function FeelSpecialSection({ onOpenBooking }) {
  const pillars = [
    {
      id: 1,
      title: 'Aromatherapy',
      description: 'Nourishing essential oils and hand-crafted botanical soaps that restore your skin’s natural glow and vitality.',
      image: '/feel_aroma.png',
      badge: 'Organic Oils'
    },
    {
      id: 2,
      title: 'Relax',
      description: 'Calming botanical infusions, floral petals, and aromatic herbs engineered to release mental stress and restore harmony.',
      image: '/feel_relax.png',
      badge: 'Pure Botanicals'
    },
    {
      id: 3,
      title: 'Massage',
      description: 'Warm basalt stones, mineral bath salts, and deep compression strokes targeted for complete muscle recovery.',
      image: '/feel_massage.png',
      badge: 'Deep Muscle Relief'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-emerald-200/80 relative overflow-hidden">
      
      {/* Background Cursive Watermark "Feel Special" */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 opacity-15 text-center w-full">
        <span className="font-serif italic text-6xl sm:text-8xl md:text-9xl text-emerald-800/20 font-normal tracking-wide whitespace-nowrap">
          Feel Special
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            Making You Feel <span className="text-emerald-800 font-extrabold">Royal & Relaxed</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 font-medium leading-relaxed max-w-2xl mx-auto">
            Immerse yourself in carefully curated botanical aromatics, organic oil elixirs, and therapeutic thermal stone massages.
          </p>
        </div>

        {/* 3 Column Cutout Image Grid Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => onOpenBooking && onOpenBooking(pillar.title)}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Isolated Asset Image Container without card borders */}
              <div className="relative w-full h-48 sm:h-56 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-emerald-800 transition-colors mb-3">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
