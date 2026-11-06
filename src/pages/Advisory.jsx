import { Link } from 'react-router-dom'
import { advisory, steps } from '../data.js'

export default function Advisory() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Advisory</span>
          <h1>Advice that puts you first</h1>
          <p>Our advisors are independent, so every recommendation is built around your needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          {advisory.map((a, i) => (
            <div key={a.title} className="card advisory-card">
              <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{a.title}</h3>
                <p className="muted">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Our process</h2>
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
          <div className="center mt">
            <Link to="/contact" className="btn btn-primary">Book your free consultation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
