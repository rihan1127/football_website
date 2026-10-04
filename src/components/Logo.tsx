import { motion } from "framer-motion";

export function LightningIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        fill="var(--color-accent)"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="logo-lime-g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d6ff3b" />
            <stop offset="100%" stopColor="#a8d80a" />
          </linearGradient>
        </defs>
        {/* Outer Shield Hexagon */}
        <path
          d="M32 4 L58 18 L58 46 L32 60 L6 46 L6 18 Z"
          fill="rgba(5,5,5,0.9)"
          stroke="url(#logo-lime-g)"
          strokeWidth="2"
        />
        {/* Inner pitch line border */}
        <path
          d="M32 10 L52 21 L52 43 L32 54 L12 43 L12 21 Z"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        {/* Lightning Bolt */}
        <path
          d="M35 15 L22 33 H32 L29 49 L42 31 H32 L35 15 Z"
          fill="url(#logo-lime-g)"
          stroke="url(#logo-lime-g)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Logo className="h-9 w-9 shrink-0" />
      <div className="leading-none">
        <div className={`font-display text-xl tracking-wider ${light ? "text-white" : "text-white"}`}>
          LIGHTNING <span className="text-[var(--color-accent)]">SIUU</span>
        </div>
        <div className="mt-0.5 font-cond text-[9px] uppercase tracking-[0.35em] text-white/50">
          FOOTBALL ACADEMY
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
        <linearGradient id="shield-lime-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d6ff3b" />
          <stop offset="100%" stopColor="#a8d80a" />
        </linearGradient>
      </defs>
      <path
        d="M100 5 L190 35 L190 115 Q190 175 100 215 Q10 175 10 115 L10 35 Z"
        fill="rgba(10,10,12,0.95)"
        stroke="url(#shield-lime-g)"
        strokeWidth="3"
      />
      <path
        d="M100 22 L174 48 L174 112 Q174 162 100 198 Q26 162 26 112 L26 48 Z"
        fill="rgba(214,255,59,0.04)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
      {/* Lightning Icon in Shield */}
      <path
        d="M110 45 L68 115 H102 L92 175 L138 105 H104 L110 45 Z"
        fill="url(#shield-lime-g)"
        stroke="url(#shield-lime-g)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}