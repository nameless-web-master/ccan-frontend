# CCAN — Certified Courier Access Network

Marketing site for **CCAN**, a system that lets property managers securely
authorize and monitor courier access in real time.

Built with **React 19 + Vite + TypeScript** and **react-router-dom** so new
pages can be added easily.

## Stack

- React 19
- Vite 8
- TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- react-router-dom v7
- lucide-react (icons)

Brand tokens (`--color-primary`, `--color-navy`, …) are declared in
`src/index.css` inside a Tailwind `@theme` block, so they're available both as
CSS variables (`var(--color-primary)`) and via Tailwind utilities
(`text-[var(--color-primary)]`, `bg-[var(--color-bg-tinted)]`).

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # run ESLint
npm run typecheck
```

## Project structure

```
src/
├── App.tsx                 # Routes + global layout (Header / Footer)
├── main.tsx                # Entry point with <BrowserRouter>
├── index.css               # Design tokens and section styles
├── vite-env.d.ts
├── assets/
│   └── dashboard-mockup.png
├── components/
│   ├── Header.tsx          # Sticky top nav with mobile drawer
│   ├── Footer.tsx          # Footer with company / resources / contact
│   ├── Logo.tsx            # SVG shield+lock logo (light/dark variants)
│   ├── Hero.tsx            # "Secure. Verified. Controlled." hero + features
│   ├── HowItWorks.tsx      # 5-step process
│   ├── BuiltForBuildings.tsx # Benefits + dashboard mockup
│   └── PilotBanner.tsx     # Blue CTA banner
└── pages/
    └── Home.tsx            # Composes the home page sections
```

## Adding a new page

1. Create a file in `src/pages/`, e.g. `About.tsx`.
2. Register the route in `src/App.tsx`:

```tsx
<Route path="/about" element={<About />} />
```

3. Link to it from the header in `src/components/Header.tsx`.
