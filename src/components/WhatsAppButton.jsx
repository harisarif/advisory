import Icon from './Icon.jsx'
import { waLink } from '../config.js'

export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" size={32} />
      <span>Chat on WhatsApp</span>
    </a>
  )
}
