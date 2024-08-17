"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from './Slider';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useSwipeable } from "react-swipeable";

type Testimonial = {
  text: string;
  name: string;
  title: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam minus vel itaque non quo et exercitationem! Beatae dolorum nam eum quibusdam, minus error, veritatis tempora illo consequatur repellat tempore.",
    name: "Mr Roger",
    title: "CEO of Genesis",
    image: "/gg.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam minus vel itaque non quo et exercitationem! Beatae dolorum nam eum quibusdam, minus error, veritatis tempora illo consequatur repellat tempore.",
    name: "Ms Jane",
    title: "CTO of Tech Corp",
    image: "/man.webp",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam minus vel itaque non quo et exercitationem! Beatae dolorum nam eum quibusdam, minus error, veritatis tempora illo consequatur repellat tempore.",
    name: "Mr Roger",
    title: "CEO of Genesis",
    image: "/gg.png",
  },
  {
    text: "Another testimonial text here.",
    name: "Ms Jane",
    title: "CTO of Tech Corp",
    image: "vercel.svg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam minus vel itaque non quo et exercitationem! Beatae dolorum nam eum quibusdam, minus error, veritatis tempora illo consequatur repellat tempore.",
    name: "Mr Roger",
    title: "CEO of Genesis",
    image: "/gg.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam minus vel itaque non quo et exercitationem! Beatae dolorum nam eum quibusdam, minus error, veritatis tempora illo consequatur repellat tempore." ,
    name: "Ms Jane",
    title: "CTO of Tech Corp",
    image: "vercel.svg",
  },
  // Add more testimonials here
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 2000); // Change testimonial every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const { text, name, title, image } = testimonials[currentIndex];

  return (
    <>
      <div className="">
        <h1 className="mt-10 relative headerText">Testimonials</h1>
        <section className=" flex flex-col max-md:gap-4 items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  {...handlers}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-10   w-full md:p-8 ">
            <div className="flex md:p-8  max-md:row-start-2  flex-col gap-3 pl-5 pr-5">
              <p className="bodyText">{text}</p>
              <h1 className="headerText">{name}</h1>
              <span>{title}</span>
            </div>
            <div className="grid grid-cols-1">
              <div className="testimonial-image  md:bg-[#D9D9D9] md:rounded-l-[7rem]">
                <Image src={image} alt={name} width={500} height={500} />
              </div>
              <div className=" md:pl-32">
              <Slider currentIndex={currentIndex} totalSlides={testimonials.length} />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <Button isIconOnly variant="light">
            <ChevronLeft className="w-20 text-custom-yellow h-20" onClick={handlePrev} /></Button>
            <Button isIconOnly variant="light">
            <ChevronRight className="w-20 text-custom-yellow h-20" onClick={handleNext} /></Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonials;
