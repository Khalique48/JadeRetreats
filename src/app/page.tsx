import ContactFormSection from "./components/ContactForm";
import DirectionImage from "./components/DirectionImage";
import Footer from "./components/Footer";
import { HeroParallax } from "./components/Parallax";
import Slider from "./components/Slider";
import SubHero from "./components/SubHero";
import TestimonialSection from "./components/TestimonialSection";
import VisitSection from "./components/VisitSection";
import Hero from "./components/ui/hero-parallax";
import Holding from "./components/ui/holding";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-black">
        <Hero />
        <DirectionImage />
        <HeroParallax />
        <Slider />
        <SubHero />
        <TestimonialSection />
        <Footer />
        <ContactFormSection />
        <VisitSection />
      </main>
    </>
  );
}
