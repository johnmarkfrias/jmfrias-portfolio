// src/pages/SkillsPage.jsx

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";

import SkillSelectorGrid from "../components/skills/SkillSelectorGrid";
import SkillDetails from "../components/skills/SkillDetails";
import TechStackList from "../components/skills/TechStackList";

import { skills } from "../data/skills";

function SkillsPage() {
  const [selectedSkillId, setSelectedSkillId] = useState(skills[0]?.id || null);

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

  const activeSkill = skills.find((item) => item.id === selectedSkillId) || skills[0];

  return (
    <>
      <Helmet>
        <title>Skills | John Mark M. Frias - Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the technical skills, development capabilities, and complete software tools utilized by John Mark M. Frias."
        />
        <link rel="canonical" href="https://jmfrias.dev/skills" />
      </Helmet>

      <main className="w-full bg-white text-slate-900 overflow-x-hidden">
        <Section id="skills-page" aria-label="Skills & Stack Page" className="bg-white text-slate-900 pb-[80px] lg:pb-[120px]">
          <Container>
            
            {/* Header Block */}
            <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12 lg:mb-16 pb-8 border-b border-slate-100">
              <div className="lg:col-span-7 text-left flex flex-col items-start gap-1">
                <SectionBadge>SKILLS</SectionBadge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12] m-0">
                  Areas Of Expertise
                </h1>
              </div>
              <div className="lg:col-span-5 lg:pb-1 text-left">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  Bridging aesthetics and engineering — crafting intuitive UI/UX layouts, graphic design assets, and robust web applications with seamless automation.
                </p>
              </div>
            </header>

            {/* Section 1: Interactive Skills Selector & Description UI */}
            <section aria-label="Interactive Areas of Expertise" className="mb-12 sm:mb-16 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
                <SkillSelectorGrid
                  selectedSkillId={selectedSkillId}
                  onSelectSkill={(id) => setSelectedSkillId(id)}
                />
                <SkillDetails activeSkill={activeSkill} />
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

              <TechStackList />
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