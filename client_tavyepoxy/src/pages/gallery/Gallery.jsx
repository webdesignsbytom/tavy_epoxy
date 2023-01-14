import React from 'react';
import './gallery.css';
import Nav from '../../components/nav/Nav';
import GalleryComponent from '../../components/gallery/GalleryComponent';

function Gallery() {
  return (
    <>
      <Nav />
      <GalleryComponent />
      {/* <main className='gallery__container'>
        <article className='gallery__item vertical'>
          <img src={RedTable} alt='Red table' />
        </article>

        <article className='gallery__item horizontal'>
          <img src={NorthernLights} alt='Northern Lights' />
        </article>

        

        <article className='gallery__item'>
          <img src={CounterTop} alt='Counter top and tiles' />
        </article>

        <article className='gallery__item horizontal'>
          <img src={BlueTable1} alt='Blue table' />
        </article>

        <article className='gallery__item'>
          <img src={OrangeTable1} alt='Orange table' />
        </article>

        <article className='gallery__item horizontal'>
          <img src={ArtPiece} alt='Art attempt' />
        </article>

        <article className='gallery__item'>
          <img src={WoodInlays} alt='Wooden inlays' />
        </article>

        <article className='gallery__item'>
          <img src={LegOptions} alt='Available legs for any table' />
        </article>
      </main> */}
    </>
  );
}

export default Gallery;
