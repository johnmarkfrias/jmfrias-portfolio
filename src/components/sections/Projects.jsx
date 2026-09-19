// src/components/sections/Projects.jsx

import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionBadge from "../common/SectionBadge";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const activeIndexNormalized = currentIndex % totalOriginal;

  return (
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
            {displayProjects.map((project, idx) => (
              <div 
                key={`${project.id}-${idx}`}
                className="px-3 shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
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
        </div>

        {/* Bottom Bar: Arrow Controls on Left, Clean Progress Indicator on Right */}
        <div className="flex items-center justify-between mt-8 md:mt-10 px-1">
          {/* Arrow Buttons */}
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

          {/* Professional Slide Counter / Progress Indicator */}
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
  );
}

export default Projects;