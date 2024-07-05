import React from 'react';

const Navbar = () => {
  const NavLinks = [
    "Home", "Services", "Features", "Testimonials",
  ];
  
  return (
    <nav className='font-clashDisplay flex flex-wrap items-center justify-between p-[2vw] md:flex-nowrap'>
      <div className='w-full md:w-auto flex justify-between items-center'>
        <img src="/logo.png" className='w-24 h-auto md:w-auto md:h-auto'/>
        <button className='md:hidden text-black'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path></svg>
        </button>
      </div>
      <div className='hidden md:flex items-center justify-center gap-[2vw] w-full md:w-auto'>
        {NavLinks.map((navlink, index) => (
          <a className='hover:text-bc1 cursor-pointer' key={index}>{navlink}</a>
        ))}
      </div>
      <div className='hidden md:block'>
        <button className='rounded-full p-3 px-[3vw] border border-black/25'>Get Started</button>
      </div>
    </nav>
  );
};
export default Navbar;
