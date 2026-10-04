"use client";

import { motion } from "motion/react";
import { smoothScrollToId } from "@/lib/scroll-to";
import { CONTENT } from "@/lib/content";

const LINKS = [
  { id: "why", label: "Science" },
  { id: "method", label: "Method" },
  { id: "spec", label: "Specs" },
  { id: "reserve", label: "Order" },
] as const;

function go(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToId(id, 2.15);
  };
}

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-trail via-trail/70 to-transparent" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          onClick={go("top")}
          className="display min-w-0 truncate text-xs tracking-[0.16em] text-mist sm:text-sm sm:tracking-[0.18em]"
        >
          <span className="md:hidden">{CONTENT.brand}</span>
          <span className="hidden md:inline">
            {CONTENT.house} / {CONTENT.brand}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mist-muted md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={go(link.id)}
              className="transition-colors hover:text-mist"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#reserve"
          onClick={go("reserve")}
          className="shrink-0 rounded-full border border-line bg-mist/5 px-3 py-2 text-[10px] font-semibold tracking-[0.14em] text-mist backdrop-blur-md transition hover:border-glacier hover:text-glacier-bright sm:px-4 sm:text-xs"
        >
          <span className="sm:hidden">ORDER</span>
          <span className="hidden sm:inline">PRE-ORDER</span>
        </a>
      </div>
    </motion.header>
  );
}
