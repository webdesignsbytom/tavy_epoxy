import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import './about.css';
import PhoneNav from '../../components/nav/PhoneNav';

function About() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <>
      {togglePhoneNav ? (
        <PhoneNav />
      ) : (
        <>
          <Nav />
          <div className='about__page__container'>
            <section className='about__sections'>
              <div className='left'></div>
              <div className='middle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                temporibus, veritatis facilis eligendi obcaecati veniam
                cupiditate iste praesentium pariatur, quo assumenda sed
                quibusdam sunt numquam dolor amet! Accusamus, alias rem!
                Cupiditate laudantium, accusantium eligendi esse beatae harum
                similique, dicta natus nam soluta hic autem. Quae excepturi
                repellendus vero maiores eos?
              </div>
              <div className='right'></div>
            </section>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default About;
