/** Scroll path for the packshot stage + opposite copy rail. */

export type BottlePose = {
  /** Normalized stage X: -1 left … +1 right */
  x: number;
  /** Normalized vertical drift: -1 up … +1 down */
  y: number;
  /** Degrees — subtle tilt through crossings */
  rotate: number;
  /** Packshot scale pulse while traveling */
  scale: number;
  /** 0 = copy left, 1 = copy right */
  veil: number;
  copySide: "left" | "right";
};

type Key = { t: number; x: number; y: number; rotate: number; scale: number };

/**
 * Keyframes keyed to overall scroll progress.
 * Strong travel through sections 2→3→4 (why/method/spec)
 * and again through 5→6 (proof/reserve).
 */
const KEYS: Key[] = [
  // 1 · Rise — parked right
  { t: 0.0, x: 0.88, y: 0.02, rotate: -2.5, scale: 1 },
  { t: 0.1, x: 0.82, y: 0.0, rotate: -1.5, scale: 1 },
  // 2–4 · Science → Method → Specs — sweep right → left with lift
  { t: 0.18, x: 0.72, y: -0.02, rotate: 0, scale: 1.02 },
  { t: 0.28, x: 0.28, y: -0.1, rotate: 5, scale: 1.07 },
  { t: 0.38, x: -0.2, y: -0.14, rotate: 7, scale: 1.1 },
  { t: 0.48, x: -0.62, y: -0.06, rotate: 2, scale: 1.04 },
  { t: 0.58, x: -0.9, y: 0.02, rotate: -2, scale: 1 },
  // Hold left briefly before the return
  { t: 0.68, x: -0.92, y: 0.04, rotate: -3, scale: 1 },
  // 5–6 · Proof → Order — sweep left → right with lift
  { t: 0.78, x: -0.45, y: -0.08, rotate: 3, scale: 1.05 },
  { t: 0.88, x: 0.12, y: -0.14, rotate: 6, scale: 1.1 },
  { t: 0.95, x: 0.58, y: -0.04, rotate: 1, scale: 1.03 },
  { t: 1.0, x: 0.9, y: 0.0, rotate: -2, scale: 1 },
];

function lerp(a: number, b: number, u: number) {
  return a + (b - a) * u;
}

function smoothstep(u: number) {
  const x = Math.min(1, Math.max(0, u));
  return x * x * (3 - 2 * x);
}

function copyAlignFromX(x: number): { veil: number; copySide: "left" | "right" } {
  if (x > 0.28) return { veil: 0, copySide: "left" };
  if (x < -0.28) return { veil: 1, copySide: "right" };
  const u = smoothstep((0.28 - x) / 0.56);
  return {
    veil: u < 0.5 ? 0 : 1,
    copySide: u < 0.5 ? "left" : "right",
  };
}

export function sampleBottlePose(progress: number): BottlePose {
  const t = Math.min(1, Math.max(0, progress));
  let i = 0;
  while (i < KEYS.length - 1 && KEYS[i + 1].t < t) i += 1;
  const a = KEYS[i];
  const b = KEYS[Math.min(i + 1, KEYS.length - 1)];
  const span = b.t - a.t || 1;
  const s = smoothstep((t - a.t) / span);

  const x = lerp(a.x, b.x, s);
  const y = lerp(a.y, b.y, s);
  const rotate = lerp(a.rotate, b.rotate, s);
  const scale = lerp(a.scale, b.scale, s);
  const { veil, copySide } = copyAlignFromX(x);

  return { x, y, rotate, scale, veil, copySide };
}
