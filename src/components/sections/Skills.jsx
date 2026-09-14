// src/components/sections/Skills.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
} from "react-icons/fa";
import { skills } from "../../data/skills";
import SectionBadge from "../common/SectionBadge";

const iconMap = {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
};

function Skills() {
  const [selectedSkillId, setSelectedSkillId] = useState(
    skills[0]?.id || null
  );

  const activeSkill =
    skills.find((item) => item.id === selectedSkillId) || skills[0];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 2xl:px-8">
        
        {/* Two-Column Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 lg:gap-16 mb-10 md:mb-16">
          {/* Left: Badge & Heading */}
          <div className="text-left shrink-0">
            <SectionBadge>SKILLS & STACK</SectionBadge>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 leading-tight tracking-tight"
            >
              Areas Of Expertise
            </h2>
          </div>

          {/* Right: Inline Description with Link */}
          <div className="max-w-xl text-left">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Delivering complete digital solutions across every phase — from initial concept and prototype to deployment, testing, and automation.{" "}
              <a
                href="#contact"
                className="group/link inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-600 transition-colors whitespace-nowrap"
              >
                <span>Get in touch</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </p>
          </div>
        </div>

        {/* Responsive Reordered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Cards Grid: Appears FIRST on mobile/tablet (order-1), RIGHT on desktop (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {skills.map((skill) => {
                const IconComponent = iconMap[skill.icon] || FaLaptopCode;
                const isSelected = activeSkill?.id === skill.id;

                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setSelectedSkillId(skill.id)}
                    aria-pressed={isSelected}
                    className={`group flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer min-h-[130px] sm:min-h-[160px] active:scale-95 ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                    }`}
                  >
                    {/* Icon Container */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors mb-3 ${
                        isSelected
                          ? "bg-white text-blue-600 shadow-sm"
                          : "bg-white text-slate-600 border border-slate-200 group-hover:bg-white group-hover:text-blue-600 group-hover:border-transparent group-hover:shadow-sm"
                      }`}
                    >
                      <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    {/* Skill Title */}
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

          {/* Description Panel: Appears SECOND on mobile/tablet (order-2), LEFT on desktop (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center text-left border-l-4 border-blue-600 pl-5 sm:pl-8 py-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight transition-all duration-200">
              {activeSkill?.title}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed transition-all duration-200">
              {activeSkill?.description}
            </p>

            {/* Optional Tech Stack Badges */}
            {activeSkill?.technologies && (
              <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
                {activeSkill.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-xs sm:text-sm font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mt-6 sm:mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
              >
                View Related Projects
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;