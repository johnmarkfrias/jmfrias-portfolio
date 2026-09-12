// src/components/common/Container.jsx
//
// Simpleng 1440px max-width wrapper, WALANG extra gutter.
// Gamitin ito sa mga single-column na content (hal. Skills grid,
// Projects grid) na hindi kailangan ng extra 4% padding sa gilid.
//
// Kung dalawang column ang content (hal. Hero, About) — gamitin
// ang <Row> sa halip, na may kasamang 4% fluid gutter.

function Container({ children, className = "", as: Tag = "div", ...rest }) {
  return (
    <Tag className={`custom-container ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
