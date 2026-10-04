import { motion } from "framer-motion";
import { matches } from "../data/site";

export function Matches() {
  return (
    <section id="matches" className="relative bg-[#050505] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Match Center
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              MATCH <span className="accent-text">DAY.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 metal-hi rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] pulse-ring relative" />
            <span className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/70">
              Fixture Data Placeholder
            </span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Upcoming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 md:col-span-7"
          >
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1600&q=85" alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,255,59,0.18),transparent_60%)]" />
            </div>

            <div className="relative p-6 md:p-10">
              <div className="flex items-center justify-between">
                <span className="font-cond text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                  Upcoming Match
                </span>
                <span className="font-display text-6xl text-stroke md:text-8xl">01</span>
              </div>

              <div className="mt-10 grid grid-cols-3 items-center gap-4">
                <div className="text-center">
                  <div className="font-display text-2xl text-white md:text-3xl">{matches.upcoming.home}</div>
                  <div className="mt-1 font-cond text-[10px] uppercase tracking-[0.3em] text-white/50">Home</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl text-[var(--color-accent)] md:text-7xl">VS</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-white md:text-3xl">{matches.upcoming.away}</div>
                  <div className="mt-1 font-cond text-[10px] uppercase tracking-[0.3em] text-white/50">Away</div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                <div>
                  <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">Competition</div>
                  <div className="mt-1 text-sm text-white">{matches.upcoming.competition}</div>
                </div>
                <div>
                  <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">Date</div>
                  <div className="mt-1 text-sm text-white">{matches.upcoming.date}</div>
                </div>
                <div>
                  <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">Kick-off</div>
                  <div className="mt-1 text-sm text-white">{matches.upcoming.time}</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">Venue</div>
                <div className="mt-1 text-sm text-white">{matches.upcoming.venue}</div>
              </div>
            </div>
          </motion.div>

          {/* Recent results */}
          <div className="md:col-span-5">
            <div className="metal-hi rounded-2xl border border-white/8 p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Recent Results
                </div>
                <div className="flex items-center gap-2 font-cond text-[10px] uppercase tracking-[0.3em] text-white/50">
                  <span className="text-green-400">W</span>
                  <span className="text-yellow-400">D</span>
                  <span className="text-red-400">L</span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {matches.results.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="grid grid-cols-12 items-center gap-2 border-b border-white/5 py-3 text-sm"
                  >
                    <div className={`col-span-2 flex items-center justify-center font-display text-xl ${r.result === "W" ? "text-green-400" : r.result === "D" ? "text-yellow-400" : "text-red-400"
                      }`}>
                      {r.result}
                    </div>
                    <div className="col-span-7 truncate text-white/85">
                      <span className="text-white">{r.home}</span>
                      <span className="mx-2 text-white/30">vs</span>
                      <span>{r.away}</span>
                    </div>
                    <div className="col-span-2 text-right font-display text-white">{r.score}</div>
                    <div className="col-span-1 text-right font-cond text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {r.date}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}