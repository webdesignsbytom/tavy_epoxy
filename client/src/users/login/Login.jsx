import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Nav';

function Login() {
  return (
    <>
    <Nav />
    <div>
      Login
      <div className='login__link'>
        <Link to='/register'>Not a member? Register Now</Link>
      </div>
    </div>
    </>
  );
}

export default Login;
