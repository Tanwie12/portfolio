import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="relative flex items-start mb-8">
      <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full shadow-md">
        <span className="text-black font-bold">{year}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
      {items.map((item, index) => (
        <TimelineItem key={index} year={item.year} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Timeline;
