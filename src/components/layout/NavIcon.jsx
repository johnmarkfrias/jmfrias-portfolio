// src/components/layout/NavIcon.jsx

const NAV_ICONS = {
  home: {
    outline: "/assets/side-nav-icons/home.svg",
    filled: "/assets/side-nav-icons/home-filled.svg",
  },
  about: {
    outline: "/assets/side-nav-icons/about.svg",
    filled: "/assets/side-nav-icons/about-filled.svg",
  },
  skills: {
    outline: "/assets/side-nav-icons/skills.svg",
    filled: "/assets/side-nav-icons/skills-filled.svg",
  },
  projects: {
    outline: "/assets/side-nav-icons/project.svg",
    filled: "/assets/side-nav-icons/project-filled.svg",
  },
  contact: {
    outline: "/assets/side-nav-icons/contact.svg",
    filled: "/assets/side-nav-icons/contact-filled.svg",
  },
};

export default function NavIcon({ label, isActive }) {
  const key = (label || "").toLowerCase();
  const iconPair = NAV_ICONS[key] || NAV_ICONS.home;
  const iconSrc = isActive ? iconPair.filled : iconPair.outline;

  return (
    <span
      aria-hidden="true"
      className="w-5 h-5 shrink-0 inline-block bg-current"
      style={{
        WebkitMaskImage: `url("${iconSrc}")`,
        maskImage: `url("${iconSrc}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}