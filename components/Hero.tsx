import { Button } from '@nextui-org/react';
import { DownloadCloudIcon, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { TypewriterEffect } from './ui/typewriter-effect';
import Link from 'next/link';

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
    <section className="flex   mt-10 flex-col w-full md:flex-row h-auto max-md:gap-7 justify-between  md:h-[38rem]  dark:text-white">
        <div className=' '>
        <h1 className="text-4xl font-bold mb-4">
          {"I'M"} <span className="text-customYellow">Tanwie Bruno</span>
        </h1>
       
          <TypewriterEffect words={words} className='bodyText mb-6'/>
<div className='gap-2 max-md:grid max-md:grid-cols-2 space-x-5'>

         <Link  href={"#contact"} >
        <Button radius='sm' variant='bordered' className=' text-customYellow bodyText border-customYellow'>
          Contact Me
        </Button>

        </Link>
        <Button startContent={<DownloadCloudIcon size={20} className='block md:hidden' />} radius='sm' color='primary' variant='shadow' className=' text-customYellow bodyText border-customYellow'>
         <span className='hidden md:block'>Download</span>
         <span>CV</span>
        </Button>
        </div>
        </div>
        <div className='flex h-[1/2] flex-row'>
            <div>
            <Image src='/gg.png'
            alt='man'
            width={500}
            height={500}
            />
            </div>
             <div className=' self-end hidden md:flex flex-col gap-2'>
         
         <div className="shrink-0 self-center w-px bg-[color:var(--YellowColor,#FECD7A)] h-[85px]" />
         <div className='flex flex-col gap-2'>
          <Github size={24} color="#FECD7A"/>
          <Instagram size={24} color="#FECD7A"/>
          <Linkedin size={24} color="#FECD7A"/>

         </div>
         
      
   
               </div> 
           
        </div>
      
        
    </section>
  );
};

export default HeroSection;
