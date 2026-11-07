import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <div className="service-icon"><Icon name={service.icon} size={30} /></div>
      <h3>{service.title}</h3>
      <p className="gold-sub">{service.subtitle}</p>
      <p className="muted">{service.text}</p>
      <ul className="ticks">
        {service.points.map((p) => (
          <li key={p}><Icon name="check" size={16} /> {p}</li>
        ))}
      </ul>
      <Link to="/contact" state={{ service: service.title }} className="btn btn-outline">
        Enquire now
      </Link>
    </article>
  )
}
