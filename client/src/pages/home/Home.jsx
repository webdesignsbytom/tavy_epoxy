import React from 'react';
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Display from '../../components/display/Display';
import Options from '../../components/options/Options';


function Home() {
  return (
    <>
    <Nav />
        <Hero />
        <Display />
        <Options />
    </>
  );
}

export default Home;
