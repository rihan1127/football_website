import { motion } from "framer-motion";
import { gallery } from "../data/site";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0a0a0c] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Gallery
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              INSIDE <span className="accent-text">VOLTA.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55 md:text-base">
            A look inside training sessions, fixtures and academy life.
          </p>
        </div>

        {/* Masonry layout using CSS columns */}
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/8"
            >
              <div className="relative">
                <img
                  src={g.src}
                  alt={g.title}
                  className="zoom-img h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition group-hover:opacity-95" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                  <span className="text-[var(--color-accent)]">→</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {g.date}
                  </div>
                  <div className="mt-1 font-display text-xl leading-tight text-white md:text-2xl">
                    {g.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}