import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import HeroSection from '../../components/hero/HeroSection';
import Options from '../../components/options/Options';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';
import NewDisplay from '../../components/display/Display';

function HomePage() {
  const { toggleNavbar, toggleNavigation } = useContext(ToggleContext);

  return (
    <div className='grid min-h-screen grid-rows-2'>
      <section className='relative grid'>
        <Navbar />
        <HeroSection />
      </section>
      <section className='grid h-screen'>
        <NewDisplay />
      </section>
      <section className='grid h-screen'>
        <Options />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
