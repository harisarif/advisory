import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-light">
            <img src="/favicon.svg" alt="" width="28" height="28" />
            <span>ShieldWise</span>
          </div>
          <p className="muted-light">
            Independent insurance advisory. Clear advice, fair prices and support when it matters.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/plans">Insurance Plans</Link>
          <Link to="/advisory">Advisory</Link>
          <Link to="/calculator">Premium Calculator</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <span>hello@shieldwise.example</span>
          <span>+00 000 000 0000</span>
          <span>Mon–Sat, 9am – 6pm</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ShieldWise. All rights reserved.</span>
        <span>Demo website. Premium figures are illustrative, not an offer of insurance.</span>
      </div>
    </footer>
  )
}
