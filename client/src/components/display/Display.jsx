import React from 'react';
import NewCTA from '../ctaBar/CTA';
import ImageSlider from './ImageSlider';
import './display.css';

function NewDisplay() {
  return (
    <>
      <section id='display__container' className='container'>
        <article className='header__article'>
          <p>
            <span>Tav-e-poxy</span> designs and builds unique furniture and
            beautiful artworks using resin styling. At affordable prices and
            available in matching sets, customizable options incling colours and
            timber.
          </p>
        </article>
        <article className='main__article'>
          <p>
            You can help make your home unique with a quality piece of hand-made
            furniture or wall art hanging. Epoxy has a beautiful glass smooth
            finish and you can see deep through its layers to get more complex
            artwork. These usually highly priced items are made with
            afforablitly in mind and you can have any style printed on MDF or
            recycled lumber. A vast array of options can be selected from. If
            youre willing to pay for quality then we can source almost any
            timber you would prefer. Colour options include everything in the
            rainbow and almost most are availble in metallic shining particle
            powders that add a deeper visual effect.
          </p>
        </article>

        <article className='article__two'>
          <p>
            Table styles can be made to reflect a look, feel or object. I have
            made units to match objects around peoples house that they enjoy and
            wanted to show off. The nature of how the resins are poured make the
            products so unique. Adding random style as you progress or following
            a brief pattern design, swirls or stoke sizes. We supply a selection
            of metal legs at a range of heights and styles to suit most needs.
            If you have a style in mind legs or supports can be supplied in
            practically any stlye you like. We are able to have specialty items
            welded and anodised. Each unit made looks show room ready but with a
            hand crafted feel and a completly unique style.
          </p>
        </article>
        <ImageSlider />
        <NewCTA />
      </section>
    </>
  );
}

export default NewDisplay;
