# MIGRATION.md — Agent Handoff Document

This file exists so a future agent (or Claude session) can pick up this project with zero context loss. Read it top to bottom before touching any code.

---

## Who owns this project

**Anant Tripathi** — Senior Data Scientist, ML Engineer & AI Engineer at Axtria (pharma analytics). This is his personal portfolio website. All content (quotes, stats, project names, client list) is real and sourced from his annual performance reviews.

Contact: anant.tripathi@axtria.com

---

## What this project is

A single-page personal portfolio website. One page, no routing. Deployed as a fully static site to GitHub Pages.

**Live URL (after deployment):** `https://ananttripathi.github.io/anant-portfolio/`

---

## Design language

The theme is called "Catalyst Analytics" — a dark tech/data aesthetic:

- Dark near-black background (`#0c0d15`)
- Electric blue accent (`#2563eb` / `#3b82f6`)
- White primary text (`#f8fafc`), slate secondary (`#94a3b8`)
- Inter font (Google Fonts, loaded via `<link>` in `layout.tsx`)
- Neural network canvas animation in the hero (particles + connection lines)
- Glowing borders, conic-gradient spinning rings, `whileInView` entrance animations

Do NOT change the theme or colour tokens without explicit instruction. The user went through 8+ rejected theme iterations before approving this exact look.

---

## Component map

All components are in `src/components/`. The page assembles them top-to-bottom in `src/app/page.tsx`.

| Component | Section | Notes |
|---|---|---|
| `Nav.tsx` | Top navigation | `'use client'`. Sticky. Mobile hamburger with `AnimatePresence`. Tracks active section via scroll. |
| `Hero.tsx` | Landing / fold | `'use client'`. Canvas neural network (80 particles, blue connection lines). Photo `ANANT_THEME.png` centred in the circle with animated glow rings. Two floating stat cards (95%+ on-time, 336 learning hrs). |
| `ClientsBar.tsx` | Clients marquee | Server component. CSS `animate-marquee` infinite horizontal scroll. 12 pharma client names (Novartis, Bayer, Merck, AstraZeneca, Pfizer, J&J, Roche, Sanofi, AbbVie, Lilly, BMS, Boehringer). |
| `Services.tsx` | What I do | `'use client'`. 6 cards: Marketing Mix Optimisation, LLMs & GenAI, MLOps & Deployment, Predictive Analytics, System Design, Data Engineering. Staggered `whileInView`. |
| `WhyChooseMe.tsx` | Differentiators | `'use client'`. 4 circular cards with conic-gradient border on hover. |
| `Story.tsx` | About + social proof | `'use client'`. Left: about text + 4 stats grid. Right: 3 manager quote cards from real annual reviews. |
| `Work.tsx` | Projects | `'use client'`. 3 project cards: MarketingIQ MMX Platform, Tourism Demand Predictor, Predictive Engine Maintenance. |
| `FAQ.tsx` | Background Q&A | `'use client'`. 5 accordion items with `AnimatePresence` height animation. Numbered 01–05. |
| `CTABanner.tsx` | Call to action | "Ready to Transform Your Data?" gradient banner. |
| `Footer.tsx` | Footer | Logo, nav links, social icons (GitHub, LinkedIn, Kaggle) in blue rounded squares, email/phone/location. |

---

## Hero photo pipeline

**Source:** `public/ANANT_BEIGE.png` — original 1254×1254px photo, beige studio background

**Processed:** `public/ANANT_THEME.png` — background replaced with dark-blue gradient matching the site theme

**The Hero uses `ANANT_THEME.png`, not the original.**

### How the background was removed (Python)

```python
from PIL import Image
import numpy as np
from collections import deque

src = r"public/ANANT_BEIGE.png"
dst = r"public/ANANT_THEME.png"

img  = Image.open(src).convert("RGBA")
data = np.array(img, dtype=np.float32)
h, w = data.shape[:2]

# Sample background colour from many edge points
edge_pts = []
step = 10
for x in range(0, w, step):
    edge_pts += [data[3, x, :3], data[h-3, x, :3]]
for y in range(0, h, step):
    edge_pts += [data[y, 3, :3], data[y, w-3, :3]]
bg = np.median(edge_pts, axis=0)   # ~R=239, G=216, B=189

# Build radial dark-blue gradient for replacement
cy2, cx2 = h / 2.0, w / 2.0
Y, X     = np.mgrid[:h, :w]
dist_map = np.sqrt((X - cx2)**2 + (Y - cy2)**2)
t        = np.clip(dist_map / dist_map.max(), 0, 1)
new_r = (13 + (7  - 13) * t).astype(np.float32)   # #0d... → #07...
new_g = (26 + (8  - 26) * t).astype(np.float32)
new_b = (58 + (15 - 58) * t).astype(np.float32)

# Euclidean-distance flood-fill from ALL perimeter pixels
euc  = np.sqrt(((data[:,:,:3] - bg)**2).sum(axis=2))
TOLERANCE = 38   # background euc ~1–20; skin euc ~65+ (safe gap)

visited = np.zeros((h, w), dtype=bool)
mask    = np.zeros((h, w), dtype=bool)
queue   = deque()

seeds = [(0, x)   for x in range(w)] + \
        [(h-1, x) for x in range(w)] + \
        [(y, 0)   for y in range(1, h-1)] + \
        [(y, w-1) for y in range(1, h-1)]

for sy, sx in seeds:
    if not visited[sy, sx] and euc[sy, sx] < TOLERANCE:
        visited[sy, sx] = mask[sy, sx] = True
        queue.append((sy, sx))

while queue:
    y2, x2 = queue.popleft()
    for dy, dx in ((-1,0),(1,0),(0,-1),(0,1)):
        ny, nx = y2+dy, x2+dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            visited[ny, nx] = True
            if euc[ny, nx] < TOLERANCE:
                mask[ny, nx] = True
                queue.append((ny, nx))

out = np.array(img, dtype=np.uint8)
out[mask, 0] = new_r[mask].astype(np.uint8)
out[mask, 1] = new_g[mask].astype(np.uint8)
out[mask, 2] = new_b[mask].astype(np.uint8)
out[mask, 3] = 255

Image.fromarray(out).save(dst)
```

