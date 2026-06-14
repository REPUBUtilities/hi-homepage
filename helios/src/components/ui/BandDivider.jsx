export default function BandDivider() {
  return (
    <div
      className="w-full h-px opacity-35"
      style={{
        background:
          'linear-gradient(90deg, transparent 0%, var(--color-blood) 30%, var(--color-shadow) 70%, transparent 100%)',
      }}
    />
  )
}
