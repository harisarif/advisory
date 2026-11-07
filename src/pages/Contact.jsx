import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { services } from '../data.js'
import { company, waLink } from '../config.js'

export default function Contact() {
  const { state } = useLocation()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: state?.service || services[0].title,
    message: '',
  })

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const text = () =>
    `Hello ${company.name},\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`

  // Opens WhatsApp with the form details pre-filled, so no backend is needed.
  const sendWhatsApp = (e) => {
    e.preventDefault()
    window.open(waLink(text()), '_blank', 'noopener')
  }

  const sendEmail = () => {
    const subject = encodeURIComponent(`Enquiry: ${form.service}`)
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(text())}`
  }

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p>Fast response. Real support. Message {company.contactPerson} on WhatsApp or send your details below.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <form className="card form" onSubmit={sendWhatsApp}>
            <label>Full name
              <input required value={form.name} onChange={(e) => set('name', e.target.value)} />
            </label>
            <label>Phone number
              <input required type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
            </label>
            <label>I need help with
              <select value={form.service} onChange={(e) => set('service', e.target.value)}>
                {services.map((s) => <option key={s.id}>{s.title}</option>)}
              </select>
            </label>
            <label>Message
              <textarea rows="4" value={form.message} onChange={(e) => set('message', e.target.value)} />
            </label>
            <button className="btn btn-gold block" type="submit">
              <Icon name="whatsapp" size={20} /> Send on WhatsApp
            </button>
            <button className="btn btn-outline block" type="button" onClick={sendEmail}>
              <Icon name="mail" size={18} /> Send by email instead
            </button>
          </form>

          <aside className="card info">
            <h3>Contact details</h3>
            <a className="info-row" href={waLink()} target="_blank" rel="noreferrer">
              <span className="round sm wa"><Icon name="whatsapp" size={22} /></span>
              <span><strong>WhatsApp {company.contactPerson}</strong><br />{company.phoneDisplay}</span>
            </a>
            <a className="info-row" href={`tel:${company.phoneTel}`}>
              <span className="round sm"><Icon name="phone" size={20} /></span>
              <span><strong>Phone</strong><br />{company.phoneDisplay}</span>
            </a>
            <a className="info-row" href={`mailto:${company.email}`}>
              <span className="round sm"><Icon name="mail" size={20} /></span>
              <span><strong>Email</strong><br />{company.email}</span>
            </a>
            <p className="fine">Your information is kept confidential.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
