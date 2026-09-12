// src/components/sections/Skills.jsx

import {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
} from "react-icons/fa";
import { skills } from "../../data/skills";
import SkillCard from "../common/SkillCard";
import SectionBadge from "../common/SectionBadge";

const iconMap = {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
};

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-10 sm:py-16 md:py-20 lg:py-24 xl:py-[100px] bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 2xl:px-8 text-center">
        <SectionBadge>SKILLS</SectionBadge>

        <h2
          id="skills-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3 sm:mt-4 mb-2.5 sm:mb-3.5 leading-tight tracking-tight"
        >
          Areas Of Expertise
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 w-full lg:max-w-xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
          Delivering complete digital solutions across every phase — from
          initial concept and prototype to deployment, testing, and
          automation.
        </p>

        {/* 5-card layout: 3 sa itaas, 2 nakasentro sa ibaba */}
        <div 
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-5 lg:gap-6 xl:gap-8 auto-rows-fr text-left"
        >
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];

            let columnSpanClasses = "lg:col-span-2";
            if (index === 3) {
              columnSpanClasses = "lg:col-start-2 lg:col-span-2";
            }

            return (
              <div 
                key={skill.id} 
                role="listitem" 
                className={`h-full ${columnSpanClasses}`}
              >
                <SkillCard
                  icon={IconComponent}
                  title={skill.title}
                  description={skill.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;