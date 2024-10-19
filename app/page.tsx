import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import About from "@/components/About";

import Portfolio from "@/components/portfolio/Portfolio";

import ExperiencePro from "@/components/experience/ExperiencePro";
import Testimonials from "@/components/testimonial/Testimonials";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

import dynamic from 'next/dynamic';
import Skills from "@/components/Skills/Skills";

const Bot = dynamic(() => import('../components/Bot'), { ssr: false });

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
        <Skills/>

        
        <Portfolio />
        {/* <Experience /> */}
        <ExperiencePro/>
        <Testimonials />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
