// src/components/skills/TechStackList.jsx

import { techCategories } from "../../data/skills";
import { getOrderedItems, isFullWidthOnMobile, getTechLogoPath } from "../../utils/skillsUtils";

export default function TechStackList() {
  return (
    <div className="space-y-10">
      {techCategories.map((group, groupIdx) => {
        const orderedItems = getOrderedItems(group.category, group.items);

        return (
          <div key={groupIdx}>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4">
              {orderedItems.map((tech, idx) => {
                const fullWidth = isFullWidthOnMobile(group.category, tech.name);

                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 sm:gap-3 bg-blue-700 hover:bg-blue-800 text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl shadow-xs transition-colors duration-200 select-none overflow-hidden ${
                      fullWidth ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                      <img
                        src={getTechLogoPath(tech)}
                        alt={`${tech.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 max-w-[24px] max-h-[24px] object-contain"
                      />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm tracking-tight truncate text-white">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}