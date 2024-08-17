import React from 'react';
import SkillCard from './SkillCard';

interface Skill {
  name: string;
  image: string;
  isHighlighted?: boolean;
}

interface SkillsGridProps {
  skills: Skill[];
  columns: number;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, columns }) => {
  const columnWidth = `w-${12 / columns}/12`;

  return (
    <div className="flex gap-5 max-md:flex-col">
      {skills.map((skill, index) => (
        <div key={index} className={`flex flex-col ${columnWidth} max-md:ml-0 max-md:w-full`}>
          <div className="flex flex-col grow mt-2 max-md:mt-10">
            <SkillCard name={skill.name} image={skill.image} isHighlighted={skill.isHighlighted} />
          </div>
          
<div className="grid grid-cols-5 grid-rows-5 gap-4">
    <div >1</div>
    <div className="col-start-3 row-start-1">14</div>
    <div className="col-start-2 row-start-2">16</div>
    <div className="col-start-2 row-start-3">18</div>
    <div className="col-start-2 row-start-4">19</div>
    <div className="col-start-2 row-start-1">20</div>
</div>
    
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;