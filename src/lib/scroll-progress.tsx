"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Value = {
  progress: number;
  reducedMotion: boolean;
  paused: boolean;
  togglePause: () => void;
};

const Ctx = createContext<Value>({
  progress: 0,
  reducedMotion: false,
  paused: false,
  togglePause: () => {},
});

export function useScrollProgress() {
  return useContext(Ctx);
}

export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [systemReduced, setSystemReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const reducedMotion = systemReduced || paused;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setSystemReduced(media.matches);
    sync();
    media.addEventListener("change", sync);

    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      media.removeEventListener("change", sync);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const value = useMemo(
    () => ({
      progress,
      reducedMotion,
      paused,
      togglePause: () => setPaused((value) => !value),
    }),
    [progress, reducedMotion, paused],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
