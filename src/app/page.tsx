import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TripTypes from "@/components/TripTypes";
import WhyChoose from "@/components/WhyChoose";
import AppPreview from "@/components/AppPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TripTypes />
      <WhyChoose />
      <AppPreview />
      <CallToAction />
      <Footer />
    </main>
  );
}
