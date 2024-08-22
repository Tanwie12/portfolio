import React from 'react'
import { BiHome, BiMessage, BiUser } from 'react-icons/bi';
import { FloatingNav } from './ui/floating-navbar';
import { MdOutlineLabel, MdTimeline } from 'react-icons/md';
import { PiBookLight } from 'react-icons/pi';

type Props = {}

function Navbar({}: Props) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <BiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Portfolio",
      link: "#porfolio",
      icon: <PiBookLight className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <MdTimeline className="h-4 w-4 text-neutral-500 dark:text-white" />
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
  