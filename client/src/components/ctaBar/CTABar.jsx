import React from 'react';
import { Link } from 'react-router-dom';
import './ctabar.css';

function CTABar() {
  return (
    <section className='cta__container' id='cta'>
      <div className='button__container'>
        <Link to='/contact'>
          <button className='enquire__button cta__button'>Enquire</button>
        </Link>
      </div>
      <div className='button__container'>
        <Link to='/gallery'>
          <button className='gallery__button cta__button'>Gallery</button>
        </Link>
      </div>
    </section>
  );
}

export default CTABar;
