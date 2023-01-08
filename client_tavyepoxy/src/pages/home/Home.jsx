import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Slider from '../../components/slider/Slider';
import CTABar from '../../components/ctaBar/CTABar';

function Home() {
  return (
    <>
        <Nav />
        <Hero />
        <Slider />
        <CTABar />
    </>
  );
}

export default Home;
