/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface CompanyCardProps {
  icon: string;
  color: string;
  shadowColor: string;
  title: string;
  description: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ icon, color, shadowColor, title, description }) => {
  return (
    <div className="col-span-1 max-sm:col-span-3 items-start justify-center shadow-[rgba(17,_17,_26,_0.08)_0px_0px_20px] p-5 rounded-2xl">
      <div
        className={`relative w-14 h-14 rounded-[18px] ${color} shadow-md ${shadowColor}`}
      >
        <img src={icon} alt="icon" className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="mt-6 text-start">
        <h1 className="text-black text-2xl font-bold mb-3">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default CompanyCard;