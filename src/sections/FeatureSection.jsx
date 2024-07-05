import React from 'react';
import FeatureCard from '../components/FeatureCard';
import FeatureCard2 from '../components/FeatureCard2';

const FeatureSection = () => {
  return (
    <div className='w-screen h-auto font-cabinate px-[8vw] flex flex-col gap-[3vw]'>
      <div className='flex flex-col gap-3 leading-6'>
        <p className='text-txt text-[3vw] md:text-[1.5vw]'>Our Features</p>
        <h2 className='font-semibold text-[6vw] md:text-[3.5vw]'>The outstanding Features we Introduce</h2>
        <p className='text-txt text-[3vw] md:text-[1.5vw]'>Experience cutting-edge technology for business growth.</p>
      </div>
      <div className='p-6 flex flex-col md:flex-row w-full items-center justify-around gap-[3vw]'>
        <FeatureCard 
          ttl={"Advanced Tech Solutions"} 
          desc={"Effortlessly grow your business with our cutting-edge technology tools, enabling significant expansion."}
        />
        <FeatureCard2 
          ttl={"Rapid & Accurate Outcomes"}
          desc={"Effortlessly grow your business with our cutting-edge technology tools, enabling significant expansion."}
        />
        <FeatureCard 
          ttl={"Comprehensive Data Security"} 
          desc={"We ensure your business data is securely managed and protected from external threats."}
        />
      </div>
    </div>
  );
};

export default FeatureSection;
