import React from 'react';

const ServiceCard = ({ ttl, desc }) => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center md:items-start justify-between py-[4vw] my-[4vw] border-b border-txt'>
      {/* left side */}
      <div className='w-full md:w-[40vw] flex flex-col gap-[2vw]'>
        <h2 className='text-[6vw] md:text-[2vw] font-semibold'>{ttl}</h2>
        <p className='text-md'>{desc}</p>
        <div>
          <button className='border-[2px] rounded-xl p-[3vw] md:p-[1vw]'>
            VIEW DETAILS
          </button>
        </div>
      </div>
      {/* right side */}
      <div className='w-full md:w-auto flex items-center justify-center mt-[4vw] md:mt-0'>
        <div className='bg-bcbx w-full md:w-[29vw] h-[40vw] md:h-[15vw] rounded-xl'></div>
      </div>
    </div>
  );
};

export default ServiceCard;
