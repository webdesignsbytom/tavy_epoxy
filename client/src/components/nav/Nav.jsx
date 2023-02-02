import React from 'react';
import './nav.css';
import Logo1 from '../../assets/images/logo1.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import { useContext } from 'react';

function Nav() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log('userId', user.id);

  const signOut = (event) => {
    event.preventDefault();
    localStorage.setItem(process.env.REACT_APP_USER_TOKEN, '');
    setUser({});
    navigate('/', { replace: true });
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
      </nav>
    </>
  );
}

export default Nav;
