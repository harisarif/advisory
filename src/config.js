export const company = {
  name: 'Cutting Edge Advisory Ltd',
  tagline: 'Your Trust. Our Expertise. Your Success.',
  email: 'Cuttingedgeadvisoryuk@gmail.com',
  phoneDisplay: '07495 902773',
  phoneTel: '+447495902773',
  whatsappBase: 'https://wa.me/447495902773',
  contactPerson: 'Hassan',
}

export const waLink = (text = 'Hello Cutting Edge Advisory, I would like some help.') =>
  `${company.whatsappBase}?text=${encodeURIComponent(text)}`
