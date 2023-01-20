import './app.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import TestPage from './pages/testPage/TestPage';
import Login from './users/login/Login';
import Register from './users/register/Register';
import Account from './users/account/Account';
import Design from './pages/design/Design';
import About from './pages/about/About';

function App() {
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
