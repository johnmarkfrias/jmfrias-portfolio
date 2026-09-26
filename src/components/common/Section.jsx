function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      {children}
    </section>
  );
}

export default Section;
