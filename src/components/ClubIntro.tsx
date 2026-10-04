import { motion } from "framer-motion";
import { useInView, useCounter } from "../hooks/useInView";

const stats = [
  { label: "Age Development", value: "9–18", suffix: "" },
  { label: "Years Coaching Experience", value: "5+", suffix: "" },
  { label: "Qualified Coaching", value: "B Licence", suffix: "" },
  { label: "Coaching Experience", value: "State + National", suffix: "" },
];

function StatItem({ item }: { item: { label: string; value: string; suffix: string } }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  // Treat numeric values like "9–18" or "5+" as strings; animate plain numbers when applicable.
  const numeric = /^\d+$/.test(item.value);
  const target = numeric ? parseInt(item.value, 10) : 0;
  const v = useCounter(target, inView);
  const display = numeric ? `${v}${item.suffix}` : item.value;

  return (
    <div ref={ref} className="relative overflow-hidden metal-hi p-6 md:p-8 group hover-lift">
      <div className="absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle,rgba(214,255,59,0.15),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
      <div className="font-display text-5xl md:text-7xl text-white">
        {display}
      </div>
      <div className="mt-3 h-[2px] w-12 bg-[var(--color-accent)]" />
      <div className="mt-3 font-cond text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-xs">
        {item.label}
      </div>
    </div>
  );
}

export function ClubIntro() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-[#050505] py-24 md:py-36 noise">
      <div className="absolute inset-0 grid-bg-sm opacity-40" />
      {/* Pitch corner marks */}
      <svg className="absolute left-0 top-0 h-32 w-32 opacity-20" viewBox="0 0 100 100">
        <path d="M0,0 L60,0 L60,2 L2,2 L2,60 L0,60 Z" fill="#d6ff3b" />
      </svg>
      <svg className="absolute right-0 bottom-0 h-32 w-32 rotate-180 opacity-20" viewBox="0 0 100 100">
        <path d="M0,0 L60,0 L60,2 L2,2 L2,60 L0,60 Z" fill="#d6ff3b" />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">About the Club</div>
            <div className="mt-3 mb-6 h-[2px] w-16 bg-[var(--color-accent)]" />
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              MORE THAN TRAINING.<br />
              A PATHWAY TO THE <span className="accent-text">NEXT LEVEL.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 md:pt-6"
          >
            <p className="text-lg leading-relaxed text-white/75 md:text-xl">
              VOLTA FC is an elite football academy developing boys and girls aged 9–18 into well-rounded,
              technically sharp and tactically intelligent players. We focus on <span className="text-white">long-term player development</span> —
              not short-term results — building the habits, skills and mindset required for competitive and professional football.
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
              Our coaches bring 5+ years of professional coaching experience, including State-level and National-level
              appointments, supported by B Licence qualifications and structured individual development plans.
              Every player trains inside a system that prepares them for the highest level.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <StatItem key={s.label} item={s} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}