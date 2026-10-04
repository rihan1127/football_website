import { motion } from "framer-motion";
import { coaches } from "../data/site";

function Badge({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`rounded-sm border px-2 py-0.5 font-cond text-[9px] uppercase tracking-[0.25em] ${
        accent
          ? "border-[var(--color-accent)]/60 bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
          : "border-white/15 bg-white/5 text-white/70"
      }`}
    >
      {children}
    </span>
  );
}

export function Coaches() {
  return (
    <section id="coaches" className="relative bg-[#050505] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Coaching Staff
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              MEET THE <span className="accent-text">COACHES.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/55 md:text-base">
              Our coaching team brings 5+ years of football coaching experience, including State-level and
              National-level appointments, supported by B Licence credentials.
            </p>
          </div>
          <div className="font-display text-7xl text-stroke md:text-8xl">0{coaches.length}</div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] metal-hi"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="zoom-img absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_50%,rgba(0,0,0,0.6))]" />

                {/* Coach number */}
                <div className="absolute right-4 top-4 font-display text-3xl text-stroke">
                  0{i + 1}
                </div>

                {/* Experience pill */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="font-cond text-[10px] uppercase tracking-[0.3em] text-white">
                    {c.experience}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {c.role}
                </div>
                <div className="mt-1 font-display text-2xl tracking-tight text-white">
                  {c.name}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.badges.map((b, idx) => (
                    <Badge key={b} accent={idx === 0}>
                      {b}
                    </Badge>
                  ))}
                </div>
                <div className="card-line mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}