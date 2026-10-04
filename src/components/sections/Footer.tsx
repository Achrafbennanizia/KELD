"use client";

import { CONTENT } from "@/lib/content";
import { smoothScrollToId } from "@/lib/scroll-to";

const LINKS = [
  { id: "why", label: "Science" },
  { id: "method", label: "Method" },
  { id: "spec", label: "Specs" },
  { id: "proof", label: "Proof" },
  { id: "reserve", label: "Order" },
] as const;

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative z-20 border-t border-line bg-[#080c0a] px-4 pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:px-8 md:pt-16 md:pb-14"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        <div>
          <p className="display text-sm tracking-[0.22em] text-mist">
            {CONTENT.house} / {CONTENT.brand}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist-muted">
            {CONTENT.footerBlurb}
          </p>
          <a
            href="#reserve"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId("reserve", 2.15);
            }}
            className="btn-mist mt-6"
          >
            Reserve a unit
          </a>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-[0.22em] text-mist/45 uppercase">
            On this page
          </p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToId(link.id, 2.15);
                }}
                className="text-sm text-mist-muted transition-colors hover:text-mist"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-[0.22em] text-mist/45 uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-mist-muted">
            <li>
              <a
                href="mailto:hello@fieldoutdoor.studio?subject=KELD%20Founders%20Edition"
                className="transition-colors hover:text-mist"
              >
                hello@fieldoutdoor.studio
              </a>
            </li>
            <li>Founders batch · 400 units</li>
            <li>Ships in 6–8 weeks</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] tracking-[0.14em] text-mist/40 uppercase">
          © 2026 {CONTENT.brand} · Field Outdoor concept
        </p>
        <p className="text-[11px] tracking-[0.12em] text-mist/35">
          Photoreal packshots · Next.js · Motion · Lenis
        </p>
      </div>
    </footer>
  );
}
