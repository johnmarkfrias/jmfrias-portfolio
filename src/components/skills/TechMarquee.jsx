// src/components/skills/TechMarquee.jsx

import { techCategories } from "../../data/skills";
import { getTechLogoPath } from "../../utils/skillsUtils";

export default function TechMarquee() {
  // Flatten all unique technologies from categories
  const allTechs = techCategories.flatMap((category) => category.items);
  // Deduplicate by name
  const uniqueTechs = Array.from(new Map(allTechs.map((item) => [item.name, item])).values());

  return (
    <div className="w-full mt-14 sm:mt-18 pt-10 border-t border-slate-800/80">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
        Technologies & Tools I Work With
      </p>

      {/* Infinite Marquee Container with Gradient Mask */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <style>{`
          @keyframes marqueeSlide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marqueeSlide 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="animate-marquee items-center gap-8 sm:gap-12 py-2">
          {/* Double items array for continuous seamless infinite loop */}
          {[...uniqueTechs, ...uniqueTechs].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/70 border border-slate-800/80 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-200 select-none shrink-0"
            >
              <img
                src={getTechLogoPath(tech)}
                alt={`${tech.name} logo`}
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
              <span className="text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}