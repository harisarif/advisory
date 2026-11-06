import { Link } from 'react-router-dom'

export default function PlanCard({ plan }) {
  return (
    <article className="card plan-card">
      <div className="plan-icon" aria-hidden="true">{plan.icon}</div>
      <h3>{plan.name}</h3>
      <p className="muted">{plan.tagline}</p>
      <ul className="ticks">
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="plan-foot">
        <span>
          From <strong>₹{plan.from}</strong>/mo
        </span>
        <Link to="/contact" state={{ interest: plan.name }} className="btn btn-outline">
          Get a quote
        </Link>
      </div>
    </article>
  )
}
