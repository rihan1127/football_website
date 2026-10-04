import { motion } from "framer-motion";
import { schedule } from "../data/site";

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-[#050505] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Weekly Schedule
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-6xl">
              A FULL WEEK.<br />A FULL <span className="accent-text">DEVELOPMENT</span> PLAN.
            </h2>
            <p className="mt-5 text-sm text-white/55 md:text-base">
              A structured weekly programme that balances technical, tactical, physical and competitive work.
            </p>
            <div className="mt-8 metal-hi inline-flex items-center gap-3 rounded-full px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/70">
                Administrator-editable
              </span>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-2">
              {schedule.map((s, i) => (
                <motion.div
                  key={s.day}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group grid grid-cols-12 items-center gap-3 border-b border-white/8 py-5 transition hover:border-[var(--color-accent)]/40 md:gap-6"
                >
                  <div className="col-span-3 md:col-span-2 font-display text-2xl text-white md:text-3xl">
                    {s.day}
                  </div>
                  <div className="col-span-9 md:col-span-7">
                    <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] md:text-sm">
                      {s.focus}
                    </div>
                    <div className="mt-1 text-xs text-white/55 md:text-sm">{s.note}</div>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex justify-end">
                    <div className="rounded-full border border-white/10 px-3 py-1 font-cond text-[10px] uppercase tracking-[0.3em] text-white/55 transition group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
                      Session
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}