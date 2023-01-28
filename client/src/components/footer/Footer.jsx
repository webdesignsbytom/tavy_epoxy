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
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/design'>Design</Link>
            <Link to='/account'>Account</Link>
          </div>

          <div className='social__media'>
            <Link to='https://www.twitter.com'>Twitter</Link>
            <Link to='www.facebook.com'>Facebook</Link>
            <Link to='www.instagram.com'>Instagram</Link>
            <Link to='www.tic-tok.com'>Tik-Tok</Link>
          </div>
        </div>
        <article className='rights__footer'>
          All rights reserved. Developed by Tom Brockington
        </article>
      </footer>
    </>
  );
}

export default Footer;
