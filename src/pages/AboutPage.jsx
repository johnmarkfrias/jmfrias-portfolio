// src/pages/AboutPage.jsx

import { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HiBriefcase, HiAcademicCap, HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";
import Button from "../components/common/Button";
import { ROLES } from "../data/roles";

const PHOTOS = [
  { src: "/assets/gradpic.jpg", alt: "John Mark Frias graduation portrait 1" },
  { src: "/assets/gradpic2.jpg", alt: "John Mark Frias graduation portrait 2" },
  { src: "/assets/gradpic3.jpg", alt: "John Mark Frias graduation portrait 3" },
  { src: "/assets/gradpic4.jpg", alt: "John Mark Frias graduation portrait 4" },
];

const CERTIFICATES = [
  // 1. DCIT Learn ChatGPT Certificate
  {
    id: "cert-3",
    image: "/assets/certificates/DCIT-Learn-ChatGPT-Certificate.png",
  },
  // 2. DCIT Graphic Design Certificate
  {
    id: "cert-8",
    image: "/assets/certificates/DCIT-Graphic-Design-Certificate.png",
  },
  // 3. Guidance Coordinator System - Best Web Design
  {
    id: "cert-9",
    image: "/assets/certificates/guidance-coordinator-system-best-web-design.webp",
  },
  // Remaining certificates follow after
  {
    id: "cert-1",
    image: "/assets/certificates/2nd%20Semester%20AY%202022%20-%202023.png",
  },
  {
    id: "cert-2",
    image: "/assets/certificates/1st%20Semester%20AY%202023%20-%202024.jpg",
  },
  {
    id: "cert-4",
    image: "/assets/certificates/2nd%20Semester%20AY%202021%20-%202022.jpg",
  },
  {
    id: "cert-5",
    image: "/assets/certificates/1st%20Semester%20AY%202024%20-%202025.jpg",
  },
  {
    id: "cert-6",
    image: "/assets/certificates/1st%20Semester%20AY%202022%20-%202023.png",
  },
  {
    id: "cert-7",
    image: "/assets/certificates/1st%20Semester%20AY%202021%20-%202022.jpg",
  },
];

function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Typewriter states for role animation
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Carousel states for certificates
  const [certIndex, setCertIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Lightbox modal state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = "About | John Mark M. Frias - Web Developer & Designer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn more about John Mark M. Frias, a Web Developer specializing in custom WordPress solutions, REST APIs, React, and Core Web Vitals performance."
      );
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Typewriter effect hook matching Hero section
  useEffect(() => {
    const fullText = ROLES[roleIndex] || "";
    let timeout;

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 70 : 90;
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  // Handle responsive items per view for certificate carousel
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

  const totalOriginalCerts = CERTIFICATES.length;

  const displayCertificates = useMemo(() => {
    return [...CERTIFICATES, ...CERTIFICATES.slice(0, itemsPerView)];
  }, [itemsPerView]);

  const nextCertSlide = useCallback(() => {
    setIsTransitioning(true);
    setCertIndex((prev) => prev + 1);
  }, []);

  const prevCertSlide = () => {
    setIsTransitioning(true);
    if (certIndex === 0) {
      setIsTransitioning(false);
      setCertIndex(totalOriginalCerts);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCertIndex(totalOriginalCerts - 1);
        });
      });
    } else {
      setCertIndex((prev) => prev - 1);
    }
  };

  const handleCertTransitionEnd = () => {
    if (certIndex >= totalOriginalCerts) {
      setIsTransitioning(false);
      setCertIndex(0);
    }
  };

  // Auto-slide interval for certificates (Paused when lightbox is open or hovered)
  useEffect(() => {
    if (isHovered || lightboxIndex !== null) return;

    const timer = setInterval(() => {
      nextCertSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, lightboxIndex, nextCertSlide]);

  const activeCertNormalized = certIndex % totalOriginalCerts;

  // Lightbox navigation handlers
  const handleNextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % CERTIFICATES.length);
  };

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  };

  const getCardStyle = (index) => {
    const total = PHOTOS.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return "z-30 scale-100 rotate-0 translate-x-0 -translate-y-1 opacity-100 brightness-100 pointer-events-auto shadow-[0_25px_50px_-12px_rgba(30,58,138,0.3)] border-white";
    }
    if (diff === 1) {
      return "z-10 scale-[0.92] sm:scale-95 rotate-[6deg] sm:rotate-[8deg] translate-x-4 sm:translate-x-8 translate-y-2 opacity-80 brightness-[0.88] shadow-lg border-white/60";
    }
    if (diff === total - 1) {
      return "z-10 scale-[0.92] sm:scale-95 -rotate-[6deg] sm:-rotate-[8deg] -translate-x-4 sm:-translate-x-8 translate-y-2 opacity-80 brightness-[0.88] shadow-lg border-white/60";
    }
    return "z-0 scale-75 rotate-0 translate-x-0 translate-y-4 opacity-0 pointer-events-none";
  };

  return (
    <>
      <Helmet>
        <title>About | John Mark M. Frias - Web Developer & Designer</title>
        <meta
          name="description"
          content="Learn more about John Mark M. Frias, a Web Developer specializing in custom WordPress solutions, REST APIs, React, and Core Web Vitals performance."
        />
        <link rel="canonical" href="https://jmfrias.dev/about" />
      </Helmet>

      <main className="w-full bg-white text-slate-900 overflow-x-hidden">
        
        {/* Profile Intro Section */}
        <Section aria-label="Profile Introduction" className="bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
              
              {/* Column 1: Interactive Image Deck */}
              <div className="lg:col-span-5 w-full min-w-0 flex items-center justify-center px-2 sm:px-4">
                <div 
                  aria-label="Interactive graduation portrait deck"
                  className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[430px] aspect-[3/4] flex items-center justify-center [perspective:1200px]"
                >
                  {PHOTOS.map((photo, index) => (
                    <div
                      key={index}
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.34, 1.25, 0.64, 1)",
                      }}
                      className={`absolute inset-0 rounded-3xl overflow-hidden border-2 bg-slate-900 transition-all duration-[900ms] will-change-transform select-none ${getCardStyle(
                        index
                      )}`}
                    >
                      <img 
                        src={photo.src} 
                        alt={photo.alt} 
                        loading={index === 0 ? "eager" : "lazy"} 
                        className="w-full h-full object-cover block pointer-events-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Text Content */}
              <div className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0">
                <div className="mb-2">
                  <SectionBadge>ABOUT ME</SectionBadge>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-2 tracking-tight leading-[1.12]">
                  John Mark M. Frias
                </h1>

                {/* Changing roles typewriter animation */}
                <p className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold mb-4 sm:mb-5 flex items-center justify-start min-h-[1.75rem] md:min-h-[2rem]">
                  <span>&lt;/{currentText}</span>
                  <span className="inline-block w-[2px] h-4 sm:h-5 bg-blue-600 ml-1 animate-pulse" />
                  <span>&gt;</span>
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  I am a 23-year-old Full-Stack Web Developer born in Lucena City, Quezon, focused on building responsive, scalable, and user-centered web applications. With experience developing and migrating 20+ WordPress sites, I focus on clean code, strong SEO basics, and reliable performance.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  I graduated <span className="font-semibold text-slate-900">Cum Laude</span> with a Bachelor of Science in Information Technology from Cavite State University – Imus Campus. I enjoy turning client ideas into functional digital solutions through solo projects and team collaborations.
                </p>

                {/* Action Buttons using default Button Component with stacked full-width layout on mobile */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full [&>a]:w-full [&>a]:sm:w-auto [&>button]:w-full [&>button]:sm:w-auto">
                  <Button href="/cv.pdf" variant="primary">
                    Download CV
                  </Button>
                  <Button href="/skills" variant="outline">
                    View Skills & Stack
                  </Button>
                </div>
              </div>

            </div>
          </Container>
        </Section>

        {/* Experience & Education Section */}
        <Section aria-label="Experience and Education Timeline" className="bg-blue-50/50">
          <Container>
            
            <div className="max-w-3xl text-left mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Professional Background & Expertise
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A comprehensive overview of my technical experience in full-stack web development, frontend engineering, UI/UX design, workflow automation, and academic credentials in Information Technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Experience Column */}
              <section aria-label="Work Experience">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-blue-600 text-2xl sm:text-[28px] flex items-center justify-center">
                    <HiBriefcase />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Experience
                  </h3>
                </div>

                <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-3">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-slate-900">Web Developer</h4>
                      <span className="text-xs font-medium text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-full">Jan 2026 – Jul 2026</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-600 mb-3">Archicoders &bull; Imus, Cavite</p>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-outside ml-4 leading-relaxed">
                      <li>Built and migrated 20+ WordPress sites with custom post types and REST APIs.</li>
                      <li>Automated workflows with n8n across CRMs and web applications.</li>
                      <li>Applied technical SEO, semantic HTML, and Core Web Vitals speed optimization.</li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-slate-900">Web Developer (Intern)</h4>
                      <span className="text-xs font-medium text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-full">Mar 2025 – Jun 2025</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-600 mb-3">Wellness PRO Inc. &bull; Pasig City</p>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-outside ml-4 leading-relaxed">
                      <li>Maintained company website built on WordPress with custom components.</li>
                      <li>Worked in agile sprints and collaborated using Figma and Canva.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Column */}
              <section aria-label="Education">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-blue-600 text-2xl sm:text-[28px] flex items-center justify-center">
                    <HiAcademicCap />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Education
                  </h3>
                </div>

                <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-3">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-slate-900">BS Information Technology</h4>
                      <span className="text-xs font-medium text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-full">2021 – 2025</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-700 mb-2">Cavite State University - Imus Campus</p>
                    <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                      Cum Laude
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-slate-900">Information and Communication Technology</h4>
                      <span className="text-xs font-medium text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-full">2019 – 2021</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-700 mb-2">Ark Technological Institute</p>
                    <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                      With Honors
                    </span>
                  </div>
                </div>
              </section>

            </div>
          </Container>
        </Section>

        {/* Certificates & Achievements Section with Lightbox Modal */}
        <Section aria-label="Certificates and Honors">
          <Container>
            
            {/* Section Header */}
            <div className="max-w-3xl text-left mb-12">
              <SectionBadge>CREDENTIALS</SectionBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
                Certificates & Academic Honors
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A collection of professional certifications, technical training credentials, and dean's list academic recognitions earned throughout my academic and professional career.
              </p>
            </div>

            {/* Carousel Viewport */}
            <div 
              className="relative w-full overflow-hidden pb-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                onTransitionEnd={handleCertTransitionEnd}
                className={`flex ${
                  isTransitioning 
                    ? "transition-transform duration-700 ease-out" 
                    : "transition-none"
                } will-change-transform`}
                style={{
                  transform: `translateX(-${certIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {displayCertificates.map((cert, idx) => {
                  const originalIndex = CERTIFICATES.findIndex((c) => c.id === cert.id);
                  return (
                    <div 
                      key={`${cert.id}-${idx}`}
                      className="px-3 shrink-0"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <div 
                        onClick={() => setLightboxIndex(originalIndex)}
                        className="group bg-white rounded-none overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                          <img
                            src={cert.image}
                            alt=""
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Bar: Arrow Controls on Left, Clean Progress Indicator on Right */}
            <div className="flex items-center justify-between mt-8 md:mt-10 px-1">
              {/* Arrow Controls */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={prevCertSlide}
                  aria-label="Previous certificate"
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
                  onClick={nextCertSlide}
                  aria-label="Next certificate"
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

              {/* Slide Counter / Progress Indicator */}
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600 select-none">
                <span className="font-bold text-slate-900">
                  {String(activeCertNormalized + 1).padStart(2, "0")}
                </span>
                <div className="w-16 sm:w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full"
                    style={{
                      width: `${((activeCertNormalized + 1) / totalOriginalCerts) * 100}%`
                    }}
                  />
                </div>
                <span className="text-slate-400">
                  {String(totalOriginalCerts).padStart(2, "0")}
                </span>
              </div>
            </div>

          </Container>
        </Section>

        {/* Call-to-action Footer Notice */}
        <Section aria-label="Call to Action" className="py-12">
          <Container>
            <div className="p-8 sm:p-10 rounded-3xl bg-blue-50/70 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
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
            </div>
          </Container>
        </Section>

      </main>

      {/* Lightbox Modal Overlay (Soft, Eye-Ease Backdrop with Subtle Glassmorphism) */}
      {lightboxIndex !== null && (
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

          {/* Modal Content Box (Clean, Elegant Presentation) */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center bg-slate-900/40 p-3 sm:p-5 rounded-none border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-md"
          >
            <img
              src={CERTIFICATES[lightboxIndex].image}
              alt=""
              className="max-w-full max-h-[75vh] object-contain rounded-none shadow-2xl select-none"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AboutPage;