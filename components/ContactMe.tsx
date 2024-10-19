'use client';
import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    emailjs.send(
      'service_logddqq', // Replace with your EmailJS service ID
      'template_wijwi3n', // Replace with your EmailJS template ID
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/237650891839`, '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:adeytanwie@gmail.com';
  };

  return (
    <section id='contact' className='grid grid-cols-1 p-8 mt-10'>
      <div className=''>
        <Line>ContactMe</Line>
        <div className='grid grid-cols-2 max-md:grid-cols-1 md:gap-[13rem] flex-row justify-between'>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
            <Input
              type="text"
              variant='underlined'
              label="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='dark:text-white'
            />
            <Input
              type="email"
              variant='underlined'
              isRequired
              label="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              variant='underlined'
              label="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button 
              type='submit' 
              size='lg' 
              variant='bordered' 
              radius='sm'  
              className='bg-custom-yellow dark:text-white border-none w-10 p-2'
            >
              <span className='text-black dark:text-white text-xl'>Send</span>
            </Button>
            <span className='hidden max-md:block'>OR</span>
          </form>
          <div className='flex flex-col mt-5 md:gap-20 gap-10'>
            <Button
              startContent={<MdEmail className='w-8 h-8 max-md:w-5 max-md:h-5' />}
              className='inline-flex h-12 box4 items-center md:justify-around md:text-xl rounded-md bg-[#34353A] drop-shadow-md text-custom-yellow md:px-6 md:font-medium transition-colors focus:outline-none'
              onClick={openEmail}
            >
              <span className=' md:hidden'>Email Me</span>
              <span className='hidden md:block'>adeytanwie@gmail.com</span>
            </Button>
            <Button
              startContent={<BsWhatsapp className='w-8 h-8 hidden md:block' />}
              className='bg-[#34353A] h-12 inline-flex items-center md:text-xl md:justify-around rounded-md box4 drop-shadow-md text-custom-yellow md:px-6 transition-colors focus:outline-none'
              onClick={openWhatsApp}
            >
              +237650891839
            </Button>
          </div>
        </div>
        
        <div className='flex flex-row max-md:mt-8 justify-center gap-4'>
          <FaFacebook className='w-8 h-8 text-blue-600' />
          <FaTwitter className='w-8 h-8 text-blue-400' />
          <FaInstagram className='w-8 h-8 text-pink-600' />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
