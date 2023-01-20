import React, { useEffect, useState } from 'react';
import { sliderOptions } from '../../utils/ImageLocations';
import LegoCrop from '../../assets/images/lego_cropped.png';


function ImageSlider() {
  const startingCategory = sliderOptions[0];

  const [currentImage, setCurrentImage] = useState(sliderOptions);
  const [indexNumber, setIndexNumber] = useState(0);

  useEffect(() => {
    console.log('effect');
    const interval = setInterval(() => {
        setIndexNumber((prev) => prev + 1);
      
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className='slider__container'>
      <div className='current__image'>
        <img src={currentImage[indexNumber]} alt='norther lights display' />
      </div>

      <div className='slider__control'>

        <div className='slider__icon'>
          <div className="hidden__box">
            <img src={LegoCrop} alt="slider" />
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
