import { Wordmark } from "./Logo";

const cols = [
  {
    title: "Club",
    links: ["About", "Methodology", "Coaches", "Pathway", "Facilities"],
  },
  {
    title: "Programs",
    links: ["Foundation", "Development", "Advanced", "Performance", "Elite", "Pro"],
  },
  {
    title: "Connect",
    links: ["Trials", "News", "Matches", "Gallery", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms", "Safeguarding", "Code of Conduct"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-8 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-20" />
      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-white/8 py-6">
        <div className="marquee font-display text-7xl text-stroke md:text-9xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8">
              ELITE FOOTBALL
              <span className="text-[var(--color-accent)]">★</span>
              DISCIPLINE
              <span className="text-[var(--color-accent)]">★</span>
              DEVELOPMENT
              <span className="text-[var(--color-accent)]">★</span>
              FUTURE
              <span className="text-[var(--color-accent)]">★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pt-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              VOLTA FC — an elite football academy developing boys and girls aged 9–18 into well-rounded players
              prepared for competitive and professional football.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {["IG", "X", "YT", "TT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 font-cond text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="font-cond text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 md:flex-row md:items-center">
          <div className="font-cond text-[10px] uppercase tracking-[0.4em] text-white/40">
            © 2026 VOLTA FC. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 font-cond text-[10px] uppercase tracking-[0.4em] text-white/40">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Safeguarding</a>
          </div>
        </div>
      </div>
    </footer>
  );
}