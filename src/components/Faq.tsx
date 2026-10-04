import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, club } from "../data/site";
import { LightningIcon } from "./Logo";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Inject JSON-LD Schema for FAQPage
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("faq-jsonld");
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <section id="faq" className="relative bg-[#0a0a0c] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              <LightningIcon className="h-3.5 w-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight text-white md:text-7xl">
              QUESTIONS & <span className="accent-text">ANSWERS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 md:text-base">
            Everything parents and players need to know about football training at Lightning Siuu Academy in Pimpri-Chinchwad, Pune.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-16 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="metal-hi rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-xl md:text-2xl text-white hover:text-[var(--color-accent)] transition"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[var(--color-accent)] font-mono text-sm">
                      0{i + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[var(--color-accent)] text-black" : "bg-white/5 text-white"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm md:text-base text-white/75 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-white/60">
            Have additional questions about sessions, timings or trial registration?
          </p>
          <a
            href={`https://wa.me/${club.contact.whatsappNumber}?text=${club.contact.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 font-cond text-xs uppercase tracking-[0.25em] text-black font-semibold shadow-[0_0_20px_rgba(214,255,59,0.3)] hover:shadow-[0_0_35px_rgba(214,255,59,0.5)] transition"
          >
            Chat With Us on WhatsApp
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
