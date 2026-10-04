"use client";

import { motion } from "motion/react";
import { SectionStage } from "@/components/SectionStage";
import { CONTENT } from "@/lib/content";

const POINTS = [
  ["No liner taste", "Titanium wetted surface"],
  ["Trail weight", "198 g empty"],
  ["Quiet pack", "Brushed shell + sleeve"],
  ["Repairable lid", "Replaceable gasket & seal"],
] as const;

export function Why() {
  return (
    <section
      id="why"
      className="section-panel relative z-10 flex items-end px-4 pt-[46dvh] pb-[max(1.25rem,env(safe-area-inset-bottom))] md:items-center md:px-8 md:py-24 md:pt-24"
    >
      <SectionStage>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-eyebrow">{CONTENT.problemEyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] text-mist">
            {CONTENT.problemTitle}
            <span className="mt-2 block text-mist-muted">
              {CONTENT.problemTitleMuted}
            </span>
          </h2>
          <p className="section-lead">{CONTENT.problemBody}</p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          className="mt-10 border-t border-line"
        >
          {POINTS.map(([label, value]) => (
            <li key={label} className="rule-row text-sm">
              <span className="tracking-[0.1em] text-mist/65">{label}</span>
              <span className="text-right text-mist">{value}</span>
            </li>
          ))}
        </motion.ul>
      </SectionStage>
    </section>
  );
}
