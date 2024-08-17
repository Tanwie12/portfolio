
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

<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        
      </div>
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
