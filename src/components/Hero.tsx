import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { club } from "../data/site";

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const xSpring = useSpring(mx, { stiffness: 60, damping: 20 });
  const ySpring = useSpring(my, { stiffness: 60, damping: 20 });

  const imgX = useTransform(xSpring, (v) => v * 14);
  const imgY = useTransform(ySpring, (v) => v * 8);
  const lightX = useTransform(xSpring, (v) => v * 30);
  const lightY = useTransform(ySpring, (v) => v * 18);
  const textX = useTransform(xSpring, (v) => v * -6);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX / w - 0.5) * 2);
      my.set((e.clientY / h - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const handleMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const resetMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section ref={wrapRef} className="relative h-[100svh] min-h-[760px] w-full overflow-hidden bg-[#050505] noise">
      {/* Background image with parallax */}
      <motion.div
        style={{ x: imgX, y: imgY, scale: 1.05 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=2400&q=85"
          alt="Volta FC training"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Dark cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />

      {/* Animated stadium light beams */}
      <motion.div
        style={{ x: lightX, y: lightY }}
        className="absolute inset-0"
      >
        <div className="flicker absolute -left-32 top-1/4 h-[60vh] w-[40vw] rotate-12 bg-[radial-gradient(ellipse_at_center,rgba(214,255,59,0.18),transparent_60%)] blur-3xl" />
        <div className="flicker absolute right-0 top-0 h-[80vh] w-[40vw] -rotate-12 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)] blur-3xl" />
        <div className="drift absolute left-1/3 top-0 h-[50vh] w-[30vw] bg-[radial-gradient(ellipse_at_center,rgba(214,255,59,0.1),transparent_70%)] blur-3xl" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/40"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Pitch center line + outer circle (subtle) */}
      <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <circle cx="960" cy="540" r="180" fill="none" stroke="rgba(214,255,59,0.5)" strokeWidth="1" />
        <line x1="960" y1="180" x2="960" y2="900" stroke="rgba(214,255,59,0.3)" strokeWidth="1" />
        <rect x="160" y="340" width="320" height="400" fill="none" stroke="rgba(214,255,59,0.3)" strokeWidth="1" />
        <rect x="1440" y="340" width="320" height="400" fill="none" stroke="rgba(214,255,59,0.3)" strokeWidth="1" />
      </svg>

      {/* Top bar */}
      <div className="absolute left-0 right-0 top-24 z-10 px-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between font-cond text-[11px] uppercase tracking-[0.4em] text-white/40">
          <div>Season 2026</div>
          <div className="hidden md:block">Academy & Professional Pathway</div>
          <div>Boys & Girls • Ages 9 – 18</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-32 pt-32 md:px-10 md:pb-40">
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 flex items-center gap-3 font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]"
          >
            <span className="h-[1px] w-12 bg-[var(--color-accent)]" />
            <span>{club.tagline}</span>
          </motion.div>

          <motion.h1
            style={{ x: textX }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85] tracking-tight text-white text-balance"
          >
            BUILD YOUR <span className="text-stroke">GAME.</span>
            <br />
            BUILD YOUR <span className="accent-text text-glow">FUTURE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base text-white/70 md:text-lg"
          >
            Professional football development for the next generation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-2 font-cond text-xs uppercase tracking-[0.3em] text-white/40 md:text-sm"
          >
            Boys & Girls &nbsp; | &nbsp; Ages 9–18 &nbsp; | &nbsp; Elite Development &nbsp; | &nbsp; Professional Pathway
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic shine-btn group relative inline-flex items-center gap-3 rounded-full bg-[var(--color-accent)] px-7 py-4 font-cond text-xs uppercase tracking-[0.3em] text-black"
            >
              JOIN THE ACADEMY
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic shine-btn inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 font-cond text-xs uppercase tracking-[0.3em] text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              EXPLORE PROGRAMS
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-6 py-5 md:grid-cols-4 md:px-10">
          {[
            { k: "Established", v: "2014" },
            { k: "Players", v: "240+" },
            { k: "Coaches", v: "B Licence" },
            { k: "Pathway", v: "To Pro" },
          ].map((it, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="font-display text-2xl text-[var(--color-accent)]">0{i + 1}</div>
              <div className="leading-tight">
                <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">{it.k}</div>
                <div className="font-cond text-sm uppercase tracking-[0.2em] text-white">{it.v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
      >
        <div className="font-cond text-[10px] uppercase tracking-[0.4em] text-white/40 vertical-rl">Scroll</div>
        <div className="relative h-16 w-[1px] overflow-hidden bg-white/10">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-1/2 w-full bg-[var(--color-accent)]"
          />
        </div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-[var(--color-accent)]"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}