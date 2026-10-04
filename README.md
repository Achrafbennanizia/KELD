# KELD — Titanium field bottle

Cinematic **product launch landing** for a fictional titanium outdoor bottle: scroll-scrubbed photoreal packshots, material story, temperature proof, founders-batch reserve.

**Live (after Pages enable):** [https://achrafbennanizia.github.io/KELD/](https://achrafbennanizia.github.io/KELD/)

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Photoreal product packshots (multi-angle media gallery) + finish colorways
- Motion + Lenis (desktop smooth scroll)
- Static export → GitHub Pages (`/KELD`)
- Mobile: packshot top / copy bottom, safe-area insets, touch-friendly controls

## Design
- Trail charcoal `#0C1210`, mist bone `#E8E4DC`, glacier `#7BA89A`
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
npm run lint
```

## CI/CD

| Workflow | Trigger | Steps |
|---|---|---|
| **CI** (`.github/workflows/ci.yml`) | PR + push `main` | `npm ci` → lint → typecheck → Pages build → verify `out/` |
| **Deploy** (`.github/workflows/deploy.yml`) | push `main` + manual | same → upload artifact → GitHub Pages |

Enable once: **Settings → Pages → Source: GitHub Actions**.
