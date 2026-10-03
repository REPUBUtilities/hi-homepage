import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { DISCORD_URL, NAV_LINKS, REPUBLIC_URL, WIKI_URL, ZKILL_URL } from '../lib/constants'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="brand" to="/" aria-label="Helios Initiative, home">
          <img src="/falcon-logo.png" alt="Helios Initiative falcon" />
          <span>Helios</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) =>
            l.href ? (
              <a key={l.label} href={l.href}>{l.label}</a>
            ) : l.to === '/enlist' ? (
              <NavLink key={l.label} to={l.to}>{l.label}</NavLink>
            ) : (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ),
          )}
          <a className="hel-btn hel-chamfer-sm" href={DISCORD_URL}>Join Discord</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-in">
          <div className="stack-sm" style={{ maxWidth: 360 }}>
            <p className="foot-name">Helios Initiative</p>
            <p className="small muted">The combat arm of The Republic. Wardec eligible. Low-sec.</p>
          </div>
          <nav className="foot-links" aria-label="Footer">
            <a href={REPUBLIC_URL}>The Republic</a>
            <a href={WIKI_URL}>Wiki</a>
            <a href={DISCORD_URL}>Discord</a>
            <a href={ZKILL_URL}>zKillboard</a>
            <Link to="/enlist">Enlist</Link>
          </nav>
        </div>
        <div className="foot-base">
          <p className="sig">Futurum Aedificantes</p>
          <p className="note">© 2026 Helios Initiative. EVE Online and its related marks are the property of CCP hf.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="page">
      <ScrollManager />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
