import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className='footer__container'>
        <div className='footer__data'>
          <div className='contact__information'>
            <span>Located and made</span>
            <span>Tanglewood</span>
            <span>Brook Lane</span>
            <span>Tavistock</span>
            <span>08774734834</span>
            <span>Tavyepoxy@gmail.com</span>
          </div>

          <div className='site__navigation'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/design'>Design</Link>
              </li>
              <li>
                <Link to='/account'>Account</Link>
              </li>
            </ul>
          </div>

          <div className='social__media'>
            <ul>
              <li>
                <a href='https://www.twitter.com'>Twitter</a>
              </li>
              <li>
                <a href='https://www.facebook.com'>Facebook</a>
              </li>
              <li>
                <a href='https://www.instagram.com'>Instagram</a>
              </li>
              <li>
                <a href='https://www.tic-tok.com'>Tik-Tok</a>
              </li>

            </ul>
          </div>
        </div>
        
        <article className='rights__footer'>
          All rights reserved © Developed by Tom Brockington www.webdesignsbytom.com
        </article>
      </footer>
    </>
  );
}

export default Footer;
