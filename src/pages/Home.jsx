import { Link } from 'react-router-dom'
import PlanCard from '../components/PlanCard.jsx'
import Faq from '../components/Faq.jsx'
import { plans, advisory, steps, testimonials } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="pill">Independent insurance advisors</span>
            <h1>Coverage that fits your life, not the other way round.</h1>
            <p>
              We compare plans from leading insurers and give you honest, personalised advice, so you
              pay for the protection you need and nothing you don’t.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-gold">Book a free consultation</Link>
              <Link to="/calculator" className="btn btn-ghost">Estimate my premium</Link>
            </div>
            <div className="stats">
              <div><strong>25k+</strong><span>Families advised</span></div>
              <div><strong>98%</strong><span>Claims supported</span></div>
              <div><strong>30+</strong><span>Insurer partners</span></div>
            </div>
          </div>
          <div className="hero-card card">
            <h3>Quick quote</h3>
            <p className="muted">Tell us what you’d like to protect.</p>
            <div className="chips">
              {plans.slice(0, 4).map((p) => (
                <Link key={p.id} to="/contact" state={{ interest: p.name }} className="chip">
                  <span>{p.icon}</span> {p.name.replace(' Insurance', '')}
                </Link>
              ))}
            </div>
            <Link to="/contact" className="btn btn-primary block">Get started</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Insurance plans</span>
            <h2>Protection for every part of life</h2>
            <p className="muted">Compare options across leading insurers in one place.</p>
          </div>
          <div className="grid grid-3">
            {plans.slice(0, 3).map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
          <div className="center mt">
            <Link to="/plans" className="btn btn-outline">View all plans</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Advisory services</span>
            <h2>Advice you can actually trust</h2>
          </div>
          <div className="grid grid-4">
            {advisory.map((a) => (
              <div key={a.title} className="card">
                <h3>{a.title}</h3>
                <p className="muted">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Covered in four simple steps</h2>
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

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2>People we’ve helped</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card quote">
                <blockquote>“{t.quote}”</blockquote>
                <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
              </figure>
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
        <div className="container cta-inner">
          <h2>Ready to find the right cover?</h2>
          <p>Speak with an advisor today. It’s free and there’s no obligation.</p>
          <Link to="/contact" className="btn btn-gold">Talk to an advisor</Link>
        </div>
      </section>
    </>
  )
}
