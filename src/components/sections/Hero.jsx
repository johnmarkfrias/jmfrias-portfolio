// src/components/sections/Hero.jsx

import { useState, useEffect } from "react";
import { FaViber, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../common/Button";
import heroPhoto from "/public/assets/hero.png";
import eyeButtonSvg from "/public/assets/eye-button.svg";
import { ROLES } from "../../data/roles";

const LOGO_PATHS = {
  wordpress: "/assets/hero-logos/wordpress.svg",
  git: "/assets/hero-logos/git.svg",
  github: "/assets/hero-logos/github.svg",
  mysql: "/assets/hero-logos/mysql.svg",
  postman: "/assets/hero-logos/postman.svg",
  canva: "/assets/hero-logos/canva.svg",
  figma: "/assets/hero-logos/figma-svgrepo-com.svg",
  n8n: "/assets/hero-logos/n8n.svg",
  vscode: "/assets/hero-logos/vs-code.svg",
  javascript: "/assets/hero-logos/javascript.svg",
  css: "/assets/hero-logos/css.svg",
  html: "/assets/hero-logos/html.svg",
  php: "/assets/hero-logos/php.svg",
};

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

        @keyframes burstFromBack {
          0% { opacity: 0; transform: translate(var(--tx, 0), var(--ty, 0)) scale(0); }
          50% { opacity: 0.85; }
          75% { opacity: 1; transform: translate(calc(var(--tx, 0) * -0.08), calc(var(--ty, 0) * -0.08)) scale(1.15); }
          100% { opacity: 1; transform: translate(0px, 0px) scale(1); }
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

        .logo-burst {
          animation: burstFromBack 1.1s cubic-bezier(0.34, 1.35, 0.64, 1) both;
        }

        .drift-a {
          animation: subtleDriftA 5.5s ease-in-out infinite;
        }

        .drift-b {
          animation: subtleDriftB 6.2s ease-in-out infinite;
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

        {/* RIGHT COLUMN: Pop-Out Circle Canvas */}
        <div className="order-1 lg:order-2 lg:col-span-6 w-full flex items-center justify-center overflow-visible">
          {/* Scaled Canvas container */}
          <div className="relative w-[270px] sm:w-[360px] md:w-[410px] lg:w-[460px] aspect-square flex items-center justify-center">

            {/* 1. Base Circle: Torso clipped inside */}
            <div className="anim-circle relative w-full h-full rounded-full bg-gradient-to-tr from-[#1e40af] via-[#235ff7] to-[#38bdf8] overflow-hidden flex items-end justify-center z-10 shadow-2xl shadow-blue-500/20">
              <img
                src={heroPhoto}
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
                TIER 1: INNER CIRCLE (4 Badges)
                ============================================================ */}

            {/* HTML: Upper Left */}
            <div 
              style={{ animationDelay: "1.05s", "--tx": "15px", "--ty": "15px" }} 
              className="logo-burst absolute top-[21%] left-[22%] z-30 pointer-events-none"
            >
              <div className="drift-b drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <img src={LOGO_PATHS.html} alt="HTML" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain" />
              </div>
            </div>

            {/* JavaScript: Upper Right */}
            <div 
              style={{ animationDelay: "1.10s", "--tx": "-15px", "--ty": "15px" }} 
              className="logo-burst absolute top-[22%] right-[20%] z-30 pointer-events-none"
            >
              <div className="drift-a drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <img src={LOGO_PATHS.javascript} alt="JavaScript" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain" />
              </div>
            </div>

            {/* CSS: Mid-Right */}
            <div 
              style={{ animationDelay: "1.15s", "--tx": "-20px", "--ty": "8px" }} 
              className="logo-burst absolute top-[44%] right-[10%] z-30 pointer-events-none"
            >
              <div className="drift-b drop-shadow-[0_4px_10px_rgba(33,99,243,0.4)]">
                <img src={LOGO_PATHS.css} alt="CSS" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain" />
              </div>
            </div>

            {/* PHP: Inside Inner Circle, directly above the laptop */}
            <div 
              style={{ animationDelay: "1.20s", "--tx": "15px", "--ty": "8px" }} 
              className="logo-burst absolute top-[35%] left-[16%] z-30 pointer-events-none"
            >
              <div className="drift-a drop-shadow-[0_6px_14px_rgba(119,123,180,0.55)]">
                <img src={LOGO_PATHS.php} alt="PHP" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain" />
              </div>
            </div>

            {/* ============================================================
                TIER 2: OUTER RING LOGOS (Halfway gap: ~10-14px clean cushion)
                ============================================================ */}

            {/* Canva: Lower-Left */}
            <div 
              style={{ animationDelay: "1.25s", "--tx": "25px", "--ty": "-12px" }} 
              className="logo-burst absolute top-[72%] -left-[10%] sm:-left-[12%] z-30 pointer-events-none"
            >
              <div className="drift-a drop-shadow-[0_6px_14px_rgba(0,196,204,0.4)]">
                <img src={LOGO_PATHS.canva} alt="Canva" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

            {/* Git: Mid-Low Left */}
            <div 
              style={{ animationDelay: "1.30s", "--tx": "25px", "--ty": "0px" }} 
              className="logo-burst absolute top-[48%] -left-[13%] sm:-left-[15%] -translate-y-1/2 z-30 pointer-events-none"
            >
              <div className="drift-b drop-shadow-[0_6px_14px_rgba(240,80,50,0.4)]">
                <img src={LOGO_PATHS.git} alt="Git" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

            {/* Figma: Mid-High Left */}
            <div 
              style={{ animationDelay: "1.35s", "--tx": "25px", "--ty": "12px" }} 
              className="logo-burst absolute top-[18%] -left-[10%] sm:-left-[12%] z-30 pointer-events-none"
            >
              <div className="drift-a drop-shadow-[0_6px_14px_rgba(242,78,30,0.4)]">
                <img src={LOGO_PATHS.figma} alt="Figma" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

            {/* VS Code: Top-Left */}
            <div 
              style={{ animationDelay: "1.40s", "--tx": "15px", "--ty": "25px" }} 
              className="logo-burst absolute -top-[8%] sm:-top-[9%] left-[12%] z-30 pointer-events-none"
            >
              <div className="drift-a drop-shadow-[0_6px_14px_rgba(0,122,204,0.4)]">
                <img src={LOGO_PATHS.vscode} alt="VS Code" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

            {/* n8n: Top Center Apex (Centered gap right above hair) */}
            <div 
              style={{ animationDelay: "1.45s", "--tx": "0px", "--ty": "30px" }} 
              className="logo-burst absolute -top-[19%] sm:-top-[20%] left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            >
              <div className="drift-b drop-shadow-[0_6px_16px_rgba(255,109,90,0.45)]">
                <img src={LOGO_PATHS.n8n} alt="n8n" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 object-contain" />
              </div>
            </div>

            {/* GitHub: Top-Right */}
            <div 
              style={{ animationDelay: "1.50s", "--tx": "-15px", "--ty": "25px" }} 
              className="logo-burst absolute -top-[8%] sm:-top-[9%] right-[12%] z-30 pointer-events-none"
            >
              <div className="drift-a drop-shadow-[0_6px_14px_rgba(24,23,23,0.4)]">
                <img src={LOGO_PATHS.github} alt="GitHub" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

            {/* Postman: Mid-High Right */}
            <div 
              style={{ animationDelay: "1.55s", "--tx": "-25px", "--ty": "12px" }} 
              className="logo-burst absolute top-[18%] -right-[10%] sm:-right-[12%] z-30 pointer-events-none"
            >
              <div className="drift-b drop-shadow-[0_6px_14px_rgba(255,108,55,0.45)]">
                <img src={LOGO_PATHS.postman} alt="Postman" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

            {/* MySQL: Mid-Right */}
            <div 
              style={{ animationDelay: "1.60s", "--tx": "-25px", "--ty": "0px" }} 
              className="logo-burst absolute top-[48%] -right-[13%] sm:-right-[15%] -translate-y-1/2 z-30 pointer-events-none"
            >
              <div className="drift-a drop-shadow-[0_6px_14px_rgba(0,117,143,0.45)]">
                <img src={LOGO_PATHS.mysql} alt="MySQL" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

            {/* WordPress: Lower-Mid Right */}
            <div 
              style={{ animationDelay: "1.65s", "--tx": "-25px", "--ty": "-12px" }} 
              className="logo-burst absolute top-[72%] -right-[10%] sm:-right-[12%] z-30 pointer-events-none"
            >
              <div className="drift-b drop-shadow-[0_6px_14px_rgba(0,116,156,0.4)]">
                <img src={LOGO_PATHS.wordpress} alt="WordPress" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain" />
              </div>
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}

export default Hero;