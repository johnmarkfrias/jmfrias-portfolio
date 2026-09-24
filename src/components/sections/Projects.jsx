// src/components/sections/Projects.jsx

import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { projects } from "../../data/projects";
import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionBadge from "../common/SectionBadge";

const cleanString = (str = "") => str.toLowerCase().replace(/[^a-z0-9]/g, "");

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalOriginal = projects.length;

  // Append clone cards to eliminate rewind snapping
  const displayProjects = useMemo(() => {
    return [...projects, ...projects.slice(0, itemsPerView)];
  }, [itemsPerView]);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    setIsTransitioning(true);
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalOriginal);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(totalOriginal - 1);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Auto-slide interval
  useEffect(() => {
    if (isHovered || lightboxIndex !== null) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, lightboxIndex, nextSlide]);

  const activeIndexNormalized = currentIndex % totalOriginal;

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + totalOriginal) % totalOriginal);
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % totalOriginal);
  };

  return (
    <>
      <Section 
        id="projects" 
        aria-label="Projects Section"
        className="bg-blue-50/50 overflow-hidden"
      >
        <Container>
          
          {/* Two-Column Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-16 mb-8 md:mb-12">
            <div className="text-left shrink-0">
              <div className="-mb-2 sm:-mb-3">
                <SectionBadge>PROJECTS</SectionBadge>
              </div>
              <h2 
                id="projects-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight"
              >
                What I've Built
              </h2>
            </div>

            <div className="max-w-xl text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                These are selected live websites and applications I built on my own and with other teams. Browse my recent work to see how I can help with your next project.{" "}
                <Link
                  to="/projects"
                  className="text-blue-600 hover:text-blue-700 font-normal transition-colors whitespace-nowrap"
                >
                  See more projects
                </Link>
              </p>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div 
            className="relative w-full overflow-hidden pb-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${
                isTransitioning 
                  ? "transition-transform duration-700 ease-out" 
                  : "transition-none"
              } will-change-transform`}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {displayProjects.map((project, idx) => {
                const originalIndex = projects.findIndex((p) => p.id === project.id);
                const cleanCat = cleanString(project.category);
                const isGraphic = cleanCat === "graphicdesign" || cleanCat === "graphics" || cleanCat === "graphic-design";
                const isUiUx = cleanCat === "uiux" || cleanCat === "ui" || cleanCat === "ui-ux";
                const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== "");

                let actionLabel = "View Site";
                if (isGraphic) {
                  actionLabel = "View Image";
                } else if (isUiUx) {
                  actionLabel = "View Figma";
                }

                const cardInnerContent = (
                  <>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-white flex items-center justify-center p-3">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                      />

                      <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600 shadow-md">
                          <span>{actionLabel}</span>
                          {isGraphic ? (
                            <svg 
                              className="w-3.5 h-3.5 stroke-[2] transition-transform duration-200 group-hover:scale-110" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                            </svg>
                          ) : (
                            <svg 
                              className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col flex-grow text-left">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      {project.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-100/70 group-hover:text-blue-700 transition-colors duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                );

                return (
                  <div 
                    key={`${project.id}-${idx}`}
                    className="px-3 shrink-0 h-full"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    {isGraphic ? (
                      <div
                        onClick={() => setLightboxIndex(originalIndex !== -1 ? originalIndex : 0)}
                        className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(35,95,247,0.14)] hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col h-full cursor-pointer select-none"
                      >
                        {cardInnerContent}
                      </div>
                    ) : hasLiveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(35,95,247,0.14)] hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col h-full block cursor-pointer"
                      >
                        {cardInnerContent}
                      </a>
                    ) : (
                      <div 
                        className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(35,95,247,0.14)] hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col h-full"
                      >
                        {cardInnerContent}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar: Arrow Controls on Left, Clean Progress Indicator on Right */}
          <div className="flex items-center justify-between mt-8 md:mt-10 px-1">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous project"
                className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next project"
                className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 select-none">
              <span className="font-bold text-slate-900">
                {String(activeIndexNormalized + 1).padStart(2, "0")}
              </span>
              <div className="w-16 sm:w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full"
                  style={{
                    width: `${((activeIndexNormalized + 1) / totalOriginal) * 100}%`
                  }}
                />
              </div>
              <span className="text-slate-400">
                {String(totalOriginal).padStart(2, "0")}
              </span>
            </div>
          </div>

        </Container>
      </Section>

      {/* Lightbox Modal Overlay */}
      {lightboxIndex !== null && projects[lightboxIndex] && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <HiXMark className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrevLightbox}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <HiChevronLeft className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={handleNextLightbox}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <HiChevronRight className="w-7 h-7" />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center bg-slate-900/40 p-3 sm:p-5 rounded-none border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-md"
          >
            <img
              src={projects[lightboxIndex].image}
              alt={projects[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-none shadow-2xl select-none"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;