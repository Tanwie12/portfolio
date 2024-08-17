import React from 'react'
import YearDisplay from './YearDisplay'
import AmberCircle from './Circle'

type Props = {
    year: string,
    title: string,
    location: string,
    description: string,
    imageSrc: string
}

function Experiences({ year, title, location, description }: Props) {
  return (
    <div className='flex max-md:mt-8   flex-row md:p-8 gap-3 max-md:gap-4'>
                <div className=''>
                <YearDisplay imageSrc='Arrow.svg' year={year} />
                </div>
                
                {/* div for circle and heading part */}
                <div className='flex flex-col gap-3'>
                    {/* div for circle and heading */}
                    <div className='flex flex-row gap-2 max-md:gap-4'>
                        
                <div className='mt-2'>
                    <AmberCircle/>
                </div>
                <div className=''>
                    <h1 className='md:ml-1 headerText max-md:text-base' style={{}}>
                        {title}
                    </h1>
                </div>
               
                </div>
                {/* div for line and orther div */}
                <div className=' md:ml-4 flex flex-row gap-3 '>
                    <div className=' border border-spacing-2 border-r-2 w-1  rounded-lg bg-white border-s'>
                        
                    </div>
                    {/* div for remote and body */}
                    <div className=' md:ml-4 flex flex-col gap-3'>
                        <h1 className='md:text-2xl '>{location}</h1>
                        {/* body */}
                        <div>
                            <p className=' md:bodyText md:max-w-[40rem] max-md:text-gray-600 text-base'>
                            {description}
                            
                            </p>
                        </div>


                    </div>

                </div>
                </div>

            </div>
  )
}

export default Experiences