import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Hero from '../../components/hero/Hero';
import Nav from '../../components/nav/Nav';
import Options from '../../components/options/Options';
import Footer from '../../components/footer/Footer';
import NewDisplay from '../../components/display/Display';
import PhoneNav from '../../components/nav/PhoneNav';
// Styles
import './home.css';

function Home() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <>
      {togglePhoneNav ? (
        <PhoneNav />
      ) : (
        <>
          <Nav />
          <Hero />
          <NewDisplay />
          <Options />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
