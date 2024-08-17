import React from 'react';

interface YearDisplayProps {
  year: string;
  imageSrc?: string;
}

const YearDisplay: React.FC<YearDisplayProps> = ({ year, imageSrc }) => {
  return (
    <div className="relative  inline-block">
      <svg 
        className="md:w-[140px] hidden md:block md:h-[48px] w-[14px] h-[14px]" 
        viewBox="0 0 140 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M103 1H1V47H103L139 26.3L103 1Z" stroke="black"/>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          className="text-[20px] sm:text-[18px] xs:text-[16px]"
        >
          {year}
        </text>
      </svg>
      <div className='max-md:flex hidden'>
       {year}
      </div>
    </div>
  );
};

export default YearDisplay;
