// src/pages/ProjectsPage.jsx

import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { projects, projectCategories } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";
import SectionBadge from "../components/common/SectionBadge";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

// Helper para iparehas ang text kahit may gitling, spaces, o slashes
const cleanString = (str = "") => str.toLowerCase().replace(/[^a-z0-9]/g, "");

function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  // Hanapin ang tamang category ID base sa param sa URL
  const initialCategory = useMemo(() => {
    if (!categoryParam) return "all";

    const cleanParam = cleanString(categoryParam);
    const matched = projectCategories.find(
      (c) =>
        cleanString(c.id) === cleanParam ||
        cleanString(c.label) === cleanParam ||
        cleanParam.includes(cleanString(c.id)) ||
        cleanString(c.id).includes(cleanParam)
    );

    return matched ? matched.id : "all";
  }, [categoryParam]);

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Lightbox modal state for graphic designs / projects
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Panatilihing synced kapag nagbago ang URL param
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    if (id === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      searchParams.set("category", id);
      setSearchParams(searchParams);
    }
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory ||
            cleanString(project.category) === cleanString(activeCategory)
        );

  // Lightbox navigation handlers
  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <>
      <Helmet>
        <title>Projects | John Mark M. Frias - Web Developer & Designer</title>
        <meta
          name="description"
          content="Browse client websites, UI/UX designs, and graphic design assets created by John Mark M. Frias."
        />
        <link rel="canonical" href="https://jmfrias.dev/projects" />
      </Helmet>

      <main className="w-full bg-white text-slate-900 overflow-x-hidden">
        <Section aria-label="Projects Section">
          <Container className="text-left">
            
            {/* Header */}
            <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12 pb-8 border-b border-slate-100">
              <div className="lg:col-span-7">
                <SectionBadge>PORTFOLIO</SectionBadge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 mt-2 tracking-tight leading-[1.12]">
                  What I've Built
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-1">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  Explore selected websites, UI/UX platforms, and graphic design creative assets built across independent projects and professional team collaborations.
                </p>
              </div>
            </header>

            {/* Filter Selection Tabs */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
              {projectCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
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
                  {filteredProjects.map((project, idx) => (
                    <div 
                      key={project.id} 
                      className="h-full cursor-pointer"
                      onClick={() => setLightboxIndex(idx)}
                    >
                      {project.category === "graphic-design" ? (
                        <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 flex items-center justify-center p-3">
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                            />
                          </div>
                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                              {project.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4">
                              {project.description}
                            </p>
                            {project.tags && (
                              <div className="flex flex-wrap gap-1.5 mt-auto">
                                {project.tags.map((tag, tIdx) => (
                                  <span key={tIdx} className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 text-slate-600">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          tags={project.tags}
                          image={project.image}
                          liveUrl={project.liveUrl}
                        />
                      )}
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

      {/* Lightbox Modal Overlay */}
      {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <HiXMark className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrevLightbox}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <HiChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNextLightbox}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <HiChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Content Box */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center bg-slate-900/40 p-3 sm:p-5 rounded-none border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-md"
          >
            <img
              src={filteredProjects[lightboxIndex].image}
              alt={filteredProjects[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-none shadow-2xl select-none"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;