"use client";

import { motion } from "motion/react";
import { SectionStage } from "@/components/SectionStage";
import { CONTENT } from "@/lib/content";

export function Method() {
  return (
    <section
      id="method"
      className="section-panel relative z-10 flex items-end px-4 pt-[46dvh] pb-[max(1.25rem,env(safe-area-inset-bottom))] md:items-center md:px-8 md:py-24 md:pt-24"
    >
      <SectionStage wide>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="section-eyebrow">{CONTENT.methodEyebrow}</p>
          <h2 className="display mt-4 whitespace-pre-line text-[clamp(2rem,4.5vw,3.4rem)] text-mist">
            {CONTENT.methodTitle}
          </h2>
          <p className="section-lead">{CONTENT.methodBody}</p>
        </motion.div>

        <ol className="mt-12 space-y-0 border-t border-line">
          {CONTENT.methods.map((beat, i) => (
            <motion.li
              key={beat.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.65,
                ease: [0.23, 1, 0.32, 1],
                delay: i * 0.06,
              }}
              className="grid gap-3 border-b border-line py-6 md:grid-cols-[4.5rem_1fr] md:gap-8 md:py-7"
            >
              <p className="display text-sm tracking-[0.22em] text-glacier">
                {beat.index}
              </p>
              <div>
                <h3 className="display text-xl text-mist md:text-2xl">
                  {beat.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-mist-muted md:mt-3">
                  {beat.copy}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </SectionStage>
    </section>
  );
}
