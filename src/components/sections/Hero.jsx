// src/components/sections/Hero.jsx

import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Button from "../common/Button";
import heroPhoto from "/public/assets/hero.png";
import eyeButtonSvg from "/public/assets/eye-button.svg";
import { ROLES } from "../../data/roles";

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[roleIndex];
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

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="max-w-[1440px] mx-auto px-[4%] 2xl:px-8 pt-[20px] pb-[120px] md:pb-[60px] lg:pb-[70px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
    >
      {/* Column 1: Socials + Info */}
      <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-15 w-full">
        
        {/* Social Icons */}
        <aside
          aria-label="Social Media Links"
          className="order-last lg:order-first flex flex-row lg:flex-col gap-4 lg:gap-8 justify-center md:justify-start items-center w-full lg:w-auto pt-5 lg:pt-14 shrink-0"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm"
          >
            <FaGithub />
          </a>
        </aside>

        {/* Text Details */}
        <div className="flex flex-col items-start text-left w-full min-w-0">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase mb-2">
            Hello, My Name Is
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-slate-900 mb-2 leading-tight tracking-tight whitespace-normal sm:whitespace-nowrap">
            JOHN MARK M. FRIAS
          </h1>

          {/* Typewriter Header */}
          <p
            className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold mb-4 sm:mb-5 flex items-center justify-start min-h-[1.75rem] md:min-h-[2rem]"
            aria-live="polite"
          >
            <span>&lt;/{currentText}</span>
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-4 sm:h-5 bg-blue-600 ml-1 animate-pulse"
            />
            <span>&gt;</span>
          </p>

          <p className="w-full lg:max-w-[596px] text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            With a passion in building functional, user-friendly, and visually
            appealing Websites and Software. I take the initiative to learn and
            leverage new technologies, including AI to deliver smarter, faster
            solutions. Always growing, and always open to the next opportunity
            to put that into practice.
          </p>

          {/* Buttons */}
          <div className="w-full sm:w-auto flex items-center gap-3">
            <div className="flex-1 sm:flex-none sm:w-auto sm:min-w-[290px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
              <Button href="/cv.pdf" variant="primary">
                Download CV
              </Button>
            </div>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Preview CV"
              className="inline-flex items-center justify-center shrink-0 hover:opacity-85 transition-opacity"
            >
              <img
                src={eyeButtonSvg}
                alt="View CV"
                className="w-11 h-11 block object-contain select-none"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Column 2: Hero Image */}
      <div className="order-1 lg:order-2 lg:col-span-5 w-full flex items-center justify-center">
        <div className="w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] h-auto overflow-hidden">
          <img
            src={heroPhoto}
            alt="John Mark Frias"
            className="w-full h-auto object-cover block select-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;