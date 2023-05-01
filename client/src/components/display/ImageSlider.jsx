import React, { useEffect, useState } from 'react';
import { sliderOptions } from '../../utils/ImageLocations';

function ImageSlider() {
  const displayImagesArray = sliderOptions;

  const [imagesArray, setImagesArray] = useState(displayImagesArray);
  const [indexNumber, setIndexNumber] = useState(0);

  useEffect(() => {
    console.log('just effect');

    if (indexNumber === 5) {
      setIndexNumber(0);
    }
    const index = setInterval(() => {
      setIndexNumber((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(index);
    };
  }, [indexNumber]);

  return (
    <section className='grid outline outline-2 outline-black rounded-xl p-4 h-full'>
      <div className='grid grid-rows-rev'>
        <div className='grid outline outline-2 outline-black rounded-xl p-4 h-full bg-gray-100'>
          {/* <img className='object-cover ' src={imagesArray[indexNumber]} alt='norther lights display' /> */}
        </div>

        <section className='grid w-full justify-center items-center h-full'>
          <div className='grid grid-cols-5 gap-6 '>
            <div className='w-6 h-6 rounded-full bg-black'></div>
            <div className='w-6 h-6 rounded-full bg-black'></div>
            <div className='w-6 h-6 rounded-full bg-black'></div>
            <div className='w-6 h-6 rounded-full bg-black'></div>
            <div className='w-6 h-6 rounded-full bg-black'></div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ImageSlider;
