// src/components/common/SectionBadge.jsx
// Reusable na maliit na "pill" label — gaya ng "ABOUT", "SKILLS", "PROJECTS", "CONTACT"
// Isang beses lang gawin, magagamit sa lahat ng sections (clean/DRY code).

function SectionBadge({ children }) {
  return (
    <span className="inline-block bg-blue-600 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

export default SectionBadge;
