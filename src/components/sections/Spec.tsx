"use client";

import { motion } from "motion/react";
import { SectionStage } from "@/components/SectionStage";
import { CONTENT } from "@/lib/content";

export function Spec() {
  return (
    <section
      id="spec"
      className="section-panel relative z-10 flex items-end px-4 pt-[46dvh] pb-[max(1.25rem,env(safe-area-inset-bottom))] md:items-center md:px-8 md:py-24 md:pt-24"
    >
      <SectionStage>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-eyebrow">{CONTENT.materialEyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] text-mist">
            {CONTENT.materialTitle}
          </h2>
          <p className="section-lead">{CONTENT.materialBody}</p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          className="mt-10 border-t border-line"
        >
          {CONTENT.specs.map(([term, detail]) => (
            <div key={term} className="rule-row text-sm md:text-[0.95rem]">
              <dt className="shrink-0 tracking-[0.1em] text-mist/65">{term}</dt>
              <dd className="text-right text-mist">{detail}</dd>
            </div>
          ))}
        </motion.dl>
      </SectionStage>
    </section>
  );
}
