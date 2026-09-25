import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { navLinks } from "../../data/socials";
import Button from "../common/Button";
import NavIcon from "./NavIcon";

export default function MobileNavDrawer({ isOpen, onClose, logoSrc }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        aria-label="Navigation Drawer"
        className={`fixed top-0 left-0 h-[100dvh] w-[280px] sm:w-[320px] bg-white z-50 shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto px-6 pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-slate-100">
            <img src={logoSrc} alt="JM Frias.dev" width="130" height="32" className="h-5.5 sm:h-6 w-auto object-contain" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors text-2xl cursor-pointer"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col gap-2 pt-6 sm:pt-8 pb-6 sm:pb-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 text-base tracking-wide transition-all py-3 px-4 rounded-xl font-normal ${
                      isActive ? "bg-blue-50/80 text-blue-600 font-semibold" : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <NavIcon label={link.label} isActive={isActive} />
                      <span>{link.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full pt-6 shrink-0 border-t border-slate-100 mt-auto [&>a]:w-full [&>a]:justify-center">
          <Button href="/contact?subject=Job%20Opportunity%20(Hire%20Me)" variant="primary" onClick={onClose}>
            Hire JM Frias
          </Button>
        </div>
      </aside>
    </>
  );
}