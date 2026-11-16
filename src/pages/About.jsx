import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { pillars, strip } from '../data.js'
import { company } from '../config.js'

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>{company.name}</h1>
          <p>{company.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow about-text">
          <p>
            {company.name} is an advisory firm that helps individuals and businesses make
            confident decisions. We provide insurance advisory and business resourcing
            consultancy to help you protect your business and find the people and resources you need.
          </p>
          <p>
            We believe in honest advice, clear steps and no hidden charges. Whatever you need, our
            goal is to give you a fast reply and a practical solution.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid grid-3">
          {pillars.map((p) => (
            <div key={p.title} className="card center">
              <span className="round mx"><Icon name={p.icon} size={26} /></span>
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </div>
          ))}
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
          <div className="center mt">
            <Link to="/contact" className="btn btn-gold">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
