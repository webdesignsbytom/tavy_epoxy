import React from 'react';
import './nav.css';
import Logo1 from '../../assets/images/logo1.jpg';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <div className='logo__container'>
          <Link to='/'>
            <img src={Logo1} alt='tav-e-poxi' />
          </Link>
        </div>

        <div className='menu__container'>
          <Link to='/gallery'>About</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/gallery'>Design</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/gallery'>Login</Link>
          <Link to='/gallery'>Register</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
