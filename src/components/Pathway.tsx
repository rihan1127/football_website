import { motion } from "framer-motion";
import { pathway } from "../data/site";

export function Pathway() {
  return (
    <section id="pathway" className="relative bg-[#0a0a0c] py-24 md:py-36 noise overflow-hidden">
      <div className="absolute inset-0 pitch-lines opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="text-center">
          <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Player Development Pathway
          </div>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            THE <span className="accent-text">VOLTA</span> PATHWAY.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/55 md:text-base">
            A clear, structured route from grassroots to the professional game.
          </p>
        </div>

        {/* Horizontal animated pathway (desktop) / vertical (mobile) */}
        <div className="relative mt-16">
          {/* Connecting animated pitch line */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-32 w-full -translate-y-1/2 lg:block"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="40"
              y1="50"
              x2="1160"
              y2="50"
              stroke="rgba(214,255,59,0.4)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            {[80, 240, 400, 560, 720, 880, 1040, 1140].map((x, i) => (
              <motion.circle
                key={x}
                cx={x + (i === 5 || i === 6 ? -40 : 60)}
                cy="50"
                r="3"
                fill="#d6ff3b"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2 }}
              />
            ))}
          </svg>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:gap-2">
            {pathway.map((p, i) => (
              <motion.div
                key={p.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="group metal-hi relative overflow-hidden rounded-2xl border border-white/8 p-6 transition hover:border-[var(--color-accent)]/40 hover-lift">
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(214,255,59,0.15),transparent_70%)] opacity-0 transition group-hover:opacity-100" />

                  <div className="font-display text-3xl text-stroke">
                    0{i + 1}
                  </div>
                  <div className="mt-4 font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Stage {i + 1}
                  </div>
                  <div className="mt-1 font-display text-2xl tracking-tight text-white md:text-3xl">
                    {p.stage.toUpperCase()}
                  </div>
                  <div className="mt-3 text-xs leading-relaxed text-white/55">
                    {p.note}
                  </div>
                  <div className="card-line mt-4" />
                </div>

                {/* Arrow between (desktop) */}
                {i < pathway.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[var(--color-accent)]/40 lg:block">
                    →
                  </div>
                )}
                {i < pathway.length - 1 && (
                  <div className="mt-2 text-center text-[var(--color-accent)]/40 lg:hidden">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* End badge */}
        <div className="mt-16 text-center">
          <div className="metal-hi inline-flex items-center gap-4 rounded-full px-6 py-3">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            <span className="font-cond text-xs uppercase tracking-[0.4em] text-white">
              End of Pathway — Professional Opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}