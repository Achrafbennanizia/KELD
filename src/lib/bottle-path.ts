/** Scroll path for the packshot stage + opposite copy rail. */

export type BottlePose = {
  /** Normalized stage X: -1 left … +1 right */
  x: number;
  /** 0 = copy left, 1 = copy right */
  veil: number;
  copySide: "left" | "right";
};

const KEYS: Array<{ t: number; x: number }> = [
  { t: 0.0, x: 1 },
  { t: 0.14, x: 0.95 },
  { t: 0.28, x: 0.55 },
  { t: 0.38, x: -0.55 },
  { t: 0.5, x: -0.95 },
  { t: 0.68, x: -1 },
  { t: 0.8, x: -0.4 },
  { t: 0.9, x: 0.55 },
  { t: 1.0, x: 0.95 },
];

function lerp(a: number, b: number, u: number) {
  return a + (b - a) * u;
}

function smoothstep(u: number) {
  const x = Math.min(1, Math.max(0, u));
  return x * x * (3 - 2 * x);
}

function copyAlignFromX(x: number): { veil: number; copySide: "left" | "right" } {
  if (x > 0.35) return { veil: 0, copySide: "left" };
  if (x < -0.35) return { veil: 1, copySide: "right" };
  const u = smoothstep((0.35 - x) / 0.7);
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
  const { veil, copySide } = copyAlignFromX(x);
  return { x, veil, copySide };
}
