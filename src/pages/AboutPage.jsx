import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";
import Button from "../components/common/Button";
import ProjectCTA from "../components/common/ProjectCTA";

import PhotoDeck from "../components/about/PhotoDeck";
import CertificatesCarousel from "../components/about/CertificatesCarousel";
import ImageLightbox from "../components/common/ImageLightbox";

import { ROLES } from "../data/roles";
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATES, CV_PATH } from "../data/aboutData";
import { useTypewriter } from "../hooks/useTypewriter";

function AboutPage() {
  const currentRoleText = useTypewriter(ROLES);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = "About | John Mark M. Frias - Full Stack Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn more about John Mark M. Frias, a Web Developer specializing in custom WordPress solutions, REST APIs, React, and Core Web Vitals performance."
      );
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>About | John Mark M. Frias - Full Stack Developer</title>
        <meta
          name="description"
          content="Learn more about John Mark M. Frias, a Web Developer specializing in custom WordPress solutions, REST APIs, React, and Core Web Vitals performance."
        />
        <link rel="canonical" href="https://jmfrias.dev/about" />
      </Helmet>

      <main className="w-full bg-white text-slate-900 overflow-x-hidden">
        {/* 1. Profile Intro Section: Light Blue Background */}
        <Section aria-label="Profile Introduction" className="bg-blue-50/50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Column 1: Interactive Image Deck */}
              <div className="lg:col-span-5 w-full min-w-0 flex items-center justify-center px-2 sm:px-4">
                <PhotoDeck />
              </div>

              {/* Column 2: Text Content */}
              <div className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0">
                <div className="mb-2">
                  <SectionBadge>ABOUT</SectionBadge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-2 tracking-tight leading-[1.12]">
                  John Mark M. Frias
                </h1>

                {/* Changing roles typewriter animation */}
                <p className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold mb-4 sm:mb-5 flex items-center justify-start min-h-[1.75rem] md:min-h-[2rem]">
                  <span>&lt;/{currentRoleText}</span>
                  <span className="inline-block w-[2px] h-4 sm:h-5 bg-blue-600 ml-1 animate-pulse" />
                  <span>&gt;</span>
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  I am a 23-year-old Full-Stack Web Developer born in Lucena City, Quezon, focused on building responsive, scalable, and user-centered web applications. My passion for development began during my ICT studies, where I built my first web project.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  I graduated <span className="font-semibold text-slate-900">Cum Laude</span> with a Bachelor of Science in Information Technology from Cavite State University – Imus Campus. I am passionate about continuous learning and creating reliable, efficient, and practical digital solutions for real-world needs.
                </p>

                {/* Action Buttons: Preview CV & View Skills */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full [&>a]:w-full [&>a]:sm:w-auto [&>button]:w-full [&>button]:sm:w-auto">
                  <Button
                    href={CV_PATH}
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview CV
                  </Button>
                  <Button href="/skills" variant="outline">
                    My Skills & Stack
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 2. Experience & Education Section: White Background */}
        <Section aria-label="Experience and Education Timeline" className="bg-white">
          <Container>
            <div className="max-w-3xl text-left mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
                Professional Background & Expertise
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A comprehensive overview of my technical experience in full-stack web development, frontend engineering, UI/UX design, workflow automation, and academic credentials in Information Technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
              {/* Experience Column */}
              <section aria-label="Work Experience">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-8">
                  {/* Icon matching heading text color */}
                  <div className="text-slate-900 text-xl sm:text-2xl lg:text-[28px] flex items-center justify-center">
                    <HiBriefcase />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Experience
                  </h3>
                </div>

                <div className="space-y-6 sm:space-y-8 border-l-2 border-slate-200 pl-5 sm:pl-6 ml-2 sm:ml-3">
                  {WORK_EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative text-left">
                      <div className="absolute -left-[27px] sm:-left-[31px] top-1 sm:top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {exp.role}
                        </h4>
                        <span className="text-[11px] sm:text-xs font-medium text-slate-500 bg-slate-200/60 px-2.5 py-0.5 sm:py-1 rounded-full w-fit whitespace-nowrap shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 sm:mb-3">
                        {exp.company} &bull; {exp.location}
                      </p>
                      <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 sm:space-y-2 list-disc list-outside ml-4 leading-relaxed">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Column */}
              <section aria-label="Education">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-8">
                  {/* Icon matching heading text color */}
                  <div className="text-slate-900 text-xl sm:text-2xl lg:text-[28px] flex items-center justify-center">
                    <HiAcademicCap />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Education
                  </h3>
                </div>

                <div className="space-y-6 sm:space-y-8 border-l-2 border-slate-200 pl-5 sm:pl-6 ml-2 sm:ml-3">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="relative text-left">
                      <div className="absolute -left-[27px] sm:-left-[31px] top-1 sm:top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {edu.degree}
                        </h4>
                        <span className="text-[11px] sm:text-xs font-medium text-slate-500 bg-slate-200/60 px-2.5 py-0.5 sm:py-1 rounded-full w-fit whitespace-nowrap shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 sm:mb-2.5">
                        {edu.institution} &bull; {edu.location}
                      </p>
                      <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-0.5 sm:py-1 rounded-full">
                        {edu.honor}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Container>
        </Section>

        {/* 3. Certificates & Achievements Section: White Background */}
        <Section aria-label="Certificates and Honors" className="bg-white pb-6 sm:pb-8 lg:pb-10">
          <Container>
            <div className="max-w-3xl text-left mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
                Certificates & Academic Honors
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A collection of professional certifications, technical training credentials, and dean's list academic recognitions earned throughout my academic and professional career.
              </p>
            </div>

            <CertificatesCarousel
              isLightboxOpen={lightboxIndex !== null}
              onSelectCertificate={(idx) => setLightboxIndex(idx)}
            />

            {/* Reusable Call-to-action */}
            <ProjectCTA />
          </Container>
        </Section>
      </main>

      {/* Lightbox */}
      <ImageLightbox
        items={CERTIFICATES}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % CERTIFICATES.length)}
      />
    </>
  );
}

export default AboutPage;