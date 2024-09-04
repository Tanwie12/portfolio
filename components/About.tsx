import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='grid grid-cols-2  w-full items-center max-md:mt-10 md:p-8'>
        <hr className='w-10 h-1 bg-yellow-400'  />
        <div className=''>
            <p className=' md:bodyText font-medium dark:text-white text-base'>{"I'm"} a web developer specializing in dynamic, user-friendly websites. Proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js, 
              I build responsive, <span className='text-violet-700  dark:text-custom-yellow'>high-performance web applications</span>.
               I focus on clean code and seamless user experiences, constantly learning to stay at the forefront of web development.</p>
        </div>

    </div>

// {/* <div className='gap-2 grid grid-cols-2 max-md:grid-cols-1 w-full items-center'>
//    <hr className=' h-1 hidden md:block bg-yellow-400' />
//    <div className=''>
//           <p className=' md:bodyText font-medium dark:text-white text-base'>{"I'm"} a web developer specializing in dynamic, user-friendly websites. Proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js, 
//            I build responsive, <span className='text-violet-700  dark:text-custom-yellow'>high-performance web applications</span>.
//               I focus on clean code and seamless user experiences, constantly learning to stay at the forefront of web development.</p>
//        </div>
  
//   </div> */}
  )
}

export default About