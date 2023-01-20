import React from 'react';
import './footer.css'

function Footer() {
  return (
    <>
      <footer className='footer__container'>
        <div className="contact__information">
            Contact info
        </div>
        <div className="site__navigation">
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">Design</a>
        </div>
        <div className="social__media">
            <p>twitter</p>
            <p>instagram</p>
        </div>
    </footer>
    </>
  );
}

export default Footer;
