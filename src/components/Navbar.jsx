import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/plans', label: 'Insurance Plans' },
  { to: '/advisory', label: 'Advisory' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" width="32" height="32" />
          <span>Cuttin Edge Advisory Ltd</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold" onClick={() => setOpen(false)}>
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  )
}
