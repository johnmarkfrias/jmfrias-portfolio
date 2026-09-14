// components/layout/Section.jsx
function Section({ children, className = "" }) {
  return (
    <section className={`w-full py-section-y-mobile md:py-section-y-tablet lg:py-section-y-laptop xl:py-section-y-desktop ${className}`}>
      {children}
    </section>
  );
}
export default Section;