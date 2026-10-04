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

  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const resetMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10" : "py-5 bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <Wordmark />
          </a>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-1 xl:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative px-3 py-2 font-cond text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                {n.label}
                <span className="absolute bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-6" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#trials"
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic hidden items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 font-cond text-xs uppercase tracking-[0.25em] text-black font-semibold transition hover:shadow-[0_0_30px_rgba(214,255,59,0.4)] md:inline-flex"
            >
              Book a Trial
              <span>→</span>
            </a>

            <button
              onClick={() => setOpen(true)}
              className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 backdrop-blur transition hover:border-[var(--color-accent)]"
              aria-label="Open menu"
            >
              <span className="space-y-1.5">
                <span className="block h-[2px] w-5 bg-white" />
                <span className="block h-[2px] w-3.5 bg-[var(--color-accent)]" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl noise flex flex-col justify-between p-6 md:p-10"
          >
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 font-cond text-xs uppercase tracking-[0.2em] text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="my-auto flex flex-col items-center justify-center gap-4 text-center">
              {nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                  className="font-display text-4xl tracking-wider text-white transition hover:text-[var(--color-accent)] md:text-5xl"
                >
                  {n.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <a
                href="#trials"
                onClick={() => setOpen(false)}
                className="w-full max-w-xs rounded-full bg-[var(--color-accent)] py-4 font-cond text-xs uppercase tracking-[0.25em] text-black font-semibold text-center"
              >
                Book a Trial Session
              </a>
              <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">
                Pimpri-Chinchwad • Pune • Maharashtra
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}