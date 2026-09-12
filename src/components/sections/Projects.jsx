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
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section 
      id="projects" 
      aria-labelledby="projects-heading"
      className="bg-blue-50 py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-[4%] 2xl:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div className="w-full md:max-w-2xl text-left">
            <SectionBadge>PROJECTS</SectionBadge>
            
            <h2 
              id="projects-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-3 leading-tight tracking-tight"
            >
              What I've Built
            </h2>

            {/* Professional yet basic and accessible copy */}
            <p className="text-sm sm:text-base text-slate-600 w-full leading-relaxed">
              These are selected websites and applications I built on my own and with other teams. Browse my recent work to see how I can help with your next project.{" "}
              <Link
                to="/projects"
                className="group/link inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-600 transition-colors whitespace-nowrap ml-1"
              >
                <span>See all projects</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </p>
          </div>

          {/* Simple Rounded Outline Controls */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 hover:border-slate-400 active:scale-95 transition-all shadow-2xs"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
              className="w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 hover:border-slate-400 active:scale-95 transition-all shadow-2xs"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div 
          className="relative w-full overflow-hidden"
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

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "w-8 bg-blue-600" 
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;