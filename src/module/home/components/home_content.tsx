import React from 'react';

interface HomeContentProps {
  classNameSection?: string;
  classNameDiv?: string;
  children: React.ReactNode;
}


const HomeContent: React.FC<HomeContentProps> = ({
  classNameSection = '',
  classNameDiv = 'flex flex-col flex-wrap w-full',
  children
}: HomeContentProps) => {
  return (
    <section className={classNameSection}>
      <div className={classNameDiv}>
        {children}
      </div>
    </section>
  );
};

export default HomeContent;