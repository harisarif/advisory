import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { waLink } from '../config.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" width="40" height="40" />
          <span className="brand-text">
            <b>CUTTING EDGE</b>
            <small>ADVISORY LTD</small>
          </span>
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
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-gold" onClick={() => setOpen(false)}>
            <Icon name="whatsapp" size={18} /> WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  )
}
