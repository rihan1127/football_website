import { motion } from "framer-motion";
import { whyChooseCards } from "../data/site";
import { LightningIcon } from "./Logo";

export function WhyChoose() {
  return (
    <section id="why-us" className="relative bg-[#050505] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg-sm opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>THE ACADEMY DIFFERENCE</span>
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
              WHY PLAYERS CHOOSE <span className="accent-text">LIGHTNING SIUU.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 md:text-base">
            Professional standards, qualified leadership, and structured growth for every player in Pimpri-Chinchwad and Pune.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] metal-hi p-6 md:p-8 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-stroke font-bold">
                  0{i + 1}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold text-xs border border-[var(--color-accent)]/30">
                  ⚡
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl tracking-tight text-white md:text-3xl">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                {card.desc}
              </p>

              <div className="card-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
