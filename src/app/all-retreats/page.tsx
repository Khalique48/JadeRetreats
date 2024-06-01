import React from 'react'
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';
import ContactFormSection from '../components/ContactForm';
import VisitSection from '../components/VisitSection';
import { HeroReatreats } from '../components/HeroRetreats';
import { HeroParallax } from '../components/Parallax';

const page = () => {
  return (
    <>
      <main className="bg-black text-white">
        <HeroParallax />
        <TestimonialSection />
        <Footer />
        <ContactFormSection />
        <VisitSection />
      </main>
    </>
  );
}

export default page
