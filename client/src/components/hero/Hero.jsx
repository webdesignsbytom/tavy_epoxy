import React from 'react';
import { useState } from 'react';
import './hero.css';
function Hero() {
  const [clickedContinue, setClickedContinue] = useState(null);

  return (
    <>
      <div className='hero__container'>
        <div className='hero__titles__container'>
          <h1 className='main__title'>
            TAV-E-<span className='second__font'>POXY</span>
          </h1>
          <h2 className='subtitle'>
            Hand-made furniture with a unqiue and stunning epoxy finish
          </h2>
        </div>
        <div className='continue__btn__container'>
          <button className='continue__btn' id='continue__btn'>
            <a
              href='#display__link'
              onClick={() => setClickedContinue('#display__link')}
              className={clickedContinue === '#display__link' ? 'active' : ''}
            >
              CONTINUE
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
