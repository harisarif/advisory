import { Link } from 'react-router-dom'

const values = [
  { t: 'Independent', d: 'We work for you, comparing many insurers rather than selling one.' },
  { t: 'Transparent', d: 'Plain language, clear fees and no hidden clauses.' },
  { t: 'Responsive', d: 'Real advisors who answer, and stay with you through claims.' },
]

const team = [
  { name: 'Ahmed Raza', role: 'Founder & Principal Advisor' },
  { name: 'Mariam Shah', role: 'Head of Health & Life' },
  { name: 'Daniyal Khan', role: 'Claims & Support Lead' },
]

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>Insurance advice built on trust</h1>
          <p>We started Cuttin Edge Advisory Ltd because buying insurance shouldn’t feel confusing or pushy.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          {values.map((v) => (
            <div key={v.t} className="card">
              <h3>{v.t}</h3>
              <p className="muted">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><h2>Meet the team</h2></div>
          <div className="grid grid-3">
            {team.map((m) => (
              <div key={m.name} className="card team">
                <div className="avatar">{m.name.split(' ').map((w) => w[0]).join('')}</div>
                <h3>{m.name}</h3>
                <p className="muted">{m.role}</p>
              </div>
            ))}
          </div>
          <div className="center mt">
            <Link to="/contact" className="btn btn-primary">Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
