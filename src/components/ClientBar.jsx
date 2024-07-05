import React from 'react';

const ClientBar = () => {
  return (
    <div className='my-[5vw] w-screen flex flex-col md:flex-row items-center justify-around px-[0.5vw] p-[2vw] bg-black text-white font-clashDisplay gap-[2vw] md:gap-0'>
      <p>OUR CLIENTS :</p>
      <img src='cliimg.png' className='w-3/4 md:w-auto h-auto' />
    </div>
  );
};

export default ClientBar;
