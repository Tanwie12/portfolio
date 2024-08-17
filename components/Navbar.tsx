import React from 'react'
import { BiHome, BiMessage, BiUser } from 'react-icons/bi';
import { FloatingNav } from './ui/floating-navbar';

type Props = {}

function Navbar({}: Props) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <BiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <BiUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <BiMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div>
       <FloatingNav navItems={navItems}/>
      
    </div>
  )
}

export default Navbar
  