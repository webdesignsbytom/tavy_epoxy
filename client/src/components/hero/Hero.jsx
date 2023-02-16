import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import './hero.css';

function Hero() {
  const [clickedContinue, setClickedContinue] = useState(null);

  return (
    <>
      <header className='hero__container'>
        <article className='hero__titles__container'>
          <h1 className='main__title'>
            TAV-E-<span className='second__font'>POXY</span>
          </h1>
          <h2 className='subtitle'>
            Hand-made furniture with a unqiue and stunning epoxy finish
          </h2>
        </article>
        <div className='continue__btn__container'>
          <button className='continue__btn' id='continue__btn'>
            <Link
              href='#display__link'
              onClick={() => setClickedContinue('#display__link')}
              className={clickedContinue === '#display__link' ? 'active' : ''}
            >
              CONTINUE
            </Link>
          </button>
        </div>
      </header>
    </>
  );
}

export default Hero;
