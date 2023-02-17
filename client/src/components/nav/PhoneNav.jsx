import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToggleContext } from '../../context/ToggleContext';

function PhoneNav() {

  const { togglePhoneNav, setTogglePhoneNav } = useContext(ToggleContext);


    const closeMenu = (event) => {
        setTogglePhoneNav(false);
      };

  return (
    <div className='phone__menu'>
          <div className='closeBtn__container'>
            <button onClick={closeMenu}>X</button>
          </div>
          <div className='nav__option home'>
            <Link to='/'>home</Link>
          </div>
          <div className='nav__option about'>
            <Link to='/about'>about</Link>
          </div>
          <div className='nav__option gallery'>
            <Link to='/gallery'>gallery</Link>
          </div>
          <div className='nav__option contact'>
            <Link to='/contact'>contact</Link>
          </div>
          <div className='nav__option design'>
            <Link to='/design'>design</Link>
          </div>
          <div className='nav__option login'>
            <Link to='/login'>login</Link>
          </div>
        </div>
  )
}

export default PhoneNav