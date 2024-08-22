import { Button, Input } from '@nextui-org/react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react';

type Props = {};

type LineProps = {
  children: React.ReactNode;
};

function Line({ children }: LineProps) {
  return (
    <div className='gap-2 grid grid-cols-3 max-md:grid-cols-1 w-full items-center'>
      <hr className=' h-1 hidden md:block bg-yellow-400' />
      <h1 className='justify-self-center headerText'>{children}</h1>
      <hr className=' h-1 hidden md:block bg-yellow-400' />
    </div>
  );
}

function ContactMe({}: Props) {
  return (
    <section className='grid grid-cols-1 p-8 mt-10'>
      {/* large screens div */}
      <div className=''>
      <Line>ContactMe</Line>
      <div className='grid grid-cols-2 max-md:grid-cols-1 md:gap-[13rem] flex-row justify-between'>
        <div className='flex flex-col space-y-5'>
          <Input type="email" variant='underlined' label="Enter your name" className='dark:text-white' />
          <Input type="email" variant='underlined' isRequired label="Enter your email" />
          <Input type="email" variant='underlined' label="Enter your message" />
          <Button 
            type='button' 
            size='lg' 
            variant='bordered' 
            radius='sm'  
            className='bg-custom-yellow  dark:text-white border-none w-10 p-2'
          >
            <span className='text-black dark:text-gray-800 text-xl'>Send</span>
          </Button>
          <span className='hidden max-md:block'>OR</span>
        </div>
        <div className='flex flex-col mt-5 md:gap-20 gap-10'>
          <Button startContent={<MdEmail className='w-8 h-8 max-md:w-5 max-md:h-5' />} className='inline-flex h-12 box4 items-center md:justify-around md:text-xl   rounded-md bg-[#34353A] drop-shadow-md text-custom-yellow md:px-6 md:font-medium transition-colors focus:outline-none'>
          <span className=' md:hidden'>Email Me</span>
          <span className='hidden md:block'>adeytanwie@gmail.com</span>
          </Button>
          <Button startContent={<BsWhatsapp className='w-8 h-8 hidden md:block' />}  className='bg-[#34353A] h-12  inline-flex items-center md:text-xl md:justify-around  rounded-md box4 drop-shadow-md text-custom-yellow md:px-6 transition-colors focus:outline-none'>
          +237650891839
          </Button>
        </div>
      </div>
      
        <div className='flex flex-row max-md:mt-8  justify-center gap-4'>
          <FaFacebook className='w-8 h-8 text-blue-600' />
          <FaTwitter className='w-8 h-8 text-blue-400' />
          <FaInstagram className='w-8 h-8 text-pink-600' />
        </div>
      

      </div>
      {/* medium screnns div */}

      
     
    </section>
  );
}

export default ContactMe;
