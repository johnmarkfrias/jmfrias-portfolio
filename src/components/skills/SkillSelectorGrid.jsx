// src/components/skills/SkillSelectorGrid.jsx

import {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
  FaProjectDiagram,
  FaNetworkWired,
} from "react-icons/fa";
import { skills } from "../../data/skills";

const iconMap = {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
  FaProjectDiagram,
  FaNetworkWired,
};

export default function SkillSelectorGrid({ selectedSkillId, onSelectSkill }) {
  return (
    <div className="order-1 lg:order-2 lg:col-span-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
        {skills.map((skill) => {
          const isApiIntegration =
            (skill.title || "").toLowerCase().includes("api") ||
            (skill.id || "").toLowerCase().includes("api");

          const IconComponent = isApiIntegration
            ? FaProjectDiagram
            : iconMap[skill.icon] || FaLaptopCode;

          const isSelected = selectedSkillId === skill.id;

          return (
            <button
              key={skill.id}
              type="button"
              onClick={() => onSelectSkill(skill.id)}
              aria-pressed={isSelected}
              className={`group flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer min-h-[130px] sm:min-h-[160px] active:scale-95 ${
                isSelected
                  ? "bg-blue-700 border-blue-700 text-white shadow-lg shadow-blue-700/20"
                  : "bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-blue-700 hover:border-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-700/20"
              }`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors mb-3 ${
                  isSelected
                    ? "bg-white text-blue-700 shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 group-hover:bg-white group-hover:text-blue-700 group-hover:border-transparent group-hover:shadow-sm"
                }`}
              >
                <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              </div>

              <span
                className={`text-xs sm:text-sm font-semibold transition-colors leading-tight ${
                  isSelected
                    ? "text-white"
                    : "text-slate-700 group-hover:text-white"
                }`}
              >
                {skill.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}