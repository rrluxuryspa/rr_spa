import React, { useRef, useEffect } from 'react';

export default function SpaVideoSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Auto-play on mount and when scrolled into view
  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = true; // Required for native browser autoplay policy
        videoRef.current
          .play()
          .catch((err) => console.log('Autoplay policy info:', err));
      }
    };

    // Trigger on mount
    playVideo();

    // IntersectionObserver to auto-play when scrolled to this section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-slate-950 border-y border-emerald-400/50 shadow-2xl group"
    >
      {/* Adjusted Length/Height & 100% Screen Width Video Player */}
      <video
        ref={videoRef}
        src="/spa_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover block"
      />
    </section>
  );
}
