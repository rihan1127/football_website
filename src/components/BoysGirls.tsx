import { motion } from "framer-motion";

export function BoysGirls() {
  return (
    <section id="boys-girls" className="relative overflow-hidden bg-[#050505] py-24 md:py-36 noise">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="text-center">
          <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">Boys & Girls</div>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-8xl">
            ONE CLUB. EVERY PLAYER.<br />
            <span className="accent-text">ONE FUTURE.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 md:text-lg">
            Equal development opportunities for boys and girls, built on the same elite pathway, the same standards
            and the same professional environment.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Boys */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1400&q=85"
              alt="Boys Academy"
              className="zoom-img absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,255,59,0.2),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="absolute right-6 top-6 font-display text-7xl text-stroke md:text-8xl">B</div>

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">01 — Boys Academy</div>
              <h3 className="mt-3 font-display text-5xl tracking-tight text-white md:text-6xl">BOYS</h3>
              <p className="mt-3 max-w-md text-sm text-white/70">
                A complete development pathway from U9 to senior football, built on professional habits and structured competition.
              </p>
              <a href="#programs" className="mt-6 inline-flex items-center gap-2 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Explore Pathway <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </motion.div>

          {/* Girls */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=85"
              alt="Girls Academy"
              className="zoom-img absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,255,59,0.2),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="absolute right-6 top-6 font-display text-7xl text-stroke md:text-8xl">G</div>

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">02 — Girls Academy</div>
              <h3 className="mt-3 font-display text-5xl tracking-tight text-white md:text-6xl">GIRLS</h3>
              <p className="mt-3 max-w-md text-sm text-white/70">
                Dedicated coaching, fixtures and a professional pathway for female players at every stage of development.
              </p>
              <a href="#programs" className="mt-6 inline-flex items-center gap-2 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Explore Pathway <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Pathway pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {["Boys Academy", "Girls Academy", "Elite Development", "Professional Pathway"].map((t) => (
            <span
              key={t}
              className="metal-hi rounded-full px-5 py-2.5 font-cond text-xs uppercase tracking-[0.3em] text-white/75"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}