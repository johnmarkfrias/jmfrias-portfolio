// src/components/skills/SkillDetails.jsx

import Button from "../common/Button";
import { getCategoryRoute, getCollabSubject } from "../../utils/skillsUtils";

export default function SkillDetails({ activeSkill, isDark = false }) {
  const targetCategoryRoute = getCategoryRoute(activeSkill);
  const collabSubject = getCollabSubject(activeSkill);

  return (
    <div
      className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-end text-left border-0 md:border-l-4 md:border-blue-500 pl-0 md:pl-8 py-0 md:py-1"
    >
      <h3
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-200 ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {activeSkill?.title}
      </h3>

      <p
        className={`text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 leading-relaxed transition-all duration-200 ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {activeSkill?.description}
      </p>

      {/* Tech Stack Badges */}
      {activeSkill?.technologies && (
        <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
          {activeSkill.technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2.5 py-1 text-xs sm:text-sm font-medium rounded-md border ${
                isDark
                  ? "bg-slate-900/90 text-slate-300 border-slate-700/80"
                  : "bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* CTA Buttons using the default Button component with white border */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-6 sm:mt-8 [&>a]:w-full [&>a]:sm:w-auto [&>button]:w-full [&>button]:sm:w-auto">
        <Button href={targetCategoryRoute} variant="primary">
          View Related Projects
        </Button>

        <Button
          href={`/contact?subject=${encodeURIComponent(collabSubject)}#contact-form-container`}
          variant="outline"
          className="border-white/80 text-white bg-transparent hover:bg-white/10 hover:border-white rounded-xl"
        >
          Let's Collab
        </Button>
      </div>
    </div>
  );
}