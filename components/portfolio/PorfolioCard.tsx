import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  isHighlighted?: boolean;
}

const Card: React.FC<CardProps> = ({ imageSrc, isHighlighted, title, description, demoLink, githubLink }) => {
  return (
    <div className={`relative w-80 max-md:w-60 max-md:h-60 h-80 overflow-hidden shadow-2xl  rounded-lg group ${isHighlighted ? 'highlighted' : ''}`}>
      <Image 
        src={imageSrc} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        className="transition-transform p-2 duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center ${isHighlighted ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-500`}>
        <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black px-4 py-2 rounded">Demo</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
