import { motion } from "framer-motion";
import { methodology } from "../data/site";

export function Methodology() {
  return (
    <section id="methodology" className="relative bg-[#0a0a0c] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Training Methodology
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              FIVE PILLARS OF <span className="accent-text">EXCELLENCE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55 md:text-base">
            A complete development philosophy that turns talented players into complete professionals.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {methodology.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border-t border-white/10 py-6 transition-all hover:border-white/30 md:py-8"
            >
              <div className="grid grid-cols-12 items-center gap-6 md:gap-10">
                <div className="col-span-2 md:col-span-1 font-display text-6xl text-stroke md:text-8xl">
                  {m.code}
                </div>

                <div className="col-span-10 md:col-span-3">
                  <h3 className="font-display text-3xl tracking-tight text-white md:text-5xl">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 md:text-base">{m.desc}</p>
                </div>

                <div className="col-span-12 md:col-span-7">
                  <div className="flex flex-wrap gap-2">
                    {m.points.map((pt) => (
                      <span
                        key={pt}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-cond text-[10px] uppercase tracking-[0.25em] text-white/65 transition group-hover:border-[var(--color-accent)]/40 group-hover:text-white"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-1 flex justify-end">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black">
                    →
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-0 h-0 w-[2px] bg-[var(--color-accent)] transition-all duration-700 group-hover:h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}