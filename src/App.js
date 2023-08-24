import './App.css';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/testimonial' element={<Testimonial />} />
      </Routes> */}
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
