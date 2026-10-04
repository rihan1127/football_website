import { motion } from "framer-motion";
import { methodology } from "../data/site";
import { LightningIcon } from "./Logo";

export function Methodology() {
  return (
    <section id="methodology" className="relative bg-[#0a0a0c] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>THE SIUU METHODOLOGY</span>
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
              FIVE PILLARS OF <span className="accent-text">PLAYER DEVELOPMENT.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 md:text-base">
            Every session at Lightning Siuu Academy is engineered around five fundamental pillars to systematically upgrade your game.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {methodology.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6 transition-all duration-500 hover:border-[var(--color-accent)]/50 hover:bg-white/[0.03] metal-hi"
            >
              <div className="grid grid-cols-12 items-center gap-6 md:gap-10">
                <div className="col-span-3 md:col-span-1 font-display text-5xl text-stroke md:text-7xl">
                  {m.code}
                </div>

                <div className="col-span-9 md:col-span-4">
                  <h3 className="font-display text-3xl tracking-tight text-white md:text-4xl">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-white/65 md:text-sm">{m.desc}</p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <div className="flex flex-wrap gap-2">
                    {m.points.map((pt) => (
                      <span
                        key={pt}
                        className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 font-cond text-[10px] uppercase tracking-[0.25em] text-white/80 transition group-hover:border-[var(--color-accent)]/40 group-hover:text-white"
                      >
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-1 hidden md:flex justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black font-bold">
                    →
                  </div>
                </div>
              </div>

              <div className="card-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}