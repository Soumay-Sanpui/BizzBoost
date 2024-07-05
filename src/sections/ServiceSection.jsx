import React from 'react';
import ServiceCard from '../components/ServiceCard';

const ServiceSection = () => {
  const services = [
    {
        title : "Business Strategy Consultation",
        desc : "We provide top-notch solutions for your business planning to enhance market reach and boost your company's revenue, ensuring your business advances to the next level."
    },
    {
        title: "Google Ads Optimization",
        desc: "We manage your ads on Google services to maximize customer reach and interest, driving more engagement with your products."
    },
    {
        title: "Market Research & Insights",
        desc: "We conduct thorough and detailed research to gather comprehensive and accurate information tailored to your business needs."
    }, 
    {
        title: "Social Media Enhancement",
        desc: "We professionally manage your business's social media accounts, creating engaging content that attracts more consumers and boosts your online presence."
    }
  ];

  return (
    <div className='font-cabinate bg-[url("/serbg.png")] bg-cover bg-no-repeat text-white min-h-screen p-[8vw]'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-start gap-[7vw] mt-[2vw]'>
        <div className='w-full md:w-max h-max flex flex-col gap-[3vw]'>
          <div>
            <p className='text-txt'>Our Services</p>
            <h2 className='text-[8vw] md:text-[3.5vw] font-semibold leading-tight'>
              Our Marketing <br /> Service
            </h2>
          </div>
          <div className='bg-bcbx w-full md:w-[29vw] h-[40vw] md:h-[15vw] rounded-xl'></div>
        </div>
        <div className='hidden md:block bg-txt w-[2px] h-[25vw]'></div>
        <div className='w-full md:w-auto flex flex-col gap-[3vw]'>
          <div>
            <p className='text-lg'>
              We present the best digital marketing services, meticulously<br />executed by our team of seasoned professionals. Our<br /> comprehensive approach ensures your business gains<br />maximum visibility,
            </p>
          </div>
          <div>
            <button className='border-[2px] rounded-xl border-white p-[3vw] md:p-[1vw]'>
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
      <div>
        {
            services.map((service, index)=>(
                <ServiceCard key={index} ttl={service.title} desc={service.desc}/>
            ))
        }
        
      </div>
    </div>
  );
};

export default ServiceSection;
