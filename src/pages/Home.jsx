import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Faq from '../components/Faq.jsx'
import { services, pillars, strip, steps } from '../data.js'
import { company, waLink } from '../config.js'

export default function Home() {
  const top = services[0]
  const others = services.slice(1)

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="pill">Insurance consultancy</span>
            <h1>
              Smart solutions for <em>smarter driving.</em>
            </h1>
            <p>
              {company.name} helps drivers and riders with affordable car insurance, CBT training,
              platform conversions and speeding ticket appeals. {company.tagline}
            </p>
            <div className="hero-cta">
              <a href={waLink('Hello, I would like a car insurance quote.')} target="_blank" rel="noreferrer" className="btn btn-gold">
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
          <div className="feature">
            <div className="feature-body">
              <span className="ribbon">Our top service</span>
              <div className="feature-title">
                <span className="shield"><Icon name="car" size={44} /></span>
                <div>
                  <h2>Cheap car <span className="gold">insurance</span></h2>
                  <span className="white-pill">With all kinds of licences</span>
                </div>
              </div>
              <ul className="ticks light">
                {top.points.map((p) => (
                  <li key={p}><Icon name="check" size={18} /> {p}</li>
                ))}
              </ul>
              <div className="badges">
                {top.badges.map((b) => <span key={b}>{b}</span>)}
              </div>
              <div className="hero-cta">
                <a href={waLink('Hello, I would like a car insurance quote.')} target="_blank" rel="noreferrer" className="btn btn-gold">
                  <Icon name="whatsapp" size={20} /> Get a quote on WhatsApp
                </a>
                <Link to="/contact" state={{ service: top.title }} className="btn btn-ghost">Request a call back</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our services</span>
            <h2>How we can help you</h2>
            <p className="muted">From insurance to platform support, we handle the paperwork so you can get on the road.</p>
          </div>
          <div className="grid grid-2">
            {others.map((s) => <ServiceCard key={s.id} service={s} />)}
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
