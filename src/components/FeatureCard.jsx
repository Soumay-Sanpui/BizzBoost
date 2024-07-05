import React from 'react';

const FeatureCard = ({ ttl, desc }) => {
  return (
    <div className='relative rounded-lg w-[80vw] h-[90vw] md:w-[23vw] md:h-[27vw] bg-black flex items-end justify-end text-white'>
      <div className='absolute top-0 left-0 max-w-full p-[2vw]'>
        <div className='flex flex-col items-start justify-around gap-[2vw] py-[2vw]'>
          <h4 className='text-[5vw] md:text-[1.4vw]'>{ttl}</h4>
          <p className='text-[4vw] md:text-base'>"{desc}"</p>
        </div>
      </div>
      <div className='absolute -right-2 -bottom-2 rounded-lg w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] border-[2vw] md:border-[1vw] border-white bg-white'>
        <div className='cursor-pointer flex items-center justify-center w-full h-full bg-black rounded-lg'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9079 1.07355L7.44371 0.675596C7.11895 0.667747 6.79583 0.723939 6.49279 0.840964C6.18976 0.95799 5.91274 1.13356 5.67755 1.35764C5.44237 1.58173 5.25362 1.84994 5.12209 2.14697C4.99056 2.444 4.91883 2.76402 4.91098 3.08878C4.90313 3.41353 4.95932 3.73665 5.07634 4.03969C5.19337 4.34272 5.36894 4.61974 5.59302 4.85493C5.81711 5.09011 6.08532 5.27886 6.38235 5.41039C6.67938 5.54192 6.99941 5.61366 7.32416 5.6215L15.3446 5.81537L1.75676 18.7619C1.28171 19.2145 1.00592 19.8373 0.990065 20.4933C0.974211 21.1493 1.21959 21.7847 1.67222 22.2597C2.12484 22.7348 2.74764 23.0106 3.40361 23.0264C4.05958 23.0423 4.69498 22.7969 5.17003 22.3443L18.7579 9.39772L18.5641 17.4182C18.5553 17.7432 18.6108 18.0667 18.7275 18.3702C18.8442 18.6736 19.0197 18.951 19.244 19.1864C19.4682 19.4218 19.7368 19.6105 20.0343 19.7417C20.3317 19.8729 20.6522 19.944 20.9772 19.9509C21.3021 19.9591 21.6253 19.9031 21.9285 19.7861C22.2316 19.6692 22.5087 19.4937 22.744 19.2695C22.9792 19.0454 23.168 18.7771 23.2994 18.4799C23.4308 18.1828 23.5024 17.8626 23.51 17.5378L23.9079 1.07355Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
