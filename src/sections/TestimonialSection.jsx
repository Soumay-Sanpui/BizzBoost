import React from 'react';

const TestimonialSection = () => {
  return (
    <div className='p-8 w-full font-cabinate'>
      <div className='w-full rounded-xl bg-txt/15'>
        <div className='flex p-[5vw] items-center justify-between'>
          {/* Top announcer */}
          <div>
            <div className='flex items-center justify-center gap-5'>
              <h2 className='text-[3vw] md:text-3xl font-semibold'>what Our <span className='text-bc1'>Client</span> say</h2>
              <div className='w-[10vw] md:w-[6vw] h-[2px] bg-black'></div>
            </div>
          </div>
          {/* Button holder */}
          <div className='flex items-center justify-center gap-5'>
            <div className='border p-6 rounded-md hover:bg-bc1 hover:text-white cursor-pointer border-black/25' onMouseEnter={()=>{document.getElementById('la').style.filter = 'invert(1)'}} onMouseLeave={()=>{document.getElementById('la').style.filter = 'invert(0)'}}>
              <svg width="8" id='la' height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.05763 0.71051C7.44763 1.10051 7.44763 1.73051 7.05763 2.12051L3.17763 6.00051L7.05763 9.88051C7.44763 10.2705 7.44763 10.9005 7.05763 11.2905C6.66763 11.6805 6.03763 11.6805 5.64763 11.2905L1.05763 6.70051C0.667628 6.31051 0.667628 5.68051 1.05763 5.29051L5.64763 0.70051C6.02763 0.32051 6.66763 0.32051 7.05763 0.71051Z" fill="black"/>
              </svg>
            </div>
            <div className='border p-6 rounded-md hover:bg-bc1 hover:text-white cursor-pointer border-black/25' onMouseEnter={()=>{document.getElementById('ra').style.filter = 'invert(1)'}} onMouseLeave={()=>{document.getElementById('ra').style.filter = 'invert(0)'}}>
              <svg width="8" id='ra' height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.05764 0.71051C0.667637 1.10051 0.667637 1.73051 1.05764 2.12051L4.93764 6.00051L1.05764 9.88051C0.667637 10.2705 0.667637 10.9005 1.05764 11.2905C1.44764 11.6805 2.07764 11.6805 2.46764 11.2905L7.05764 6.70051C7.44764 6.31051 7.44764 5.68051 7.05764 5.29051L2.46764 0.70051C2.08764 0.32051 1.44764 0.32051 1.05764 0.71051Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
        {/* Card section */}
        <div className='p-[5vw]'>
          <img src='teimg.png' className='w-full md:max-w-none' />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
