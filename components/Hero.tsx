'use client'
import { Button } from '@nextui-org/react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { TypewriterEffect } from './ui/typewriter-effect';
import { socialLinks } from '../lib/content/portfolio'; // Import socialLinks

const HeroSection = () => {
  const words = [
    {
      text: "Web",
    },
    
    {
      text: "and",
    },
    {
      text: "Mobile",
    },
    {
      text: "App",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-yellow-500",
    },
    
  ];
  return (
    <section className="flex mt-10 flex-col w-full md:flex-row h-auto max-md:gap-7 justify-between md:h-[38rem] dark:text-white">
      <div className=''>
        <h1 className="text-4xl font-bold mb-4">
          {"I'M"} <span className="text-custom-yellow">Tanwie Bruno</span>
        </h1>
       
        <TypewriterEffect words={words} className='bodyText mb-6'/>
        <a href="#contact">
          <Button radius='sm' variant='bordered' className='text-customYellow border-customYellow'>
            Contact Me
          </Button>
        </a>
      </div>
      <div className='flex h-[1/2] flex-row'>
        <div>
          <Image src='/gg.png' alt='man' width={500} height={500} />
        </div>
        <div className='self-end hidden md:flex flex-col gap-2'>
          <div className="shrink-0 self-center w-px bg-[color:var(--YellowColor,#FECD7A)] h-[85px]" />
          <div className='flex flex-col gap-2'>
            <Button 
              isIconOnly 
              variant='light' 
              onClick={() => window.open(socialLinks.github, '_blank')}
            >
              <Github size={24} color="#FECD7A"/>
            </Button>
            <Button 
              isIconOnly 
              variant='light' 
              onClick={() => window.open(socialLinks.instagram, '_blank')}
            >
              <Instagram size={24} color="#FECD7A"/>
            </Button>
            <Button 
              isIconOnly 
              variant='light' 
              onClick={() => window.open(socialLinks.linkedin, '_blank')}
            >
              <Linkedin size={24} color="#FECD7A"/>
            </Button>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default HeroSection;
