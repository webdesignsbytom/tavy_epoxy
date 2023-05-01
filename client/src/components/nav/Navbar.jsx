import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import Logo from '../../assets/images/logo1.jpg';

function Navbar() {
  const { toggleNavbar, toggleNavigation } = useContext(ToggleContext);

  const [activeNav, setActiveNav] = useState('/');

  useEffect(() => {
    setActiveNav(window.location.pathname);
  }, []);

  return (
    <>
      <header className='relative grid text-gray-100 h-fit px-2 py-3 md:p-6 items-center'>
        <div className='grid grid-flow-col justify-between bg-transparent-black w-full items-center py-4 px-3 md:px-6 rounded-2xl'>
          <section className=''>
            <Link to='/'>
              <div className=''>
                <img
                  className='object-cover w-12 h-12'
                  src={Logo}
                  alt='Tavy Epoxy logo'
                />
              </div>
            </Link>
          </section>

          {/* Phone Nav */}
          <nav
            onClick={() => {
              toggleNavbar();
            }}
            className='md:hidden no__highlights pr-2'
          >
            <span className='cursor-pointer text-white hover:text-hover-grey'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-10 h-10 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
                data-te-animation-init
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </span>
          </nav>

          {/* Monitor Nav */}
          <nav className='hidden md:flex'>
            <ul className='flex gap-8 items-center'>
              <li
                className={activeNav === '/' ? 'selected__link' : 'nav__link'}
              >
                <Link to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/contact' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/contact'>
                  <span>Contact</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/gallery' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/gallery'>
                  <span>Gallery</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/design' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/design'>
                  <span>Design Tool</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/login' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/login'>
                  <span>Login</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/sign-up' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/sign-up'>
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {toggleNavigation && (
        <section className='w-full absolute z-30 top-[98px] px-2'>
          <nav className='bg-black text-gray-100 rounded-xl grid'>
            <ul className='grid gap-4 items-center py-4 text-xl'>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/' ? 'px-2 py-4 text-center text-yellow-300' : 'px-2 py-4 text-center'
                }
              >
                <Link to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/contact'
                    ? 'px-2 py-4 text-center text-yellow-300'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/contact'>
                  <span>Contact</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/gallery'
                    ? 'px-2 py-4 text-center text-yellow-300'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/gallery'>
                  <span>Gallery</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/design'
                    ? 'px-2 py-4 text-center text-yellow-300'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/design'>
                  <span>Design Tool</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/login'
                    ? 'px-2 py-4 text-center text-yellow-300'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/login'>
                  <span>Login</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/sign-up'
                    ? 'px-2 py-4 text-center text-yellow-300'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/sign-up'>
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}

export default Navbar;
