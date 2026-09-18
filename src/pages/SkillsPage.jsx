// src/pages/SkillsPage.jsx

import { useState, useEffect } from "react";
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
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";

const iconMap = {
  FaLaptopCode,
  FaPencilRuler,
  FaBug,
  FaPaintBrush,
  FaRobot,
};

// Map each skill title/id to the matching project category filter
const getCategoryRoute = (skill) => {
  if (!skill) return "/projects";
  const title = (skill.title || "").toLowerCase();
  const id = (skill.id || "").toLowerCase();

  if (title.includes("full stack") || title.includes("web") || id.includes("stack")) {
    return "/projects?category=website";
  }
  if (title.includes("ui") || title.includes("ux") || id.includes("ui-ux")) {
    return "/projects?category=ui-ux";
  }
  if (title.includes("graphic") || id.includes("graphic")) {
    return "/projects?category=graphic-design";
  }
  return "/projects";
};

// Map each skill title to a matching professional inquiry subject for the contact form
const getCollabSubject = (skill) => {
  if (!skill) return "Project Collaboration";
  const title = (skill.title || "").toLowerCase();

  if (title.includes("full stack") || title.includes("web")) {
    return "Full-Stack Development Inquiry";
  }
  if (title.includes("api") || title.includes("integration")) {
    return "API Integration Inquiry";
  }
  if (title.includes("ui") || title.includes("ux")) {
    return "UI/UX Design Inquiry";
  }
  if (title.includes("qa") || title.includes("testing")) {
    return "QA Testing Inquiry";
  }
  if (title.includes("wordpress")) {
    return "WordPress Customization Inquiry";
  }
  if (title.includes("ai") || title.includes("automation")) {
    return "AI & Automation Inquiry";
  }
  return "Project Collaboration";
};

// Helper function to map technology names to white logo assets
const getTechLogoPath = (tech) => {
  const name = (tech.name || "").toLowerCase();
  if (name.includes("html")) return "/assets/white-logos/html-5.svg";
  if (name.includes("css")) return "/assets/white-logos/css.svg";
  if (name.includes("tailwind")) return "/assets/white-logos/tailwind.svg";
  if (name.includes("bootstrap")) return "/assets/white-logos/bootstrap.svg";
  if (name.includes("javascript")) return "/assets/white-logos/javascript.svg";
  if (name.includes("react")) return "/assets/white-logos/react-js.svg";
  if (name.includes("next")) return "/assets/white-logos/next-js.svg";
  if (name.includes("php")) return "/assets/white-logos/php.svg";
  if (name.includes("node")) return "/assets/white-logos/node-js.svg";
  if (name.includes("python")) return "/assets/white-logos/python.svg";
  if (name.includes("c#")) return "/assets/white-logos/c-sharp.svg";
  if (name.includes(".net")) return "/assets/white-logos/dotnet.svg";
  if (name.includes("c++")) return "/assets/white-logos/c-plus-plus.svg";
  if (name.includes("java")) return "/assets/white-logos/java.svg";
  if (name.includes("mysql server") || name.includes("ms sql server")) return "/assets/white-logos/mysql-server.svg";
  if (name.includes("mysql")) return "/assets/white-logos/mysql.svg";
  if (name.includes("github")) return "/assets/white-logos/github.svg";
  if (name.includes("git")) return "/assets/white-logos/git.svg";
  if (name.includes("wordpress")) return "/assets/white-logos/wordpress.svg";
  if (name.includes("n8n")) return "/assets/white-logos/n8n.svg";
  if (name.includes("figma")) return "/assets/white-logos/figma.svg";
  if (name.includes("vs code") || name.includes("vscode")) return "/assets/white-logos/vscode.svg";
  if (name.includes("postman")) return "/assets/white-logos/postman.svg";
  if (name.includes("webflow")) return "/assets/white-logos/figma.svg";
  if (name.includes("photoshop")) return "/assets/white-logos/photoshop.svg";
  if (name.includes("canva")) return "/assets/white-logos/canva.svg";
  if (name.includes("asana")) return "/assets/white-logos/asana.svg";
  if (name.includes("jira")) return "/assets/white-logos/jira.svg";
  if (name.includes("linux")) return "/assets/white-logos/linux.svg";
  return "/assets/white-logos/vscode.svg";
};

