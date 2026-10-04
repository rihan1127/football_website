import { motion } from "framer-motion";
import { facilities } from "../data/site";

export function Facilities() {
  return (
    <section id="facilities" className="relative bg-[#0a0a0c] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Facilities
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              A PROFESSIONAL<br /><span className="accent-text">ENVIRONMENT.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55 md:text-base">
            Purpose-built spaces designed for elite player development.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {facilities.map((f, i) => {
            const span = i === 0 ? "md:col-span-4" : i === 4 ? "md:col-span-3" : i === 5 ? "md:col-span-3" : "md:col-span-2";
            const height = i === 0 ? "h-[420px]" : i === 4 || i === 5 ? "h-[300px]" : "h-[260px]";
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 ${span} ${height}`}
              >
                <img
                  src={f.img}
                  alt={f.title}
                  className="zoom-img absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,255,59,0.18),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="absolute right-4 top-4 font-display text-3xl text-stroke">
                  0{i + 1}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Facility
                  </div>
                  <div className="mt-1 font-display text-2xl leading-[0.95] tracking-tight text-white md:text-3xl">
                    {f.title}
                  </div>
                  <div className="card-line mt-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}