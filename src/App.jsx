import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ClientBar from './components/ClientBar';
import FeatureSection from './sections/FeatureSection';
import ServiceSection from './sections/ServiceSection';
import WorkSection from './sections/WorkSection';
import TestimonialSection from './sections/TestimonialSection';
import Footer from './components/Footer';
import EndBar from './components/EndBar';

function App() {
  return (
    <main className='text-[1.2vw]'>
      <Navbar />
      <HeroSection />
      <ClientBar />
      <FeatureSection />
      <ServiceSection />
      <WorkSection />
      <TestimonialSection />
      <Footer />
      <EndBar />
    </main>
   
  );
}

export default App;
