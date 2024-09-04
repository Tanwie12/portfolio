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
import dynamic from 'next/dynamic';

const Bot = dynamic(() => import('../components/Bot'), { ssr: false });
import Dot from "@/components/Dot";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen scroll-smooth flex-col justify-center relative md:p-24 p-8 md:pt-32">
        <div className="glow absolute max-md:hidden -top-20 size-2 -left-20"></div>

        {/* Position the bot to the right bottom corner */}
        <div className="fixed  left-0 bottom-4 z-50">
          <Bot />
        </div>

        <Navbar />
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
