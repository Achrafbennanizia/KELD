"use client";

import type { ReactNode } from "react";
import { sampleBottlePose } from "@/lib/bottle-path";
import { GALLERY, galleryIndexFromProgress } from "@/lib/gallery";
import { useScrollProgress } from "@/lib/scroll-progress";

type Props = {
  children: ReactNode;
  wide?: boolean;
  className?: string;
};

/**
 * Parks copy opposite the packshot and tints type accents
 * to the active section colorway for clear contrast.
 */
export function SectionStage({ children, wide = false, className = "" }: Props) {
  const { progress, reducedMotion } = useScrollProgress();
  const pose = sampleBottlePose(reducedMotion ? 0.12 : progress);
  const onRight = pose.copySide === "right";
  const slide =
    GALLERY[Math.round(galleryIndexFromProgress(progress))] ?? GALLERY[0];

  return (
    <div className="mx-auto flex w-full max-w-7xl">
      <div
        className={[
          wide ? "stage-rail-wide" : "stage-rail",
          onRight ? "stage-rail--right" : "stage-rail--left",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        data-copy-side={pose.copySide}
        style={
          {
            ["--section-hex" as string]: slide.hex,
            ["--section-accent" as string]: slide.accent,
            ["--section-label" as string]: slide.label,
          } as React.CSSProperties
        }
      >
        <div className="stage-rail__panel stage-rail__panel--themed">
          {children}
        </div>
      </div>
    </div>
  );
}
