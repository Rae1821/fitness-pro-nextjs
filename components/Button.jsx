import classnames from "classnames";

export const Button = ({ children, className, size, variant, ...rest }) => {
  const variantClass = variant && `btn-${variant}`;
  const sizeClass = size && `btn-${size}`;
  const allClasses = classnames(sizeClass, variantClass, className);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
};
