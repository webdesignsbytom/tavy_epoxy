import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import ContactForm from './contactForm/ContactForm';
import Nav from '../../components/nav/Nav';
import PhoneNav from '../../components/nav/PhoneNav';

function Contact() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <>
      {togglePhoneNav ? (
        <PhoneNav />
      ) : (
        <>
          <Nav />
          <ContactForm />
        </>
      )}
    </>
  );
}

export default Contact;
