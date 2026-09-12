// src/components/common/Section.jsx
//
// LAYOUT PRIMITIVE #1: "Section"
// Ito ang PINAKALABAS na wrapper ng bawat section (Hero, About, Skills, atbp).
// Responsibilidad lang niya: full-width background + ang responsive na
// padding-top/bottom scale (galing sa .section-padding sa index.css).
//
// Hindi niya kontrolado ang max-width — iyon ang trabaho ng Container/Row
// sa loob. Ganito rin ang ginagawa sa WordPress: may "section" (buong
// lapad, may sariling background) at may "content area" sa loob (naka-limit).

function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      {children}
    </section>
  );
}

export default Section;
