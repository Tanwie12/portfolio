'use client'
import React from 'react'


type Props = {}

function Navbar({}: Props) {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);
  return (
    <div className={`z-10 w-full md:onscroll-up  md:sticky md:top-0 max-w-5xl items-center justify-between font-mono text-sm lg:flex transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
    <div className="md:absolute md:top-2 md:right-2 md:left-3 md:gap-3 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      
    
    <div className='flex  flex-row md:gap-5 justify-between '>
    
    <div>logo</div>
    <div>contact me</div>
    <div>about</div>

   
   
    </div>
    </div>
  </div>
  )
}

export default Navbar