import React from 'react';
// Components
import HeroSection from '../../components/hero/HeroSection';
import Options from '../../components/options/Options';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';
import MainDisplay from '../../components/display/MainDisplay';

function HomePage() {

  return (
    <div className='grid min-h-screen'>
      <section className='relative h-screen grid'>
        <Navbar />
        <HeroSection />
      </section>
      <section className='grid h-screen'>
        <MainDisplay />
      </section>
      <section className='grid h-screen'>
        <Options />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
