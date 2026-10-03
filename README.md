# KELD — Titanium field bottle

Cinematic **product launch landing** for a fictional titanium outdoor bottle: scroll-scrubbed WebGL product, material story, temperature proof, founders-batch reserve.

Portfolio **project 4** (after product-reveal, spatial-brand, selene).

**Live (after Pages enable):** [https://achrafbennanizia.github.io/field-thermos/](https://achrafbennanizia.github.io/field-thermos/)

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Photoreal product packshots (scroll-scrubbed 3D turn) + Commons lifestyle photos
- Motion + Lenis (desktop smooth scroll)
- Static export → GitHub Pages (`/field-thermos`)

## Design
- Trail charcoal `#0E1210`, mist bone `#E8E4DC`, glacier `#7BA89A`
- Display: Bricolage Grotesque · Body: Figtree
- Brand-first hero, one-viewport sections, ~93% threshold snap

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run build:pages
npm run typecheck
```

## CI/CD
| Workflow | Trigger | Steps |
|---|---|---|
| **CI** | PR + push `main` | lint → typecheck → Pages build |
| **Deploy** | push `main` + manual | same → GitHub Pages |

Enable once: **Settings → Pages → Source: GitHub Actions**.
# KELD
