import React from 'react';
import './nav.css';
import Logo1 from '../../assets/images/logo1.jpg';
import { Link, useNavigate } from 'react-router-dom';


function Nav() {
  return (
    <>
      <nav>
        
        <div className='logo__container'>
          <img src={Logo1} alt='tav-e-poxi' />
        </div>

        <div className="menu__container">
          <Link to='/contact'>Contact</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/gallery'>Login</Link>
          <Link to='/gallery'>Register</Link>
          <Link to='/gallery'>Design</Link>

        </div>

      </nav>
    </>
  );
}

export default Nav;
