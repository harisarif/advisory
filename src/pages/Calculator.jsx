import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

// Illustrative estimate only – not a real insurer rate table.
function estimate({ type, age, cover, smoker, family }) {
  const ageFactor = 1 + Math.max(0, age - 25) * 0.03
  const coverFactor = cover / 500000
  let base
  switch (type) {
    case 'life':
      base = 180 * coverFactor * ageFactor * (smoker ? 1.7 : 1)
      break
    case 'health':
      base = 220 * coverFactor * ageFactor * (1 + (family - 1) * 0.45)
      break
    case 'motor':
      base = 90 * coverFactor * (age < 25 ? 1.4 : 1)
      break
    default:
      base = 80 * coverFactor
  }
  return Math.round(base)
}

const fmt = (n) => n.toLocaleString('en-IN')

export default function Calculator() {
  const [form, setForm] = useState({
    type: 'life',
    age: 30,
    cover: 1000000,
    smoker: false,
    family: 1,
  })

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const monthly = useMemo(() => estimate(form), [form])

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Premium calculator</span>
          <h1>Estimate your monthly premium</h1>
          <p>A quick indication. Your advisor will confirm exact quotes from insurers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 calc">
          <div className="card">
            <label>
              Type of insurance
              <select value={form.type} onChange={(e) => set('type', e.target.value)}>
                <option value="life">Life</option>
                <option value="health">Health</option>
                <option value="motor">Motor</option>
                <option value="home">Home</option>
              </select>
            </label>

            <label>
              Age: <strong>{form.age}</strong>
              <input type="range" min="18" max="70" value={form.age}
                onChange={(e) => set('age', +e.target.value)} />
            </label>

            <label>
              Cover amount: <strong>₹{fmt(form.cover)}</strong>
              <input type="range" min="200000" max="10000000" step="100000" value={form.cover}
                onChange={(e) => set('cover', +e.target.value)} />
            </label>

            {form.type === 'health' && (
              <label>
                Family members covered: <strong>{form.family}</strong>
                <input type="range" min="1" max="6" value={form.family}
                  onChange={(e) => set('family', +e.target.value)} />
              </label>
            )}

            {form.type === 'life' && (
              <label className="check">
                <input type="checkbox" checked={form.smoker}
                  onChange={(e) => set('smoker', e.target.checked)} />
                I use tobacco
              </label>
            )}
          </div>

          <div className="card result">
            <span className="eyebrow">Estimated premium</span>
            <div className="price">₹{fmt(monthly)}<small>/month</small></div>
            <p className="muted">≈ ₹{fmt(monthly * 12)} per year</p>
            <Link to="/contact" state={{ interest: `${form.type} insurance` }} className="btn btn-gold block">
              Get an exact quote
            </Link>
            <p className="fine">Illustrative estimate only. Actual premiums depend on insurer underwriting.</p>
          </div>
        </div>
      </section>
    </>
  )
}
