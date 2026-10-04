import { motion } from "framer-motion";
import { news } from "../data/site";

const cats = ["Academy News", "Matches", "Tournaments", "Trials", "Training Camps", "Player Achievements", "Announcements"];

export function News() {
  return (
    <section id="news" className="relative bg-[#0a0a0c] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              News & Events
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              LATEST <span className="accent-text">FROM THE CLUB.</span>
            </h2>
          </div>
        </div>

        {/* Category chips */}
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
          {cats.map((c) => (
            <span
              key={c}
              className="flex-shrink-0 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-cond text-[10px] uppercase tracking-[0.25em] text-white/65"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Featured + grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8 md:col-span-7 md:aspect-auto"
          >
            <img src={news[0].img} alt={news[0].title} className="zoom-img absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,255,59,0.18),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="absolute right-6 top-6 rounded-full bg-[var(--color-accent)] px-3 py-1 font-cond text-[10px] uppercase tracking-[0.3em] text-black">
              Featured
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="flex items-center gap-3 font-cond text-[10px] uppercase tracking-[0.3em]">
                <span className="text-[var(--color-accent)]">{news[0].cat}</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="text-white/50">{news[0].date}</span>
              </div>
              <h3 className="mt-3 font-display text-3xl leading-[1] tracking-tight text-white md:text-5xl">
                {news[0].title}
              </h3>
              <p className="mt-3 max-w-xl text-sm text-white/70">{news[0].excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Read story <span className="transition-transform group-hover:translate-x-2">→</span>
              </div>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 gap-4 md:col-span-5">
            {news.slice(1, 4).map((n, i) => (
              <motion.article
                key={n.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative grid grid-cols-3 gap-4 overflow-hidden rounded-2xl border border-white/8 metal-hi p-3 hover-lift"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <img src={n.img} alt="" className="zoom-img absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="col-span-2 flex flex-col justify-between py-1">
                  <div>
                    <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      {n.cat} • {n.date}
                    </div>
                    <h4 className="mt-1 font-display text-lg leading-tight text-white md:text-xl">
                      {n.title}
                    </h4>
                  </div>
                  <div className="inline-flex items-center gap-1 font-cond text-[10px] uppercase tracking-[0.3em] text-white/55 transition group-hover:text-[var(--color-accent)]">
                    Read <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {news.slice(4).map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/8"
            >
              <img src={n.img} alt="" className="zoom-img absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {n.cat} • {n.date}
                </div>
                <h4 className="mt-2 font-display text-2xl tracking-tight text-white md:text-3xl">
                  {n.title}
                </h4>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}