"use client";
import React from 'react';

type SliderProps = {
  currentIndex: number;
  totalSlides: number;
};

const Slider = ({ currentIndex, totalSlides }: SliderProps) => {
  return (
    <div className="flex gap-2 items-center self-end mt-7 mr-12 max-md:mr-2.5">
      {Array(totalSlides).fill(0).map((_, index) => (
        <div
          key={index}
          className={`flex flex-1 shrink self-stretch my-auto h-2.5 rounded-lg basis-0 ${index === currentIndex ? 'bg-sky-400' : 'bg-slate-300'} w-[61px]`}
        />
      ))}
    </div>
  );
};

export default Slider;
