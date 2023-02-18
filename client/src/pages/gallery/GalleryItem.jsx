import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Data
import { GalleryData } from '../../utils/GalleryData';
// Components
import Nav from '../../components/nav/Nav';
// Style
import './galleryItem.css'

function GalleryItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [galleryItem, setGalleryItem] = useState({});

  useEffect(() => {
    console.log('location: ', location);
    if (location.state) {
      setGalleryItem(location.state);
    } else {
      setGalleryItem(GalleryData[0]);
    }
  }, []);

  return (
    <>
      <div className='galleryItem__page__container'>
        <Nav />
        <section className='item__container'>
          <article className='item__description'>

            <h2>{galleryItem.title}</h2>
            <p>{galleryItem.desc}</p>
          </article>
          <div className='itemImage__container'>
            <img src={galleryItem.image} alt='title' />
          </div>
          <div className='item__button__container'>
            <button>PREV</button>
            <button>NEXT</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default GalleryItem;
