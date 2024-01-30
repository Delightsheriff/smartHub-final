import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import { Home } from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About-p/About';
import Classes from './pages/Classes/Classes';
import Teachers from './pages/T-page/Teachers';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/page" element={<Teachers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
