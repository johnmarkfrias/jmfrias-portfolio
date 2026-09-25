function Container({ children, className = "", as: Tag = "div", ...rest }) {
  return (
    <Tag className={`custom-container ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
