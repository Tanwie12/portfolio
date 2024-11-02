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
    text: "Working with this developer was transformative. Their expertise and innovative ideas brought my vision to life, and the final product exceeded all expectations. I highly recommend them to anyone looking for top-notch web development.",
    name: "Mr. Roger",
    title: "CEO of Genesis",
    image: "/gg.png",
  },
  {
    text: "The attention to detail and passion they brought to our project was inspiring. Every feature was carefully crafted, and their ability to turn complex requirements into seamless user experiences is exceptional.",
    name: "Ms. Jane",
    title: "CTO of Tech Corp",
    image: "",
  },
  {
    text: "I’ve worked with several developers, but none have matched this level of dedication and skill. The quality of work is outstanding, and they truly went above and beyond to meet our deadlines.",
    name: "Mr. Roger",
    title: "CEO of Genesis",
    image: "/gg.png",
  },
  {
    text: "Their creative problem-solving and technical expertise took our project to new heights. They delivered an intuitive, high-quality product that has received fantastic feedback from our users.",
    name: "Ms. Jane",
    title: "CTO of Tech Corp",
    image: "vercel.svg",
  },
  {
    text: "I was impressed by their professionalism and depth of knowledge. The entire development process was smooth, and the final product is even better than I had envisioned. Truly an asset to any team.",
    name: "Mr. Roger",
    title: "CEO of Genesis",
    image: "/gg.png",
  },
  {
    text: "Collaborating with this developer has been a pleasure. They communicate effectively, meet all deadlines, and deliver exceptional code quality. I look forward to future projects together!",
    name: "Ms. Jane",
    title: "CTO of Tech Corp",
    image: "vercel.svg",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds

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
