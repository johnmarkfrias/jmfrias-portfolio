// src/components/sections/Hero.jsx

import { useState, useEffect } from "react";
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaPhp,
  FaGitAlt
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../common/Button";
import heroPhoto from "/public/assets/hero.png";
import eyeButtonSvg from "/public/assets/eye-button.svg";
import { ROLES } from "../../data/roles";

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect
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

  const SocialLinks = ({ className = "" }) => (
    <aside aria-label="Social Media Links" className={`flex items-center gap-4 lg:gap-9 ${className}`}>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm shrink-0"
      >
        <FaInstagram />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm shrink-0"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-blue-600 transition-colors shadow-sm shrink-0"
      >
        <FaGithub />
      </a>
    </aside>
  );

  return (
    <Section id="home" aria-label="Hero Section" className="pt-20 sm:pt-24 lg:pt-16 pb-12 lg:pb-16 overflow-hidden">
      <style>{`
        @keyframes circleEntrance {
          0% {
            opacity: 0;
            transform: scale(0.35);
          }
          70% {
            opacity: 0.95;
            transform: scale(1.03);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes portraitPopUp {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.95);
          }
          75% {
            opacity: 1;
            transform: translateY(-8px) scale(1.015);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes logoPopIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          65% {
            opacity: 1;
            transform: scale(1.22);
          }
          85% {
            transform: scale(0.94);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gentleSwingA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(4deg); }
        }

        @keyframes gentleSwingB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(7px) rotate(-4deg); }
        }

        .anim-circle {
          animation: circleEntrance 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-portrait {
          animation: portraitPopUp 1.2s cubic-bezier(0.32, 1, 0.55, 1) 0.35s both;
        }

        .anim-logo {
          animation: logoPopIn 0.85s cubic-bezier(0.30, 1.25, 0.55, 1) both;
        }

        .swing-a {
          animation: gentleSwingA 6s ease-in-out infinite;
        }

        .swing-b {
          animation: gentleSwingB 6.8s ease-in-out infinite;
        }
      `}</style>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* ===================================================================
            LEFT COLUMN: Intro Content
        =================================================================== */}
        <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col lg:flex-row items-start gap-6 lg:gap-12 w-full">
          <div className="hidden lg:flex flex-col justify-center items-center shrink-0 self-center">
            <SocialLinks className="flex-col" />
          </div>

          <div className="flex-1 flex flex-col items-start text-left w-full min-w-0">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase mb-2">
              Hello, My Name Is
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-extrabold text-slate-900 mb-2 leading-tight tracking-tight">
              JOHN MARK M. FRIAS
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold mb-4 sm:mb-5 flex items-center justify-start min-h-[1.75rem] md:min-h-[2rem]">
              <span>&lt;/{currentText}</span>
              <span className="inline-block w-[2px] h-4 sm:h-5 bg-blue-600 ml-1 animate-pulse" />
              <span>&gt;</span>
            </p>

            <p className="w-full text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              With a passion in building fast, functional, and visually engaging Websites and Software. I take the initiative to learn new technologies, including AI to deliver smarter, faster solutions. Always growing, and always open to the next opportunity to put that into practice.
            </p>

            <div className="w-full sm:w-auto flex items-center justify-start gap-3">
              <div className="flex-1 sm:flex-none sm:w-auto sm:min-w-[240px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
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
                <img src={eyeButtonSvg} alt="View CV" className="w-11 h-11 block object-contain select-none" />
              </a>
            </div>

            <div className="flex lg:hidden mt-6 md:mt-8 w-full justify-center min-[426px]:justify-start">
              <SocialLinks className="flex-row" />
            </div>
          </div>
        </div>

        {/* ===================================================================
            RIGHT COLUMN: Pop-Out Circle Canvas (Scaled for Mobile Viewports)
        =================================================================== */}
        <div className="order-1 lg:order-2 lg:col-span-6 w-full flex items-center justify-center pt-6 sm:pt-8 lg:pt-0">
          <div className="relative w-[260px] xs:w-[290px] sm:w-[380px] md:w-[420px] lg:w-[480px] aspect-square flex items-center justify-center">

            {/* 1. Base Circle: Bottom Torso is clipped inside */}
            <div className="anim-circle relative w-full h-full rounded-full bg-gradient-to-tr from-[#1652e8] via-[#2166fa] to-[#3b87ff] shadow-xl sm:shadow-2xl shadow-blue-600/35 overflow-hidden flex items-end justify-center z-10">
              <img
                src={heroPhoto}
                alt="John Mark Frias"
                className="anim-portrait h-[115%] w-auto max-w-none object-contain block pointer-events-none select-none"
              />
            </div>

            {/* 2. Pop-out Top Layer: Head & Shoulders break free above circle */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none select-none [clip-path:polygon(0_-30%,100%_-30%,100%_48%,0_48%)]"
            >
              <img
                src={heroPhoto}
                alt=""
                className="anim-portrait h-[115%] w-auto max-w-none object-contain block"
              />
            </div>

            {/* ===============================================================
                GROUP A: INSIDE CIRCLE (High Contrast, Scaled Down on Mobile)
            =============================================================== */}

            {/* JavaScript: Pure Yellow glyph (no black border) */}
            <div style={{ animationDelay: "0.95s" }} className="anim-logo absolute top-[19%] right-[11%] z-30 pointer-events-none">
              <div className="swing-a drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <SiJavascript className="text-[#F7DF1E] text-2xl xs:text-3xl sm:text-4xl lg:text-[44px]" />
              </div>
            </div>

            {/* HTML5: High-contrast red-orange */}
            <div style={{ animationDelay: "1.05s" }} className="anim-logo absolute top-[23%] left-[10%] z-30 pointer-events-none">
              <div className="swing-b drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <FaHtml5 className="text-[#E34F26] text-2xl xs:text-3xl sm:text-4xl lg:text-[46px]" />
              </div>
            </div>

            {/* Git: Lower-left inside */}
            <div style={{ animationDelay: "1.15s" }} className="anim-logo absolute top-[52%] left-[6%] z-30 pointer-events-none">
              <div className="swing-a drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <FaGitAlt className="text-[#F05032] text-xl xs:text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

            {/* Figma: Lower-right inside */}
            <div style={{ animationDelay: "1.25s" }} className="anim-logo absolute top-[50%] right-[6%] z-30 pointer-events-none">
              <div className="swing-b drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <SiFigma className="text-[#F24E1E] text-xl xs:text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

            {/* ===============================================================
                GROUP B: OUTSIDE CIRCLE (Orbiting with Tighter Mobile Clearance)
            =============================================================== */}

            {/* React.js: Top-left outskirts */}
            <div style={{ animationDelay: "1.35s" }} className="anim-logo absolute -top-5 sm:-top-8 left-[14%] sm:left-[16%] z-30 pointer-events-none">
              <div className="swing-b drop-shadow-[0_6px_16px_rgba(0,216,255,0.45)]">
                <FaReact className="text-[#00D8FF] text-3xl xs:text-4xl sm:text-5xl lg:text-6xl" />
              </div>
            </div>

            {/* Node.js: Top-right outskirts */}
            <div style={{ animationDelay: "1.45s" }} className="anim-logo absolute -top-4 sm:-top-6 right-[14%] sm:right-[16%] z-30 pointer-events-none">
              <div className="swing-a drop-shadow-[0_6px_14px_rgba(51,153,51,0.4)]">
                <FaNodeJs className="text-[#339933] text-3xl xs:text-4xl sm:text-5xl lg:text-6xl" />
              </div>
            </div>

            {/* Tailwind CSS: Mid-left flank */}
            <div style={{ animationDelay: "1.55s" }} className="anim-logo absolute top-[28%] -left-6 xs:-left-8 sm:-left-12 z-30 pointer-events-none">
              <div className="swing-a drop-shadow-[0_4px_12px_rgba(6,182,212,0.4)]">
                <SiTailwindcss className="text-[#06B6D4] text-2xl xs:text-3xl sm:text-4xl lg:text-5xl" />
              </div>
            </div>

            {/* PHP: Mid-right flank */}
            <div style={{ animationDelay: "1.65s" }} className="anim-logo absolute top-[28%] -right-6 xs:-right-8 sm:-right-12 z-30 pointer-events-none">
              <div className="swing-b drop-shadow-[0_4px_12px_rgba(119,123,180,0.4)]">
                <FaPhp className="text-[#777BB4] text-2xl xs:text-3xl sm:text-4xl lg:text-5xl" />
              </div>
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}

export default Hero;