import { motion } from "framer-motion";
import { parentPoints } from "../data/site";

export function Parents() {
  return (
    <section id="parents" className="relative bg-[#050505] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              For Parents
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              WHAT PARENTS <span className="accent-text">RECEIVE.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
              We believe parents are partners in development. Every family at VOLTA FC receives clear communication,
              transparent reporting and full visibility into their child's progress.
            </p>

            <div className="mt-8 metal-hi inline-flex items-center gap-3 rounded-full px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/70">
                Safeguarding-led culture
              </span>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {parentPoints.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 metal-hi p-6 hover-lift"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(214,255,59,0.15),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="font-display text-4xl text-stroke">
                    0{i + 1}
                  </div>
                  <div className="mt-4 font-display text-2xl tracking-tight text-white md:text-3xl">
                    {p.title}
                  </div>
                  <div className="mt-2 text-xs leading-relaxed text-white/55 md:text-sm">
                    {p.desc}
                  </div>
                  <div className="card-line mt-4" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}