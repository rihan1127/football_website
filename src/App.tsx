import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ClubIntro } from "./components/ClubIntro";
import { Marquee } from "./components/Marquee";
import { Programs } from "./components/Programs";
import { BoysGirls } from "./components/BoysGirls";
import { Methodology } from "./components/Methodology";
import { Coaches } from "./components/Coaches";
import { Pathway } from "./components/Pathway";
import { Performance } from "./components/Performance";
import { Training } from "./components/Training";
import { Schedule } from "./components/Schedule";
import { Facilities } from "./components/Facilities";
import { Achievements } from "./components/Achievements";
import { Trials } from "./components/Trials";
import { Parents } from "./components/Parents";
import { News } from "./components/News";
import { Matches } from "./components/Matches";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={[
            "VOLTA FC",
            "BOYS & GIRLS",
            "AGES 9–18",
            "B LICENCE COACHES",
            "ELITE PATHWAY",
            "PROFESSIONAL STANDARDS",
          ]}
        />
        <ClubIntro />
        <Programs />
        <BoysGirls />
        <Methodology />
        <Coaches />
        <Pathway />
        <Performance />
        <Training />
        <Schedule />
        <Facilities />
        <Achievements />
        <Parents />
        <Trials />
        <Matches />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}