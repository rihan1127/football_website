import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { club, heroSlides } from "../data/site";
import { LightningIcon } from "./Logo";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Mouse parallax motion values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const xSpring = useSpring(mx, { stiffness: 50, damping: 22 });
  const ySpring = useSpring(my, { stiffness: 50, damping: 22 });

  const imgX = useTransform(xSpring, (v) => v * 12);
  const imgY = useTransform(ySpring, (v) => v * 8);
  const lightX = useTransform(xSpring, (v) => v * 25);
  const lightY = useTransform(ySpring, (v) => v * 15);
  const textX = useTransform(xSpring, (v) => v * -5);

  // Handle desktop mouse movement
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

  // Slide autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left -> next
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      } else {
        // swipe right -> prev
        setCurrent(
          (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
        );
      }
    }
    touchStartX.current = null;
  };

  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const resetMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "";
  };

  const slide = heroSlides[current];

  return (
    <section
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-[#050505] noise"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Carousel"
    >
      {/* Background slide transition with parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: imgX, y: imgY }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.altText}
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

      {/* Animated stadium light beams */}
      <motion.div style={{ x: lightX, y: lightY }} className="absolute inset-0 pointer-events-none">
        <div className="flicker absolute -left-32 top-1/4 h-[65vh] w-[45vw] rotate-12 bg-[radial-gradient(ellipse_at_center,rgba(214,255,59,0.18),transparent_60%)] blur-3xl" />
        <div className="flicker absolute right-0 top-0 h-[80vh] w-[40vw] -rotate-12 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)] blur-3xl" />
        <div className="drift absolute left-1/3 top-0 h-[50vh] w-[30vw] bg-[radial-gradient(ellipse_at_center,rgba(214,255,59,0.1),transparent_70%)] blur-3xl" />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/40"
            initial={{
              x: `${(i * 17) % 100}%`,
              y: `${(i * 23) % 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${((i * 23) % 100) - 20}%`, `${((i * 23) % 100) + 20}%`],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 5 + (i % 6),
              repeat: Infinity,
              delay: (i % 5) * 0.8,
            }}
          />
        ))}
      </div>

      {/* Animated pitch graphics overlay */}
      <svg
        className="absolute inset-0 h-full w-full opacity-15 pointer-events-none"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="960"
          cy="540"
          r="190"
          fill="none"
          stroke="rgba(214,255,59,0.6)"
          strokeWidth="1"
        />
        <line
          x1="960"
          y1="100"
          x2="960"
          y2="980"
          stroke="rgba(214,255,59,0.4)"
          strokeWidth="1"
        />
        <rect
          x="120"
          y="320"
          width="340"
          height="440"
          fill="none"
          stroke="rgba(214,255,59,0.3)"
          strokeWidth="1"
        />
        <rect
          x="1460"
          y="320"
          width="340"
          height="440"
          fill="none"
          stroke="rgba(214,255,59,0.3)"
          strokeWidth="1"
        />
      </svg>

      {/* Top Metadata Bar */}
      <div className="absolute left-0 right-0 top-24 z-10 px-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between font-cond text-[11px] uppercase tracking-[0.4em] text-white/50">
          <div className="flex items-center gap-2 text-[var(--color-accent)]">
            <LightningIcon className="h-4 w-4" />
            <span>PIMPRI-CHINCHWAD, PUNE</span>
          </div>
          <div className="hidden md:block">
            STRUCTURED FOOTBALL COACHING • BOYS & GIRLS
          </div>
          <div className="text-white/40">AGES 6 – 18</div>
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 pt-28 md:px-10 md:pb-36">
        <div className="mx-auto w-full max-w-[1440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3 font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
                <span className="h-[1px] w-10 bg-[var(--color-accent)]" />
                <span>{slide.eyebrow}</span>
              </div>

              {/* H1 Heading */}
              <motion.h1
                style={{ x: textX }}
                className="font-display text-[clamp(2.8rem,8.5vw,7.5rem)] leading-[0.88] tracking-tight text-white text-balance"
              >
                {slide.headlineLine1}
                <br />
                <span className="accent-text text-glow">
                  {slide.headlineLine2}
                </span>
              </motion.h1>

              {/* Subheading */}
              <p className="mt-5 max-w-2xl text-base text-white/80 md:text-xl font-normal leading-relaxed">
                {slide.subheading}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={slide.primaryCta.href}
                  onMouseMove={handleMagnetic}
                  onMouseLeave={resetMagnetic}
                  className="magnetic shine-btn group relative inline-flex items-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 font-cond text-xs uppercase tracking-[0.3em] text-black font-semibold transition shadow-[0_0_30px_rgba(214,255,59,0.3)] hover:shadow-[0_0_45px_rgba(214,255,59,0.6)]"
                >
                  {slide.primaryCta.text}
                  <span className="transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </a>

                {slide.secondaryCta && (
                  <a
                    href={slide.secondaryCta.href}
                    onMouseMove={handleMagnetic}
                    onMouseLeave={resetMagnetic}
                    className="magnetic shine-btn inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 font-cond text-xs uppercase tracking-[0.3em] text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {slide.secondaryCta.text}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation & Progress Bar (Bottom Right / Left) */}
      <div className="absolute bottom-6 left-6 right-6 z-20 md:bottom-10 md:left-10 md:right-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-white/10 pt-4 md:flex-row md:items-center md:justify-between">
          {/* Slide Numbers & Thumbnails */}
          <div className="flex items-center gap-6">
            <div className="flex items-baseline gap-1 font-display text-2xl text-white">
              <span className="text-[var(--color-accent)]">
                0{current + 1}
              </span>
              <span className="text-xs text-white/40">/ 0{heroSlides.length}</span>
            </div>

            {/* Slide Tabs */}
            <div className="flex items-center gap-2">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(idx)}
                  className={`group relative h-2 transition-all duration-500 rounded-full overflow-hidden ${idx === current ? "w-12 bg-white/20" : "w-4 bg-white/15 hover:bg-white/30"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {idx === current && (
                    <motion.div
                      layoutId="slideProgress"
                      className="h-full bg-[var(--color-accent)]"
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{
                        duration: isPaused ? 0.2 : 6.5,
                        ease: "linear",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Location Badge & Prev/Next Arrows */}
          <div className="flex items-center justify-between gap-6 md:justify-end">
            <div className="font-cond text-[10px] uppercase tracking-[0.25em] text-white/50 hidden lg:block">
              {club.location.facility}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setCurrent(
                    (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrent((prev) => (prev + 1) % heroSlides.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex pointer-events-none"
      >
        <div className="font-cond text-[10px] uppercase tracking-[0.4em] text-white/40 vertical-rl">
          SCROLL
        </div>
        <div className="relative h-14 w-[1px] overflow-hidden bg-white/15">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-1/2 w-full bg-[var(--color-accent)]"
          />
        </div>
      </motion.div>
    </section>
  );
}