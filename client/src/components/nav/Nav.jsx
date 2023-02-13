import React, { useState } from 'react';
import './nav.css';
import Logo1 from '../../assets/images/logo1.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import { useContext } from 'react';

function Nav() {
  const { user, setUser } = useContext(UserContext);
  const [toggleMenuOpen, setToggleMenuOpen] = useState(false);
  const navigate = useNavigate();
  console.log(
    'process.env.REACT_APP_USER_TOKEN',
    process.env.REACT_APP_USER_TOKEN
  );

  console.log('userId', user.id);

  const signOut = (event) => {
    event.preventDefault();
    localStorage.setItem(process.env.REACT_APP_USER_TOKEN, '');
    setUser({});
    navigate('/', { replace: true });
  };

  const openMenu = (event) => {
    setToggleMenuOpen(true);
    console.log('AAAAAA');
  };
  const closeMenu = (event) => {
    setToggleMenuOpen(false);
    console.log('BBBBBB');
  };

  return (
    <>
      <nav>
        <div className='logo__container'>
          <Link to='/'>
            <img src={Logo1} alt='tav-e-poxi' />
          </Link>
        </div>

        <div className='menu__container'>
          <Link to='/about'>About</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/design'>Design</Link>

          {!user.id ? (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          ) : (
            <>
              <Link to='/account'>Account</Link>
              <Link onClick={signOut}>LogOut</Link>
            </>
          )}
        </div>

        <div className='phone__container'>
          <div className='burgerIcon__container' onClick={openMenu}>
            &#9776;
          </div>
        </div>
      </nav>
      {toggleMenuOpen && (
        <div className='phone__menu'>
          <div className='closeBtn__container'>
            <button onClick={closeMenu}>Close</button>
          </div>
          <div className='nav__option home'>home</div>
          <div className='nav__option about'>about</div>
          <div className='nav__option gallery'>gallery</div>
          <div className='nav__option contact'>contact</div>
          <div className='nav__option design'>design</div>
          <div className='nav__option login'>login</div>
        </div>
      )}
    </>
  );
}

export default Nav;
