// src/components/sections/Hero.jsx

import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";

import { ROLES } from "../../data/roles";
import { CV_PATH } from "../../data/aboutData";
import { HERO_TECH_LOGOS } from "../../data/heroLogos";
import { useTypewriter } from "../../hooks/useTypewriter";
import { downloadFile } from "../../utils/fileUtils";

const HERO_PHOTO_PATH = "/assets/hero.png";
const EYE_BUTTON_SVG = "/assets/eye-button.svg";

function Hero() {
  const currentText = useTypewriter(ROLES);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    downloadFile(CV_PATH, "CV_John_Mark_Frias.pdf");
  };

  return (
    <Section id="home" aria-label="Hero Section" className="overflow-visible">
      <style>{`
        @keyframes circleEntrance {
          0% { opacity: 0; transform: scale(0.35); }
          70% { opacity: 0.95; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes portraitPopUp {
          0% { opacity: 0; transform: translateY(80px) scale(0.95); }
          75% { opacity: 1; transform: translateY(-8px) scale(1.015); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes naturalPopOut {
          0% {
            opacity: 0;
            transform: translate(var(--orig-x, 0), var(--orig-y, 0)) scale(0.12);
          }
          30% {
            opacity: 0.7;
          }
          75% {
            opacity: 1;
            transform: translate(calc(var(--orig-x, 0) * -0.04), calc(var(--orig-y, 0) * -0.04)) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes subtleDriftA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(2deg); }
        }
        @keyframes subtleDriftB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(4px) rotate(-2deg); }
        }
        .anim-circle {
          animation: circleEntrance 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-portrait {
          animation: portraitPopUp 1.2s cubic-bezier(0.32, 1, 0.55, 1) 0.35s both;
        }
        .logo-emerge {
          animation: naturalPopOut var(--emerge-duration, 1.8s) cubic-bezier(0.19, 1, 0.22, 1) var(--emerge-delay, 1.2s) both;
        }
        .drift-a {
          animation: subtleDriftA 6s ease-in-out infinite;
        }
        .drift-b {
          animation: subtleDriftB 6.8s ease-in-out infinite;
        }
      `}</style>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* LEFT COLUMN: Intro Content */}
        <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col lg:flex-row items-start gap-6 lg:gap-12 w-full">
          <div className="hidden lg:flex flex-col justify-center items-center shrink-0 self-center">
            <SocialLinks className="flex-col" />
          </div>

          <div className="flex-1 flex flex-col items-start text-left w-full min-w-0">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase mb-2">
              Hello, My Name Is
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-extrabold text-slate-900 mb-2 leading-tight tracking-tight">
              John Mark M. Frias
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
              <div className="flex-1 sm:flex-none sm:w-auto sm:min-w-[300px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
                <Button href={CV_PATH} variant="primary" onClick={handleDownloadCV}>
                  Download CV
                </Button>
              </div>

              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Preview CV"
                className="inline-flex items-center justify-center shrink-0 hover:opacity-85 transition-opacity"
              >
                <img
                  src={EYE_BUTTON_SVG}
                  alt="View CV"
                  className="w-11 h-11 sm:w-[50px] sm:h-[50px] block object-contain select-none"
                />
              </a>
            </div>

            <div className="flex lg:hidden mt-5 sm:mt-6 w-full justify-center min-[426px]:justify-start">
              <SocialLinks className="flex-row" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Pop-Out Circle Canvas */}
        <div className="order-1 lg:order-2 lg:col-span-6 w-full flex items-center justify-center pt-14 sm:pt-16 md:pt-20 lg:pt-14 pb-2 lg:pb-0 overflow-visible">
          <div className="relative w-[260px] sm:w-[350px] md:w-[400px] lg:w-[450px] aspect-square flex items-center justify-center">
            {/* 1. Base Circle */}
            <div className="anim-circle relative w-full h-full rounded-full bg-gradient-to-tr from-[#1e40af] via-[#235ff7] to-[#38bdf8] overflow-hidden flex items-end justify-center z-10 shadow-2xl shadow-blue-500/20">
              <img
                src={HERO_PHOTO_PATH}
                alt="John Mark Frias"
                className="anim-portrait h-[115%] w-auto max-w-none object-contain block pointer-events-none select-none"
              />
            </div>

            {/* 2. Pop-out Top Layer */}
            <div
              aria-hidden="true"
              className="absolute -top-[25%] bottom-0 inset-x-0 flex items-end justify-center z-20 pointer-events-none select-none overflow-visible"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 88%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 88%)",
              }}
            >
              <img
                src={HERO_PHOTO_PATH}
                alt=""
                className="anim-portrait h-[92%] w-auto max-w-none object-contain block"
              />
            </div>

            {/* Badges & Logos mapped cleanly */}
            {HERO_TECH_LOGOS.map((logo) => (
              <div
                key={logo.name}
                style={{
                  "--orig-x": logo.origX,
                  "--orig-y": logo.origY,
                  "--emerge-delay": logo.emergeDelay,
                  "--emerge-duration": logo.emergeDuration,
                }}
                className={`logo-emerge absolute z-30 pointer-events-none ${logo.positionClass}`}
              >
                <div className={logo.driftClass}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`${logo.sizeClass} object-contain`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;