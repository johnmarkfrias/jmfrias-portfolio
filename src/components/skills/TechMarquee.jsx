import { techCategories } from "../../data/skills";
import { getTechLogoPath } from "../../utils/skillsUtils";

export default function TechMarquee() {
  const allTechs = techCategories.flatMap((category) => category.items);
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
          /* 65s produces a smooth, relaxed drift across all devices */
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marqueeSlide 65s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="animate-marquee items-center gap-6 sm:gap-8 py-2">
          {[...uniqueTechs, ...uniqueTechs].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-200 select-none shrink-0"
            >
              <img
                src={getTechLogoPath(tech)}
                alt={`${tech.name} logo`}
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
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