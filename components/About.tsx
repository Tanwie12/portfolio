import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-row md:p-8 justify-between '>
        <hr className='w-5 h-1 bg-yellow-400'  />
        <div className=''>
            <p className=' md:bodyText max-md:text-gray-400 dark:text-white text-base'>{"I'm"} a web developer specializing in dynamic, user-friendly websites. Proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js, 
              I build responsive, <span className='text-violet-700  dark:text-custom-yellow'>high-performance web applications</span>.
               I focus on clean code and seamless user experiences, constantly learning to stay at the forefront of web development.</p>
        </div>

    </div>
  )
}

export default About