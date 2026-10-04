import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldMark } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 2200);
      setProgress(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const t = setTimeout(() => setShow(false), 2400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] noise"
        >
          {/* Pitch lines background */}
          <div className="absolute inset-0 pitch-lines opacity-30" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Corner metadata */}
          <div className="absolute left-6 top-6 font-cond text-[10px] tracking-[0.4em] text-white/40 md:left-10 md:top-10">
            LIGHTNING SIUU ACADEMY
          </div>
          <div className="absolute right-6 top-6 font-cond text-[10px] tracking-[0.4em] text-white/40 md:right-10 md:top-10">
            PIMPRI-CHINCHWAD, PUNE
          </div>
          <div className="absolute bottom-6 left-6 font-cond text-[10px] tracking-[0.4em] text-white/40 md:bottom-10 md:left-10">
            BOYS & GIRLS COACHING
          </div>
          <div className="absolute bottom-6 right-6 font-cond text-[10px] tracking-[0.4em] text-white/40 md:bottom-10 md:right-10">
            C LICENCE LEADERSHIP
          </div>

          {/* Center visual stage */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -inset-32 rounded-full bg-[radial-gradient(circle,rgba(214,255,59,0.16),transparent_60%)]" />

            {/* Pitch circle drawing */}
            <svg viewBox="0 0 320 320" className="absolute h-[380px] w-[380px]">
              <circle
                cx="160"
                cy="160"
                r="150"
                fill="none"
                stroke="rgba(214,255,59,0.3)"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="animate-[spin_25s_linear_infinite]"
                style={{ transformOrigin: "center" }}
              />
              <circle
                cx="160"
                cy="160"
                r="120"
                fill="none"
                stroke="#d6ff3b"
                strokeWidth="2"
                className="draw-circle"
                style={{ filter: "drop-shadow(0 0 10px rgba(214,255,59,0.5))" }}
              />
              <line
                x1="10"
                y1="160"
                x2="310"
                y2="160"
                stroke="rgba(214,255,59,0.3)"
                strokeWidth="1"
                strokeDasharray="2 4"
                className="draw-circle"
              />
            </svg>

            <ShieldMark className="relative h-28 w-28 md:h-32 md:w-32" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <div className="font-display text-3xl tracking-[0.25em] text-white md:text-4xl">
                LIGHTNING <span className="text-[var(--color-accent)]">SIUU</span>
              </div>
              <div className="mt-1 font-cond text-xs tracking-[0.4em] text-white/50">
                FOOTBALL ACADEMY • PUNE
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-8 w-60"
            >
              <div className="flex items-center justify-between font-cond text-[10px] tracking-[0.3em] text-white/40">
                <span>INITIALIZING</span>
                <span>{progress}%</span>
              </div>
              <div className="mt-2 h-[2px] w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full accent-grad"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}