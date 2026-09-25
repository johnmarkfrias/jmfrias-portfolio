// src/components/layout/Navbar.jsx

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../../data/socials";
import Container from "./Container";
import Button from "../common/Button";
import MobileNavDrawer from "./MobileNavDrawer";

const LOGO_SRC = "/assets/JMFrias.dev.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Container guarantees 100% exact width and horizontal alignment with Hero and other sections */}
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center select-none"
          aria-label="JM Frias.dev Home"
        >
          <img
            src={LOGO_SRC}
            alt="JM Frias.dev"
            width="150"
            height="36"
            className="h-5.5 sm:h-6 md:h-6 lg:h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop / Laptop Menu */}
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

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Button
            href="/contact?subject=Job%20Opportunity%20(Hire%20Me)"
            variant="primary"
          >
            Hire JM Frias
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-slate-900 hover:bg-slate-100 transition-colors text-2xl cursor-pointer"
        >
          <FaBars />
        </button>
      </Container>

      {/* Mobile Off-canvas Drawer */}
      <MobileNavDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        logoSrc={LOGO_SRC}
      />
    </header>
  );
}

export default Navbar;