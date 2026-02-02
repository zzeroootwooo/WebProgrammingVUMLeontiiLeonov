# Task 1 — Convert the NovaPets static website to a React app

You are given a small multi-page **static HTML + CSS** website (NovaPets). Your goal is to rebuild it as a **React Single Page Application (SPA)** using **React Router** and **reusable components**.

> The finished React app should look and feel like the original site, but be easier to maintain (no duplicated header/footer, no copy-pasting repeated card markup).

---

## Starting files

You will receive a folder containing:
- `index.html` (Home)
- `about.html` (How it works)
- `pets.html` (Pets / listings)
- `contact.html` (Contact)
- `styles.css`
- `/assets` (icons)

These HTML pages contain repeated layout elements on purpose.

---

## Requirements (must-have)

### 1) Create a React app
- Use **Vite + React** (recommended) or another React setup approved by the lecturer
- The app must run locally with:
  - `npm install`
  - `npm run dev`

### 2) Add routing (SPA)
- Install React Router and configure routes:
  - `/` → Home
  - `/about` → How it works
  - `/pets` → Pets
  - `/contact` → Contact

### 3) Shared Layout
Create a `Layout` component that is reused across pages and includes:
- `Header` (logo + navigation + CTA)
- `<main>` content area using React Router’s `<Outlet />`
- `Footer`

### 4) Pages as components
Create React components for the pages:
- `HomePage`
- `AboutPage`
- `PetsPage`
- `ContactPage`

The page content should match the static website’s content and structure closely.

### 5) Reuse components (but don’t overdo it)
You **must** extract at least:
- `Header`
- `Footer`

Also extract at least one repeating UI pattern, for example:
- `PetCard` (used in the Pets page grid)
- `Stat` or `StatCard`
- `Section` / `Panel` / `Badge`

**Rule:** Don’t turn every `<div>` into a component — reuse where it saves repetition and keeps code readable.

### 6) Styling
- Keep the site styling consistent with the original look.
- You may:
  - Keep one global stylesheet (copy `styles.css` into the React project), **or**
  - Convert to CSS Modules (optional), **or**
  - Mix both (global base + module overrides).
- Make sure any `class` attributes become `className` in JSX.

---

## Acceptance criteria checklist

Your solution is complete when:

- [ ] App starts with `npm run dev`
- [ ] Navigation links change routes **without** full page reload
- [ ] Header and footer appear on every page via a shared Layout
- [ ] Routes match: `/`, `/about`, `/pets`, `/contact`
- [ ] At least one repeating block is a reusable component (e.g., `PetCard`)
- [ ] Styling is applied and visually close to the original site
- [ ] No broken links and no console errors in the browser

---

## Suggested folder structure

```
src/
  components/
    Header.jsx
    Footer.jsx
    Layout.jsx
    PetCard.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    PetsPage.jsx
    ContactPage.jsx
  App.jsx
  main.jsx
  styles.css
```

---

## Optional improvements (bonus)

Pick any 1–3:

- Render the pets from an array using `.map()` instead of hardcoding repeated cards
- Use `NavLink` and apply an **active** style to the current route
- Add a `NotFoundPage` route (`*`) for unknown URLs

---

## Notes / rules

- Do **not** use server-side rendering; this is a front-end SPA exercise.
- Keep components simple and readable.
- If something looks slightly different from the static version, explain why in your README.
