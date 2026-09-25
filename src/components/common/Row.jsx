function Row({ children, className = "" }) {
  return <div className={`custom-container row-gutter ${className}`}>{children}</div>;
}

export default Row;
