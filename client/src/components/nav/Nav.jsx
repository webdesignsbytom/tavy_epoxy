import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
// Images and style
import Logo1 from '../../assets/images/logo1.jpg';
import './nav.css';
import { ToggleContext } from '../../context/ToggleContext';

function Nav() {
  const { user, setUser } = useContext(UserContext);
  const { togglePhoneNav, setTogglePhoneNav } = useContext(ToggleContext);

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
    setTogglePhoneNav(true);
  };
  
  const closeMenu = (event) => {
    setTogglePhoneNav(false);
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
    </>
  );
}

export default Nav;
