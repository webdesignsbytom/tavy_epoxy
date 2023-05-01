import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className='bg-gray-800 h-full grid'>
        <div className=''>
          <div className=''>
            <span>Located and made</span>
            <span>Tanglewood</span>
            <span>Brook Lane</span>
            <span>Tavistock</span>
            <span>08774734834</span>
            <span>Tavyepoxy@gmail.com</span>
          </div>

          <div className=''>
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

          <div className=''>
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
        
        <article className=''>
          All rights reserved © Developed by Tom Brockington www.webdesignsbytom.com
        </article>
      </footer>
    </>
  );
}

export default Footer;
