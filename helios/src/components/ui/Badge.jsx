export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-block px-2 py-0.5 tracking-widest uppercase ${className}`}
      style={{
        fontFamily: 'var(--font-data)',
        fontSize: 'var(--text-xs)',
        color: 'var(--color-blood)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-blood-dim)',
        letterSpacing: '0.15em',
      }}
    >
      {children}
    </span>
  )
}
