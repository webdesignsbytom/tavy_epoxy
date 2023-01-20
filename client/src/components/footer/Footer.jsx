import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
      <footer className='footer__container'>
        <div className='footer__data'>
          <div className='contact__information'>
            <span> Contact info</span>
            <span>Address Line 1</span>
            <span>Address Line 2</span>
            <span>Address Line 3</span>
            <span>Contact number</span>
            <span>Email Address</span>
          </div>
          <div className='site__navigation'>
            <a href='#'>Home</a>
            <a href='#'>Gallery</a>
            <a href='#'>Design</a>
          </div>
          <div className='social__media'>
            <span>twitter</span>
            <span>instagram</span>
            <span>tic-tok</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
