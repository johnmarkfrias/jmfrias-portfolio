// src/pages/ProjectsPage.jsx

import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

import { projects, projectCategories } from "../data/projects";
import { cleanString } from "../utils/textUtils";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";
import ImageLightbox from "../components/common/ImageLightbox";
import ProjectCTA from "../components/common/ProjectCTA";

import ProjectCard from "../components/projects/ProjectCard";
import ProjectCategoryTabs from "../components/projects/ProjectCategoryTabs";
import ProjectPagination from "../components/projects/ProjectPagination";

function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

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
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsPerPage(5);
      else if (width < 1024) setItemsPerPage(6);
      else setItemsPerPage(9);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveCategory(initialCategory);
    setCurrentPage(1);
  }, [initialCategory]);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setCurrentPage(1);
    if (id === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      searchParams.set("category", id);
      setSearchParams(searchParams);
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter(
      (project) =>
        project.category === activeCategory ||
        cleanString(project.category) === cleanString(activeCategory)
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | John Mark M. Frias - Full Stack Developer</title>
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
                <SectionBadge>PROJECTS</SectionBadge>
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
            <ProjectCategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Filtered Projects Grid */}
            <section aria-label="Projects Grid">
              {currentProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                  {currentProjects.map((project) => {
                    const absoluteIdx = filteredProjects.findIndex((p) => p.id === project.id);
                    return (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onOpenLightbox={() => setLightboxIndex(absoluteIdx)}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="py-20 text-center rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-sm font-medium text-slate-500">
                    No projects currently listed under this category.
                  </p>
                </div>
              )}
            </section>

            {/* Pagination Controls */}
            <ProjectPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

            {/* Reusable Call-to-action */}
            <ProjectCTA />
          </Container>
        </Section>
      </main>

      {/* Lightbox */}
      <ImageLightbox
        items={filteredProjects}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % filteredProjects.length)
        }
      />
    </>
  );
}

export default ProjectsPage;