// src/components/projects/ProjectCategoryTabs.jsx

import { projectCategories } from "../../data/projects";

export default function ProjectCategoryTabs({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
      {projectCategories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 select-none border active:scale-95 cursor-pointer ${
              isActive
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500/50 hover:bg-blue-50/40"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}