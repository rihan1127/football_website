import { useInView } from "../hooks/useInView";
import { motion } from "framer-motion";

function CircleProgress({ label, value }: { label: string; value: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const r = 50;
  const c2 = 2 * Math.PI * r;
  const offset = c2 - (Math.min(100, Math.max(0, value)) / 100) * c2;

  return (
    <div ref={ref} className="group relative">
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90 md:h-36 md:w-36">
          <circle cx="60" cy="60" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
          <motion.circle
            cx="60"
            cy="60"
            r={r}
            stroke="#d6ff3b"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c2}
            initial={{ strokeDashoffset: c2 }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: c2 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ filter: "drop-shadow(0 0 8px rgba(214,255,59,0.5))" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display text-3xl text-white md:text-4xl">
            {inView ? value : 0}<span className="text-[var(--color-accent)]">%</span>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center font-cond text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs">
        {label}
      </div>
    </div>
  );
}

export function Performance() {
  const stats = [
    { label: "Technical", value: 82 },
    { label: "Tactical", value: 76 },
    { label: "Physical", value: 88 },
    { label: "Decision Making", value: 81 },
    { label: "Match Performance", value: 85 },
  ];

  return (
    <section id="performance" className="relative bg-[#050505] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Player Performance
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-6xl">
              DATA-DRIVEN<br />DEVELOPMENT.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
              Every player is tracked through our performance dashboard — combining technical, tactical, physical and
              decision-making data to inform Individual Development Plans.
            </p>
            <p className="mt-4 text-xs text-white/40">
              * Values shown are illustrative dashboard previews. Actual metrics are pulled from the academy's player
              assessment system.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { k: "Tracking", v: "GPS, RPE & load" },
                { k: "Reporting", v: "Weekly IDP updates" },
                { k: "Analysis", v: "Match & individual video" },
              ].map((r) => (
                <div key={r.k} className="flex items-center justify-between border-b border-white/10 py-2">
                  <span className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">{r.k}</span>
                  <span className="font-cond text-xs uppercase tracking-[0.2em] text-white">{r.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="metal-hi relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-10">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] pulse-ring relative" />
                  <div className="font-cond text-xs uppercase tracking-[0.3em] text-white">Live Dashboard Preview</div>
                </div>
                <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">Sample Player</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-4">
                {stats.map((s) => (
                  <CircleProgress key={s.label} label={s.label} value={s.value} />
                ))}
              </div>

              {/* Footer summary */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  { k: "Sessions", v: "42" },
                  { k: "Matches", v: "12" },
                  { k: "Goals", v: "08" },
                ].map((r) => (
                  <div key={r.k}>
                    <div className="font-display text-3xl text-white">{r.v}</div>
                    <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">{r.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}