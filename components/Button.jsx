import classnames from 'classnames';


export const Button = ({ children, className, size, variant, ...rest }) => {

  let variantClass = variant && `btn-${variant}`
  let sizeClass = size && `btn-${size}`
  const allClasses = classnames(sizeClass, variantClass, className)

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  )
}
