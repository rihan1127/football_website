import { Wordmark } from "./Logo";
import { club, localAreas } from "../data/site";

const quickLinks = [
  { label: "Academy", href: "#academy" },
  { label: "Programs", href: "#programs" },
  { label: "Boys & Girls", href: "#boys-girls" },
  { label: "Methodology", href: "#methodology" },
  { label: "Head Coach", href: "#coach" },
  { label: "Pathway", href: "#pathway" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Trial", href: "#trials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-12 noise border-t border-white/10">
      <div className="absolute inset-0 grid-bg-sm opacity-20 pointer-events-none" />

      {/* Marquee Banner */}
      <div className="relative overflow-hidden border-y border-white/10 py-5 bg-white/[0.01]">
        <div className="marquee font-display text-4xl text-stroke md:text-6xl tracking-wider">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-6">
              LIGHTNING SIUU ACADEMY
              <span className="text-[var(--color-accent)]">★</span>
              PIMPRI-CHINCHWAD
              <span className="text-[var(--color-accent)]">★</span>
              PUNE
              <span className="text-[var(--color-accent)]">★</span>
              STRIKE FAST. PLAY BOLD.
              <span className="text-[var(--color-accent)]">★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pt-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand & Address */}
          <div className="lg:col-span-4 space-y-6">
            <Wordmark />
            <p className="text-sm leading-relaxed text-white/65 max-w-sm">
              <strong className="text-white font-semibold">{club.fullName}</strong> — {club.h1Title}.
              Providing structured football coaching for boys and girls from grassroots to performance.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-white/60">
              <div className="font-cond uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Training Pitch Location
              </div>
              <div className="text-white font-medium">
                {club.location.facility}
              </div>
              <div>{club.location.address}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Quick Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-[var(--color-accent)] transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Areas We Serve (Pimpri-Chinchwad & Pune)
            </div>
            <div className="flex flex-wrap gap-1.5">
              {localAreas.map((a) => (
                <span
                  key={a.name}
                  className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-cond text-[10px] uppercase tracking-[0.2em] text-white/70"
                >
                  {a.name}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-white/40 pt-2">
              Serving young footballers and families across PCMC and Pune communities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-white/40 font-cond tracking-[0.2em]">
          <div>
            © {new Date().getFullYear()} {club.fullName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Pimpri-Chinchwad, Pune</span>
            <span>•</span>
            <span>Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}