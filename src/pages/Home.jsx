import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Faq from '../components/Faq.jsx'
import { services, pillars, strip, steps } from '../data.js'
import { company, waLink } from '../config.js'

export default function Home() {
  const waText = {
    'insurance-advisory': 'Hello, I would like advice on insurance.',
    'business-resourcing': 'Hello, I would like help with business resourcing.',
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="pill">Insurance &amp; business advisory</span>
            <h1>
              Protect your business, <em>resource your growth.</em>
            </h1>
            <p>
              {company.name} offers expert insurance advisory and business resourcing
              consultancy. {company.tagline}
            </p>
            <div className="hero-cta">
              <a href={waLink('Hello, I would like some advice.')} target="_blank" rel="noreferrer" className="btn btn-gold">
                <Icon name="whatsapp" size={20} /> WhatsApp {company.phoneDisplay}
              </a>
              <Link to="/services" className="btn btn-ghost">View our services</Link>
            </div>
          </div>

          <div className="pillars">
            {pillars.map((p) => (
              <div key={p.title} className="pillar">
                <span className="round"><Icon name={p.icon} size={26} /></span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our services</span>
            <h2>How we can help you</h2>
            <p className="muted">Practical advice for protecting and growing your business.</p>
          </div>
          <div className="feature-stack">
            {services.map((s, i) => (
              <div className="feature" key={s.id}>
                <div className="feature-body">
                  <span className="ribbon">{i === 0 ? 'Our core service' : 'Business support'}</span>
                  <div className="feature-title">
                    <span className="shield"><Icon name={s.icon} size={44} /></span>
                    <div>
                      <h2>{s.title}</h2>
                      <span className="white-pill">{s.subtitle}</span>
                    </div>
                  </div>
                  <ul className="ticks light">
                    {s.points.map((p) => (
                      <li key={p}><Icon name="check" size={18} /> {p}</li>
                    ))}
                  </ul>
                  <div className="badges">
                    {s.badges.map((b) => <span key={b}>{b}</span>)}
                  </div>
                  <div className="hero-cta">
                    <a href={waLink(waText[s.id])} target="_blank" rel="noreferrer" className="btn btn-gold">
                      <Icon name="whatsapp" size={20} /> Ask us on WhatsApp
                    </a>
                    <Link to="/contact" state={{ service: s.title }} className="btn btn-ghost">Request a call back</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="strip">
            {strip.map((s) => (
              <div key={s.title} className="strip-item">
                <Icon name={s.icon} size={30} />
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Simple from start to finish</h2>
          </div>
          <div className="grid grid-4">
            {steps.map((s) => (
              <div key={s.n} className="step">
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <Faq />
        </div>
      </section>

      <section className="cta">
        <div className="cta-left">
          <h2>Please contact {company.contactPerson} on WhatsApp</h2>
          <p>Fast response. Real support.</p>
        </div>
        <a href={waLink()} target="_blank" rel="noreferrer" className="cta-right cta-number">
          <Icon name="whatsapp" size={34} /> {company.phoneDisplay}
        </a>
      </section>
    </>
  )
}
