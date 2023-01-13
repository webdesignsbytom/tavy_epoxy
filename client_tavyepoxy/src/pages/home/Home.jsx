import React from 'react';
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Display from '../../components/display/Display';
import CTABar from '../../components/ctaBar/CTABar';

function Home() {
  return (
    <>
        <Nav />
        <Hero />
        <Display />
        <CTABar />
    </>
  );
}

export default Home;
