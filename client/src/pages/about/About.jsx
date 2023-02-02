import React from 'react';
import './about.css';
import BG1 from '../../assets/images/bg1.jpg';
import Nav from '../../components/nav/Nav';

function About() {
  return (
    <>
      <Nav />
      <section className='about__page__container'>
        <div className='about__info__container'>
          <div className='top__layer'></div>
          <div className='bottom__layer'>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
