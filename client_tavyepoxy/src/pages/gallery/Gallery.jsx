import React from 'react';
import './gallery.css';
import Nav from '../../components/nav/Nav';
import RedTable from '../../assets/images/red_table.png';
import NorthernLights from '../../assets/images/northern_lights_crop.png';
import WoodStyleTable from '../../assets/images/table_close_up.png';
import CounterTop from '../../assets/images/ex_tiles.jpg';
import BlueTable1 from '../../assets/images/et6.png';
import OrangeTable1 from '../../assets/images/Et3.png';
import ArtPiece from '../../assets/images/art_piece.png';
import WoodInlays from '../../assets/images/wooden_inlays.jpg';
import LegOptions from '../../assets/images/leg_options.jpg';

function Gallery() {
  return (
    <>
      <Nav />
      <main className='gallery__container'>
        <article className='gallery__item vertical'>
          <img src={RedTable} alt='Red table' />
        </article>

        <article className='gallery__item horizontal'>
          <img src={NorthernLights} alt='Northern Lights' />
        </article>

        <article className='gallery__item'>
          <img src={WoodStyleTable} alt='Wooden striation effect' />
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
      </main>
    </>
  );
}

export default Gallery;
