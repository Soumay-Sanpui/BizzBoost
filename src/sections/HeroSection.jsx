import React from 'react'

const HeroSection = () => {
  return (
    <div className='my-[2vw] flex items-start justify-center px-[8vw] flex-col gap-[2.5vw]'>
        <div className='flex flex-col gap-[2vw]'>
            <h1 className="leading-[5vw] font-cabinate font-semibold text-[5vw]">Redefining Your <span className='text-bc1'>Business Experience</span><br />
            for Greater Impact and Growth</h1>
            <p className='font-clashDisplay'>Make your business more attractive and unique to reach a wider market and build greater success.</p>
        </div>
        <div>
            <img src='/hrimg.png' />
        </div>
    </div>
  )
}

export default HeroSection