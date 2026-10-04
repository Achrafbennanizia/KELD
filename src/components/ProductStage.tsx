"use client";

import { useEffect, useMemo, useState } from "react";
import { GALLERY, galleryIndexFromProgress } from "@/lib/gallery";
import { photoSrc } from "@/lib/photos";
import { sampleBottlePose } from "@/lib/bottle-path";
import { useScrollProgress } from "@/lib/scroll-progress";

/**
 * Media Gallery — one finish + unique camera angle per section.
 * Captions sit on a dark bar for contrast; atmosphere matches the slide.
 */
export function ProductStage() {
  const { progress, reducedMotion } = useScrollProgress();
  const pose = sampleBottlePose(reducedMotion ? 0.12 : progress);
  const onLeft = pose.copySide === "right";
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const io = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting && entry.intersectionRatio > 0.02),
      { root: null, threshold: [0, 0.02, 0.08, 0.2] },
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  const floatIndex = useMemo(
    () => galleryIndexFromProgress(progress),
    [progress],
  );
  const active = Math.round(floatIndex);
  const slide = GALLERY[active] ?? GALLERY[0];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      style={
        {
          ["--slide-hex" as string]: slide.hex,
          ["--slide-accent" as string]: slide.accent,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-trail" aria-hidden />

      {/* Strong per-section color field */}
      <div
        className="absolute inset-0 transition-[background] duration-500"
        style={{
          background: `
            radial-gradient(ellipse 62% 52% at ${onLeft ? "18%" : "82%"} 38%, ${slide.hex}66, transparent 58%),
            radial-gradient(ellipse 48% 42% at ${onLeft ? "75%" : "20%"} 80%, ${slide.accent}44, transparent 55%),
            radial-gradient(ellipse 35% 30% at 50% 0%, ${slide.hex}33, transparent 50%),
            linear-gradient(165deg, #0a100e 0%, #0c1210 50%, #100e0c 100%)
          `,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-screen transition-opacity duration-500"
        style={{
          background: `linear-gradient(115deg, transparent 25%, ${slide.accent}88 50%, transparent 75%)`,
        }}
        aria-hidden
      />

      {/* Gallery — blind when footer enters view */}
      <div
        className={[
          "absolute inset-x-0 top-0 flex h-[48dvh] items-end justify-center pb-2 md:inset-y-0 md:h-auto md:w-[50%] md:items-center md:pb-0",
          onLeft
            ? "md:left-0 md:justify-end md:pr-5"
            : "md:right-0 md:left-auto md:justify-start md:pl-5",
        ].join(" ")}
        style={{
          transition:
            "left 550ms var(--ease), right 550ms var(--ease), opacity 420ms var(--ease), visibility 420ms var(--ease), transform 420ms var(--ease)",
          opacity: footerVisible ? 0 : 1,
          visibility: footerVisible ? "hidden" : "visible",
          transform: footerVisible ? "translateY(18px) scale(0.96)" : "none",
          pointerEvents: "none",
        }}
        aria-hidden={footerVisible}
      >
        <div
          className="relative mb-0 h-[min(40dvh,320px)] w-[min(78vw,280px)] md:mb-8 md:h-[min(64dvh,520px)] md:w-[min(90vw,340px)]"
          style={{ perspective: "1400px" }}
        >
          {GALLERY.map((shot, i) => {
            const dist = floatIndex - i;
            const abs = Math.abs(dist);
            const isHero = i === active;

            let opacity = 0;
            let scale = 0.76;
            let y = 0;
            let x = 0;
            let z = -120;
            let blur = 0;
            let rotateY = 0;
            let rotateZ = 0;

            if (reducedMotion) {
              opacity = i === 0 ? 1 : 0;
              scale = 1.1;
              z = 0;
            } else if (isHero) {
              const settle = 1 - Math.min(1, abs * 1.7);
              opacity = 0.55 + settle * 0.45;
              scale = 1.08 + settle * 0.1;
              y = dist * -12;
              z = 60;
              rotateY = onLeft ? dist * 7 : dist * -7;
            } else if (abs < 1.6) {
              const t = Math.max(0, 1 - (abs - 0.45) / 1.15);
              opacity = Math.min(0.22, t * 0.22);
              scale = 0.68 + t * 0.05;
              x = (dist > 0 ? 1 : -1) * (onLeft ? -36 : 36) * (0.4 + (1 - t));
              y = (dist > 0 ? 1 : -1) * (48 + (1 - t) * 30);
              z = -160;
              blur = 7;
              rotateY = onLeft ? (dist > 0 ? -18 : 18) : dist > 0 ? 18 : -18;
              rotateZ = (dist > 0 ? 1 : -1) * 4;
            }

            return (
              <div
                key={shot.id}
                className="absolute inset-0 will-change-transform"
                style={{
                  opacity,
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                  filter: blur > 0.2 ? `blur(${blur}px)` : undefined,
                  zIndex: isHero ? 24 : Math.round(12 - abs * 3),
                }}
                aria-hidden={opacity < 0.08}
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-[1.35rem] border-2 shadow-[0_40px_110px_rgba(0,0,0,0.6)]"
                  style={{
                    borderColor: shot.accent,
                    boxShadow: `0 40px 110px rgba(0,0,0,0.6), 0 0 40px ${shot.hex}55`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photoSrc(shot.src)}
                    alt={shot.alt}
                    className="h-full w-full object-cover"
                    style={{
                      objectPosition: shot.objectPosition,
                      transform: `scale(${shot.cropScale})`,
                      filter: shot.filter,
                    }}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "low"}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-color"
                    style={{
                      background: shot.hex,
                      opacity: shot.colorOpacity,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                    style={{ background: shot.wash, opacity: 0.75 }}
                  />

                  {/* Caption — compact on mobile, fuller on desktop */}
                  {isHero && (
                    <div
                      className="absolute inset-x-0 bottom-0 z-10 px-3 pb-[4.5rem] pt-16 md:px-4 md:pb-28 md:pt-24"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.78) 55%, transparent 100%)",
                      }}
                    >
                      <p
                        className="text-[9px] font-bold tracking-[0.24em] uppercase md:text-[10px] md:tracking-[0.28em]"
                        style={{ color: shot.accent }}
                      >
                        {shot.finish}
                      </p>
                      <p
                        className="display mt-1 text-xl leading-none md:text-3xl"
                        style={{ color: shot.label, textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
                      >
                        {shot.name}
                      </p>
                      <p
                        className="mt-2 mb-1 hidden max-w-[18rem] text-xs leading-snug md:block md:text-sm"
                        style={{ color: "rgba(255,255,255,0.92)" }}
                      >
                        {shot.tagline}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Finish selector — pinned to bottom edge of packshot */}
          <div
            className="pointer-events-none absolute inset-x-1.5 bottom-1.5 z-40 flex items-center gap-2 rounded-xl border px-2 py-1.5 backdrop-blur-md md:inset-x-2 md:bottom-2 md:gap-2.5 md:px-2.5 md:py-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,14,12,0.82) 0%, rgba(6,8,7,0.94) 100%)",
              borderColor: `color-mix(in oklab, ${slide.accent} 50%, rgba(255,255,255,0.22))`,
              boxShadow: `
                0 8px 28px rgba(0,0,0,0.55),
                0 0 0 1px rgba(255,255,255,0.05) inset,
                0 0 22px ${slide.hex}28
              `,
            }}
            role="status"
            aria-label={`Finish ${active + 1} of ${GALLERY.length}: ${slide.name}`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/50">
                Finish {active + 1}/{GALLERY.length}
              </p>
              <p
                className="truncate text-xs font-semibold leading-tight md:text-[13px]"
                style={{ color: slide.label }}
              >
                {slide.name}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1 md:gap-1.5">
              {GALLERY.map((g, i) => {
                const isActive = i === active;
                return (
                  <span
                    key={g.id}
                    title={g.name}
                    className="relative block rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? 20 : 9,
                      height: 9,
                      background: g.hex,
                      boxShadow: isActive
                        ? `0 0 0 2px #0a0e0c, 0 0 0 3px ${g.accent}, 0 0 14px ${g.accent}`
                        : `inset 0 0 0 1px rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.45)`,
                      opacity: isActive ? 1 : 0.9,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile reading veil — clears lower half for copy */}
      <div
        className="absolute inset-x-0 bottom-0 h-[58dvh] md:hidden"
        style={{
          background: `linear-gradient(to top, #0a0e0c 0%, color-mix(in oklab, #0a0e0c 90%, ${slide.hex}) 42%, transparent 100%)`,
        }}
        aria-hidden
      />

      {/* Desktop side reading veils */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[54%] md:block"
        style={{
          opacity: onLeft ? 0 : 1,
          transition: "opacity 500ms var(--ease), background 500ms var(--ease)",
          background: `linear-gradient(to right, #0a0e0c 0%, color-mix(in oklab, #0a0e0c 82%, ${slide.hex}) 48%, color-mix(in oklab, #0a0e0c 35%, transparent) 90%, transparent 100%)`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-[54%] md:block"
        style={{
          opacity: onLeft ? 1 : 0,
          transition: "opacity 500ms var(--ease), background 500ms var(--ease)",
          background: `linear-gradient(to left, #0a0e0c 0%, color-mix(in oklab, #0a0e0c 82%, ${slide.hex}) 48%, color-mix(in oklab, #0a0e0c 35%, transparent) 90%, transparent 100%)`,
        }}
        aria-hidden
      />
    </div>
  );
}
