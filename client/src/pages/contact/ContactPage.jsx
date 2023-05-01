import React from 'react';
// Components
import ContactForm from '../../components/forms/ContactForm';
import Navbar from '../../components/nav/Navbar';

function ContactPage() {
  return (
    <div className='bg-red-300 h-screen grid grid-rows-reg'>
      <Navbar />
      <main className='grid bg-blue-400'>
        <ContactForm />
      </main>
    </div>
  );
}

export default ContactPage;
