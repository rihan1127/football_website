import { motion } from "framer-motion";
import { headCoach } from "../data/site";
import { LightningIcon } from "./Logo";

export function Coaches() {
  return (
    <section id="coach" className="relative bg-[#050505] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg-sm opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>LEADERSHIP & EXPERTISE</span>
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
              MEET THE <span className="accent-text">HEAD COACH.</span>
            </h2>
            <p className="mt-3 font-display text-xl text-white/80 md:text-2xl italic">
              "{headCoach.tagline}"
            </p>
          </div>

          <div className="font-display text-5xl text-stroke md:text-7xl">
            01
          </div>
        </div>

        {/* Coach Profile Editorial Feature */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
          {/* Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-white/15 metal-hi"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src={headCoach.image}
                alt={headCoach.altText}
                className="zoom-img absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_50%,rgba(0,0,0,0.7))]" />

              {/* Verified Coach Badge Overlay */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 border border-white/15 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span className="font-cond text-xs uppercase tracking-[0.25em] text-white">
                  HEAD COACH
                </span>
              </div>
            </div>
          </motion.div>

          {/* Coach Bio & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold">
                {headCoach.title}
              </div>
              <h3 className="mt-2 font-display text-5xl tracking-tight text-white md:text-6xl">
                {headCoach.name}
              </h3>
            </div>

            {/* Credentials Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {headCoach.credentials.map((cred, idx) => (
                <motion.span
                  key={cred}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className={`rounded-full border px-4 py-2 font-cond text-xs uppercase tracking-[0.25em] ${idx === 0
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)] font-semibold shadow-[0_0_15px_rgba(214,255,59,0.2)]"
                      : "border-white/20 bg-white/5 text-white/90"
                    }`}
                >
                  {cred}
                </motion.span>
              ))}
            </div>

            <div className="h-[1px] w-full bg-white/10" />

            <div className="space-y-4">
              <h4 className="font-cond text-xs uppercase tracking-[0.3em] text-white/50">
                Coaching Background
              </h4>
              <p className="text-base text-white/80 leading-relaxed font-normal">
                {headCoach.bio}
              </p>
            </div>

            <div className="metal-hi rounded-xl p-6 border border-white/10 space-y-2">
              <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Coaching Philosophy
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                "{headCoach.coachingPhilosophy}"
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#trials"
                className="shine-btn inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 font-cond text-xs uppercase tracking-[0.25em] text-black font-semibold shadow-[0_0_20px_rgba(214,255,59,0.3)] transition hover:shadow-[0_0_35px_rgba(214,255,59,0.5)]"
              >
                Train With Coach Julekha
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}