// src/components/layout/Navbar.jsx

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Home, User, Cpu, FolderGit2, Mail } from "lucide-react";
import { navLinks } from "../../data/socials";
import logo from "/public/assets/JMFrias.dev.svg";

// Map each nav label/path to an outline icon component
const getNavLinkIcon = (label, isActive) => {
  const strokeWidth = isActive ? 2.5 : 1.75;
  const props = { className: "w-5 h-5 shrink-0", strokeWidth };

  switch ((label || "").toLowerCase()) {
    case "home":
      return <Home {...props} />;
    case "about":
      return <User {...props} />;
    case "skills":
      return <Cpu {...props} />;
    case "projects":
      return <FolderGit2 {...props} />;
    case "contact":
      return <Mail {...props} />;
    default:
      return <Home {...props} />;
  }
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav
        aria-label="Main Navigation"
        className="max-w-[1440px] mx-auto flex items-center justify-between px-[4%] 2xl:px-8 py-3.5 sm:py-4"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center select-none"
          aria-label="JM Frias.dev Home"
        >
          <img
            src={logo}
            alt="JM Frias.dev"
            width="150"
            height="36"
            className="h-5.5 sm:h-6 md:h-6 w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
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

        {/* DESKTOP HIRE CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact?subject=Job%20Opportunity%20(Hire%20Me)"
            className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Hire JM Frias
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="lg:hidden text-2xl text-slate-900 focus:outline-none"
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
          {/* Header with Logo and Close button */}
          <div className="flex items-center justify-between pb-8 border-b border-slate-100">
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
              className="text-2xl text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              <IoClose />
            </button>
          </div>

          {/* Nav Links with proper downward gap from logo header */}
          <ul className="flex flex-col gap-6 pt-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 text-base tracking-wide transition-colors py-1 ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "text-slate-700 hover:text-blue-600 font-normal"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? "text-blue-600" : "text-slate-500"}>
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

        {/* MOBILE HIRE CTA */}
        <div className="w-full pt-6 shrink-0 border-t border-slate-100 mt-6">
          <Link
            to="/contact?subject=Job%20Opportunity%20(Hire%20Me)"
            onClick={closeMenu}
            className="w-full block text-center bg-blue-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
          >
            Hire JM Frias
          </Link>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;