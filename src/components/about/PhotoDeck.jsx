// src/components/about/PhotoDeck.jsx

import { useState, useEffect } from "react";
import { PHOTOS } from "../../data/aboutData";

export default function PhotoDeck() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const total = PHOTOS.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return "z-30 scale-100 rotate-0 translate-x-0 -translate-y-1 opacity-100 brightness-100 pointer-events-auto shadow-[0_25px_50px_-12px_rgba(30,58,138,0.3)] border-white";
    }
    if (diff === 1) {
      return "z-10 scale-[0.92] sm:scale-95 rotate-[6deg] sm:rotate-[8deg] translate-x-4 sm:translate-x-8 translate-y-2 opacity-80 brightness-[0.88] shadow-lg border-white/60";
    }
    if (diff === total - 1) {
      return "z-10 scale-[0.92] sm:scale-95 -rotate-[6deg] sm:-rotate-[8deg] -translate-x-4 sm:-translate-x-8 translate-y-2 opacity-80 brightness-[0.88] shadow-lg border-white/60";
    }
    return "z-0 scale-75 rotate-0 translate-x-0 translate-y-4 opacity-0 pointer-events-none";
  };

  return (
    <div
      aria-label="Interactive graduation portrait deck"
      className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[430px] aspect-[3/4] flex items-center justify-center [perspective:1200px]"
    >
      {PHOTOS.map((photo, index) => (
        <div
          key={index}
          style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.25, 0.64, 1)" }}
          className={`absolute inset-0 rounded-3xl overflow-hidden border-2 bg-slate-900 transition-all duration-[900ms] will-change-transform select-none ${getCardStyle(
            index
          )}`}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover block pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
}