// src/components/common/Button.jsx
// Reusable na Button component. Ginagamit sa Hero, About, at CTA sections
// sa halip na mag-ulit-ulit ng parehong className sa bawat button.
//
// Props:
//   variant: "primary" | "outline"  (default: "primary")
//   as: "a" | "button"              (default: "a")
//   href: link kapag "a"
//   onClick: function kapag "button"
//   type: "button" | "submit"       (default: "button", importante sa forms)

const baseStyles =
  "inline-block font-semibold px-6 py-3 rounded-lg transition-colors text-sm";

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