**Critical: use euclidean distance, NOT manhattan.** Manhattan distance (sum of absolute channel diffs) was tried first and accidentally flooded into skin tones. Euclidean distance at tolerance 38 cleanly separates background (distance ~1–20) from skin (distance ~65+).

If Anant updates his photo, regenerate by running the script above from the project root.

---

## Key files and what lives where

| File | Purpose |
|---|---|
| `src/app/globals.css` | `@tailwind` directives + custom scrollbar + `::selection` blue highlight. **No `@import` here** — Google Fonts is in `layout.tsx` as a `<link>` tag. |
| `src/app/layout.tsx` | Root layout. Google Fonts loaded via `<head><link>` (not CSS import). `export const dynamic = 'force-static'`. |
| `tailwind.config.ts` | All custom colour tokens and animations. Edit here first when changing theme. |
| `next.config.ts` | `output: 'export'` for static build. `basePath` auto-detected from `GITHUB_REPOSITORY` env var. |
| `.github/workflows/deploy.yml` | CI/CD: npm ci → npm run build → upload `./out` → deploy to GitHub Pages. |

---

## Tailwind custom tokens (always use these, never raw hex in classnames)

```
bg / bg-2          backgrounds
card / card-2      card surfaces
accent             #2563eb  primary blue
accent-light       #3b82f6  lighter blue
accent-dim         rgba(37,99,235,0.12)
accent-glow        rgba(37,99,235,0.30)
t1                 #f8fafc  primary text
t2                 #94a3b8  secondary text
t3                 #4b5563  muted text
```

Custom animations: `animate-marquee`, `animate-spin-slow`, `animate-spin-reverse`

---

## Patterns to follow

- Every interactive component (hooks, canvas, Framer Motion) needs `'use client'` at top
- Entrance animations use `whileInView={{ opacity: 1, ... }}` with `viewport={{ once: true }}`
- Section IDs for nav: `#home`, `#services`, `#story`, `#work`, `#faq`, `#cta`
- Padding/max-width pattern: `max-w-[1200px] mx-auto px-12`
- Section vertical rhythm: `py-24` or `py-28`

---

## Rules — do not violate

1. **Do not add `@import` to `globals.css` after the `@tailwind` directives.** PostCSS will throw a parse error. Load external fonts via `<link>` in `layout.tsx`.
2. **Do not use `next/image` without `images: { unoptimized: true }` in `next.config.ts`.** Required for static export.
3. **Do not change the colour theme** without explicit user sign-off. The user rejected 8+ designs before approving this one.
4. **Do not touch code outside the scope of the requested change.** User preference: modify only what is asked, leave surrounding code byte-identical.
5. **The photo in the hero is `ANANT_THEME.png`**, not `ANANT_BEIGE.png`. The beige original is kept for re-processing only.

---

## Content reference (real data, do not fabricate)

**Stats shown on site:**
- 5+ years production ML & AI experience
- 10+ major product features owned end-to-end
- 7 professional certifications
- 38% HCP adoption uplift from EAP workflow
- 336 learning hours (FY25)
- 95%+ on-time delivery

**Manager quotes (verbatim from annual reviews):**
- Saurabh Kaushik, FY2025: "...among the best developers in the MarketingIQ team..."
- Saurabh Kaushik, Mid-year 2024: "...one of the most well-informed members on the Optimisation module..."
- Kawal Deep Singh, FY2022: "...technically strong and demonstrates dedication and passion..."

**Clients (pharma):** Novartis, Bayer, Merck, AstraZeneca, Pfizer, J&J, Roche, Sanofi, AbbVie, Lilly, BMS, Boehringer Ingelheim

---

## What was tried and rejected (don't re-suggest)

- Emoji icon packs for service cards → rejected ("looks unprofessional and pathetic")
- Multiple colour themes (bright, neon, minimal light, gradient-heavy) → all rejected before landing on this dark blue scheme
- Manhattan distance for photo background removal → replaced by euclidean (was flooding into skin tones)
- Flood-fill seeded only from 4 corners → replaced by all-perimeter seeding (corners missed large patches)
- `@import url('https://fonts.googleapis.com/...')` in `globals.css` → moved to `<link>` in `layout.tsx`

---

## Deployment status

Not yet deployed to GitHub Pages as of last session. Steps remaining:
1. Create GitHub repo `ananttripathi/anant-portfolio`
2. `git init && git add . && git commit -m "initial" && git remote add origin ... && git push -u origin main`
3. Enable GitHub Pages → Source: GitHub Actions
4. First push auto-triggers the deploy workflow

---

## Dev server

```bash
cd "c:\Users\A3937\OneDrive - Axtria\Documents\2026\anant-portfolio"
npm run dev
# → http://localhost:3000
```
