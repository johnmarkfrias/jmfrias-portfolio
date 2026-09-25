// src/components/about/CertificatesCarousel.jsx

import { useState, useEffect, useMemo, useCallback } from "react";
import { CERTIFICATES } from "../../data/aboutData";

export default function CertificatesCarousel({ onSelectCertificate, isLightboxOpen }) {
  const [certIndex, setCertIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalOriginalCerts = CERTIFICATES.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    if (isHovered || isLightboxOpen) return;
    const timer = setInterval(() => {
      nextCertSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered, isLightboxOpen, nextCertSlide]);

  const activeCertNormalized = certIndex % totalOriginalCerts;

  return (
    <>
      {/* Carousel Viewport */}
      <div
        className="relative w-full overflow-hidden pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          onTransitionEnd={handleCertTransitionEnd}
          className={`flex ${
            isTransitioning ? "transition-transform duration-700 ease-out" : "transition-none"
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
                className="px-2.5 sm:px-3 shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div
                  onClick={() => onSelectCertificate(originalIndex)}
                  className="group bg-transparent overflow-hidden flex flex-col h-full cursor-pointer"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-transparent flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between mt-6 sm:mt-10 px-1">
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

        <div className="flex items-center gap-3 text-sm font-medium text-slate-600 select-none">
          <span className="font-bold text-slate-900">
            {String(activeCertNormalized + 1).padStart(2, "0")}
          </span>
          <div className="w-16 sm:w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full"
              style={{
                width: `${((activeCertNormalized + 1) / totalOriginalCerts) * 100}%`,
              }}
            />
          </div>
          <span className="text-slate-400">
            {String(totalOriginalCerts).padStart(2, "0")}
          </span>
        </div>
      </div>
    </>
  );
}