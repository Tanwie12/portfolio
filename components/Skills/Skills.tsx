import React from 'react'
import Card from '../Card'
import SkillCard from './SkillCard';

type Props = {}

function Skills({}: Props) {
  const skills = [
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
    { name: 'ReactJS', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'NodeJS', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { name: 'NextJS', icon: 'https://img.icons8.com/color/48/000000/nextjs.png' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png' },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
    <h1 className="headerText text-white mb-10">My Skills</h1>
    <div className="grid grid-cols-2 grid-flow-row-dense md:grid-cols-4 gap-6">
      {skills.map((skill,i) => (
        <div key={i} className={`${i==3?'':''}`}>
        <SkillCard key={skill.name} name={skill.name} image={skill.icon}  />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Skills