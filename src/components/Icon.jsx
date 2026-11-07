const paths = {
  shield: <><path d="M12 3 4 6v6c0 5 3.4 8.2 8 9 4.6-.8 8-4 8-9V6l-8-3z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  tag: <><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.5" cy="8.5" r="1.2" /></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M19 20c0 1.5-2 2-5 2" /></>,
  car: <><path d="M5 16 6.5 10.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 16" /><rect x="3" y="16" width="18" height="4" rx="1.5" /><circle cx="7.5" cy="18" r=".8" /><circle cx="16.5" cy="18" r=".8" /></>,
  bike: <><circle cx="6" cy="16" r="3.5" /><circle cx="18" cy="16" r="3.5" /><path d="M6 16h5l3-6h3M12 10h-2" /></>,
  convert: <><path d="M4 8h13l-3-3M20 16H7l3 3" /></>,
  camera: <><rect x="3" y="7" width="18" height="12" rx="2" /><circle cx="12" cy="13" r="3.2" /><path d="M8 7l1.5-2h5L16 7" /></>,
  bolt: <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9z" />,
  doc: <><path d="M6 3h8l4 4v14H6V3z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
}

export default function Icon({ name, size = 24, className = '' }) {
  if (name === 'whatsapp') {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
        <path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.37.69 4.58 1.87 6.45L4 29l7.7-1.82a12 12 0 0 0 4.34.82C22.68 28 28 22.62 28 15.99 28 9.4 22.68 3 16.04 3zm0 21.9c-1.4 0-2.77-.37-3.97-1.07l-.28-.17-4.57 1.08 1.14-4.45-.19-.3a9.9 9.9 0 0 1-1.54-5.3c0-5.5 4.5-9.97 10.02-9.97 5.5 0 9.93 4.5 9.93 10 0 5.5-4.4 9.18-8.54 9.18zm5.47-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.4-1.5-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.5.7.3 1.26.5 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    )
  }
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
