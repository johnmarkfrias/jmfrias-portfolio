// components/layout/Container.jsx
function Container({ children, className = "" }) {
  return (
    <div className={`max-w-content mx-auto px-[4%] lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
export default Container;