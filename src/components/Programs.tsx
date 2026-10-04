import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { programs } from "../data/site";

export function Programs() {
  const [active, setActive] = useState(0);
  const p = programs[active];

  return (
    <section id="programs" className="relative bg-[#0a0a0c] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Development Programs
            </div>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
              STRUCTURED FOOTBALL <span className="accent-text">PROGRAMS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 md:text-base">
            From foundation motor skills to high-performance match play, each program is age-tailored for maximum player progression.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Program Selector Tabs */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {programs.map((pr, i) => {
              const isActive = active === i;
              return (
                <button
                  key={pr.title}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[var(--color-accent)] bg-white/[0.04] shadow-[0_0_25px_rgba(214,255,59,0.15)]"
                      : "border-white/10 bg-white/[0.015] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold">
                      {pr.age}
                    </span>
                    <span className="font-cond text-[10px] tracking-[0.3em] text-white/40">
                      PHASE {pr.code}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl tracking-tight text-white md:text-3xl">
                    {pr.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-white/60 line-clamp-2">
                    {pr.objective}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3">
                    <span className="font-cond text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white transition">
                      {isActive ? "Active View" : "Explore Phase"}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition-transform ${
                        isActive
                          ? "bg-[var(--color-accent)] text-black font-bold rotate-[-45deg]"
                          : "bg-white/10 text-white/50 group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Comprehensive Detail View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.02] metal-hi lg:col-span-6 p-6 md:p-10 flex flex-col justify-between"
            >
              {/* Background gradient & image overlay */}
              <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {p.age}
                  </span>
                  <span className="font-cond text-xs uppercase tracking-[0.3em] text-white/40">
                    PHASE {p.code}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-4xl text-white md:text-6xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-base text-white/80 font-normal leading-relaxed">
                  {p.objective}
                </p>

                {/* 6 Key Attributes Grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="border-t border-white/10 pt-3">
                    <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      ⚽ Technical Development
                    </div>
                    <div className="mt-1 text-xs text-white/70">{p.technical}</div>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      🧠 Tactical Development
                    </div>
                    <div className="mt-1 text-xs text-white/70">{p.tactical}</div>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      ⚡ Physical Development
                    </div>
                    <div className="mt-1 text-xs text-white/70">{p.physical}</div>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      🛡️ Mental Development
                    </div>
                    <div className="mt-1 text-xs text-white/70">{p.mental}</div>
                  </div>

                  <div className="border-t border-white/10 pt-3 sm:col-span-2">
                    <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      🏆 Match Exposure & Progression
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      <strong className="text-white">Match Play:</strong> {p.matchExposure}<br />
                      <strong className="text-white">Pathway Goal:</strong> {p.progression}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Location
                  </div>
                  <div className="font-cond text-xs uppercase tracking-[0.2em] text-white">
                    Orchid International School, Chinchwad
                  </div>
                </div>

                <a
                  href="#trials"
                  className="shine-btn inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 font-cond text-xs uppercase tracking-[0.25em] text-black font-semibold transition hover:shadow-[0_0_25px_rgba(214,255,59,0.4)]"
                >
                  Book Trial for {p.age}
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}