import React from 'react';
import './galleryComponent.css';
import RedTable from '../../assets/images/red_table.png';
import NorthernLights from '../../assets/images/northern_lights_crop.png';
import WoodStyleTable from '../../assets/images/table_close_up.png';
import CounterTop from '../../assets/images/ex_tiles.jpg';
import BlueTable1 from '../../assets/images/et6.png';
import OrangeTable1 from '../../assets/images/Et3.png';
import ArtPiece from '../../assets/images/art_piece.png';
import WoodInlays from '../../assets/images/wooden_inlays.jpg';
import LegOptions from '../../assets/images/leg_options.jpg';

function GalleryComponent() {
  return (
    <main className='main__container'>
      <ul className='gallery__ul'>

        <li className='gallery__listItem'>
          <article className='gallery__item'>
            <img src={WoodStyleTable} alt='Wooden striation effect' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae iure labore quisquam magni magnam quos similique quibusdam</p>
          </article>
        </li>

        <li className='gallery__listItem'>
          <article className='gallery__item'>
            <img src={BlueTable1} alt='Wooden striation effect' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae iure labore quisquam magni magnam quos similique quibusdam</p>
          </article>
        </li>

        <li className='gallery__listItem'>
          <article className='gallery__item'>
            <img src={WoodInlays} alt='Wooden striation effect' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae iure labore quisquam magni magnam quos similique quibusdam</p>
          </article>
        </li>

        <li className='gallery__listItem'>
          <article className='gallery__item'>
            <img src={OrangeTable1} alt='Wooden striation effect' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae iure labore quisquam magni magnam quos similique quibusdam</p>
          </article>
        </li>

        <li className='gallery__listItem'>
          <article className='gallery__item'>
            <img src={ArtPiece} alt='Wooden striation effect' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae iure labore quisquam magni magnam quos similique quibusdam</p>
          </article>
        </li>

        <li className='gallery__listItem'>
          <article className='gallery__item'>
            <img src={CounterTop} alt='Wooden striation effect' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae iure labore quisquam magni magnam quos similique quibusdam</p>
          </article>
        </li>
      </ul>
    </main>
  );
}

export default GalleryComponent;
