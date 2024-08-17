/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface SkillCardProps {
  name: string;
  image: string;
  isHighlighted?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image, isHighlighted = false }) => {
  return (
    <div className={`flex flex-col items-center px-11 py-14  bg-[#34353A] box4 rounded-xl shadow-sm ${isHighlighted ? 'bg-orange-300' : 'bg-[#34353A]'} max-md:px-5`}>
      <img loading="lazy" src={image} alt={`${name} icon`} className="object-contain w-14 aspect-[0.84]" />
      <div className="mt-5 text-2xl tracking-wide leading-none text-center text-white lowercase whitespace-nowrap">{name}</div>
      
    </div>
  );
};

export default SkillCard;