import { useState } from 'react'
import { faqs } from '../data.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {f.q}
            <span>{open === i ? '–' : '+'}</span>
          </button>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
