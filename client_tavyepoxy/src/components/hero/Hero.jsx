import React from 'react';
import { useState } from 'react';
import './hero.css';
function Hero() {
  const [clickedContinue, setClickedContinue] = useState(null)

  console.log('clickedContinue', clickedContinue);

  const scrollDown = ()=> {
    window.scrollBy(0, 90)
    console.log(window.screen.availHeight);
console.log('window.screen.availWidth', window.screen.availWidth);
  }
  return (
    <>
      <div className='hero__container'>
        <div className='hero__titles__container'>
          <h1 className='main__title'>TAV-E-POXY</h1>
          <h2 className='subtitle'>
            Unique epoxy furniture hand-made to order
          </h2>
        </div>
        <div className='continue__btn__container' >
          <button className='continue__btn' id='continue__btn'>
          <a href='#cta' onClick={() => setClickedContinue('#cta')} className={clickedContinue === '#cta' ? 'active' : ''}>CONTINUE</a>
          </button>
        </div>

      </div>
    </>
  );
}

export default Hero;
