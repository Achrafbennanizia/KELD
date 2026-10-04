export const SECTIONS = [
  { id: "top", label: "Rise" },
  { id: "why", label: "Science" },
  { id: "method", label: "Method" },
  { id: "spec", label: "Specs" },
  { id: "proof", label: "Proof" },
  { id: "reserve", label: "Order" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
