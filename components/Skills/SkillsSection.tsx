import React from 'react';
import SkillsGrid from './SkillGrid';

const SkillsSection: React.FC = () => {
  const topSkills = [
    { name: 'python',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59acfcfb7fad2dfe7fc012100365dae1904d51e00aec2373f8b61ae96613ca03?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
    { name: 'rEACTJS',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07c5c7c5f0217ff43f8b635f0211df357aeff7abc1ecf568f46c806db1c76ba4?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
    { name: 'nODEJS',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0559ce0acaf0dee9ec475dfb98086d1537c26918e6955586b0a29c15f618061e?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175', isHighlighted: true },
    { name: 'nEXTJS',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f3644844bfc1cd3b171233164a9c6d7a24119f384f545a9a21570e852d3d4868?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
  ];

  const middleSkills = [
    { name: 'tAILWINDCSS',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5de34ad2a02a5ea6e5b9ed81cee0fb3fd4a1b31b8065a95e6090903eef5c8e53?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
    { name: 'mONGOdb',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d9814e063cf0c2e9d4a6acef7cd30c49302d370502d6af97e45fcf737008227?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
    { name: 'FIGMA',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1404d5b2cc66aa8713f941d2b00cec08749522e8a2e37bccd2d0c1bcea9b576d?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
  ];

  const bottomSkills = [
    { name: 'python',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8120a97fa366e3d4092eafc4d9c09fc4a825660b148677654c9032099bba6b9f?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
    { name: 'python',image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f17b8f0e86f094813f251e584643f805763a4ae78b1d29e55f93cab25a9634e9?apiKey=1203dcd0220b4888a40f24053bda6175&&apiKey=1203dcd0220b4888a40f24053bda6175' },
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="z-10 -mt-1.5 text-5xl font-semibold leading-none text-center text-white max-md:text-4xl">
        My Skills
      </h2>
      <div className="self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <SkillsGrid skills={topSkills} columns={4} />
      </div>
      <div className="mt-7 w-full max-w-[766px] max-md:max-w-full">
        <SkillsGrid skills={middleSkills} columns={3} />
      </div>
      <div className="mt-14 max-w-full w-[520px] max-md:mt-10">
        <SkillsGrid skills={bottomSkills} columns={2} />
      </div>
    </section>
  );
};

export default SkillsSection;