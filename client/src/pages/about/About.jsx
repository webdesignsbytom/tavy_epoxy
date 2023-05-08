import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Footer from '../../components/footer/Footer';
import './about.css';
import Navbar from '../../components/nav/Navbar';

function About() {
  const { togglePhoneNav } = useContext(ToggleContext);

  return (
    <div>
          <Navbar />
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
   
    </div>
  );
}

export default About;
