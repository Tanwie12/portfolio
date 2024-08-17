import React from 'react';
import Card from './PorfolioCard'; // Make sure the path is correct
import { Button } from '@nextui-org/react';

type Props = {}

const Portfolio: React.FC<Props> = () => {
  const portfolio = [
    { 
      title: 'Python', 
      imageSrc: 'https://images04.nicepage.com/feature/612016/ecommerce-websites.jpg',
      description: 'Python project description',
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/repo'
    },
    { 
      title: 'ReactJS', 
      imageSrc: 'next.svg',
      description: 'ReactJS project description',
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/repo'
    },
    { 
      title: 'NodeJS', 
      imageSrc: 'vercel.svg',
      description: 'NodeJS project description',
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/repo'
    },
    { 
      title: 'NextJS', 
      imageSrc: '/gg.png',
      description: 'NextJS project description',
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/repo'
    },
    { 
      title: 'NextJS', 
      imageSrc: '/gg.png',
      description: 'NextJS project description',
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/repo'
    },
    { 
      title: 'NextJS', 
      imageSrc: '/gg.png',
      description: 'NextJS project description',
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/repo'
    },
  ];

  return (
    <div className='mt-8 gap-3 flex items-center flex-col'>
      <h2 className='headerText'>Portfolio</h2>
      <div className='grid  md:grid-cols-3 my-3 gap-4 p-4 '>
        {portfolio.map((item, index) => (
          <Card 
            key={index}
            imageSrc={item.imageSrc}
            title={item.title} 
            description={item.description}
            demoLink={item.demoLink}
            githubLink={item.githubLink}
            isHighlighted={index === 1}
          />
        ))}
      </div>
      <div>
        <Button 
          type='button' 
          size='lg' 
          variant='bordered' 
          radius='sm'  
          className='bg-custom-yellow border-none p-2'
        >
          <span className='text-black text-xl'>View more</span>
        </Button>
      </div>
    </div>
  );
}

export default Portfolio;
