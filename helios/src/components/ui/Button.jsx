export default function Button({ children, href, className = '', ...props }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag href={href} className={`btn-primary ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </Tag>
  )
}
