/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface PersonCardProps {
  name: string;
  jobTitle: string;
  image: string;
  link: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, jobTitle, image, link }) => {
  return (
    <div className="col-span-1 max-xl:col-span-2 max-sm:col-span-5 relative rounded-2xl shadow-2xl h-80 lg:h-96">
      <img className='rounded-2xl drop-shadow-lg w-full h-full object-cover' src={image} alt={name} />
      <div className='absolute w-[94%] bottom-2 translate-x-[3%] z-0 p-3 rounded-2xl backdrop-blur-sm bg-white/50'>
        <h2 className='text-black text-center font-bold text-lg'>{name}</h2>
        <h3 className='text-black text-center'>{jobTitle}</h3>
      </div>
      <div className='flex flex-col gap-2 absolute top-2 right-2'>
        <a href={link} className='p-1 bg-black rounded-full text-white'>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </a>
        <a href={link} className='p-1 bg-black rounded-full text-white'>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PersonCard;