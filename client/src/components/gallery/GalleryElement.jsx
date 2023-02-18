import React from 'react';

function GalleryElement({ item }) {
  return (
    <>
      {/* article */}
      <article className='gallery__item'>
        {/* image */}
        <div className='image__container'>
          <img src={item.image} alt='Wooden striation effect' />
        </div>
        {/* pins */}
        <div className='pins__effect'>
          <div className='pin1'>
            <div className='pin__container'></div>
          </div>
          <div className='pin2'>
            <div className='pin__container'></div>
          </div>
          <div className='image__text'>
            <p>
              {item.desc}
            </p>
          </div>

          <div className='pin3'>
            <div className='pin__container'></div>
          </div>
          <div className='pin4'>
            <div className='pin__container'></div>
          </div>
        </div>
        {/* end of pins */}
      </article>
    </>
  );
}

export default GalleryElement;
