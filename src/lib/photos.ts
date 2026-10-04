import { asset } from "@/lib/asset";

/** Distinct packshot angles used across the media gallery */
export const PRODUCT_TURN = [
  {
    src: "/photos/keld-bottle-hero.jpg",
    alt: "KELD titanium bottle — three-quarter front studio shot",
  },
  {
    src: "/photos/keld-bottle-side.jpg",
    alt: "KELD titanium bottle — side profile studio shot",
  },
  {
    src: "/photos/keld-bottle-angle.jpg",
    alt: "KELD titanium bottle — high diagonal angle",
  },
  {
    src: "/photos/keld-bottle-rear.jpg",
    alt: "KELD titanium bottle — rear three-quarter studio shot",
  },
  {
    src: "/photos/keld-bottle-detail.jpg",
    alt: "KELD titanium bottle — lid and neck detail",
  },
  {
    src: "/photos/keld-bottle-low.jpg",
    alt: "KELD titanium bottle — dramatic low-angle studio shot",
  },
] as const;

export const PHOTOS = {
  trail: {
    src: "/photos/trail-ridge.jpg",
    alt: "High alpine ridge approach — trail atmosphere",
    credit: "Luca Galuzzi · CC BY-SA",
  },
  lake: {
    src: "/photos/alpine-lake.jpg",
    alt: "Alpine lake at dawn — cold-hold context",
    credit: "Wikimedia Commons",
  },
  fieldCup: {
    src: "/photos/yeti-sand.jpg",
    alt: "Insulated cup in the field — outdoor carry reference",
    credit: "Chung009 · CC BY-SA",
  },
  metal: {
    src: "/photos/bottles-metal.jpg",
    alt: "Metal water bottles — material family reference",
    credit: "Amraepowell · CC0",
  },
  thermos: {
    src: "/photos/thermos-classic.jpg",
    alt: "Classic vacuum flask silhouette — insulation heritage",
    credit: "Denae Bedard · CC BY-SA",
  },
} as const;

export function photoSrc(path: string) {
  return asset(path);
}
