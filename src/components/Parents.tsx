import { motion } from "framer-motion";
import { parentExpectations } from "../data/site";
import { LightningIcon } from "./Logo";

export function Parents() {
  return (
    <section id="parents" className="relative bg-[#050505] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg-sm opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>PARENT PARTNERSHIP</span>
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
              WHAT PARENTS CAN <span className="accent-text">EXPECT.</span>
            </h2>
            <p className="text-sm leading-relaxed text-white/70 md:text-base">
              At Lightning Siuu Academy, we consider parents key partners in a child's sporting journey. We maintain clear communication, structured schedules, and a safe environment.
            </p>

            <div className="pt-2">
              <div className="metal-hi inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span className="font-cond text-xs uppercase tracking-[0.25em] text-white">
                  Disciplined & Safe Learning Environment
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {parentExpectations.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 metal-hi p-6 hover-lift"
                >
                  <div className="font-display text-3xl text-stroke font-bold">
                    0{i + 1}
                  </div>
                  <h3 className="mt-3 font-display text-2xl tracking-tight text-white md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/65">
                    {p.desc}
                  </p>
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