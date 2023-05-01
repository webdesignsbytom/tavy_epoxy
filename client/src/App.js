import { Routes, Route } from 'react-router-dom';
// Pages
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import TestPage from './pages/testPage/TestPage';
import Login from './users/login/Login';
import Register from './users/register/Register';
import Account from './users/account/Account';
import Design from './pages/design/Design';
import About from './pages/about/About';
import HomePage from './pages/home/HomePage';
import GalleryItem from './pages/gallery/GalleryItem';
import Error404 from './pages/error/Error404';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery-item' element={<GalleryItem />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/design' element={<Design />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/account' element={<Account />} />
        
        <Route path='/test' element={<TestPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
