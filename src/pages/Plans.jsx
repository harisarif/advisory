import { useState } from 'react'
import PlanCard from '../components/PlanCard.jsx'
import { plans } from '../data.js'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal', ids: ['life', 'health', 'travel'] },
  { id: 'assets', label: 'Assets', ids: ['motor', 'home'] },
  { id: 'business', label: 'Business', ids: ['business'] },
]

export default function Plans() {
  const [active, setActive] = useState('all')
  const f = filters.find((x) => x.id === active)
  const list = f.ids ? plans.filter((p) => f.ids.includes(p.id)) : plans

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Insurance plans</span>
          <h1>Find the cover that fits</h1>
          <p>Browse our most popular categories and request a tailored quote.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="tabs">
            {filters.map((x) => (
              <button
                key={x.id}
                className={active === x.id ? 'tab active' : 'tab'}
                onClick={() => setActive(x.id)}
              >
                {x.label}
              </button>
            ))}
          </div>
          <div className="grid grid-3">
            {list.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
        </div>
      </section>
    </>
  )
}
