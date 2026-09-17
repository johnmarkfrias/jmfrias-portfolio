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
        <img 
          src={threadsLogo} 
          alt="Threads" 
          className="w-4 h-4 object-contain brightness-0 invert" 
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
      className="bg-slate-950 text-white pt-[60px] md:pt-[80px] lg:pt-[100px] pb-8"
    >
      <div className="max-w-[1440px] mx-auto px-[4%] 2xl:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0 lg:gap-8 pb-8 lg:pb-16 border-b-0 lg:border-b border-slate-800/80">
          
          {/* Column 1: Brand Logo & Bio */}
          <div className="flex flex-col items-start text-left pb-6 lg:pb-0 w-full lg:w-fit max-w-sm">
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

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  {renderSocialIcon(s.id)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full lg:w-fit lg:mx-auto py-2.5 lg:py-0">
            <button
              type="button"
              onClick={() => toggleAccordion("quick-links")}
              className="w-full flex items-center justify-between lg:justify-start py-1 lg:py-0 text-left font-semibold text-base sm:text-lg lg:cursor-default lg:mb-4 focus:outline-none"
              aria-expanded={openSection === "quick-links"}
            >
              <span>Quick Links</span>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 lg:hidden ${
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
              className={`overflow-hidden transition-all duration-300 ease-in-out lg:!max-h-none lg:!opacity-100 ${
                openSection === "quick-links"
                  ? "max-h-60 opacity-100 pt-3 lg:pt-0"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-2.5 text-sm text-slate-400">
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
          <div className="w-full lg:w-fit py-2.5 lg:py-0">
            <button
              type="button"
              onClick={() => toggleAccordion("contacts")}
              className="w-full flex items-center justify-between lg:justify-start py-1 lg:py-0 text-left font-semibold text-base sm:text-lg lg:cursor-default lg:mb-4 focus:outline-none"
              aria-expanded={openSection === "contacts"}
            >
              <span>Contacts</span>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 lg:hidden ${
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
              className={`overflow-hidden transition-all duration-300 ease-in-out lg:!max-h-none lg:!opacity-100 ${
                openSection === "contacts"
                  ? "max-h-60 opacity-100 pt-3 lg:pt-0"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-2.5 text-sm text-slate-400">
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
                <li className="py-0.5 text-slate-400 whitespace-nowrap">
                  Lucena City, Quezon
                </li>
              </ul>
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

      </div>
    </footer>
  );
}

export default Footer;