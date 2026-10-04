import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark } from "./Logo";
import { nav } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const resetMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 transition-all duration-500 ${
            scrolled ? "max-w-[1280px]" : ""
          }`}
        >
          <div className={`flex items-center gap-8 transition-all ${scrolled ? "metal-hi rounded-full px-5 py-2" : ""}`}>
            <Wordmark />
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative px-4 py-2 font-cond text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
              >
                {n.label}
                <span className="absolute bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-6" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              ref={btnRef}
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic hidden items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 font-cond text-xs uppercase tracking-[0.25em] text-black transition hover:shadow-[0_0_30px_rgba(214,255,59,0.4)] md:inline-flex"
            >
              Book a Trial
              <span>→</span>
            </button>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur"
              aria-label="Open menu"
            >
              <span className="space-y-1.5">
                <span className="block h-[1.5px] w-5 bg-white" />
                <span className="block h-[1.5px] w-3 bg-white" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between p-6">
              <Wordmark />
              <button onClick={() => setOpen(false)} className="font-cond text-sm uppercase tracking-[0.2em] text-white/60">
                Close ✕
              </button>
            </div>
            <div className="flex h-[80vh] flex-col items-center justify-center gap-6">
              {nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-5xl tracking-wider text-white hover:text-[var(--color-accent)]"
                >
                  {n.label}
                </motion.a>
              ))}
              <a
                href="#trials"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-[var(--color-accent)] px-6 py-3 font-cond text-xs uppercase tracking-[0.25em] text-black"
              >
                Book a Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}