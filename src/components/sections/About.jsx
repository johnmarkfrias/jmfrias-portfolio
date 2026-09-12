// src/components/sections/About.jsx

import { useState, useEffect } from "react";
import SectionBadge from "../common/SectionBadge";
import Button from "../common/Button";

const PHOTOS = [
  { src: "../../public/assets/gradpic.jpg", alt: "John Mark Frias graduation portrait 1" },
  { src: "../../public/assets/gradpic2.png", alt: "John Mark Frias graduation portrait 2" },
  { src: "../../public/assets/gradpic3.jpg", alt: "John Mark Frias graduation portrait 3" },
  { src: "../../public/assets/gradpic4.jpg", alt: "John Mark Frias graduation portrait 4" },
];

function About() {
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
      return "z-30 scale-100 rotate-0 translate-x-0 -translate-y-1 opacity-100 brightness-100 pointer-events-auto shadow-[0_20px_40px_-15px_rgba(30,58,138,0.25)] border-white";
    }
    if (diff === 1) {
      return "z-10 scale-[0.92] sm:scale-95 rotate-[6deg] sm:rotate-[8deg] translate-x-4 sm:translate-x-6 lg:translate-x-7 translate-y-1 opacity-80 brightness-[0.88] shadow-md border-white/60";
    }
    if (diff === total - 1) {
      return "z-10 scale-[0.92] sm:scale-95 -rotate-[6deg] sm:-rotate-[8deg] -translate-x-4 sm:-translate-x-6 lg:-translate-x-7 translate-y-1 opacity-80 brightness-[0.88] shadow-md border-white/60";
    }
    return "z-0 scale-75 rotate-0 translate-x-0 translate-y-2 opacity-0 pointer-events-none";
  };

  return (
    <section 
      id="about" 
      aria-label="About Section"
      className="bg-blue-50 py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]"
    >
      <div className="max-w-[1440px] mx-auto px-[4%] 2xl:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

        {/* Column 1: Image Deck Wrapper */}
        <div className="w-full min-w-0 flex items-center justify-center px-2 sm:px-4 lg:px-6">
          <div 
            aria-label="Interactive graduation portrait deck"
            className="relative w-full max-w-[290px] sm:max-w-[380px] md:max-w-[430px] lg:max-w-[460px] aspect-[4/5] flex items-center justify-center [perspective:1200px]"
          >
            {PHOTOS.map((photo, index) => (
              <div
                key={index}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.34, 1.25, 0.64, 1)",
                }}
                className={`absolute inset-0 rounded-2xl overflow-hidden border-2 bg-slate-900 transition-all duration-[900ms] will-change-transform select-none ${getCardStyle(
                  index
                )}`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  loading="lazy" 
                  className="w-full h-full object-cover block pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Text Content */}
        <div className="flex flex-col items-start text-left w-full min-w-0">
          <SectionBadge>ABOUT</SectionBadge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 my-3 sm:my-4 leading-tight tracking-tight">
            Designing Solutions, Building Experiences
          </h2>

          <p className="w-full lg:max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
            I'm a full stack developer based in Lucena City, Quezon, with a
            focus on WordPress builds — from custom themes and plugin work to
            full site architecture and performance tuning.
          </p>

          <p className="w-full lg:max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            I graduated Cum Laude with a BS in Information Technology from
            Cavite State University, Imus Campus, and moved from an internship
            building WordPress sites straight into professional development
            work. I like projects where the brief is specific and the details
            matter: a portfolio page's grid, a checkout flow's edge cases, a
            plugin's one weird bug.
          </p>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-auto sm:min-w-[160px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
              <Button href="/about" variant="primary">
                Read More
              </Button>
            </div>
            <div className="w-full sm:w-auto sm:min-w-[160px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
              <Button href="/projects" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;