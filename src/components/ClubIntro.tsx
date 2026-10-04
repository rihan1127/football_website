import { motion } from "framer-motion";
import { club, localAreas } from "../data/site";
import { LightningIcon } from "./Logo";

export function ClubIntro() {
  return (
    <section id="academy" className="relative bg-[#050505] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg-sm opacity-30" />

      {/* Pitch corner marks */}
      <svg className="absolute left-0 top-0 h-32 w-32 opacity-20" viewBox="0 0 100 100">
        <path d="M0,0 L60,0 L60,2 L2,2 L2,60 L0,60 Z" fill="#d6ff3b" />
      </svg>
      <svg className="absolute right-0 bottom-0 h-32 w-32 rotate-180 opacity-20" viewBox="0 0 100 100">
        <path d="M0,0 L60,0 L60,2 L2,2 L2,60 L0,60 Z" fill="#d6ff3b" />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Main H1 & Value Proposition */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>PIMPRI-CHINCHWAD • PUNE</span>
            </div>

            {/* Exactly ONE H1 Tag on the homepage as required for SEO */}
            <h1 className="mt-5 font-display text-4xl leading-[0.92] tracking-tight text-white sm:text-5xl md:text-7xl">
              PREMIUM FOOTBALL ACADEMY IN{" "}
              <span className="accent-text text-glow">PIMPRI-CHINCHWAD, PUNE.</span>
            </h1>

            <div className="mt-6 h-[2px] w-20 bg-[var(--color-accent)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-lg leading-relaxed text-white/85 md:text-xl font-normal">
              {club.heroSubtitle}
            </p>

            <p className="text-base leading-relaxed text-white/60 md:text-lg">
              Headquartered at <strong className="text-white font-semibold">Orchid International School, Chinchwad</strong>,
              Lightning Siuu Academy focuses on long-term player development rather than short-term results.
              Under the leadership of Head Coach <strong className="text-white font-semibold">Julekha Salim Bijali</strong> (C Licence Coach, All India Player, National Player & 2x Maharashtra Team Coach),
              we build fundamental technique, tactical decision-making, physical agility, and competitive confidence.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
              <div className="metal-hi p-4 rounded-xl border border-white/10">
                <div className="font-display text-3xl text-[var(--color-accent)]">6–18</div>
                <div className="mt-1 font-cond text-[10px] uppercase tracking-[0.25em] text-white/50">Age Groups</div>
              </div>
              <div className="metal-hi p-4 rounded-xl border border-white/10">
                <div className="font-display text-3xl text-white">BOYS & GIRLS</div>
                <div className="mt-1 font-cond text-[10px] uppercase tracking-[0.25em] text-white/50">Equal Coaching</div>
              </div>
              <div className="metal-hi p-4 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <div className="font-display text-3xl text-[var(--color-accent)]">C LICENCE</div>
                <div className="mt-1 font-cond text-[10px] uppercase tracking-[0.25em] text-white/50">Lead Credentials</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dedicated Local SEO Section: Serving Pimpri-Chinchwad & Pune */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Local Presence & Community
              </div>
              <h2 className="mt-2 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-6xl">
                FOOTBALL ACADEMY SERVING <span className="accent-text">PIMPRI-CHINCHWAD & PUNE.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60 md:text-base">
              Conveniently located in Chinchwad, welcoming young players and families across PCMC and Pune communities.
            </p>
          </div>

          {/* Local Area Grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {localAreas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="metal-hi group relative overflow-hidden p-4 rounded-xl border border-white/8 hover:border-[var(--color-accent)]/50 transition-all duration-300"
              >
                <div className="font-display text-lg tracking-wide text-white group-hover:text-[var(--color-accent)] transition">
                  {area.name}
                </div>
                <div className="mt-1 font-cond text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {area.dist}
                </div>
                <div className="card-line" />
              </motion.div>
            ))}
          </div>

          {/* Location details card */}
          <div className="mt-10 metal-hi rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                📍
              </div>
              <div>
                <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Primary Physical Location
                </div>
                <div className="mt-1 font-display text-xl text-white">
                  {club.location.facility}
                </div>
                <p className="mt-1 text-xs text-white/60 max-w-2xl">
                  {club.location.address}
                </p>
              </div>
            </div>

            <a
              href={club.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-btn shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 font-cond text-xs uppercase tracking-[0.25em] text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Open Google Maps
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}