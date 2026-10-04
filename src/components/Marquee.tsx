export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-[#050505] py-5">
      <div className="marquee font-display text-2xl tracking-[0.2em] text-white md:text-3xl">
        {Array.from({ length: 2 }).flatMap((_, i) =>
          items.map((it, idx) => (
            <span key={`${i}-${idx}`} className="mx-8 inline-flex items-center gap-8">
              {it}
              <span className="text-[var(--color-accent)]">★</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}