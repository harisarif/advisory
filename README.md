# ShieldWise – Insurance & Advisory (React + Vite)

A responsive insurance advisory website built with React 18, Vite and React Router.

**Pages:** Home, Insurance Plans (filterable), Advisory, Premium Calculator, About, Contact (lead form).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: ShieldWise insurance advisory site"
git branch -M main
git remote add origin https://github.com/<your-username>/shieldwise.git
git push -u origin main
```

## Deploy on Vercel

1. Go to https://vercel.com/new and import the GitHub repository.
2. Framework preset: **Vite** (auto-detected). Build command: `npm run build`, output: `dist`.
3. Click **Deploy**.

`vercel.json` already rewrites all routes to `index.html`, so page refreshes on `/plans`, `/contact`, etc. work.

## Customise

- Content (plans, advisory, FAQs, testimonials): `src/data.js`
- Colours and styling: CSS variables at the top of `src/index.css`
- Contact form: currently logs to the console. Connect it to Formspree, EmailJS or your own API in `src/pages/Contact.jsx`.
- Calculator: `src/pages/Calculator.jsx` uses illustrative formulas only. Replace with real insurer rates before using in production.

## Note

All names, contact details and figures are placeholders for demo purposes.
