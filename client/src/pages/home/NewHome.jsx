import React, { useContext } from 'react';
import Display from '../../components/display/Display';
import Hero from '../../components/hero/Hero';
import Nav from '../../components/nav/Nav';
import Options from '../../components/options/Options';
import Footer from '../../components/footer/Footer';
import './newHome.css';
import NewDisplay from '../../components/display/NewDisplay';
import { ToggleContext } from '../../context/ToggleContext';
import PhoneNav from '../../components/nav/PhoneNav';

function NewHome() {
  const { togglePhoneNav, setTogglePhoneNav } = useContext(ToggleContext);

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

export default NewHome;
