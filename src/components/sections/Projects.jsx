// src/components/sections/Projects.jsx

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import SectionBadge from "../common/SectionBadge";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

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

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section 
      id="projects" 
      aria-labelledby="projects-heading"
      className="bg-blue-50/50 py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-[4%] 2xl:px-8">
        
        {/* Two-Column Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 lg:gap-16 mb-12 md:mb-16">
          {/* Left: Section Badge & Title */}
          <div className="text-left shrink-0">
            <SectionBadge>PROJECTS</SectionBadge>
            <h2 
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 leading-tight tracking-tight"
            >
              What I've Built
            </h2>
          </div>

          {/* Right: Inline Description with Link */}
          <div className="max-w-xl text-left">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              These are selected websites and applications I built on my own and with other teams. Browse my recent work to see how I can help with your next project.{" "}
              <Link
                to="/projects"
                className="group/link inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-600 transition-colors whitespace-nowrap"
              >
                <span>See more projects</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
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
            className="flex transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {projects.map((project) => (
              <div 
                key={project.id}
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

        {/* Bottom Bar: Arrow Controls on Left, Dots on Right */}
        <div className="flex items-center justify-between mt-8 md:mt-10 px-1">
          {/* Arrow Buttons (Left) */}
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

          {/* Dots / Pills (Right) */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                  currentIndex === index 
                    ? "w-10 bg-blue-600 shadow-sm" 
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;