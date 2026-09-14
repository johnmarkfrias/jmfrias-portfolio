// src/pages/SkillsPage.jsx

import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
} from "react-icons/fa";
import { skills, techCategories } from "../data/skills";
import SkillCard from "../components/common/SkillCard";
import SectionBadge from "../components/common/SectionBadge";

const iconMap = {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
};

// I-map ang bawat skill title/id sa target category filter
const getCategoryRoute = (skill) => {
  const title = (skill.title || "").toLowerCase();
  if (title.includes("full stack") || title.includes("web")) {
    return "/projects?category=website-development";
  }
  if (title.includes("ui") || title.includes("ux")) {
    return "/projects?category=ui-ux-design";
  }
  if (title.includes("graphic")) {
    return "/projects?category=graphic-design";
  }
  return null;
};

function SkillsPage() {
  useEffect(() => {
    document.title = "Skills & Stack | John Mark M. Frias - Web Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore the technical skills, development capabilities, and complete software tools utilized by John Mark M. Frias."
      );
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Skills & Stack | John Mark M. Frias - Web Developer</title>
        <meta
          name="description"
          content="Explore the technical skills, development capabilities, and complete software tools utilized by John Mark M. Frias."
        />
        <link rel="canonical" href="https://jmfrias.dev/skills" />
      </Helmet>

      <main className="w-full bg-white text-slate-900 pt-[100px] md:pt-[120px] pb-[80px] lg:pb-[120px] overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 2xl:px-8 text-left">
          
          {/* Header */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16 lg:mb-20 pb-8 border-b border-slate-100">
            <div className="lg:col-span-7">
              <SectionBadge>SKILLS & STACK</SectionBadge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 mt-4 tracking-tight leading-[1.12]">
                Areas Of Expertise
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-1">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Delivering complete digital solutions across every phase — from initial concept and prototype to deployment, testing, and automation.
              </p>
            </div>
          </header>

          {/* Section 1: 5-Card Grid */}
          <section aria-label="Areas of Expertise" className="mb-20 sm:mb-28">
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

                const targetRoute = getCategoryRoute(skill);
                const CardContent = (
                  <SkillCard
                    icon={IconComponent}
                    title={skill.title}
                    description={skill.description}
                  />
                );

                return (
                  <div 
                    key={skill.id || index} 
                    role="listitem" 
                    className={`h-full ${columnSpanClasses}`}
                  >
                    {targetRoute ? (
                      <Link
                        to={targetRoute}
                        className="block h-full transition-all duration-200 hover:-translate-y-1 focus:outline-none"
                      >
                        {CardContent}
                      </Link>
                    ) : (
                      CardContent
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 2: Tools & Technologies */}
          <section aria-label="Tools and Technologies" className="border-t border-slate-100 pt-16 text-left">
            <div className="max-w-2xl mb-10">
              <SectionBadge>STACK & TOOLS</SectionBadge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">
                Tools & Technologies
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Languages, frameworks, database systems, and software tools I actively utilize.
              </p>
            </div>

            <div className="space-y-10">
              {techCategories.map((group, groupIdx) => (
                <div key={groupIdx}>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">
                    {group.category}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {group.items.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3.5 rounded-2xl shadow-xs transition-colors duration-200 select-none"
                      >
                        <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center shrink-0 text-white">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                            fill={tech.isStroke ? "none" : "currentColor"}
                            stroke={tech.isStroke ? "currentColor" : "none"}
                            strokeWidth={tech.isStroke ? 2 : undefined}
                            strokeLinecap={tech.isStroke ? "round" : undefined}
                            strokeLinejoin={tech.isStroke ? "round" : undefined}
                          >
                            <path d={tech.svgPath} />
                          </svg>
                        </div>
                        <span className="font-semibold text-sm tracking-tight truncate text-white">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default SkillsPage;