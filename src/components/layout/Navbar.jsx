// src/components/layout/Navbar.jsx

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { 
  Home, 
  User, 
  Laptop, 
  Folder, 
  Phone 
} from "lucide-react";
import { navLinks } from "../../data/socials";
import logo from "/public/assets/JMFrias.dev.svg";
import Button from "../common/Button";

// Map each nav label/path to solid filled active icons with enhanced active sizing
const getNavLinkIcon = (label, isActive) => {
  const props = { className: "w-5 h-5 shrink-0" };

  switch ((label || "").toLowerCase()) {
    case "home":
      return isActive ? <Home {...props} className="w-[22px] h-[22px] shrink-0 fill-blue-600 text-blue-600" style={{ strokeWidth: 0 }} fill="currentColor" /> : <Home {...props} strokeWidth={1.75} />;
    case "about":
      return isActive ? <User {...props} className="w-[22px] h-[22px] shrink-0 fill-blue-600 text-blue-600" style={{ strokeWidth: 0 }} fill="currentColor" /> : <User {...props} strokeWidth={1.75} />;
    case "skills":
      return isActive ? <Laptop {...props} className="w-[22px] h-[22px] shrink-0 fill-blue-600 text-blue-600" style={{ strokeWidth: 0 }} fill="currentColor" /> : <Laptop {...props} strokeWidth={1.75} />;
    case "projects":
      return isActive ? <Folder {...props} className="w-[22px] h-[22px] shrink-0 fill-blue-600 text-blue-600" style={{ strokeWidth: 0 }} fill="currentColor" /> : <Folder {...props} strokeWidth={1.75} />;
    case "contact":
      return isActive ? <Phone {...props} className="w-[22px] h-[22px] shrink-0 fill-blue-600 text-blue-600" style={{ strokeWidth: 0 }} fill="currentColor" /> : <Phone {...props} strokeWidth={1.75} />;
    default:
      return <Home {...props} strokeWidth={1.75} />;
  }
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav
        aria-label="Main Navigation"
        className="max-w-[1440px] mx-auto flex items-center justify-between px-[4%] 2xl:px-8 py-3 sm:py-4"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center select-none"
          aria-label="JM Frias.dev Home"
        >
          {/* Logo made properly bigger on laptop/desktop views (lg:h-8) */}
          <img
            src={logo}
            alt="JM Frias.dev"
            width="150"
            height="36"
            className="h-5.5 sm:h-6 md:h-6 lg:h-8 w-auto object-contain"
          />
        </Link>

        {/* Menu gap expanded on laptop and desktop screens (lg:gap-10 xl:gap-12) */}
        <ul className="hidden lg:flex items-center gap-8 lg:gap-10 xl:gap-12 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DESKTOP HIRE CTA using Button Component */}
        <div className="hidden lg:flex items-center">
          <Button href="/contact?subject=Job%20Opportunity%20(Hire%20Me)" variant="primary">
            Hire JM Frias
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none text-2xl"
        >
          <FaBars />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* OFF-CANVAS: Side Navigation Drawer */}
      <aside
        aria-label="Navigation Drawer"
        className={`fixed top-0 left-0 h-[100dvh] w-[280px] sm:w-[320px] bg-white z-50 shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          paddingTop: "1.75rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "max(1.75rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="w-full flex flex-col">
          {/* Header with Logo and Close button aligned properly */}
          <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-slate-100">
            <img
              src={logo}
              alt="JM Frias.dev"
              width="130"
              height="32"
              className="h-5.5 sm:h-6 w-auto object-contain"
            />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none text-2xl"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links with brand light blue active pill background */}
          <ul className="flex flex-col gap-2 pt-6 sm:pt-8 pb-6 sm:pb-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 text-base tracking-wide transition-all py-3 px-4 rounded-xl font-normal ${
                      isActive
                        ? "bg-blue-50/80 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? "text-blue-600 flex items-center justify-center" : "text-slate-500 flex items-center justify-center"}>
                        {getNavLinkIcon(link.label, isActive)}
                      </span>
                      <span>{link.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE HIRE CTA using Button Component */}
        <div className="w-full pt-6 shrink-0 border-t border-slate-100 mt-auto [&>a]:w-full [&>a]:justify-center">
          <Button href="/contact?subject=Job%20Opportunity%20(Hire%20Me)" variant="primary" onClick={closeMenu}>
            Hire JM Frias
          </Button>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;