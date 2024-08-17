import { Poppins } from 'next/font/google'
import React from 'react'

import Experiences from './Experiences'

type Props = {}

function Experience({}: Props) {
    const experiences = [
        {
          year: '2021',
          title: 'Frontend Developer',
          location: 'Remote',
          description: `When I was young, I loved designing so much that I became the best designer in the world. <br/> It's really cool designing on a Saturday evening. When I was young, I loved designing so much that I became the best designer in the world. It's really cool designing on a Saturday evening.`,
          imageSrc: 'Arrow.svg'
        },
        {
            year: '2023',
            title: 'Frontend Developer',
            location: 'Remote',
            description: `When I was young, I loved designing so much that I became the best designer in the world. It's really cool designing on a Saturday evening. When I was young, I loved designing so much that I became the best designer in the world. It's really cool designing on a Saturday evening.`,
            imageSrc: 'Arrow.svg'
          },
          {
            year: '2024',
            title: 'Frontend Developer',
            location: 'Remote',
            description: `When I was young, I loved designing so much that I became the best designer in the world. It's really cool designing on a Saturday evening. When I was young, I loved designing so much that I became the best designer in the world. It's really cool designing on a Saturday evening.`,
            imageSrc: 'Arrow.svg'
          },
        // Add more experiences here
      ];
    
  return (
    <>
    <section className='mt-10 flex flex-col gap-10'>
        <h1 className='headerText'>Experience</h1>
        <div className='flex flex-col   bg-[#23252d48]'>
          
        {experiences.map((experience, index) => (
        <Experiences key={index} {...experience} />
      ))}

        </div>

    </section>
    </>
  )
}

export default Experience