import React from 'react';
import './display.css';
import Legs from '../../assets/images/leg_options.jpg';
import Ex41 from '../../assets/images/4x.png';
import NorthernLights from '../../assets/images/northern_lights_crop.png';

function Display() {
  return (
    <>
      <main className='display__container'>

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


        <article className='main__article'>
          <div className="top__content">Tav-e-poxy designs and builds unique furniture and beautiful artworks using resin styling.At affordable prices and available in matching sets, customizable options incling colours and timber.</div>
          <div className="middle__content">
            You can help make your home unique with a quality piece of hand-made furniture or wall art hanging. Epoxy has a beautiful glass smooth finish and you can see deep through its layers to get more complex artwork. These usually highly priced items are made with afforablitly in mind and you can have any style printed on MDF or recycled lumber.
            A vast array of options can be selected from. If youre willing to pay for quality then we can source almost any timber you would prefer. Colour options include everything in the rainbow and almost most are availble in metallic shining particle powders that add a deeper visual effect. 
          </div>
          <div className="bottom__content">
             Table styles can be made to reflect a look, feel or object. I have made units to match objects around peoples house that they enjoy and wanted to show off. The nature of how the resins are poured make the products so unique. Adding random style as you progress or following a brief pattern design, swirls or stoke sizes. We supply a selection of metal legs at a range of heights and styles to suit most needs. If you have a style in mind legs or supports can be supplied in practically any stlye you like. We are able to have specialty items welded and anodised. Each unit made looks show room ready but with a hand crafted feel and a completly unique style.
          </div>
        </article>
      </main>
    </>
  );
}

export default Display;
