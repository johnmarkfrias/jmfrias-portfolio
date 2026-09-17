// src/components/sections/Hero.jsx

import { useState, useEffect } from "react";
import { 
  FaViber, 
  FaLinkedinIn, 
  FaGithub, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaPhp,
  FaCss3Alt,
  FaJava,
  FaBootstrap
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../common/Button";
import heroPhoto from "/public/assets/hero.png";
import eyeButtonSvg from "/public/assets/eye-button.svg";
import { ROLES } from "../../data/roles";

// Official Dual-Color Python SVG (#3776AB Blue & #FFD438 Yellow)
const PythonIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 110 110" fill="none">
    <path
      fill="#3776AB"
      d="M54.5 5C29.6 5 31.2 15.8 31.2 15.8l.1 11.2h23.7v3.4H21.7C9.3 30.4 5 37.8 5 54.8c0 19.3 8.3 22.9 18.5 23.3V66.8c0-12.7 10.9-12.4 10.9-12.4h23.5c9.8 0 17.5-6.8 17.5-17.1.1-13.4-3.1-32.3-20.9-32.3zm-11.4 7.2c2.6 0 4.6 2.1 4.6 4.7s-2.1 4.7-4.6 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"
    />
    <path
      fill="#FFD438"
      d="M55.5 105c24.9 0 23.3-10.8 23.3-10.8l-.1-11.2H55v-3.4h33.3c12.4 0 16.7-7.4 16.7-24.4 0-19.3-8.3-22.9-18.5-23.3v11.3c0 12.7-10.9 12.4-10.9 12.4H52.1c-9.8 0-17.5 6.8-17.5 17.1-.1 13.4 3.1 32.3 20.9 32.3zm11.4-7.2c-2.6 0-4.6-2.1-4.6-4.7s2.1-4.7 4.6-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"
    />
  </svg>
);

// Official Hexagon C# SVG (#68217A Purple)
const CSharpIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 115" fill="none">
    <path fill="#68217A" d="M50 0L97.5 27.5V82.5L50 110L2.5 82.5V27.5L50 0Z" />
    <path fill="#4D1559" d="M50 0L97.5 27.5V82.5L50 55V0Z" />
    <path
      fill="#FFFFFF"
      d="M48.2 38.8c-10.4 0-18.8 8.4-18.8 18.8s8.4 18.8 18.8 18.8c7.1 0 13.3-3.9 16.5-9.8l-7.4-4.2c-1.8 3.5-5.3 5.8-9.1 5.8-5.8 0-10.5-4.7-10.5-10.6s4.7-10.6 10.5-10.6c3.8 0 7.3 2.3 9.1 5.8l7.4-4.2c-3.2-5.9-9.4-9.8-16.5-9.8zm23.6 11.2h2.2v-3.8h-2.2v-2.2h-2.5v2.2h-3.6v-2.2h-2.5v2.2h-2.3v3.8h2.3v3.6h-2.3v3.8h2.3v2.2h2.5v-2.2h3.6v2.2h2.5v-2.2h2.2v-3.8h-2.2v-3.6zm-6.1 3.6h-3.6v-3.6h3.6v3.6z"
    />
  </svg>
);

// Official Hexagon C++ SVG (#00599C Blue)
const CPlusPlusIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 115" fill="none">
    <path fill="#00599C" d="M50 0L97.5 27.5V82.5L50 110L2.5 82.5V27.5L50 0Z" />
    <path fill="#00447C" d="M50 0L97.5 27.5V82.5L50 55V0Z" />
    <path
      fill="#FFFFFF"
      d="M45.5 38.8c-10.4 0-18.8 8.4-18.8 18.8s8.4 18.8 18.8 18.8c7.1 0 13.3-3.9 16.5-9.8l-7.4-4.2c-1.8 3.5-5.3 5.8-9.1 5.8-5.8 0-10.5-4.7-10.5-10.6s4.7-10.6 10.5-10.6c3.8 0 7.3 2.3 9.1 5.8l7.4-4.2c-3.2-5.9-9.4-9.8-16.5-9.8zm19.8 15.6h3.2v-3.2h2.4v3.2h3.2v2.4h-3.2v3.2h-2.4v-3.2h-3.2v-2.4zm12.5 0h3.2v-3.2h2.4v3.2h3.2v2.4h-3.2v3.2h-2.4v-3.2h-3.2v-2.4z"
    />
  </svg>
);

