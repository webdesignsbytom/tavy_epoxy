import React from 'react';
import Nav from '../../components/nav/Nav';
import './register.css';

function Register() {
  return (
    <>
      <Nav />
      <div className='register__page'>
        <div className='register__form__container'>
          <div className='title__container'>REGISTER</div>

          <form action='' className='register__form'>
            <label htmlFor='email'>
              Email
              <input type='email' name='email' />
            </label>

            <label htmlFor='password'>
              Password
              <input type='password' name='password' />
            </label>

            <label htmlFor='confirmPassword'>
              Confirm Password
              <input type='password' name='confirmPassword' />
            </label>

            <div className='submit__container'>
              <input type='submit' className='btn' value='Submit!' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
