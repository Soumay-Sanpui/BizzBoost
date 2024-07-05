import React from 'react';

const WorkCard = ({ ttl, desc }) => {
  return (
    <div className='text-white font-cabinate w-full md:w-[25vw] h-[30vw] bg-txt/55 rounded-lg border flex items-end justify-end'>
      <div className='rounded-b-lg p-4 w-full flex flex-col gap-[1vw] bg-gradient-to-b from-transparent via-bg-txt/70 to-black'>
        <div>
          <h5 className='font-semibold text-[2vw] md:text-base'>{ttl}</h5>
          <p className='text-[1.5vw] md:text-sm'>{desc}</p>
        </div>
        {/* line */}
        <div className='bg-white w-full h-[1px] md:h-[2px]'></div>
        <div className='flex items-center justify-end'>
          <button className='hover:bg-bc1 hover:border-bc1 border border-white rounded-full p-3 text-[1.2vw] md:text-sm px-[2.5vw] md:px-[2vw]'>
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
