# KELD bottle — img2threejs reconstruction

Reference: `public/photos/keld-bottle-hero.jpg` (+ side / detail / angle).

## Delivered model

Procedural factory (code-only, no downloaded mesh):

`src/components/canvas/createKeldBottle.ts`

Wired into the landing via `BottleCanvas` → scroll-scrubbed `BottleModel`.

Review capture: `review-hero.png`

## Matched from references

| Feature | Implementation |
|---|---|
| H:W ≈ 4:1 | `TOTAL_H = 8` at `BODY_R = 1` |
| Soft shoulder + neck | Lathe profile |
| Filleted base | Lathe foot curve |
| Cap knurls (~44) | Box instancing on circumference |
| Black gasket lip | Torus under cap |
| Brushed titanium | `MeshPhysicalMaterial` `#8a8f8c`, metalness 0.96, roughness ~0.42 + anisotropy |
| Radial cap-top brush | Procedural canvas maps |
| Left softbox read | Key directional + studio Environment |

## Unknowns (single-view)

Internal vacuum wall, thread under cap, exact base underside — approximated / omitted.

## Pipeline notes

- System Python was 3.9; forge needs 3.10+ → installed `python@3.12` via Homebrew.
- Intake + assessment + detail inventory + sculpt-spec skeleton authored under `.img2threejs/`.
- Strict-quality schema still open on `referencePbr` / feature `qualityCriteria`; production factory is the hand-refined lathe model above.
