export const CONTENT = {
  brand: "KELD",
  house: "FIELD",
  eyebrow: "FIELD OUTDOOR · RAW TITANIUM",
  heroTitle: "KELD",
  heroBody:
    "One bottle that holds heat like steel and weighs like intention — Raw Titanium Grade 1 shell, double-wall vacuum, built for the approach not the shelf.",
  heroCta: "Reserve a unit",
  heroSecondary: "How it works",
  problemEyebrow: "SCIENCE · GLACIER FINISH",
  problemTitle: "Steel sweats. Plastic tastes.",
  problemTitleMuted: "Glass breaks on the granite.",
  problemBody:
    "Most trail bottles force a trade: flavor vs weight vs insulation. Glacier keeps the cool-mint shell while Grade 1 titanium handles the wetted walls — no liner aftertaste, half the mass of a steel twin.",
  methodEyebrow: "METHOD · EMBER FINISH",
  methodTitle: "Three rules.\nNo lifestyle fluff.",
  methodBody:
    "Ember marks the craft heat in the build: pure titanium contact, vacuum gap for hold time, then a lid you can service — not a sealed mystery cylinder.",
  methods: [
    {
      index: "01",
      title: "Pure contact",
      copy: "Grade 1 titanium on every wetted surface. No epoxy liner, no plastic taste creeping into coffee at hour six.",
    },
    {
      index: "02",
      title: "Vacuum hold",
      copy: "Double-wall vacuum gap locks temperature. Hot stays workable for twelve hours; cold rides a full day.",
    },
    {
      index: "03",
      title: "Serviceable lid",
      copy: "CNC aluminum cap, replaceable gasket, wide 48 mm mouth — ice in, brush through, parts you can actually buy again.",
    },
  ],
  materialEyebrow: "SPECS · GRAPHITE FINISH",
  materialTitle: "Numbers you can check, not adjectives.",
  materialBody:
    "Graphite is the deep charcoal brush over the same Grade 1 titanium shell — no plastic liner. Lid band stays CNC aluminum for machining tolerance, not decoration.",
  specs: [
    ["Capacity", "500 ml (16.9 fl oz)"],
    ["Shell", "Grade 1 titanium · double-wall vacuum"],
    ["Lid", "CNC aluminum · silicone gasket · one-hand sip"],
    ["Mouth", "Wide 48 mm — ice cubes, easy clean"],
    ["Mass", "198 g empty"],
    ["Batch", "400 founders units · assembled EU"],
  ],
  proofEyebrow: "LAB · SILVER FINISH",
  proofTitle: "Bench numbers. Field conditions.",
  proofLead:
    "Lab Silver is the precision satin we photograph for protocols — knurl, gasket, and four bench tests on founders-batch units. Ambient locked at 22°C. No campsite folklore.",
  proofMeta: {
    protocol: "KELD-TR-04",
    ambient: "22°C ±0.5",
    batch: "Founders · EU",
    instrument: "Calibrated 0.1 g / type-K probe",
  },
  proofs: [
    {
      id: "P-01",
      title: "Hot hold",
      metric: "12 h",
      unit: "to ≥60°C",
      condition: "Fill 95°C · seal · rest 12 h · open",
      detail: "Probe at mid-fill after twelve hours. Bench ambient 22°C.",
    },
    {
      id: "P-02",
      title: "Cold hold",
      metric: "24 h",
      unit: "to ≤8°C",
      condition: "Fill 3°C + ice · seal · rest 24 h",
      detail: "Ice fraction still present at open. Core ≤8°C.",
    },
    {
      id: "P-03",
      title: "Empty mass",
      metric: "198 g",
      unit: "dry",
      condition: "Lid on · gasket dry · 0.1 g scale",
      detail: "Lighter than most steel 350 ml twins at equivalent capacity.",
    },
    {
      id: "P-04",
      title: "Drop tolerance",
      metric: "1.5 m",
      unit: "filled",
      condition: "Granite slab · lid locked · ×3 drops",
      detail: "Dent-tolerant shell. Seal intact after three impacts.",
    },
  ],
  reserveEyebrow: "ORDER · FOUNDERS FINISH",
  reserveTitle: "Get trail hardware, not a wishlist.",
  reserveBody:
    "$89 · 400 Founders units in warm mist grade. Ships in 6–8 weeks with the trail sleeve and a handwritten batch card so your run number is on record.",
  reserveCta: "Request an invite",
  reserveNote: "Reply within 48 hours",
  footerBlurb:
    "Portfolio project · cinematic product reveal · Next.js, Motion, Lenis, photoreal packshot stage",
} as const;
