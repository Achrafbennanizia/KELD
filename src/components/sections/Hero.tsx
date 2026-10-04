"use client";

import { motion } from "motion/react";
import { SectionStage } from "@/components/SectionStage";
import { CONTENT } from "@/lib/content";
import { smoothScrollToId } from "@/lib/scroll-to";

export function Hero() {
  return (
    <section
      id="top"
      className="section-panel relative z-10 flex items-end px-4 pt-[46dvh] pb-[max(1.5rem,env(safe-area-inset-bottom))] md:items-center md:px-8 md:pt-28 md:pb-24"
    >
      <SectionStage>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="section-eyebrow mb-5"
        >
          {CONTENT.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.28 }}
          className="display text-[clamp(3.1rem,16vw,7.8rem)] text-mist"
        >
          {CONTENT.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.42 }}
          className="section-lead"
        >
          {CONTENT.heroBody}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#reserve"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId("reserve", 2.15);
            }}
            className="btn-mist"
          >
            {CONTENT.heroCta}
          </a>
          <a
            href="#why"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId("why", 2.15);
            }}
            className="btn-ghost"
          >
            {CONTENT.heroSecondary}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="mt-10 text-[10px] tracking-[0.28em] text-mist-muted uppercase md:mt-14"
        >
          Scroll to inspect
        </motion.p>
      </SectionStage>
    </section>
  );
}
