import { motion } from "framer-motion";
import { trainingExperiences } from "../data/site";

export function Training() {
  return (
    <section id="training" className="relative bg-[#0a0a0c] py-24 md:py-36 noise overflow-hidden">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Training Experience
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              INSIDE THE <span className="accent-text">SESSION.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55 md:text-base">
            A typical week at VOLTA FC — designed to develop the complete player.
          </p>
        </div>

        {/* Horizontal scroll cards */}
        <div className="no-scrollbar mt-14 flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory md:gap-6">
          {trainingExperiences.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative h-[460px] w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-white/8 md:h-[520px] md:w-[340px]"
            >
              <img
                src={t.img}
                alt={t.title}
                className="zoom-img absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,255,59,0.15),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="absolute right-5 top-5 font-display text-5xl text-stroke">
                0{i + 1}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Training Drill
                </div>
                <h3 className="mt-2 font-display text-3xl leading-[0.95] tracking-tight text-white md:text-4xl">
                  {t.title}
                </h3>
                <div className="card-line mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}