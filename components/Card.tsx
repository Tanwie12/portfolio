import React from 'react'
import Image from 'next/image';

type Props = {
    name:string,
    image:string

}

function Card({name,image}: Props) {
  return (
    <div className='bg-gray-800 text-white flex flex-col items-center p-4 rounded-md shadow-md'>
        <div className='flex gap-2 items-center flex-col'>
            <Image src={image} alt='card image' width={100} height={24}/>
            {name}
        </div>

    </div>
  )
}

export default Card