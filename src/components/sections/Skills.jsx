import { useState } from "react";
import { skills } from "../../data/skills";
import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionBadge from "../common/SectionBadge";
import SkillSelectorGrid from "../skills/SkillSelectorGrid";
import SkillDetails from "../skills/SkillDetails";
import TechMarquee from "../skills/TechMarquee";

function Skills() {
  const [selectedSkillId, setSelectedSkillId] = useState(
    skills[0]?.id || null
  );

  const activeSkill =
    skills.find((item) => item.id === selectedSkillId) || skills[0];

  return (
    <Section id="skills" aria-label="Skills & Stack Section" className="bg-[#060d1d] text-white">
      <Container>
        
        {/* Two-Column Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-16 mb-8 sm:mb-10 md:mb-12">
          <div className="text-left shrink-0">
            <div className="-mb-2 sm:-mb-3">
              <SectionBadge>SKILLS</SectionBadge>
            </div>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-0 leading-tight tracking-tight"
            >
              Areas Of Expertise
            </h2>
          </div>

          <div className="max-w-xl text-left">
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Bridging aesthetics and engineering — crafting intuitive UI/UX layouts, graphic design assets, and robust web applications with seamless automation.
            </p>
          </div>
        </div>

        {/* Changed items-center -> items-end to align with bottom of grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-end">
          <SkillSelectorGrid
            selectedSkillId={selectedSkillId}
            onSelectSkill={(id) => setSelectedSkillId(id)}
            isDark={true}
          />
          <SkillDetails activeSkill={activeSkill} isDark={true} />
        </div>

        {/* Infinite Scrolling Tech & Stack Strip */}
        <TechMarquee />

      </Container>
    </Section>
  );
}

export default Skills;