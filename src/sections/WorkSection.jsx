import React from 'react';
import WorkCard from '../components/WorkCard';

const WorkSection = () => {
  const works = [
    {
      ttl: "Successful Digital Campaigns",
      desc: "See our innovative digital marketing campaigns that boosted online presence and customer engagement....."
    },
    {
      ttl: "Strategic Business Solutions",
      desc: "Explore how our tailored business strategies have enhanced market reach and revenue for our clients...."
    },
    {
      ttl: "Dynamic Social Media Management",
      desc: "View our engaging social media management that increased brand visibility and consumer interaction...."
    },
    {
      ttl: "Market Research",
      desc: "In-depth research that provides valuable insights and comprehensive data, enabling informed decision-making...."
    },
    {
      ttl: "Google Ads Optimization",
      desc: "Maximized ad performance and customer reach, driving traffic and conversions......"
    },
    {
      ttl: "Data Security",
      desc: "Robust solutions ensuring the protection of sensitive business information....."
    }
  ];

  return (
    <div className='font-cabinate p-[8vw]'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-start gap-[7vw] mt-[2vw]'>
        <div className='w-full md:w-max h-max flex flex-col gap-[3vw]'>
          <div>
            <h2 className='text-[8vw] md:text-[3vw] font-semibold leading-tight'>
              Some Share of  <br /> Our works
            </h2>
          </div>
        </div>
        <div className='hidden md:block bg-bcgr w-[3px] h-[18vw]'></div>
        <div className='w-full md:w-auto flex flex-col gap-[3vw]'>
          <div>
            <p className='text-lg'>
              Here are examples of our work that demonstrate the high quality<br/> we deliver. These projects highlight our expertise and can serve<br />as a reference for the standards we uphold.
            </p>
          </div>
          <div>
            <button className='border-[2px] rounded-xl border-black/50 p-[3vw] md:p-[1vw]'>
              MORE DETAIL
            </button>
          </div>
        </div>
      </div>
      {/* cards section */}
      <div className='my-[7vw] flex flex-wrap gap-[3.87vw]'>
        {
          works.map((work, index) => (
            <WorkCard ttl={work.ttl} desc={work.desc} key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default WorkSection;
