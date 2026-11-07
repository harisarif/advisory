# Cutting Edge Advisory Ltd – Website (React + Vite)

Insurance consultancy website: cheap car insurance (all licence types), CBT for motorbike riders,
Uber / Deliveroo / Just Eat conversion, speeding ticket appeals and platform issue support.

**Pages:** Home, Services, About, Contact. A floating WhatsApp button appears on every page.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Cutting Edge Advisory Ltd website"
git branch -M main
git remote add origin https://github.com/<your-username>/cutting-edge-advisory.git
git push -u origin main
```

## Deploy on Vercel

1. Go to https://vercel.com/new and import the GitHub repository.
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
3. Click **Deploy**.

`vercel.json` rewrites all routes to `index.html`, so refreshing `/services`, `/contact`, etc. works.

## Customise

- Phone, WhatsApp, email, company name: `src/config.js`
- Services, FAQs, steps: `src/data.js`
- Colours: CSS variables at the top of `src/index.css`
- Contact form: opens WhatsApp (or email) with the details pre-filled. No backend needed.
