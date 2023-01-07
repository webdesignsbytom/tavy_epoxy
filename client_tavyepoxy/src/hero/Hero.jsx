import React from 'react';
import './hero.css';
import CoffeeTable1 from '../images/coffee_table.jpg'

function Hero() {
  return (
    <>
      <div className='hero__container'>
        <div className="image__slider__container">
            <div className="image__container">
              <img src={CoffeeTable1} alt="Coffee Table wood striation design" />
            </div>
            <div className="selector__container">Selctor</div>
        </div>
      </div>
    </>
  );
}

export default Hero;
