import { motion } from "framer-motion";

export function BoysGirls() {
  return (
    <section id="boys-girls" className="relative overflow-hidden bg-[#050505] py-24 md:py-36 noise border-b border-white/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Boys & Girls Football Coaching
          </div>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
            FOOTBALL DEVELOPMENT FOR <span className="accent-text">BOYS & GIRLS.</span>
          </h2>
          <p className="mt-4 font-display text-2xl text-white/90 md:text-3xl">
            "Every player deserves the opportunity to learn, compete and grow."
          </p>
          <p className="mt-4 text-sm text-white/60 md:text-base leading-relaxed">
            At Lightning Siuu Academy, we provide structured football coaching for both male and female young athletes in Pimpri-Chinchwad and Pune. Equal standards, dedicated attention, and a supportive high-performance environment.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Boys Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative aspect-[4/5] min-h-[480px] overflow-hidden rounded-2xl border border-white/15 metal-hi"
          >
            <img
              src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1400&q=85"
              alt="Young male football player training at Lightning Siuu Academy"
              className="zoom-img absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute right-6 top-6 font-display text-6xl text-stroke md:text-8xl opacity-80">
              BOYS
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                01 — Boys Academy
              </div>
              <h3 className="mt-2 font-display text-4xl tracking-tight text-white md:text-5xl">
                BOYS FOOTBALL
              </h3>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                Structured technical drills, tactical intelligence, position-specific training, and competitive match exposure.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Confidence", "Technical Mastery", "Team Discipline"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-black/60 px-3 py-1 font-cond text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Girls Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative aspect-[4/5] min-h-[480px] overflow-hidden rounded-2xl border border-white/15 metal-hi"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=85"
              alt="Young female football player training at Lightning Siuu Academy"
              className="zoom-img absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute right-6 top-6 font-display text-6xl text-stroke md:text-8xl opacity-80">
              GIRLS
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                02 — Girls Academy
              </div>
              <h3 className="mt-2 font-display text-4xl tracking-tight text-white md:text-5xl">
                GIRLS FOOTBALL
              </h3>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                Led by former National Player & Maharashtra Team Coach Julekha Salim Bijali, empowering girls through football excellence.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Female Leadership", "Competitive Exposure", "Long-Term Progression"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-black/60 px-3 py-1 font-cond text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6">
          {[
            "Confidence",
            "Technical Mastery",
            "Teamwork",
            "Discipline",
            "Competitive Exposure",
            "Long-Term Growth",
          ].map((item) => (
            <div
              key={item}
              className="metal-hi rounded-xl p-4 text-center border border-white/10"
            >
              <div className="font-cond text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                ✓ {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}