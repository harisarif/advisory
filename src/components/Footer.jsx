import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { company, waLink } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-light">
            <img src="/favicon.svg" alt="" width="40" height="40" />
            <span className="brand-text">
              <b>CUTTING EDGE</b>
              <small>ADVISORY LTD</small>
            </span>
          </div>
          <p className="muted-light">{company.tagline}</p>
          <p className="muted-light">Insurance consultancy. Driving you forward, solving what matters.</p>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services">Cheap Car Insurance</Link>
          <Link to="/services">CBT for Motorbike Riders</Link>
          <Link to="/services">Uber Conversion</Link>
          <Link to="/services">Speeding Ticket Appeals</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={waLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={16} /> {company.phoneDisplay} (WhatsApp)</a>
          <a href={`tel:${company.phoneTel}`}><Icon name="phone" size={16} /> {company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}><Icon name="mail" size={16} /> {company.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>Insurance is provided by third-party insurers. Quotes and eligibility are subject to checks.</span>
      </div>
    </footer>
  )
}
