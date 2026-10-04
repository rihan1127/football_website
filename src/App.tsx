import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ClubIntro } from "./components/ClubIntro";
import { Programs } from "./components/Programs";
import { BoysGirls } from "./components/BoysGirls";
import { Methodology } from "./components/Methodology";
import { Coaches } from "./components/Coaches";
import { Pathway } from "./components/Pathway";
import { WhyChoose } from "./components/WhyChoose";
import { Schedule } from "./components/Schedule";
import { Parents } from "./components/Parents";
import { Faq } from "./components/Faq";
import { Trials } from "./components/Trials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StickyMobileCta } from "./components/StickyMobileCta";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[var(--color-accent)] selection:text-black">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={[
            "LIGHTNING SIUU ACADEMY",
            "STRIKE FAST. PLAY BOLD. RISE LIKE LIGHTNING.",
            "PIMPRI-CHINCHWAD & PUNE",
            "BOYS & GIRLS FOOTBALL",
            "C LICENCE LEADERSHIP",
            "STRUCTURED PLAYER DEVELOPMENT",
          ]}
        />
        <ClubIntro />
        <Programs />
        <BoysGirls />
        <Methodology />
        <Coaches />
        <Pathway />
        <WhyChoose />
        <Schedule />
        <Parents />
        <Faq />
        <Trials />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}