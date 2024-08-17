
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import Experience from "@/components/experience/Experience";
import Testimonials from "@/components/testimonial/Testimonials";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function Home() {
 
  return (
    <>
      <main className="flex min-h-screen scroll-smooth flex-col justify-center relative md:p-24 p-8 md:pt-32">
<div className="glow absolute -top-20 -left-20"></div>


        <Navbar/>

        <HeroSection />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
