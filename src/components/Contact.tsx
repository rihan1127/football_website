import { motion } from "framer-motion";

export function Contact() {
  const items = [
    { k: "Phone", v: "+1 (000) 000 — 0000" },
    { k: "Email", v: "academy@voltafc.com" },
    { k: "Training Location", v: "Volta Training Ground" },
    { k: "Office Hours", v: "Mon–Sat • 09:00 — 19:00" },
  ];

  const handleMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const resetMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505] py-24 md:py-36 noise">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=2000&q=85"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>
      <div className="absolute inset-0 pitch-lines opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Contact
          </div>
          <h2 className="mt-3 font-display text-6xl leading-[0.9] tracking-tight text-white md:text-[10rem]">
            READY TO TAKE<br />THE <span className="accent-text">NEXT STEP?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/65 md:text-lg">
            Join the academy, book a trial, or get in touch with our coaching team.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic shine-btn group inline-flex items-center gap-3 rounded-full bg-[var(--color-accent)] px-7 py-4 font-cond text-xs uppercase tracking-[0.3em] text-black transition hover:shadow-[0_0_30px_rgba(214,255,59,0.4)]"
            >
              JOIN THE ACADEMY
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic shine-btn inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-cond text-xs uppercase tracking-[0.3em] text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              BOOK A TRIAL
            </button>
            <button
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="magnetic shine-btn inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-cond text-xs uppercase tracking-[0.3em] text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              CONTACT US
            </button>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {it.k}
              </div>
              <div className="mt-2 text-white/85 md:text-lg">{it.v}</div>
            </motion.div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-10 flex items-center gap-3">
          <span className="font-cond text-[10px] uppercase tracking-[0.4em] text-white/40">Follow</span>
          {["Instagram", "X", "YouTube", "TikTok"].map((s) => (
            <a
              key={s}
              href="#"
              className="metal-hi rounded-full px-3 py-1.5 font-cond text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}