import React, { useEffect, useState } from 'react';
import { sliderOptions } from '../../utils/ImageLocations';
import LegoCrop from '../../assets/images/lego_cropped.png';

function ImageSlider() {
  const displayImagesArray = sliderOptions;

  const [imagesArray, setImagesArray] = useState(displayImagesArray);
  // const [currentImage, setCurrentImage] = useState(sliderOptions);
  const [indexNumber, setIndexNumber] = useState(0);

  useEffect(() => {
    console.log('just effect');

    if (indexNumber === 5) {
      setIndexNumber(0)
    }
    const index = setInterval(() => {
      setIndexNumber(prev => prev + 1)
    }, 2000);

    return () => {
      clearInterval(index);
    };

  }, [indexNumber]);

  return (
    <section className='slider__container'>
      <div className='current__image'>
        <img src={imagesArray[indexNumber]} alt='norther lights display' />
      </div>

      <div className='slider__control'>
        <div>
          <div className='slider__icon'></div>
          <div className='hidden__box'>
            <img src={LegoCrop} alt='slider' />
          </div>
        </div>

        <div className='slider__icon'></div>
        <div className='slider__icon'></div>
        <div className='slider__icon'></div>
        <div className='slider__icon'></div>
      </div>
    </section>
  );
}

export default ImageSlider;
