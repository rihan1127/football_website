import { club } from "../data/site";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block xl:hidden bg-black/90 backdrop-blur-lg border-t border-white/15 p-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="mx-auto flex items-center justify-between gap-3 max-w-md">
        <a
          href="#trials"
          className="flex-1 text-center rounded-full bg-[var(--color-accent)] py-3 font-cond text-xs uppercase tracking-[0.25em] text-black font-semibold shadow-[0_0_20px_rgba(214,255,59,0.3)]"
        >
          BOOK A TRIAL
        </a>
        <a
          href={`https://wa.me/${club.contact.whatsappNumber}?text=${club.contact.whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center rounded-full border border-white/20 bg-white/10 py-3 font-cond text-xs uppercase tracking-[0.25em] text-white font-semibold backdrop-blur"
        >
          WHATSAPP ↗
        </a>
      </div>
    </div>
  );
}
