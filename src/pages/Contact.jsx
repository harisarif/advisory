import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const { state } = useLocation()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: state?.interest || 'Life Insurance',
    message: '',
  })

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    // Demo only: wire this to your backend, Formspree, EmailJS, etc.
    console.log('Lead submitted:', form)
    setSent(true)
  }

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Book a free consultation</h1>
          <p>Tell us a little about yourself and an advisor will get back within one working day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          {sent ? (
            <div className="card success">
              <h3>Thank you, {form.name || 'friend'}! 🎉</h3>
              <p className="muted">We’ve received your request and will contact you shortly.</p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form className="card form" onSubmit={submit}>
              <label>Full name
                <input required value={form.name} onChange={(e) => set('name', e.target.value)} />
              </label>
              <label>Email
                <input required type="email" value={form.email} onChange={(e) => set('email', e.target.value)} />
              </label>
              <label>Phone
                <input required type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
              </label>
              <label>I’m interested in
                <select value={form.interest} onChange={(e) => set('interest', e.target.value)}>
                  <option>Life Insurance</option>
                  <option>Health Insurance</option>
                  <option>Motor Insurance</option>
                  <option>Home Insurance</option>
                  <option>Travel Insurance</option>
                  <option>Business Insurance</option>
                  <option>Policy review / advisory</option>
                </select>
              </label>
              <label>Message
                <textarea rows="4" value={form.message} onChange={(e) => set('message', e.target.value)} />
              </label>
              <button className="btn btn-primary block" type="submit">Request a call back</button>
            </form>
          )}

          <aside className="card info">
            <h3>Get in touch</h3>
            <p><strong>Email</strong><br />hello@cuttinedge.example</p>
            <p><strong>Phone</strong><br />+00 000 000 0000</p>
            <p><strong>Hours</strong><br />Mon–Sat, 9am – 6pm</p>
            <p><strong>Office</strong><br />123 Business Avenue, Your City</p>
          </aside>
        </div>
      </section>
    </>
  )
}
