import React from 'react';
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Display from '../../components/display/Display';
import Options from '../../components/options/Options';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Display />
      <Options />
      <Footer />
    </>
  );
}

export default Home;
