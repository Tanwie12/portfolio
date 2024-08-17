import { Button } from '@nextui-org/react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex   mt-10 flex-col w-full md:flex-row h-auto max-md:gap-7 justify-between  md:h-[38rem]  dark:text-white">
        <div className=' '>
        <h1 className="text-4xl font-bold mb-4">
          {"I'M"} <span className="text-custom-yellow">Tanwie Bruno</span>
        </h1>
        <p className="text-lg mb-6">web developer and mobile app developer</p>
        <Button radius='sm' variant='bordered' className=' text-custom-yellow bodyText border-custom-yellow'>
          Contact Me
        </Button>
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
