function Container({ children, className = "" }) {
  return (
    <div className={`max-w-content mx-auto px-[5%] xl:px-0 ${className}`}>
      {children}
    </div>
  );
}
export default Container;