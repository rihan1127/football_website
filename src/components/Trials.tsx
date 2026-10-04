import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { club } from "../data/site";
import { LightningIcon } from "./Logo";

const formFields = [
  { k: "playerName", label: "Player Full Name", type: "text", placeholder: "e.g. Aarav Sharma", required: true },
  { k: "age", label: "Player Age", type: "number", placeholder: "6–18", required: true },
  { k: "gender", label: "Gender", type: "select", options: ["Male", "Female"] },
  { k: "guardianName", label: "Parent / Guardian Name", type: "text", placeholder: "Parent name", required: true },
  { k: "phone", label: "Contact Phone / WhatsApp", type: "tel", placeholder: "10-digit mobile number", required: true },
  { k: "area", label: "Area in PCMC / Pune", type: "text", placeholder: "e.g. Chinchwad, Wakad, Ravet", required: true },
  {
    k: "ageGroup",
    label: "Interested Program",
    type: "select",
    options: [
      "Foundation (Ages 6–8)",
      "Grassroots (Ages 8–10)",
      "Development (Ages 10–12)",
      "Advanced Development (Ages 12–14)",
      "Performance (Ages 14–16)",
      "Elite Pathway (Ages 16–18)",
    ],
  },
  { k: "experience", label: "Previous Football Experience (Optional)", type: "textarea", placeholder: "Any previous coaching or school team play" },
];

export function Trials() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <section id="trials" className="relative bg-[#0a0a0c] py-24 md:py-36 noise border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 pitch-lines opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Conversion Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>BOOK A FOOTBALL TRIAL</span>
            </div>

            <h2 className="font-display text-4xl leading-[0.92] tracking-tight text-white md:text-7xl">
              READY TO TAKE THE <span className="accent-text">NEXT STEP?</span>
            </h2>

            <p className="text-base text-white/80 md:text-lg leading-relaxed">
              Book a trial session and discover how Lightning Siuu Academy can help your child develop as a footballer.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#trial-form"
                className="shine-btn text-center rounded-full bg-[var(--color-accent)] px-8 py-4 font-cond text-xs uppercase tracking-[0.3em] text-black font-semibold shadow-[0_0_25px_rgba(214,255,59,0.3)] hover:shadow-[0_0_40px_rgba(214,255,59,0.5)] transition"
              >
                BOOK A TRIAL
              </a>

              <a
                href={`https://wa.me/${club.contact.whatsappNumber}?text=${club.contact.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-btn text-center rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 font-cond text-xs uppercase tracking-[0.3em] text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                WHATSAPP US ↗
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Training Ground Location
              </div>
              <div className="font-display text-xl text-white">
                {club.location.facility}
              </div>
              <p className="text-xs text-white/60">
                {club.location.address}
              </p>
            </div>
          </div>

          {/* Form */}
          <div id="trial-form" className="lg:col-span-7">
            <div className="metal-hi relative overflow-hidden rounded-2xl border border-white/15 p-6 md:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(214,255,59,0.15),transparent_70%)] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <div className="font-display text-2xl text-white">TRIAL REGISTRATION</div>
                        <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/50">Lightning Siuu Academy • Pimpri-Chinchwad</div>
                      </div>
                      <span className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                        Free Trial
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {formFields.map((f) => (
                        <div key={f.k} className={`flex flex-col gap-1.5 ${f.type === "textarea" ? "md:col-span-2" : ""}`}>
                          <label className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/70">
                            {f.label}{f.required ? <span className="text-[var(--color-accent)]"> *</span> : null}
                          </label>
                          {f.type === "select" ? (
                            <select
                              required={!!f.required}
                              className="metal rounded-lg border border-white/15 bg-black/60 px-4 py-3 font-sans text-sm text-white outline-none focus:border-[var(--color-accent)]"
                            >
                              <option value="" className="bg-[#0a0a0c]">Select option…</option>
                              {f.options?.map((o) => (
                                <option key={o} value={o} className="bg-[#0a0a0c]">{o}</option>
                              ))}
                            </select>
                          ) : f.type === "textarea" ? (
                            <textarea
                              required={!!f.required}
                              rows={3}
                              placeholder={f.placeholder}
                              className="metal rounded-lg border border-white/15 bg-black/60 px-4 py-3 font-sans text-sm text-white outline-none focus:border-[var(--color-accent)]"
                            />
                          ) : (
                            <input
                              type={f.type}
                              required={!!f.required}
                              placeholder={f.placeholder}
                              className="metal rounded-lg border border-white/15 bg-black/60 px-4 py-3 font-sans text-sm text-white outline-none focus:border-[var(--color-accent)]"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10">
                      <p className="text-[10px] text-white/50 uppercase font-cond tracking-[0.25em]">
                        Your details are private and used only for trial scheduling.
                      </p>
                      <button
                        type="submit"
                        className="shine-btn w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-3.5 font-cond text-xs uppercase tracking-[0.3em] text-black font-semibold"
                      >
                        Submit Trial Booking
                        <span>→</span>
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] text-black mb-6">
                      <Check className="h-8 w-8" strokeWidth={3} />
                    </div>
                    <h3 className="font-display text-4xl text-white">TRIAL REQUEST SUBMITTED!</h3>
                    <p className="mt-3 text-sm text-white/70 max-w-md">
                      Thank you! Lightning Siuu Academy management will contact you shortly to confirm your trial session timing.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}