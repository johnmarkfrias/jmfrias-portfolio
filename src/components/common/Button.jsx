// src/components/common/Button.jsx
// Reusable Button component. Ginagamit sa Hero, About, at CTA sections.

const baseStyles =
  "inline-flex flex-col justify-center items-center font-semibold rounded-lg transition-colors text-sm whitespace-nowrap " +
  "px-5 py-3 " +          // Mobile
  "sm:px-6 sm:py-3 " +       // Small mobile / small tablet
  "md:px-7 md:py-3.5 " +     // Tablet
  "lg:px-8 lg:py-4 " +       // Laptop
  "xl:px-8 xl:py-4";        // Desktop

const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
};

function Button({
  children,
  variant = "primary",
  as = "a",
  href = "#",
  onClick,
  type = "button",
  className = "",
}) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (as === "button") {
    return (
      <button type={type} onClick={onClick} className={styles}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={styles}>
      {children}
    </a>
  );
}

export default Button;