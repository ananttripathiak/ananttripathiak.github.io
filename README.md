# Anant Tripathi — Personal Portfolio

Personal portfolio website for **Anant Tripathi**, Senior Data Scientist, ML Engineer & AI Engineer at Axtria. Built with Next.js 16 + Tailwind CSS + Framer Motion, deployed to GitHub Pages via GitHub Actions.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # generates ./out (static export)
```

Node.js 18+ required.

## Deploy to GitHub Pages

### Step 1 — Create the GitHub repo

Go to github.com → New repository and choose one of:

| Repo name | Live URL |
|---|---|
| `anant-portfolio` | `https://ananttripathi.github.io/anant-portfolio/` |
| `ananttripathi.github.io` | `https://ananttripathi.github.io/` |

### Step 2 — Push this project

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/ananttripathi/anant-portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Done — `.github/workflows/deploy.yml` handles everything on every push to `main`

The `basePath` is auto-detected from the `GITHUB_REPOSITORY` env var set by GitHub Actions, so no manual config is needed.

## Project Structure

```
anant-portfolio/
├── public/
│   ├── ANANT_BEIGE.png        # Original photo (beige background)
│   └── ANANT_THEME.png        # Processed photo (dark-blue background, used in site)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, metadata, Google Fonts <link>
│   │   ├── page.tsx           # Assembles all sections in order
│   │   └── globals.css        # @tailwind directives + custom scrollbar/selection CSS
│   └── components/
│       ├── Nav.tsx            # Sticky nav, mobile hamburger, active-link tracking
│       ├── Hero.tsx           # Canvas neural network + photo + stat cards
│       ├── ClientsBar.tsx     # Infinite-scroll marquee of pharma client names
│       ├── Services.tsx       # 6 service cards with staggered whileInView animation
│       ├── WhyChooseMe.tsx    # 4 circular cards with conic-gradient hover border
│       ├── Story.tsx          # About text + stats grid + 3 manager quote cards
│       ├── Work.tsx           # 3 project showcase cards
│       ├── FAQ.tsx            # Animated accordion (experience / background Q&A)
│       ├── CTABanner.tsx      # "Ready to Transform Your Data?" call-to-action
│       └── Footer.tsx         # Logo, nav links, social icons, contact row
├── .github/workflows/
│   └── deploy.yml             # Build + deploy to GitHub Pages on push to main
├── next.config.ts             # output: 'export', auto basePath detection
├── tailwind.config.ts         # Custom color tokens, marquee/spin animations
└── tsconfig.json
```

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js (Static Export) | ^16.2.6 |
| Styling | Tailwind CSS | ^3.4.17 |
| Animations | Framer Motion | ^11.15.0 |
| Language | TypeScript | ^5 |
| Fonts | Inter (Google Fonts via `<link>`) | — |
| Deploy | GitHub Pages via GitHub Actions | — |

## Design System

All custom tokens live in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `bg` / `bg-2` | `#0c0d15` / `#0f1018` | Page and section backgrounds |
| `card` / `card-2` | `#13141f` / `#1a1b2e` | Card surfaces |
| `accent` | `#2563eb` | Primary blue — buttons, borders, glow |
| `accent-light` | `#3b82f6` | Lighter blue for text, icons |
| `t1` | `#f8fafc` | Primary text |
| `t2` | `#94a3b8` | Secondary / body text |
| `t3` | `#4b5563` | Muted text |

## Photo Processing

`public/ANANT_THEME.png` is generated from `public/ANANT_BEIGE.png` using a Python script:

- **Method:** Euclidean-distance flood-fill from all 4 image edges (tolerance 38)
- **Background colour detected:** ~R=239, G=216, B=189 (studio beige)
- **Replaced with:** radial dark-blue gradient — center `#0d1a3a` → edge `#07080f`
- **Skin tones preserved:** euclidean distance between beige and skin is ~65, well above tolerance

To regenerate (e.g. after updating the source photo):

```bash
python scripts/process_photo.py
```

> The script is not yet extracted to `scripts/` — see MIGRATION.md for the full inline script.

## Known Issues / Gotchas

- `@import` in `globals.css` must not appear after `@tailwind` directives (PostCSS rule). Google Fonts are loaded via `<link>` in `layout.tsx` instead.
- `next/image` requires `images: { unoptimized: true }` in `next.config.ts` for static export.
- The `'use client'` directive is required on any component using hooks, canvas, or Framer Motion `motion.*`.
