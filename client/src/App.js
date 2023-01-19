import './app.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import TestPage from './pages/testPage/TestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
