// src/components/sections/Skills.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
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
import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionBadge from "../common/SectionBadge";
import Button from "../common/Button";

const iconMap = {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
  FaProjectDiagram,
  FaNetworkWired,
};

// Map each skill title/id to the matching project category filter
const getCategoryRoute = (skill) => {
  if (!skill) return "/projects";
  const title = (skill.title || "").toLowerCase();
  const id = (skill.id || "").toLowerCase();

  // Web Development, API Integration, n8n Automation, and QA all direct to Website category
  if (
    title.includes("full stack") ||
    title.includes("web") ||
    id.includes("stack") ||
    title.includes("api") ||
    title.includes("integration") ||
    id.includes("api") ||
    title.includes("n8n") ||
    title.includes("automation") ||
    id.includes("automation") ||
    title.includes("qa") ||
    title.includes("quality") ||
    title.includes("testing") ||
    id.includes("qa")
  ) {
    return "/projects?category=website";
  }

  // UI / UX Design
  if (title.includes("ui") || title.includes("ux") || id.includes("ui-ux")) {
    return "/projects?category=ui-ux";
  }

  // Graphic Design
  if (title.includes("graphic") || id.includes("graphic")) {
    return "/projects?category=graphic-design";
  }

  return "/projects";
};

// Map each skill title to an exact matching professional inquiry subject from ContactPage options
const getCollabSubject = (skill) => {
  if (!skill) return "Project Collaboration";
  const title = (skill.title || "").toLowerCase();
  const id = (skill.id || "").toLowerCase();

  if (title.includes("full stack") || title.includes("web") || id.includes("stack")) {
    return "Full-Stack Development Inquiry";
  }
  if (title.includes("api") || title.includes("integration") || id.includes("api") || id.includes("integration")) {
    return "API Integration Inquiry";
  }
  if (title.includes("ui") || title.includes("ux") || id.includes("ui-ux")) {
    return "UI/UX Design Inquiry";
  }
  if (title.includes("graphic") || id.includes("graphic") || id.includes("design")) {
    return "Graphic Design Inquiry";
  }
  if (title.includes("qa") || title.includes("testing") || id.includes("qa") || id.includes("testing")) {
    return "QA Testing Inquiry";
  }
  if (title.includes("wordpress") || id.includes("wordpress")) {
    return "WordPress Customization Inquiry";
  }
  if (title.includes("ai") || title.includes("automation") || id.includes("ai") || id.includes("automation")) {
    return "AI & Automation Inquiry";
  }
  return "Project Collaboration";
};

function Skills() {
  const [selectedSkillId, setSelectedSkillId] = useState(
    skills[0]?.id || null
  );

  const activeSkill =
    skills.find((item) => item.id === selectedSkillId) || skills[0];

  const targetCategoryRoute = getCategoryRoute(activeSkill);
  const collabSubject = getCollabSubject(activeSkill);

  return (
    <Section id="skills" aria-label="Skills & Stack Section" className="bg-white">
      <Container>
        
        {/* Two-Column Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-16 mb-6 sm:mb-8 md:mb-10">
          <div className="text-left shrink-0">
            <div className="-mb-2 sm:-mb-3">
              <SectionBadge>SKILLS</SectionBadge>
            </div>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-0 leading-tight tracking-tight"
            >
              Areas Of Expertise
            </h2>
          </div>

          <div className="max-w-xl text-left">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bridging aesthetics and engineering — crafting intuitive UI/UX layouts, graphic design assets, and robust web applications with seamless automation.
            </p>
          </div>
        </div>

        {/* Responsive Reordered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* 1. Cards Grid: Top on mobile/tablet (order-1), Right on desktop (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {skills.map((skill) => {
                const isApiIntegration =
                  (skill.title || "").toLowerCase().includes("api") ||
                  (skill.id || "").toLowerCase().includes("api");

                const IconComponent = isApiIntegration
                  ? FaProjectDiagram
                  : iconMap[skill.icon] || FaLaptopCode;

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
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors mb-3 ${
                        isSelected
                          ? "bg-white text-blue-600 shadow-sm"
                          : "bg-white text-slate-600 border border-slate-200 group-hover:bg-white group-hover:text-blue-600 group-hover:border-transparent group-hover:shadow-sm"
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

          {/* 2. Description Panel: Bottom on mobile/tablet (order-2), Left on desktop (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center text-left border-0 md:border-l-4 md:border-blue-600 pl-0 md:pl-8 py-0 md:py-2">
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

            {/* Dynamic CTA Buttons using the Button Component */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-6 sm:mt-8 [&>a]:w-full [&>a]:sm:w-auto [&>button]:w-full [&>button]:sm:w-auto">
              <Button href={targetCategoryRoute} variant="primary">
                View Related Projects
              </Button>

              <Button 
                href={`/contact?subject=${encodeURIComponent(collabSubject)}#contact-form-container`} 
                variant="outline"
              >
                Let's Collab
              </Button>
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}

export default Skills;