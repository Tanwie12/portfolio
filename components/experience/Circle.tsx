import React from 'react';

interface AmberCircleProps {
  size?: number;
}

const AmberCircle: React.FC<AmberCircleProps> = ({ size = 24 }) => {
  return (
    <>
   <div className="relative flex items-center justify-center md:w-8 md:h-8 w-[2px] h-[2px]">
     <div className="absolute w-full h-full rounded-full blur-lg opacity-75 animate-colorChange"></div>
      <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full"></div>
    </div>
        </>
  );
};

export default AmberCircle;
