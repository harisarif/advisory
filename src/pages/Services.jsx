import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>Advice to protect and grow your business</h1>
          <p>Insurance advisory and business resourcing consultancy, all from one team.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </section>
    </>
  )
}
