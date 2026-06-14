import { useState, useEffect } from 'react'
import { NAV_LINKS, ALLIANCE_NAME } from '../../lib/constants'
import { useActiveSection } from '../../hooks/useActiveSection'

const SECTION_IDS = NAV_LINKS
  .filter(({ href }) => href.startsWith('#'))
  .map(({ href }) => href.replace('#', ''))

function NavLink({ href, label, active, isRepublic, external }) {
  if (isRepublic) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="transition-colors duration-300"
        style={{
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.15em',
          color: 'rgba(10, 136, 205, 0.45)',
          fontFamily: 'var(--font-body)',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(10,136,205,0.9)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(10,136,205,0.45)')}
      >
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      className={[
        'group relative pb-0.5 transition-colors duration-300',
        active ? 'text-white' : 'text-(--color-ash)/50 hover:text-white',
        'no-underline hover:no-underline',
      ].join(' ')}
      style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em', fontFamily: 'var(--font-body)' }}
    >
      {label.toUpperCase()}
      <span
        className={[
          'absolute -bottom-0.5 left-0 h-px bg-(--color-blood)',
          'transition-[width] duration-300 ease-out',
          active ? 'w-full' : 'w-0 group-hover:w-full',
        ].join(' ')}
        style={{ boxShadow: '0 0 6px rgba(196,30,30,0.6)' }}
      />
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[rgba(7,5,5,0.88)] backdrop-blur-md border-b border-(--color-border-sub)'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 no-underline" aria-label={ALLIANCE_NAME}>
          <div
            className="w-[6px] h-[6px] bg-(--color-blood) rotate-45 shrink-0"
          />
          <span
            className="text-white tracking-widest"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.32em',
            }}
          >
            {ALLIANCE_NAME.toUpperCase()}
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href, isRepublic, external }) => (
            <li key={href}>
              <NavLink
                href={href}
                label={label}
                active={activeSection === href.replace('#', '')}
                isRepublic={isRepublic}
                external={external}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