function SkillsPage() {
  const [selectedSkillId, setSelectedSkillId] = useState(
    skills[0]?.id || null
  );

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

  const activeSkill =
    skills.find((item) => item.id === selectedSkillId) || skills[0];

  const targetCategoryRoute = getCategoryRoute(activeSkill);
  const collabSubject = getCollabSubject(activeSkill);

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

      <main className="w-full bg-white text-slate-900 pt-[90px] md:pt-[110px] pb-[60px] lg:pb-[100px] overflow-x-hidden">
        <Container>
          
          {/* Header Block: Tightened badge-to-heading spacing */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-10 lg:mb-12 pb-6 sm:pb-8 border-b border-slate-100">
            <div className="lg:col-span-7 text-left">
              <div className="inline-block mb-2">
                <SectionBadge>SKILLS & STACK</SectionBadge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Areas Of Expertise
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-1 text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Delivering complete digital solutions across every phase — from initial concept and prototype to deployment, testing, and automation.
              </p>
            </div>
          </header>

          {/* Section 1: Interactive Skills Selector & Description UI */}
          <section aria-label="Interactive Areas of Expertise" className="mb-10 sm:mb-14 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
              
              {/* 1. Cards Grid: Top on mobile/tablet (order-1), Right on desktop (lg:order-2) */}
              <div className="order-1 lg:order-2 lg:col-span-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || FaLaptopCode;
                    const isSelected = activeSkill?.id === skill.id;

                    return (
                      <button
                        key={skill.id}
                        type="button"
                        onClick={() => setSelectedSkillId(skill.id)}
                        aria-pressed={isSelected}
                        className={`group flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer min-h-[120px] sm:min-h-[150px] active:scale-95 ${
                          isSelected
                            ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                            : "bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors mb-2.5 sm:mb-3 ${
                            isSelected
                              ? "bg-white text-blue-600 shadow-sm"
                              : "bg-white text-slate-600 border border-slate-200 group-hover:bg-white group-hover:text-blue-600 group-hover:border-transparent group-hover:shadow-sm"
                          }`}
                        >
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-110" />
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
                  <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
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

                {/* Dynamic CTA Buttons: View Projects & Let's Collab */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-5 sm:mt-7">
                  <div className="w-full sm:w-auto">
                    <Link
                      to={targetCategoryRoute}
                      className="w-full sm:w-auto flex items-center justify-center px-5 py-3 rounded-lg text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-sm text-center"
                    >
                      View Related Projects
                    </Link>
                  </div>

                  <div className="w-full sm:w-auto">
                    <Link
                      to={`/contact?subject=${encodeURIComponent(collabSubject)}#contact-form-container`}
                      className="w-full sm:w-auto flex items-center justify-center px-5 py-3 rounded-lg text-sm sm:text-base font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 active:scale-95 transition-all border border-blue-200 text-center"
                    >
                      Let's Collab
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section 2: Tools & Technologies (2 cols on mobile, 3 on tablet, 4 on desktop) */}
          <section aria-label="Tools and Technologies" className="border-t border-slate-100 pt-8 sm:pt-10 text-left">
            <div className="max-w-2xl mb-8 sm:mb-10">
              <div className="inline-block mb-2">
                <SectionBadge>STACK & TOOLS</SectionBadge>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Tools & Technologies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Languages, frameworks, database systems, and software tools I actively utilize.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {techCategories.map((group, groupIdx) => (
                <div key={groupIdx}>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase mb-3 sm:mb-4">
                    {group.category}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4">
                    {group.items.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 sm:gap-3 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl shadow-xs transition-colors duration-200 select-none overflow-hidden"
                      >
                        {/* Strictly-sized uniform icon box container */}
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </Container>
      </main>
    </>
  );
}

export default SkillsPage;