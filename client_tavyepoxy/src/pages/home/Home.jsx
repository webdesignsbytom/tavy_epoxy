import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Slider from '../../components/display/Display';
import CTABar from '../../components/ctaBar/CTABar';

function Home() {
  return (
    <>
        <Nav />
        <Hero />
        <CTABar />
        <Slider />
    </>
  );
}

export default Home;
