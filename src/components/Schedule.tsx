import { motion } from "framer-motion";
import { weeklySchedule } from "../data/site";
import { LightningIcon } from "./Logo";

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-[#050505] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg-sm opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>TRAINING STRUCTURE</span>
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-white md:text-6xl">
              WEEKLY TRAINING <span className="accent-text">SCHEDULE.</span>
            </h2>
            <p className="text-sm text-white/65 leading-relaxed">
              Structured sessions designed around technical mastery, tactical awareness, physical fitness, and match execution.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {weeklySchedule.map((s, i) => (
                <motion.div
                  key={s.day}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group metal-hi rounded-2xl border border-white/10 p-5 md:p-6 transition hover:border-[var(--color-accent)]/50 grid grid-cols-12 items-center gap-4"
                >
                  <div className="col-span-4 md:col-span-3 font-display text-2xl text-white md:text-3xl">
                    {s.day}
                  </div>
                  <div className="col-span-8 md:col-span-7 space-y-1">
                    <div className="font-cond text-xs uppercase tracking-[0.25em] text-[var(--color-accent)] font-semibold">
                      {s.focus}
                    </div>
                    <div className="text-xs text-white/60">{s.note}</div>
                  </div>
                  <div className="col-span-12 md:col-span-2 hidden md:flex justify-end">
                    <span className="rounded-full border border-white/15 px-3 py-1 font-cond text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:border-[var(--color-accent)] group-hover:text-white">
                      Structured
                    </span>
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