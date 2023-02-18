import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GalleryData } from '../../utils/GalleryData';
import './galleryComponent.css';
import GalleryElement from './GalleryElement';

function GalleryComponent() {
  const navigate = useNavigate();

  const displayInfo = (item) => {
    navigate('/gallery-item', {
      state: item,
    });
  };

  return (
    <main className='gallery__page__container'>
      <div className='gallery__title'>
        <h2>GALLERY</h2>
        <div>Follow me on T I</div>
      </div>

      <div className='gallery__main__container'>
        <ul className='gallery__ul'>
          {/* list item */}
          {GalleryData.map((item, index) => {
            return (
              <li className='gallery__listItem' onClick={() => displayInfo(item)}>
                <GalleryElement item={item} key={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default GalleryComponent;
