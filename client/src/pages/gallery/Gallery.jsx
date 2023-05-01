import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Footer from '../../components/footer/Footer';
import GalleryComponent from '../../components/gallery/GalleryComponent';
import Navbar from '../../components/nav/Navbar';

function Gallery() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <div>

          <Navbar />
          <GalleryComponent />
          <Footer />
       
   
    </div>
  );
}

export default Gallery;
