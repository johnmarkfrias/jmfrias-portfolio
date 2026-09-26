import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";
import ProjectCTA from "../components/common/ProjectCTA";

import SkillSelectorGrid from "../components/skills/SkillSelectorGrid";
import SkillDetails from "../components/skills/SkillDetails";
import TechStackList from "../components/skills/TechStackList";

import { skills } from "../data/skills";

function SkillsPage() {
  const [selectedSkillId, setSelectedSkillId] = useState(skills[0]?.id || null);

  useEffect(() => {
    document.title = "Skills | John Mark M. Frias - Full Stack Developer";
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
        {/* Section 1: Header & Interactive Skills Selector (Light Blue Background) */}
        <Section id="skills-hero" aria-label="Areas of Expertise" className="bg-blue-50/50">
          <Container>
            {/* Header Block */}
            <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12 lg:mb-16 pb-8 border-b border-blue-100">
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

            {/* Interactive Grid & Details aligned to bottom (items-end) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-end">
              <SkillSelectorGrid
                selectedSkillId={selectedSkillId}
                onSelectSkill={(id) => setSelectedSkillId(id)}
              />
              <SkillDetails activeSkill={activeSkill} />
            </div>
          </Container>
        </Section>

        {/* Section 2: Tools & Technologies and CTA (White Background) */}
        <Section id="tools-technologies" aria-label="Tools and Technologies" className="bg-white pb-[80px] lg:pb-[120px]">
          <Container className="text-left">
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

            {/* Reusable Call-to-action */}
            <ProjectCTA />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default SkillsPage;