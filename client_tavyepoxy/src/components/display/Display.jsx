import React from 'react';
import './display.css';
import CoffeeTable1 from '../../assets/images/coffee_table.jpg'

function Display() {
  return (
    <>
      <section className='display__container'>

        <article className='first__article__container'>1</article>

        <div className="image__slider__container">
            <div className="image__container">
              <img src={CoffeeTable1} alt="Coffee Table wood striation design" />
              <div className="selector__container">Selctor</div>
            </div>
        </div>

        <article className='second__article__container'>2</article>

      </section>
    </>
  );
}

export default Display