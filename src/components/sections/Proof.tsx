"use client";

import { motion } from "motion/react";
import { SectionStage } from "@/components/SectionStage";
import { CONTENT } from "@/lib/content";

export function Proof() {
  return (
    <section
      id="proof"
      className="section-panel relative z-10 flex items-end px-4 pt-[42dvh] pb-[max(1rem,env(safe-area-inset-bottom))] md:items-center md:px-8 md:py-14 md:pt-14"
    >
      <SectionStage wide>
        <div className="max-h-[min(52dvh,720px)] overflow-y-auto overscroll-contain pr-1 md:max-h-[min(82dvh,720px)]">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="section-eyebrow">{CONTENT.proofEyebrow}</p>
            <h2 className="display mt-2 text-[clamp(1.6rem,3.5vw,2.4rem)] text-mist">
              {CONTENT.proofTitle}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-mist-muted">
              {CONTENT.proofLead}
            </p>
          </motion.header>

          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: 0.04 }}
            className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 border-y border-line py-3 text-[10px] tracking-[0.08em] text-mist-muted md:grid-cols-4 md:text-[11px]"
          >
            <div>
              <dt className="text-mist/45">Protocol</dt>
              <dd className="mt-0.5 font-medium text-mist">
                {CONTENT.proofMeta.protocol}
              </dd>
            </div>
            <div>
              <dt className="text-mist/45">Ambient</dt>
              <dd className="mt-0.5 font-medium text-mist">
                {CONTENT.proofMeta.ambient}
              </dd>
            </div>
            <div>
              <dt className="text-mist/45">Batch</dt>
              <dd className="mt-0.5 font-medium text-mist">
                {CONTENT.proofMeta.batch}
              </dd>
            </div>
            <div>
              <dt className="text-mist/45">Instruments</dt>
              <dd className="mt-0.5 font-medium text-mist">
                {CONTENT.proofMeta.instrument}
              </dd>
            </div>
          </motion.dl>

          <ol className="mt-1">
            {CONTENT.proofs.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                  delay: i * 0.04,
                }}
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3 border-b border-line py-3 last:border-b-0 md:gap-x-5 md:py-3.5"
              >
                <span className="font-mono text-[10px] tracking-[0.12em] text-glacier/80">
                  {item.id}
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-mist">{item.title}</p>
                  <p className="mt-0.5 truncate text-[11px] text-mist-muted">
                    {item.condition}
                  </p>
                </div>
                <div className="text-right">
                  <p className="display text-[clamp(1.35rem,2.8vw,1.85rem)] leading-none text-glacier">
                    {item.metric}
                  </p>
                  <p className="mt-0.5 text-[9px] tracking-[0.12em] text-mist-muted uppercase">
                    {item.unit}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          <p className="mt-4 text-[9px] tracking-[0.12em] text-mist/40 uppercase">
            Full test logs with founders invoice · not marketing averages
          </p>
        </div>
      </SectionStage>
    </section>
  );
}
