import React from 'react';
import './display.css';
import CoffeeTable1 from '../../assets/images/coffee_table.jpg';

function Display() {
  return (
    <>
      <section className='display__container'>

        <article className='first__article__container'>

          <div className='text__container'>
            <span className='span__text'>
              Beautiful hand crafted furniture, designed to your exact custom
              needs for a unique piece every time.{' '}
            </span>
            <br />
            Made from a huge variety of timbers, sizes and styles that you
            control. All pieces are hand made to spec and we are able to talk
            you through the entire design process and provide a design tool on
            our website that allows you to mock up your colour schemes and
            patterns.
          </div>
          <div className="btn__container">

          <button className='design__button'>Design</button>
          </div>

          <span>More text right now</span>

        </article>

        <div className='image__slider__container'>
          <div className='image__container'>
            <img src={CoffeeTable1} alt='Coffee Table wood striation design' />
            <div className='selector__container'>Selctor</div>
          </div>
        </div>

        <article className='second__article__container'>
          Our custom products take an average of 3 weeks to produce and are made
          for a range of prices, with available extras. Prices are based on
          material size, colour selection and choices of timber. Affordable
          versions of all furniture are made in MDF.
        </article>
      </section>
    </>
  );
}

export default Display;
