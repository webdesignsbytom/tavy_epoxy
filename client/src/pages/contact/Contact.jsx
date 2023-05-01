import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import ContactForm from './contactForm/ContactForm';
import Navbar from '../../components/nav/Navbar';

function Contact() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <div>

          <Navbar />
          <ContactForm />

    </div>
  );
}

export default Contact;
