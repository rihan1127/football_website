import { useState } from "react";
import { motion } from "framer-motion";
import { programs } from "../data/site";

export function Programs() {
  const [active, setActive] = useState(0);
  const p = programs[active];

  return (
    <section id="programs" className="relative bg-[#0a0a0c] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Development Programs
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              FROM <span className="text-stroke">FIRST TOUCH</span><br />
              TO PROFESSIONAL <span className="accent-text">PIPELINE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55 md:text-base">
            Six structured pathways designed around long-term player development. Select an age group to explore the full programme.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Program cards list */}
          <div className="md:col-span-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {programs.map((pr, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={pr.title}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 ${
                    isActive
                      ? "border-[var(--color-accent)] bg-white/[0.03]"
                      : "border-white/8 bg-white/[0.015] hover:border-white/20"
                  }`}
                  style={{
                    borderColor: isActive ? "rgba(214,255,59,0.5)" : undefined,
                  }}
                >
                  {/* Background image on hover */}
                  <div
                    className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-30 ${
                      isActive ? "opacity-40" : ""
                    }`}
                  >
                    <img src={pr.image} alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60" />
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="font-cond text-[10px] uppercase tracking-[0.4em] text-white/40">
                      {pr.code}
                    </div>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ${
                        isActive ? "bg-[var(--color-accent)] text-black rotate-[-45deg]" : "bg-white/5 text-white/50"
                      }`}
                    >
                      →
                    </div>
                  </div>

                  <div className="mt-6 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {pr.age}
                  </div>
                  <div className="mt-2 font-display text-3xl tracking-tight text-white md:text-4xl">
                    {pr.title}
                  </div>
                  <div className="mt-4 text-xs leading-relaxed text-white/55 md:text-sm">
                    {pr.objective}
                  </div>

                  <div className={`mt-6 h-[1px] w-full transition-all duration-700 ${isActive ? "bg-[var(--color-accent)]" : "bg-white/10"}`} />
                  <div className={`mt-3 font-cond text-[10px] uppercase tracking-[0.3em] transition-colors ${
                    isActive ? "text-white" : "text-white/40"
                  }`}>
                    {isActive ? "View programme" : "Click to explore"}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 md:col-span-5"
          >
            <div className="absolute inset-0">
              <img src={p.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,255,59,0.18),transparent_50%)]" />
            </div>

            <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
              <div>
                <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
                  Phase {p.code} • {p.age}
                </div>
                <h3 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-6xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
                  {p.objective}
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  { k: "Technical", v: p.technical },
                  { k: "Tactical", v: p.tactical },
                  { k: "Physical", v: p.physical },
                ].map((row) => (
                  <div key={row.k} className="border-t border-white/10 pt-3">
                    <div className="font-cond text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                      {row.k} Development
                    </div>
                    <div className="mt-1 text-sm text-white/75">{row.v}</div>
                  </div>
                ))}
              </div>

              <a
                href="#trials"
                className="mt-8 shine-btn group inline-flex w-fit items-center gap-3 rounded-full bg-[var(--color-accent)] px-6 py-3 font-cond text-xs uppercase tracking-[0.25em] text-black transition hover:shadow-[0_0_30px_rgba(214,255,59,0.4)]"
              >
                Apply for this Phase
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}