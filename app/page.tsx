import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LineFloat from "@/components/LineFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Works />
        <Process />
        <CtaBanner />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LineFloat />
    </>
  );
}
