import { useEffect } from "react";
import { motion } from "framer-motion";
import { club } from "../data/site";
import { LightningIcon } from "./Logo";

export function Contact() {
  // Inject JSON-LD Schema for SportsClub / LocalBusiness
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "SportsClub",
      "name": club.fullName,
      "description": club.heroSubtitle,
      "url": window.location.origin,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Orchid International School, Chinchwad, Next to Luxury Living, Near Yashopuram Housing Society",
        "addressLocality": "Pimpri-Chinchwad",
        "addressRegion": "Maharashtra",
        "postalCode": "411019",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.6298",
        "longitude": "73.7997",
      },
      "hasMap": club.location.googleMapsUrl,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "localbusiness-jsonld";
    script.innerHTML = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("localbusiness-jsonld");
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505] py-24 md:py-36 noise border-b border-white/10">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=2000&q=85"
          alt="Lightning Siuu Football Academy ground background"
          className="h-full w-full object-cover opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>
      <div className="absolute inset-0 pitch-lines opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1 font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            <LightningIcon className="h-3.5 w-3.5" />
            <span>CONNECT WITH US</span>
          </div>

          <h2 className="mt-4 font-display text-4xl leading-[0.92] tracking-tight text-white md:text-7xl">
            GET IN TOUCH WITH <span className="accent-text">LIGHTNING SIUU.</span>
          </h2>

          <p className="mt-4 text-base text-white/70 md:text-lg">
            Have questions regarding player enrollment, trial dates, or training schedules? Reach out directly to academy management.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#trials"
              className="shine-btn inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 font-cond text-xs uppercase tracking-[0.3em] text-black font-semibold shadow-[0_0_25px_rgba(214,255,59,0.3)] hover:shadow-[0_0_40px_rgba(214,255,59,0.5)] transition"
            >
              BOOK A TRIAL
              <span>→</span>
            </a>

            <a
              href={`https://wa.me/${club.contact.whatsappNumber}?text=${club.contact.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 font-cond text-xs uppercase tracking-[0.3em] text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              WHATSAPP ENQUIRY ↗
            </a>

            <a
              href={club.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 font-cond text-xs uppercase tracking-[0.3em] text-white backdrop-blur transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              GOOGLE MAPS LOCATION ↗
            </a>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Facility Location */}
          <div className="metal-hi rounded-2xl border border-white/10 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30 text-lg">
              📍
            </div>
            <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Training Facility
            </div>
            <div className="font-display text-xl text-white">
              {club.location.facility}
            </div>
            <p className="text-xs text-white/65 leading-relaxed">
              {club.location.address}
            </p>
          </div>

          {/* Card 2: Contact Channels */}
          <div className="metal-hi rounded-2xl border border-white/10 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30 text-lg">
              📞
            </div>
            <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Enquiry Channels
            </div>
            <div className="text-sm text-white/90 font-mono">
              Phone: {club.contact.phonePlaceholder}
            </div>
            <div className="text-sm text-white/90 font-mono">
              Email: {club.contact.emailPlaceholder}
            </div>
            <p className="text-xs text-white/50">
              *Editable contact placeholders — updated by academy management.
            </p>
          </div>

          {/* Card 3: Served Communities */}
          <div className="metal-hi rounded-2xl border border-white/10 p-6 space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30 text-lg">
              🏆
            </div>
            <div className="font-cond text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Primary Service Area
            </div>
            <div className="font-display text-xl text-white">
              Pimpri-Chinchwad & Pune
            </div>
            <p className="text-xs text-white/65 leading-relaxed">
              Chinchwad, Pimpri, Wakad, Ravet, Nigdi, Akurdi, Tathawade, Punawale, Pimple Saudagar, Pimple Nilakh, Thergaon, Rahatani, Hinjewadi & Bhosari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}