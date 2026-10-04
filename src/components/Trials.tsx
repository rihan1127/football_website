import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const fields = [
  { k: "playerName", label: "Player Name", type: "text", placeholder: "Full name", required: true },
  { k: "age", label: "Age", type: "number", placeholder: "9–18", required: true },
  { k: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Prefer not to say"] },
  { k: "dob", label: "Date of Birth", type: "date", required: true },
  { k: "guardian", label: "Parent / Guardian Name", type: "text", placeholder: "Full name" },
  { k: "phone", label: "Phone", type: "tel", placeholder: "+1 …", required: true },
  { k: "email", label: "Email", type: "email", placeholder: "name@email.com", required: true },
  {
    k: "ageGroup",
    label: "Preferred Age Group",
    type: "select",
    options: ["U9 – U10", "U11 – U12", "U13 – U14", "U15 – U16", "U17 – U18", "Professional"],
  },
  {
    k: "position",
    label: "Playing Position",
    type: "select",
    options: ["GK", "CB", "FB", "DM", "CM", "AM", "Winger", "Striker"],
  },
  { k: "experience", label: "Football Experience", type: "textarea", placeholder: "Clubs, seasons, highlights" },
  { k: "currentClub", label: "Current Club / Academy", type: "text", placeholder: "If applicable" },
  { k: "city", label: "City", type: "text", placeholder: "Your city", required: true },
];

export function Trials() {
  const [submitted, setSubmitted] = useState(false);

  const handle = (_k: string, _v: string) => undefined;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="trials" className="relative bg-[#0a0a0c] py-24 md:py-36 noise overflow-hidden">
      <div className="absolute inset-0 pitch-lines opacity-30" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="font-cond text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Trials & Admissions
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              YOUR JOURNEY<br />STARTS <span className="accent-text">HERE.</span>
            </h2>
            <p className="mt-6 text-sm text-white/60 md:text-base">
              Apply for a trial session at VOLTA FC. Complete the form and our coaching staff will be in touch within 48 hours.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                { k: "Open Trials", v: "Rolling intake" },
                { k: "Response", v: "Within 48 hours" },
                { k: "Sessions", v: "Year-round" },
                { k: "Locations", v: "Multiple training grounds" },
              ].map((r) => (
                <li key={r.k} className="flex items-center justify-between border-b border-white/10 py-3">
                  <span className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">{r.k}</span>
                  <span className="font-cond text-xs uppercase tracking-[0.2em] text-white">{r.v}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden md:block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=85" alt="" className="h-72 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Next Open Trial
                  </div>
                  <div className="mt-1 font-display text-2xl text-white">JAN 25, 2026 • 10:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="metal-hi relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(214,255,59,0.15),transparent_70%)]" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative grid grid-cols-1 gap-5 md:grid-cols-2"
                  >
                    <div className="md:col-span-2 flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <div className="font-display text-2xl text-white">TRIAL APPLICATION</div>
                        <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">All fields are confidential</div>
                      </div>
                      <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                        Step 01 / 01
                      </div>
                    </div>

                    {fields.map((f) => (
                      <div key={f.k} className={`flex flex-col gap-2 ${f.type === "textarea" ? "md:col-span-2" : ""}`}>
                        <label className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/55">
                          {f.label}{f.required ? <span className="text-[var(--color-accent)]"> *</span> : null}
                        </label>
                        {f.type === "select" ? (
                          <select
                            required={!!f.required}
                            onChange={(e) => handle(f.k, e.target.value)}
                            className="metal rounded-md border border-white/10 bg-transparent px-4 py-3 font-sans text-sm text-white outline-none focus:border-[var(--color-accent)]"
                          >
                            <option value="" className="bg-[#0a0a0c]">Select…</option>
                            {f.options?.map((o) => (
                              <option key={o} value={o} className="bg-[#0a0a0c]">{o}</option>
                            ))}
                          </select>
                        ) : f.type === "textarea" ? (
                          <textarea
                            required={!!f.required}
                            rows={3}
                            placeholder={f.placeholder}
                            onChange={(e) => handle(f.k, e.target.value)}
                            className="metal rounded-md border border-white/10 bg-transparent px-4 py-3 font-sans text-sm text-white outline-none focus:border-[var(--color-accent)]"
                          />
                        ) : (
                          <input
                            type={f.type}
                            required={!!f.required}
                            placeholder={f.placeholder}
                            onChange={(e) => handle(f.k, e.target.value)}
                            className="metal rounded-md border border-white/10 bg-transparent px-4 py-3 font-sans text-sm text-white outline-none focus:border-[var(--color-accent)]"
                          />
                        )}
                      </div>
                    ))}

                    <div className="md:col-span-2 mt-2 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
                      <div className="font-cond text-[10px] uppercase tracking-[0.3em] text-white/40">
                        By submitting, you agree to be contacted by the academy.
                      </div>
                      <button
                        type="submit"
                        className="shine-btn group inline-flex items-center gap-3 rounded-full bg-[var(--color-accent)] px-7 py-4 font-cond text-xs uppercase tracking-[0.3em] text-black transition hover:shadow-[0_0_30px_rgba(214,255,59,0.4)]"
                      >
                        APPLY FOR TRIAL
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent)] text-black"
                    >
                      <Check className="h-10 w-10" strokeWidth={3} />
                    </motion.div>
                    <h3 className="mt-8 font-display text-4xl tracking-tight text-white md:text-5xl">
                      APPLICATION RECEIVED.
                    </h3>
                    <p className="mt-4 max-w-md text-sm text-white/60 md:text-base">
                      Thank you for applying to VOLTA FC. Our coaching staff will review your details and contact you within 48 hours.
                    </p>
                    <div className="mt-8 font-cond text-[10px] uppercase tracking-[0.4em] text-[var(--color-accent)]">
                      Next Step — Trial Session
                    </div>
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