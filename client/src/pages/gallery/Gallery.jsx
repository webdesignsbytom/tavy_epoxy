import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import GalleryComponent from '../../components/gallery/GalleryComponent';
import PhoneNav from '../../components/nav/PhoneNav';

function Gallery() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <>
      {togglePhoneNav ? (
        <PhoneNav />
      ) : (
        <>
          <Nav />
          <GalleryComponent />
          <Footer />
        </>
      )}
    </>
  );
}

export default Gallery;
