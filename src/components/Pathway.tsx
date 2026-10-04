import { motion } from "framer-motion";
import { pathway } from "../data/site";
import { LightningIcon } from "./Logo";

export function Pathway() {
  return (
    <section id="pathway" className="relative bg-[#0a0a0c] py-24 md:py-36 noise overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 pitch-lines opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            <LightningIcon className="h-3.5 w-3.5" />
            <span>PLAYER PROGRESSION</span>
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
            THE LIGHTNING SIUU <span className="accent-text">PATHWAY.</span>
          </h2>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            A clear, structured player development pathway taking players from first discovery to elite match performance.
          </p>
        </div>

        {/* Horizontal & Vertical Animated Pathway */}
        <div className="relative mt-16">
          {/* Desktop Connecting Line */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-20 w-full -translate-y-1/2 lg:block"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="40"
              y1="50"
              x2="1160"
              y2="50"
              stroke="rgba(214,255,59,0.5)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {pathway.map((p, i) => (
              <motion.div
                key={p.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="group metal-hi relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(214,255,59,0.2),transparent_70%)] opacity-0 transition group-hover:opacity-100" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl text-stroke font-bold">
                        0{i + 1}
                      </span>
                      <span className="font-cond text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)] font-semibold">
                        STAGE {i + 1}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl tracking-tight text-white md:text-3xl">
                      {p.stage}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">
                      {p.note}
                    </p>
                  </div>

                  <div className="card-line mt-6" />
                </div>

                {/* Connecting arrow indicator for mobile */}
                {i < pathway.length - 1 && (
                  <div className="my-2 text-center text-[var(--color-accent)] text-lg lg:hidden">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pathway Destination Badge */}
        <div className="mt-14 text-center">
          <div className="metal-hi inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="font-cond text-xs uppercase tracking-[0.3em] text-white">
              Target: Competitive Match Performance & Senior Readiness
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}