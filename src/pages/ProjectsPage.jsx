// src/pages/ProjectsPage.jsx

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { projects, projectCategories } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";
import SectionBadge from "../components/common/SectionBadge";

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Projects | John Mark M. Frias - Web Developer</title>
        <meta
          name="description"
          content="Browse client websites and development projects built by John Mark M. Frias, focusing on WordPress, custom layouts, and performance."
        />
        <link rel="canonical" href="https://jmfrias.dev/projects" />
      </Helmet>

      <main className="w-full bg-white text-slate-900 pt-[100px] md:pt-[120px] pb-[80px] lg:pb-[120px] overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 2xl:px-8 text-left">
          
          {/* 2-Column Split Header */}
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12 pb-8 border-b border-slate-100">
            <div className="lg:col-span-7">
              <SectionBadge>PORTFOLIO</SectionBadge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 mt-4 tracking-tight leading-[1.12]">
                What I've Built
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-1">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                These are selected websites and applications I built on my own and with other teams. Each project is developed with a focus on clean layouts, speed, responsive design, and Core Web Vitals.
              </p>
            </div>
          </header>

          {/* Filter Selection Tabs (Pwesto ng red boxes) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 select-none border active:scale-95 ${
                    isActive
                      ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-500/50 hover:bg-blue-50/40"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Filtered Projects Grid */}
          <section aria-label="Projects Grid">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="h-full">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={project.image}
                      liveUrl={project.liveUrl}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-sm font-medium text-slate-500">
                  No projects currently listed under this category.
                </p>
              </div>
            )}
          </section>

          {/* Call-to-action Footer Notice */}
          <section className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-3xl bg-blue-50/70 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                Have a project or website in mind?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Let's discuss your design requirements, content structure, and technical features.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-xs shrink-0"
            >
              Get In Touch
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}

export default ProjectsPage;