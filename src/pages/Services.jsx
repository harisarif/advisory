import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>Everything you need to keep moving</h1>
          <p>Insurance, training, platform conversions and appeals, all handled by one friendly team.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </section>
    </>
  )
}