// Official .NET Core Circular Badge SVG
const DotNetIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#682A8F" />
    <path fill="#4E1E6B" fillOpacity="0.45" d="M15 15L85 85A50 50 0 0 1 15 15Z" />
    <circle cx="11.5" cy="57" r="2.3" fill="#FFFFFF" />
    <text x="19.5" y="57.5" fill="#FFFFFF" fontSize="30" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.5px">NET</text>
    <text x="50" y="77.5" textAnchor="middle" fill="#E6D3F3" fontSize="17" fontWeight="400" fontFamily="system-ui, sans-serif" letterSpacing="0.3px">Core</text>
  </svg>
);

// SQL Cylinder Icon SVG
const SqlIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="currentColor">
    <path fill="#00758F" d="M64 24c-26.5 0-48 6.3-48 14v52c0 7.7 21.5 14 48 14s48-6.3 48-14V38c0-7.7-21.5-14-48-14zm0 8c21.8 0 38 4.7 38 6s-16.2 6-38 6-38-4.7-38-6 16.2-6 38-6zm-38 23.3c7.2 3.5 21.4 5.7 38 5.7s30.8-2.2 38-5.7v10.3c0 1.3-16.2 6-38 6s-38-4.7-38-6V55.3zm0 21c7.2 3.5 21.4 5.7 38 5.7s30.8-2.2 38-5.7v10.3c0 1.3-16.2 6-38 6s-38-4.7-38-6V76.3zm0 21c7.2 3.5 21.4 5.7 38 5.7s30.8-2.2 38-5.7v3.7c0 1.3-16.2 6-38 6s-38-4.7-38-6v-3.7z"/>
  </svg>
);

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  const SocialLinks = ({ className = "" }) => (
    <aside aria-label="Social Media Links" className={`flex items-center gap-4 lg:gap-9 ${className}`}>
      <a
        href="viber://chat?number=%2B639389381538"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Viber"
        className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-lg hover:bg-[#7360F2] transition-colors shadow-sm shrink-0"
      >
        <FaViber />
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
          0% { opacity: 0; transform: scale(0.35); }
          70% { opacity: 0.95; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes portraitPopUp {
          0% { opacity: 0; transform: translateY(80px) scale(0.95); }
          75% { opacity: 1; transform: translateY(-8px) scale(1.015); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes burstFromBack {
          0% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
          50% { opacity: 0.85; }
          75% { opacity: 1; transform: translate(calc(var(--tx) * -0.08), calc(var(--ty) * -0.08)) scale(1.15); }
          100% { opacity: 1; transform: translate(0px, 0px) scale(1); }
        }

        @keyframes gentleSwingA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(3deg); }
        }

        @keyframes gentleSwingB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(6px) rotate(-3deg); }
        }

        .anim-circle {
          animation: circleEntrance 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-portrait {
          animation: portraitPopUp 1.2s cubic-bezier(0.32, 1, 0.55, 1) 0.35s both;
        }

        .logo-burst {
          animation: burstFromBack 1.1s cubic-bezier(0.34, 1.35, 0.64, 1) both;
        }

        .swing-a {
          animation: gentleSwingA 6s ease-in-out infinite;
        }

        .swing-b {
          animation: gentleSwingB 6.8s ease-in-out infinite;
        }
      `}</style>

      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
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

        {/* RIGHT COLUMN: Architected Radial Composition */}
        <div className="order-1 lg:order-2 lg:col-span-6 w-full flex items-center justify-center pt-8 lg:pt-0 overflow-visible">
          <div className="relative w-[280px] sm:w-[380px] md:w-[420px] lg:w-[460px] aspect-square flex items-center justify-center">

            {/* Base Circle: Lower Torso Clipped */}
            <div className="anim-circle relative w-full h-full rounded-full bg-gradient-to-tr from-[#1e40af] via-[#235ff7] to-[#38bdf8] overflow-hidden flex items-end justify-center z-10 shadow-2xl shadow-blue-500/20">
              <img
                src={heroPhoto}
                alt="John Mark Frias"
                className="anim-portrait h-[115%] w-auto max-w-none object-contain block pointer-events-none select-none"
              />
            </div>

            {/* Pop-Out Layer: Head Pops Naturally Above Perimeter */}
            <div
              aria-hidden="true"
              className="absolute -top-[25%] bottom-0 inset-x-0 flex items-end justify-center z-20 pointer-events-none select-none overflow-visible"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 88%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 88%)"
              }}
            >
              <img
                src={heroPhoto}
                alt=""
                className="anim-portrait h-[92%] w-auto max-w-none object-contain block"
              />
            </div>

            {/* ============================================================
                LAYER 1: INNER FIELD (4 Symmetrical Anchor Points)
                ============================================================ */}

            {/* Top-Left Inner: HTML5 (Shoulder Notch) */}
            <div 
              style={{ animationDelay: "1.10s", "--tx": "60px", "--ty": "60px" }} 
              className="logo-burst absolute top-[21%] left-[19%] z-30 pointer-events-none"
            >
              <div className="swing-b drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                <FaHtml5 className="text-[#E34F26] text-2xl sm:text-3xl lg:text-[38px]" />
              </div>
            </div>

            {/* Top-Right Inner: JavaScript (Mirroring HTML5 on the Right) */}
            <div 
              style={{ animationDelay: "1.15s", "--tx": "-60px", "--ty": "60px" }} 
              className="logo-burst absolute top-[21%] right-[19%] z-30 pointer-events-none"
            >
              <div className="swing-a drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                <SiJavascript className="text-[#F7DF1E] text-2xl sm:text-3xl lg:text-[38px]" />
              </div>
            </div>

            {/* Mid-Left Inner: C# Purple Hexagon (Laptop Clearance Area) */}
            <div 
              style={{ animationDelay: "1.20s", "--tx": "70px", "--ty": "30px" }} 
              className="logo-burst absolute top-[40%] left-[8%] z-30 pointer-events-none"
            >
              <div className="swing-a drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <CSharpIcon className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
              </div>
            </div>

            {/* Mid-Right Inner: C++ Blue Hexagon (Right Waist Negative Space) */}
            <div 
              style={{ animationDelay: "1.25s", "--tx": "-70px", "--ty": "30px" }} 
              className="logo-burst absolute top-[40%] right-[8%] z-30 pointer-events-none"
            >
              <div className="swing-b drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <CPlusPlusIcon className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
              </div>
            </div>

            {/* ============================================================
                LAYER 2: OUTER ORBIT (Equidistant Clockwise Ring)
                ============================================================ */}

            {/* 10:30 Outer: SQL */}
            <div 
              style={{ animationDelay: "1.30s", "--tx": "70px", "--ty": "100px" }} 
              className="logo-burst absolute -top-1 sm:-top-3 left-[10%] sm:left-[12%] z-30 pointer-events-none"
            >
              <div className="swing-b drop-shadow-[0_4px_12px_rgba(0,117,143,0.4)]">
                <SqlIcon className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
              </div>
            </div>

            {/* 11:30 Outer: React */}
            <div 
              style={{ animationDelay: "1.35s", "--tx": "40px", "--ty": "130px" }} 
              className="logo-burst absolute -top-8 sm:-top-11 left-[27%] sm:left-[29%] z-30 pointer-events-none"
            >
              <div className="swing-a drop-shadow-[0_4px_14px_rgba(0,216,255,0.45)]">
                <FaReact className="text-[#00D8FF] text-3xl sm:text-4xl lg:text-5xl" />
              </div>
            </div>

            {/* 12:30 Outer: Python (Balanced Crown Spacing, Symmetrical to React) */}
            <div 
              style={{ animationDelay: "1.40s", "--tx": "-40px", "--ty": "130px" }} 
              className="logo-burst absolute -top-8 sm:-top-11 right-[27%] sm:right-[29%] z-30 pointer-events-none"
            >
              <div className="swing-b drop-shadow-[0_4px_14px_rgba(55,118,171,0.4)]">
                <PythonIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11" />
              </div>
            </div>

            {/* 1:30 Outer: .NET Core */}
            <div 
              style={{ animationDelay: "1.45s", "--tx": "-70px", "--ty": "100px" }} 
              className="logo-burst absolute -top-1 sm:-top-3 right-[10%] sm:right-[12%] z-30 pointer-events-none"
            >
              <div className="swing-a drop-shadow-[0_4px_12px_rgba(104,42,143,0.45)]">
                <DotNetIcon className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
              </div>
            </div>

            {/* 9:30 Outer: CSS3 */}
            <div 
              style={{ animationDelay: "1.50s", "--tx": "120px", "--ty": "60px" }} 
              className="logo-burst absolute top-[16%] -left-6 sm:-left-8 lg:-left-9 z-30 pointer-events-none"
            >
              <div className="swing-a drop-shadow-[0_4px_12px_rgba(21,114,182,0.4)]">
                <FaCss3Alt className="text-[#1572B6] text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

            {/* 2:30 Outer: Node.js */}
            <div 
              style={{ animationDelay: "1.55s", "--tx": "-120px", "--ty": "60px" }} 
              className="logo-burst absolute top-[16%] -right-6 sm:-right-8 lg:-right-9 z-30 pointer-events-none"
            >
              <div className="swing-b drop-shadow-[0_4px_12px_rgba(51,153,51,0.4)]">
                <FaNodeJs className="text-[#339933] text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

            {/* 8:30 Outer: Tailwind CSS */}
            <div 
              style={{ animationDelay: "1.60s", "--tx": "130px", "--ty": "0px" }} 
              className="logo-burst absolute top-[37%] -left-7 sm:-left-9 lg:-left-10 z-30 pointer-events-none"
            >
              <div className="swing-b drop-shadow-[0_4px_12px_rgba(6,182,212,0.4)]">
                <SiTailwindcss className="text-[#06B6D4] text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

            {/* 3:30 Outer: Java */}
            <div 
              style={{ animationDelay: "1.65s", "--tx": "-130px", "--ty": "0px" }} 
              className="logo-burst absolute top-[37%] -right-7 sm:-right-9 lg:-right-10 z-30 pointer-events-none"
            >
              <div className="swing-a drop-shadow-[0_4px_12px_rgba(237,139,0,0.4)]">
                <FaJava className="text-[#ED8B00] text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

            {/* 7:30 Outer: Bootstrap */}
            <div 
              style={{ animationDelay: "1.70s", "--tx": "120px", "--ty": "-50px" }} 
              className="logo-burst absolute top-[58%] -left-6 sm:-left-8 lg:-left-9 z-30 pointer-events-none"
            >
              <div className="swing-a drop-shadow-[0_4px_12px_rgba(121,82,179,0.4)]">
                <FaBootstrap className="text-[#7952B3] text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

            {/* 4:30 Outer: PHP */}
            <div 
              style={{ animationDelay: "1.75s", "--tx": "-120px", "--ty": "-50px" }} 
              className="logo-burst absolute top-[58%] -right-6 sm:-right-8 lg:-right-9 z-30 pointer-events-none"
            >
              <div className="swing-b drop-shadow-[0_4px_12px_rgba(119,123,180,0.45)]">
                <FaPhp className="text-[#777BB4] text-2xl sm:text-3xl lg:text-4xl" />
              </div>
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}

export default Hero;