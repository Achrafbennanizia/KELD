"use client";

import { motion } from "motion/react";
import { SectionStage } from "@/components/SectionStage";
import { CONTENT } from "@/lib/content";

export function Reserve() {
  return (
    <section
      id="reserve"
      className="section-panel relative z-10 flex items-end px-4 pt-[46dvh] pb-[max(1.25rem,env(safe-area-inset-bottom))] md:items-center md:justify-center md:px-8 md:py-24"
    >
      <SectionStage className="pt-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-eyebrow">{CONTENT.reserveEyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] text-mist">
            {CONTENT.reserveTitle}
          </h2>
          <p className="section-lead">{CONTENT.reserveBody}</p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="mailto:hello@fieldoutdoor.studio?subject=KELD%20Founders%20Edition"
              className="btn-mist"
            >
              {CONTENT.reserveCta}
            </a>
            <p className="text-xs tracking-[0.16em] text-mist-muted">
              {CONTENT.reserveNote}
            </p>
          </div>
        </motion.div>
      </SectionStage>
    </section>
  );
}
