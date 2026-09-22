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
import Section from "../components/layout/Section";
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

// Helper utility to reorder array items specifically for mobile layout tweaks (Java/.NET, Next.js, n8n)
const getOrderedItems = (categoryName, items) => {
  if (!items) return [];
  let cloned = [...items];

  if (categoryName.toLowerCase().includes("back-end")) {
    const javaIdx = cloned.findIndex(i => i.name.toLowerCase().includes("java") && !i.name.toLowerCase().includes("script"));
    const netIdx = cloned.findIndex(i => i.name.toLowerCase().includes(".net"));
    if (javaIdx !== -1 && netIdx !== -1) {
      const temp = cloned[javaIdx];
      cloned[javaIdx] = cloned[netIdx];
      cloned[netIdx] = temp;
    }
  } else if (categoryName.toLowerCase().includes("front-end")) {
    const nextIdx = cloned.findIndex(i => i.name.toLowerCase().includes("next.js"));
    if (nextIdx !== -1) {
      const [nextItem] = cloned.splice(nextIdx, 1);
      cloned.push(nextItem);
    }
  } else if (categoryName.toLowerCase().includes("software")) {
    const n8nIdx = cloned.findIndex(i => i.name.toLowerCase().includes("n8n"));
    if (n8nIdx !== -1) {
      const [n8nItem] = cloned.splice(n8nIdx, 1);
      cloned.push(n8nItem);
    }
  }

  return cloned;
};

// Helper utility to check if an item should be full width on mobile
const isFullWidthOnMobile = (categoryName, techName) => {
  const cat = categoryName.toLowerCase();
  const name = techName.toLowerCase();
  if (cat.includes("back-end") && name.includes(".net")) return true;
  if (cat.includes("front-end") && name.includes("next.js")) return true;
  if (cat.includes("software") && name.includes("n8n")) return true;
  return false;
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

      <main className="w-full bg-white text-slate-900 overflow-x-hidden">
        <Section id="skills-page" aria-label="Skills & Stack Page" className="bg-white text-slate-900 pb-[80px] lg:pb-[120px]">
          <Container>
            
            {/* Header Block: Tightened badge and heading using flex container */}
            <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12 lg:mb-16 pb-8 border-b border-slate-100">
              <div className="lg:col-span-7 text-left flex flex-col items-start gap-1">
                <SectionBadge>SKILLS & STACK</SectionBadge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12] m-0">
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
            <section aria-label="Interactive Areas of Expertise" className="mb-12 sm:mb-16 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
                
                {/* 1. Cards Grid */}
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

                {/* 2. Description Panel */}
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

                  {/* Dynamic CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-6 sm:mt-8">
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

            {/* Section 2: Tools & Technologies */}
            <section aria-label="Tools and Technologies" className="border-t border-slate-100 pt-10 sm:pt-12 text-left">
              <div className="max-w-2xl mb-10 flex flex-col items-start gap-1">
                <SectionBadge>STACK & TOOLS</SectionBadge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight m-0">
                  Tools & Technologies
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Languages, frameworks, database systems, and software tools I actively utilize.
                </p>
              </div>

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
                              className={`flex items-center gap-2.5 sm:gap-3 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-2xl shadow-xs transition-colors duration-200 select-none overflow-hidden ${
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
            </section>

            {/* Call-to-action Footer Notice */}
            <section className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-3xl bg-blue-50/70 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  Have a project or design in mind?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Let's discuss your web development requirements, UI layouts, and branding assets.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-xs shrink-0"
              >
                Get In Touch
              </Link>
            </section>

          </Container>
        </Section>
      </main>
    </>
  );
}

export default SkillsPage;