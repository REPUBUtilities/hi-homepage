import { EXTERNAL_LINKS } from '../../lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="mt-32 py-12"
      style={{ borderTop: '1px solid var(--color-border-sub)' }}
    >
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-3 items-center gap-8">
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.28em',
              color: 'rgba(196, 30, 30, 0.55)',
              textTransform: 'uppercase',
            }}
          >
            Helios Initiative · New Eden
          </p>
          <p
            className="mt-1 italic"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              color: 'rgba(237, 232, 227, 0.3)',
              letterSpacing: '0.05em',
            }}
          >
            Pro Patria Et Stellis.
          </p>
        </div>

        {/* External links */}
        <div className="flex items-center justify-center gap-6">
          {EXTERNAL_LINKS.zkillboard && (
            <a
              href={EXTERNAL_LINKS.zkillboard}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', color: 'rgba(237,232,227,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-blood)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,232,227,0.4)')}
            >
              ZKILLBOARD
            </a>
          )}
          {EXTERNAL_LINKS.discord && (
            <a
              href={EXTERNAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', color: 'rgba(237,232,227,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-blood)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(237,232,227,0.4)')}
            >
              DISCORD
            </a>
          )}
          <a
            href="https://republic-alliance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', color: 'rgba(10,136,205,0.45)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(10,136,205,0.9)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(10,136,205,0.45)')}
          >
            THE REPUBLIC
          </a>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              color: 'rgba(237,232,227,0.25)',
            }}
          >
            © {year} Helios Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
