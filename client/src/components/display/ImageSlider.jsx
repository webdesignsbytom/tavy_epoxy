import React from 'react'
import NorthernLights from '../../assets/images/northern_lights_crop.png';


function ImageSlider() {
  return (
    <section className='slider__container'>

          <div className='current__image'>
            <img src={NorthernLights} alt='norther lights display' />
          </div>

          <div className='slider__control'>
            <div className="slider__icon"></div>
            <div className="slider__icon"></div>
            <div className="slider__icon"></div>
            <div className="slider__icon"></div>
            <div className="slider__icon"></div>
          </div>
        </section>
  )
}

export default ImageSlider