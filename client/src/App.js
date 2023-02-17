import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';
import jwt_decode from 'jwt-decode';
// Pages and Components
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import TestPage from './pages/testPage/TestPage';
import Login from './users/login/Login';
import Register from './users/register/Register';
import Account from './users/account/Account';
import Design from './pages/design/Design';
import About from './pages/about/About';
import Home from './pages/home/Home';

function App() {
  const { user, setUser } = useContext(UserContext);

  const getLoggedInUserId = () => {
    const loadedToken = localStorage.getItem('token');
    console.log('loadedToken', loadedToken);
    if (loadedToken === null || loadedToken === '') {
      return null;
    }
    const decoded = jwt_decode(loadedToken);
    console.log('decoded token', decoded);
    console.log('userEmail decoded', decoded.email);
    console.log('userId decoded', decoded.id);
    return decoded.id;
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/design' element={<Design />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
        
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
