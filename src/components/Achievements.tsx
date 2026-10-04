import { motion } from "framer-motion";
import { achievements } from "../data/site";
import { useInView, useCounter } from "../hooks/useInView";

function AchItem({ a, idx }: { a: { label: string; value: number; suffix: string }; idx: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const v = useCounter(a.value, inView);

  return (
    <div ref={ref} className="metal-hi relative overflow-hidden p-6 md:p-10 group">
      <div className="absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle,rgba(214,255,59,0.15),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
      <div className="font-display text-6xl text-stroke md:text-8xl">
        0{idx + 1}
      </div>
      <div className="mt-4 font-display text-5xl text-white md:text-7xl">
        {v}<span className="text-[var(--color-accent)]">{a.suffix}</span>
      </div>
      <div className="mt-2 h-[2px] w-12 bg-[var(--color-accent)]" />
      <div className="mt-3 font-cond text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs">
        {a.label}
      </div>
    </div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative bg-[#050505] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Club Achievements
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              THE RESULTS OF <span className="accent-text">DEVELOPMENT.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/55 md:text-base">
              Compete with pride, develop with purpose.
            </p>
          </div>
          <div className="metal-hi inline-flex items-center gap-3 rounded-full px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            <span className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/70">
              Values are editable placeholders
            </span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {achievements.map((a, i) => (
            <AchItem key={a.label} a={a} idx={i} />
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Recent Timeline
          </div>
          <h3 className="mt-2 font-display text-3xl tracking-tight text-white md:text-5xl">
            A CONTINUOUS <span className="accent-text">STANDARD.</span>
          </h3>

          <div className="mt-10 relative border-l border-white/10 pl-8">
            {[
              { yr: "2025", t: "Multiple age groups reach State Cup knockouts" },
              { yr: "2024", t: "Players selected for National age-group trials" },
              { yr: "2023", t: "Girls Academy expands with dedicated fixtures" },
              { yr: "2022", t: "Performance lab & IDP framework introduced" },
            ].map((it, i) => (
              <motion.div
                key={it.yr}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_20px_rgba(214,255,59,0.5)]" />
                <div className="font-display text-2xl text-white md:text-3xl">{it.yr}</div>
                <div className="mt-1 text-sm text-white/55 md:text-base">{it.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}