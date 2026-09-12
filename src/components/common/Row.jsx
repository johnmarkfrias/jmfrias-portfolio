// src/components/common/Row.jsx
//
// LAYOUT PRIMITIVE #2: "Row"
// Ito ang naka-loob sa Container — dito nilalagay ang mga column/content.
// May extra 4% na left/right gutter ito sa laptop size pababa (tablet,
// mobile), gamit ang .row-gutter class sa index.css. Sa desktop/xl
// pataas, wala nang extra gutter dahil sapat na ang Container padding.
//
// Gamitin ito tuwing may dalawang-column na content (tulad ng Hero,
// About) — hindi kailangan gamitin kung isang column lang (tulad ng
// Skills/Projects na may sariling grid).

function Row({ children, className = "" }) {
  return <div className={`custom-container row-gutter ${className}`}>{children}</div>;
}

export default Row;
