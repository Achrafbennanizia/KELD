import { SECTIONS, type SectionId } from "@/lib/sections";

export type GallerySlide = {
  id: string;
  sectionId: SectionId;
  name: string;
  finish: string;
  tagline: string;
  alt: string;
  /** Distinct packshot angle — same product, different camera */
  src: string;
  objectPosition: string;
  cropScale: number;
  hex: string;
  accent: string;
  label: string;
  filter: string;
  wash: string;
  colorOpacity: number;
};

/**
 * Six finishes × six camera angles of the same KELD shell.
 * Color grade changes per slide; geometry stays product-consistent.
 */
export const GALLERY: GallerySlide[] = [
  {
    id: "raw-titanium",
    sectionId: "top",
    name: "Raw Titanium",
    finish: "Brushed Grade 1",
    tagline: "The founders shell — heat like steel, weight like intention.",
    alt: "KELD Raw Titanium — three-quarter front packshot",
    src: "/photos/keld-bottle-hero.jpg?v=cup3",
    objectPosition: "50% 46%",
    cropScale: 1.2,
    hex: "#9aa3a0",
    accent: "#d4ddd8",
    label: "#f2f5f3",
    filter: "saturate(1.08) contrast(1.06) brightness(1.04)",
    wash: "linear-gradient(145deg, rgba(200,210,205,0.28), transparent 52%, rgba(80,90,86,0.2))",
    colorOpacity: 0.22,
  },
  {
    id: "glacier",
    sectionId: "why",
    name: "Glacier",
    finish: "Cool mint anodize",
    tagline: "Trail-minded tone — answers steel sweat and plastic taste.",
    alt: "KELD Glacier — side profile packshot",
    src: "/photos/keld-bottle-side.jpg?v=cup3",
    objectPosition: "50% 48%",
    cropScale: 1.18,
    hex: "#3ecfad",
    accent: "#8ff0d4",
    label: "#e8fff8",
    filter: "saturate(1.15) contrast(1.08) brightness(1.05)",
    wash: "linear-gradient(160deg, rgba(62,207,173,0.4), transparent 50%, rgba(20,100,90,0.28))",
    colorOpacity: 0.52,
  },
  {
    id: "ember",
    sectionId: "method",
    name: "Ember",
    finish: "Warm copper dusk",
    tagline: "Craft heat — pure contact, vacuum hold, serviceable lid.",
    alt: "KELD Ember — high diagonal angle packshot",
    src: "/photos/keld-bottle-angle.jpg?v=cup3",
    objectPosition: "52% 42%",
    cropScale: 1.22,
    hex: "#e8883a",
    accent: "#ffc089",
    label: "#fff4e8",
    filter: "saturate(1.2) contrast(1.08) brightness(1.06)",
    wash: "linear-gradient(200deg, rgba(232,136,58,0.42), transparent 50%, rgba(120,50,20,0.28))",
    colorOpacity: 0.55,
  },
  {
    id: "graphite",
    sectionId: "spec",
    name: "Graphite",
    finish: "Deep ink brush",
    tagline: "Spec-sheet black — numbers you can check, not adjectives.",
    alt: "KELD Graphite — rear three-quarter packshot",
    src: "/photos/keld-bottle-rear.jpg?v=cup3",
    objectPosition: "48% 44%",
    cropScale: 1.16,
    hex: "#5b6cff",
    accent: "#9aa6ff",
    label: "#eef0ff",
    filter: "saturate(1.1) contrast(1.12) brightness(0.96)",
    wash: "linear-gradient(150deg, rgba(91,108,255,0.42), transparent 50%, rgba(30,35,80,0.35))",
    colorOpacity: 0.5,
  },
  {
    id: "lab-silver",
    sectionId: "proof",
    name: "Lab Silver",
    finish: "Precision ice satin",
    tagline: "Bench protocol finish — knurl, gasket, measured claims.",
    alt: "KELD Lab Silver — lid and neck detail packshot",
    src: "/photos/keld-bottle-detail.jpg?v=cup3",
    objectPosition: "50% 40%",
    cropScale: 1.14,
    hex: "#5ec8f0",
    accent: "#b8ecff",
    label: "#f0fbff",
    filter: "saturate(1.12) contrast(1.1) brightness(1.12)",
    wash: "linear-gradient(180deg, rgba(94,200,240,0.4), transparent 55%, rgba(40,100,130,0.25))",
    colorOpacity: 0.48,
  },
  {
    id: "founders",
    sectionId: "reserve",
    name: "Founders",
    finish: "Limited warm gold",
    tagline: "400-unit batch card — trail hardware, not a wishlist.",
    alt: "KELD Founders — low-angle packshot",
    src: "/photos/keld-bottle-low.jpg?v=cup3",
    objectPosition: "50% 38%",
    cropScale: 1.18,
    hex: "#e0b15a",
    accent: "#ffe3a0",
    label: "#fff8e8",
    filter: "saturate(1.18) contrast(1.08) brightness(1.08)",
    wash: "linear-gradient(155deg, rgba(224,177,90,0.45), transparent 52%, rgba(100,70,30,0.28))",
    colorOpacity: 0.52,
  },
];

export function galleryIndexFromProgress(progress: number): number {
  const n = GALLERY.length;
  return Math.min(n - 1, Math.max(0, progress)) * (n - 1);
}

export function gallerySlideForSection(id: SectionId): GallerySlide {
  return GALLERY.find((s) => s.sectionId === id) ?? GALLERY[0];
}

export function sectionIndex(id: SectionId): number {
  return SECTIONS.findIndex((s) => s.id === id);
}
