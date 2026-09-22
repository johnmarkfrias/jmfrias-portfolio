// src/components/layout/Footer.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaXTwitter, 
  FaTiktok 
} from "react-icons/fa6";
import { navLinks, socials } from "../../data/socials";
import logoFooter from "/assets/logo-footer.svg";
import threadsLogo from "/assets/threads-logo.svg";
import Section from "../layout/Section";
import Container from "../layout/Container";

const renderSocialIcon = (id = "") => {
  switch (id.toLowerCase()) {
    case "instagram":
      return <FaInstagram className="w-4 h-4" />;
    case "facebook":
      return <FaFacebookF className="w-4 h-4" />;
    case "twitter":
    case "x":
      return <FaXTwitter className="w-3.5 h-3.5" />;
    case "tiktok":
      return <FaTiktok className="w-4 h-4" />;
    case "threads":
      return (
        <span
          className="w-4 h-4 bg-current inline-block transition-colors"
          style={{
            maskImage: `url(${threadsLogo})`,
            WebkitMaskImage: `url(${threadsLogo})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}
          aria-hidden="true"
        />
      );
    default:
      return null;
  }
};

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (sectionKey) => {
    setOpenSection((prev) => (prev === sectionKey ? null : sectionKey));
  };

  return (
    <footer 
      aria-label="Site Footer"
      className="bg-slate-950 text-white pb-8"
    >
      <Section className="!pt-[60px] md:!pt-[80px] lg:!pt-[100px] !pb-0">
        <Container>
          
          {/* Main Footer Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-8 pb-8 lg:pb-16 border-b-0 lg:border-b border-slate-800/80">
            
            {/* Column 1: Brand Logo & Bio */}
            <div className="flex flex-col items-start text-left pb-2 lg:pb-0 w-full lg:w-fit max-w-sm">
              <Link 
                to="/" 
                className="inline-block mb-4 select-none" 
                aria-label="JM Frias.dev Home"
              >
                <img
                  src={logoFooter}
                  alt="JM Frias.dev"
                  width="160"
                  height="38"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Full stack developer creating functional, user-friendly and
                visually appealing websites and software.
              </p>

              {/* Social Icons with mapped links */}
              <div className="flex items-center gap-3">
                {socials.map((s) => {
                  let socialUrl = s.url;
                  const lowerId = s.id.toLowerCase();
                  
                  if (lowerId === "facebook") {
                    socialUrl = "https://www.facebook.com/share/1KGMv1Xxtr/";
                  } else if (lowerId === "tiktok") {
                    socialUrl = "https://tiktok.com/@john.mark.frias29";
                  } else if (lowerId === "instagram") {
                    socialUrl = "https://www.instagram.com/john_mark_frias/";
                  } else if (lowerId === "threads") {
                    socialUrl = "https://www.threads.com/@john_mark_frias";
                  } else if (lowerId === "x" || lowerId === "twitter") {
                    socialUrl = "https://x.com/JohnMarkdev";
                  }

                  return (
                    <a
                      key={s.id}
                      href={socialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                      {renderSocialIcon(s.id)}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Tablet & Desktop Layout Wrapper for Quick Links and Contacts (2 columns side by side on md/tablet, row on lg) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-8 w-full lg:w-fit lg:mx-auto">

              {/* Column 2: Quick Links */}
              <div className="w-full lg:w-fit py-0 border-b sm:border-b-0 border-slate-800/80 pb-6 sm:pb-0">
                <button
                  type="button"
                  onClick={() => toggleAccordion("quick-links")}
                  className="w-full flex items-center justify-between sm:justify-start py-0 sm:py-0 text-left font-semibold text-base sm:text-lg sm:cursor-default sm:mb-4 focus:outline-none md:pointer-events-none lg:pointer-events-auto"
                  aria-expanded={openSection === "quick-links"}
                >
                  <span>Quick Links</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 sm:hidden ${
                      openSection === "quick-links" ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out sm:!max-h-none sm:!opacity-150 sm:!block ${
                    openSection === "quick-links"
                      ? "max-h-60 opacity-100 pt-3 sm:pt-0"
                      : "max-h-0 opacity-0 sm:opacity-100"
                  }`}
                >
                  <ul className="space-y-2.5 text-sm text-slate-400 sm:pl-0 pl-3">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="hover:text-white transition-colors block py-0.5 whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3: Contacts */}
              <div className="w-full lg:w-fit py-0 border-b sm:border-b-0 border-slate-800/80 pb-6 sm:pb-0">
                <button
                  type="button"
                  onClick={() => toggleAccordion("contacts")}
                  className="w-full flex items-center justify-between sm:justify-start py-0 sm:py-0 text-left font-semibold text-base sm:text-lg sm:cursor-default sm:mb-4 focus:outline-none md:pointer-events-none lg:pointer-events-auto"
                  aria-expanded={openSection === "contacts"}
                >
                  <span>Contacts</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 sm:hidden ${
                      openSection === "contacts" ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out sm:!max-h-none sm:!opacity-150 sm:!block ${
                    openSection === "contacts"
                      ? "max-h-60 opacity-100 pt-3 sm:pt-0 pb-6 sm:pb-0"
                      : "max-h-0 opacity-0 sm:opacity-100"
                  }`}
                >
                  <ul className="space-y-2.5 text-sm text-slate-400 sm:pl-0 pl-3">
                    <li>
                      <a href="tel:+639389381538" className="hover:text-white transition-colors block py-0.5 whitespace-nowrap">
                        +63 938 938 1538 (Smart)
                      </a>
                    </li>
                    <li>
                      <a href="tel:+639175057898" className="hover:text-white transition-colors block py-0.5 whitespace-nowrap">
                        +63 917 505 7898 (Globe)
                      </a>
                    </li>
                    <li>
                      <a href="mailto:johnmarkm.frias@gmail.com" className="hover:text-white transition-colors block py-0.5 whitespace-nowrap">
                        johnmarkm.frias@gmail.com
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://maps.google.com/?q=Imus+City,+Cavite,+Philippines" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-white transition-colors block py-0.5 whitespace-nowrap"
                      >
                        Imus City, Cavite Philippines
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

          {/* Sub-footer */}
          <div className="pt-6 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} John Mark Frias. All rights reserved.
            </p>
            <a 
              href="#top" 
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 select-none"
            >
              <span>Back To Top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>

        </Container>
      </Section>
    </footer>
  );
}

export default Footer;