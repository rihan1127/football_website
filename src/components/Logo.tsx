import { motion } from "framer-motion";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="logo-g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#e7ff5b" />
            <stop offset="100%" stopColor="#a8d80a" />
          </linearGradient>
        </defs>
        <path
          d="M32 3 L60 18 L60 46 L32 61 L4 46 L4 18 Z"
          fill="none"
          stroke="url(#logo-g)"
          strokeWidth="2"
        />
        <path
          d="M32 12 L50 22 L50 42 L32 52 L14 42 L14 22 Z"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Bebas Neue, sans-serif"
          fontSize="20"
          fill="url(#logo-g)"
          letterSpacing="1"
        >
          VFC
        </text>
      </svg>
    </div>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <Logo className="h-8 w-8" />
      <div className="leading-none">
        <div className={`font-display text-xl tracking-wider ${light ? "text-white" : "text-white"}`}>
          VOLTA<span className="text-[var(--color-accent)]"> FC</span>
        </div>
        <div className="font-cond text-[10px] uppercase tracking-[0.35em] text-white/40">
          Academy & Club
        </div>
      </div>
    </div>
  );
}

export function ShieldMark({ className = "h-32 w-32" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 220"
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <linearGradient id="shield-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e7ff5b" />
          <stop offset="100%" stopColor="#a8d80a" />
        </linearGradient>
      </defs>
      <path
        d="M100 5 L190 35 L190 115 Q190 175 100 215 Q10 175 10 115 L10 35 Z"
        fill="none"
        stroke="url(#shield-g)"
        strokeWidth="2.5"
      />
      <path
        d="M100 25 L172 50 L172 112 Q172 160 100 195 Q28 160 28 112 L28 50 Z"
        fill="rgba(214,255,59,0.06)"
        stroke="rgba(214,255,59,0.5)"
        strokeWidth="1"
      />
      <text x="100" y="130" textAnchor="middle" fontFamily="Bebas Neue" fontSize="80" fill="url(#shield-g)" letterSpacing="2">
        VFC
      </text>
    </motion.svg>
  );
}